# AWS Lambda Powertools (Python)

![Build](https://github.com/awslabs/aws-lambda-powertools/workflows/Powertools%20Python/badge.svg?branch=master)
[![codecov.io](https://codecov.io/github/awslabs/aws-lambda-powertools-python/branch/develop/graphs/badge.svg)](https://app.codecov.io/gh/awslabs/aws-lambda-powertools-python)
![PythonSupport](https://img.shields.io/static/v1?label=python&message=3.6%20|%203.7|%203.8|%203.9&color=blue?style=flat-square&logo=python) ![PyPI version](https://badge.fury.io/py/aws-lambda-powertools.svg) ![PyPi monthly downloads](https://img.shields.io/pypi/dm/aws-lambda-powertools)

A suite of Python utilities for AWS Lambda functions to ease adopting best practices such as tracing, structured logging, custom metrics, and more. ([AWS Lambda Powertools Java](https://github.com/awslabs/aws-lambda-powertools-java) is also available).



**[📜Documentation](https://awslabs.github.io/aws-lambda-powertools-python/)** | **[🐍PyPi](https://pypi.org/project/aws-lambda-powertools/)** | **[Roadmap](https://github.com/awslabs/aws-lambda-powertools-roadmap/projects/1)** | **[Quick hello world example](https://github.com/aws-samples/cookiecutter-aws-sam-python)** | **[Detailed blog post](https://aws.amazon.com/blogs/opensource/simplifying-serverless-best-practices-with-lambda-powertools/)**

> **An AWS Developer Acceleration (DevAx) initiative by Specialist Solution Architects | aws-devax-open-source@amazon.com**

## Features

* **[Tracing](https://awslabs.github.io/aws-lambda-powertools-python/latest/core/tracer/)** - Decorators and utilities to trace Lambda function handlers, and both synchronous and asynchronous functions
* **[Logging](https://awslabs.github.io/aws-lambda-powertools-python/latest/core/logger/)** - Structured logging made easier, and decorator to enrich structured logging with key Lambda context details
* **[Metrics](https://awslabs.github.io/aws-lambda-powertools-python/latest/core/metrics/)** - Custom Metrics created asynchronously via CloudWatch Embedded Metric Format (EMF)
* **[Event handler: AppSync](https://awslabs.github.io/aws-lambda-powertools-python/latest/core/event_handler/appsync/)** - AWS AppSync event handler for Lambda Direct Resolver and Amplify GraphQL Transformer function
* **[Event handler: API Gateway and ALB](https://awslabs.github.io/aws-lambda-powertools-python/latest/core/event_handler/api_gateway/)** - Amazon API Gateway REST/HTTP API and ALB event handler for Lambda functions invoked using Proxy integration
* **[Bring your own middleware](https://awslabs.github.io/aws-lambda-powertools-python/latest/utilities/middleware_factory/)** - Decorator factory to create your own middleware to run logic before, and after each Lambda invocation
* **[Parameters utility](https://awslabs.github.io/aws-lambda-powertools-python/latest/utilities/parameters/)** - Retrieve and cache parameter values from Parameter Store, Secrets Manager, or DynamoDB
* **[Batch processing](https://awslabs.github.io/aws-lambda-powertools-python/latest/utilities/batch/)** - Handle partial failures for AWS SQS batch processing
* **[Typing](https://awslabs.github.io/aws-lambda-powertools-python/latest/utilities/typing/)** - Static typing classes to speedup development in your IDE
* **[Validation](https://awslabs.github.io/aws-lambda-powertools-python/latest/utilities/validation/)** - JSON Schema validator for inbound events and responses
* **[Event source data classes](https://awslabs.github.io/aws-lambda-powertools-python/latest/utilities/data_classes/)** - Data classes describing the schema of common Lambda event triggers
* **[Parser](https://awslabs.github.io/aws-lambda-powertools-python/latest/utilities/parser/)** - Data parsing and deep validation using Pydantic
* **[Idempotency](https://awslabs.github.io/aws-lambda-powertools-python/latest/utilities/idempotency/)** - Convert your Lambda functions into idempotent operations which are safe to retry
* **[Feature Flags](https://awslabs.github.io/aws-lambda-powertools-python/latest/utilities/feature_flags/)** - A simple rule engine to evaluate when one or multiple features should be enabled depending on the input


### Installation

With [pip](https://pip.pypa.io/en/latest/index.html) installed, run: ``pip install aws-lambda-powertools``

## Quick Start
With [SAM](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)  installed create, hello-world application and instruct it to include powertools library in the runtime.
```sh
sam init --runtime python3.9 --dependency-manager pip --app-template hello-world --name sam-app
echo "aws-lambda-powertools" > sam-app/hello-world/requirements.txt
```
### Structured Logging
Copy following code into `sam-app/hello-world/app.py`. Build the package and invoke our Lambda code locally `sam build && sam local invoke HelloWorldFunction -e events/event.json`
```python
from aws_lambda_powertools import Logger

logger = Logger()


def send_message(message: str):
    logger.info(f"Message returned: {message}")
    return {"message": message}


@logger.inject_lambda_context(log_event=True)
def lambda_handler(event, context):
    return send_message(message="hello")

```

As a result we should see two records in our logs following the same structured pattern. First one includes the whole event and context thanks to `inject_lambda_context` decorator. Second is the result of invoking `logger.info method`

### X-Ray Tracing

```python
from aws_lambda_powertools import Tracer

tracer = Tracer()


@tracer.capture_method
def send_message(message: str):
    tracer.put_annotation(key="message", value=message)
    return {"message": message}


@tracer.capture_lambda_handler
def lambda_handler(event, context):
    return send_message(message="hello")
```
As tracing doesn't work locally we need to deploy our lambda to the account of your choice.
Modify `template.yaml` to add enable tracing for our lambda
```yaml
Resources:
  HelloWorldFunction:
    Type: AWS::Serverless::Function
    Properties:
      ...
      Tracing: Active
      ...
```
Configure aws credentials to ensure you deploy it to the specific account
then build and deploy your code: `sam build && sam deploy --guided`.
Invoke your remote function ``aws lambda invoke --function-name <function-name> response.json``
As a result you should see traces for your lambda in X-RAY console
<include zdjecie z segmentem>
<include zdjecie z annotations>

### Custom Metrics
Let's extend our code with application metrics.

```python
from aws_lambda_powertools import Metrics
from aws_lambda_powertools.metrics import MetricUnit

metrics = Metrics(namespace="ApplicationMetrics", service="exampleAPP")


def send_message(message: str):
    metrics.add_metric(name="SuccessfulMessageGeneration", unit=MetricUnit.Count, value=1)
    return {"message": message}


@metrics.log_metrics
def lambda_handler(event, context):
    return send_message(message="hello")
```

In order to see CloudWatch Embedded Metric Format logs you can invoke lambda locally: `sam local invoke HelloWorldFunction -e events/event.json`
```
{"_aws":{"Timestamp":1634299249318,"CloudWatchMetrics":[{"Namespace":"ApplicationMetrics","Dimensions":[["service"]],"Metrics":[{"Name":"SuccessfulMessageGeneration","Unit":"Count"}]}]},"service":"exampleAPP","SuccessfulMessageGeneration":[1.0]}
```
if you deploy this changes into your account those logs will be picked up by cloudwatch and corresponding metrics will be generated
``sam build && sam deploy``
Metrics:
<screenshot>


## Event Handler for Amazon API Gateway:
You might also add event handler router capabilities into your lambda. This way you might configure different methods in your lambda code to be triggered by different API paths.

```python
from aws_lambda_powertools.event_handler.api_gateway import ApiGatewayResolver

app = ApiGatewayResolver()


@app.get("/hi")
def get_message():
    return {"message": "Hi!"}


@app.get("/hello")
def get_hello_message():
    return {"message": "Hello!"}


def lambda_handler(event, context):
    return app.resolve(event, context)
```

Let's test it locally:
```sh
sam build && sam local start-api &
curl http://127.0.0.1:3000/hi
{"message":"Hi!"}%
(venv) ➜  aws-lambda-powertools-python git:(develop) ✗ curl http://127.0.0.1:3000/hello
{"message":"Hello!"}%
```


## Examples

* [Serverless Shopping cart](https://github.com/aws-samples/aws-serverless-shopping-cart)
* [Serverless Airline](https://github.com/aws-samples/aws-serverless-airline-booking)
* [Serverless E-commerce platform](https://github.com/aws-samples/aws-serverless-ecommerce-platform)

## Credits

* Structured logging initial implementation from [aws-lambda-logging](https://gitlab.com/hadrien/aws_lambda_logging)
* Powertools idea [DAZN Powertools](https://github.com/getndazn/dazn-lambda-powertools/)


## Connect

* **AWS Developers Slack**: `#lambda-powertools`** - **[Invite, if you don't have an account](https://join.slack.com/t/awsdevelopers/shared_invite/zt-gu30gquv-EhwIYq3kHhhysaZ2aIX7ew)**
* **Email**: aws-lambda-powertools-feedback@amazon.com

## License

This library is licensed under the MIT-0 License. See the LICENSE file.
