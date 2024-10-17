<!-- changelog is partially generated, so it doesn't follow headings and required structure, so we disable it. -->
<!-- markdownlint-disable -->

<a name="unreleased"></a>
# Unreleased

## Bug Fixes

* use addHandler over monkeypatch
* apply Tom's suggestion
* remove jmespath extras in Make
* remove only dev extras
* Correct typo
* add only pydantic (+1 squashed commit) Squashed commits: [804f251] fix poetry.lock, revert changes
* poetry update + pydantic, typing_extensions as optional
* reduce complexity of dynamo envelope
* CR fixes Merge branch 'develop' of https://github.com/awslabs/aws-lambda-powertools-python into pydantic
* comment out validators [#118](https://github.com/aws-powertools/powertools-lambda-python/issues/118)
* snake_case
* unnecessary return; better error handling
* code inspect issues
* parse high level import
* ensures parser can take json strings as input
* remove malformed 3.1. sentence
* debug logging in envelopes before each parsing
* generic type to match ABC bound class
* fix import of aws_lambda_logging to relative import
* sight, yes a whitespace character breaks the build
* unzip the right artifact name
* add missing single_metric example; test var name
* change to Yarn to support manual resolutions
* high and security peer dependency vulnerabilities
* CI attempt 2
* _parse return type
* remove dummy heading to prevent htmlAst bug
* replace now deprecated set-env with new GitHub Env file
* cloudwatch logs envelope typo
* s3 model import
* ensures all Loggers have unique service names
* CI attempt 3
* batch processing exceptions ([#276](https://github.com/aws-powertools/powertools-lambda-python/issues/276))
* remove unnecessary typing-extensions for py3.8 ([#281](https://github.com/aws-powertools/powertools-lambda-python/issues/281))
* path to artefact
* return subclass [#107](https://github.com/aws-powertools/powertools-lambda-python/issues/107)
* add entire ARN role instead of account and role name
* disable batching of X-Ray subsegments ([#284](https://github.com/aws-powertools/powertools-lambda-python/issues/284))
* sfix typing hit for envelope parse model ([#286](https://github.com/aws-powertools/powertools-lambda-python/issues/286))
* meta tags, and ext link to open in new tab
* CI attempt 3
* sync features in main page
* correct behaviour to avoid caching "INPROGRESS" records ([#295](https://github.com/aws-powertools/powertools-lambda-python/issues/295))
* import time latency by lazily loading high level modules ([#301](https://github.com/aws-powertools/powertools-lambda-python/issues/301))
* mathc the name of the cdk synth from the build phase
* duplicate features content
* Correct description for data classes util
* perf tests for Logger and fail str msgs
* navigation, branding
* lock X-Ray SDK to 2.6.0 ([#384](https://github.com/aws-powertools/powertools-lambda-python/issues/384))
* downgrade poetry to 1.1.4 ([#385](https://github.com/aws-powertools/powertools-lambda-python/issues/385))
* remove DeleteMessageBatch call to SQS api if there are no messages to delete ([#170](https://github.com/aws-powertools/powertools-lambda-python/issues/170))
* correct type hint Dict instead of dict
* throw exception by default if messages processing fails
* add sqs_batch_processor as its own method
* no need to cache npm since we only install cdk cli and don't have .lock files
* ensure debug log event has latest ctx
* update image with correct sample
* ensures xray_trace_id is refreshed
* typo in input for layer workflow
* branding
* typo in example
* regression 104 ([#105](https://github.com/aws-powertools/powertools-lambda-python/issues/105))
* CI attempt 4
* [#24](https://github.com/aws-powertools/powertools-lambda-python/issues/24) correct example test and docs
* Fix issue with strip_prefixes ([#647](https://github.com/aws-powertools/powertools-lambda-python/issues/647))
* return log level int immediately
* add test covering logging constant
* [#35](https://github.com/aws-powertools/powertools-lambda-python/issues/35) duplicate changelog to project root
* change supported python version from 3.6.1 to 3.6.2, bump black ([#807](https://github.com/aws-powertools/powertools-lambda-python/issues/807))
* lint files
* mypy errors
* include proposed suggestions
* lock dependencies
* metrics not being flushed on every invocation ([#45](https://github.com/aws-powertools/powertools-lambda-python/issues/45))
* auto-assigner filename as per docs
* upgrade dot-prop, serialize-javascript
* open api ref in a new tab [#48](https://github.com/aws-powertools/powertools-lambda-python/issues/48)
* remove actual response from debug logs
* naming and staticmethod consistency
* correct in_subsegment assertion
* update cold_start doc to reflect [#125](https://github.com/aws-powertools/powertools-lambda-python/issues/125)
* append structured logs when injecting lambda context  ([#86](https://github.com/aws-powertools/powertools-lambda-python/issues/86))
* split ColdStart metric to its own EMF blob [#125](https://github.com/aws-powertools/powertools-lambda-python/issues/125)
* remove f-strings that doesn't evaluate expr
* incorrect log keys, indentation, snippet consistency
* use decorators, split cold start to ease reading
* ignore path that might seem a broken link [#49](https://github.com/aws-powertools/powertools-lambda-python/issues/49)
* cast dimension value to str to avoid issue where EMF silently fails ([#52](https://github.com/aws-powertools/powertools-lambda-python/issues/52))
* release-drafter label for new feature/major non-breaking changes
* remove apigw contract when using event-handler, apigw tracing
* remove unused json import
* git-chlg docker image is broken
* bump aws-cdk version
* typo
* parallel_run should fail when e2e tests fail
* default dimension creation now happens when metrics are serialized instead of on metrics constructor ([#74](https://github.com/aws-powertools/powertools-lambda-python/issues/74))
* enable python 3.10 on SAR template
* default dimension creation now happens when metrics are serialized instead of on metrics constructor ([#74](https://github.com/aws-powertools/powertools-lambda-python/issues/74))
* correct env var name for publish to pypi test ([#69](https://github.com/aws-powertools/powertools-lambda-python/issues/69))
* remove root logger handler set by Lambda [#115](https://github.com/aws-powertools/powertools-lambda-python/issues/115)
* removed ambiguous quotes from labels.
* package_logger as const over logger instance
* release-drafter action syntax
* only allow one e2e test at a time
* repurpose test to cover parent loggers case
* download artefact into the layer dir
* **Makefile:** format before linting
* **api-gateway:** route regression non-word and unsafe URI chars ([#556](https://github.com/aws-powertools/powertools-lambda-python/issues/556))
* **api-gateway:** incorrect plain text mimetype [#506](https://github.com/aws-powertools/powertools-lambda-python/issues/506)
* **api-gateway:** non-greedy route pattern regex ([#533](https://github.com/aws-powertools/powertools-lambda-python/issues/533))
* **api-gateway:** HTTP API strip stage name from request path ([#622](https://github.com/aws-powertools/powertools-lambda-python/issues/622))
* **api_gateway:** allow whitespace in routes' path parameter ([#1099](https://github.com/aws-powertools/powertools-lambda-python/issues/1099))
* **api_gateway:** allow whitespace in routes' path parameter ([#1099](https://github.com/aws-powertools/powertools-lambda-python/issues/1099))
* **api_gateway:** fixed custom metrics issue when using debug mode ([#1827](https://github.com/aws-powertools/powertools-lambda-python/issues/1827))
* **apigateway:** support nested router decorators ([#1709](https://github.com/aws-powertools/powertools-lambda-python/issues/1709))
* **apigateway:** update Response class to require status_code only ([#1560](https://github.com/aws-powertools/powertools-lambda-python/issues/1560))
* **apigateway:** support dynamic routes with equal sign (RFC3986) ([#1737](https://github.com/aws-powertools/powertools-lambda-python/issues/1737))
* **apigateway:** support [@app](https://github.com/app).not_found() syntax & housekeeping ([#926](https://github.com/aws-powertools/powertools-lambda-python/issues/926))
* **apigateway:** remove indentation in debug_mode ([#987](https://github.com/aws-powertools/powertools-lambda-python/issues/987))
* **apigateway:** allow list of HTTP methods in route method ([#838](https://github.com/aws-powertools/powertools-lambda-python/issues/838))
* **base-partial:** append record instead of entry
* **batch:** report multiple failures ([#967](https://github.com/aws-powertools/powertools-lambda-python/issues/967))
* **batch:** delete >10 messages in legacy sqs processor ([#818](https://github.com/aws-powertools/powertools-lambda-python/issues/818))
* **batch:** docstring fix for success_handler() record parameter ([#1202](https://github.com/aws-powertools/powertools-lambda-python/issues/1202))
* **batch:** handle early validation errors for pydantic models (poison pill) [#2091](https://github.com/aws-powertools/powertools-lambda-python/issues/2091) ([#2099](https://github.com/aws-powertools/powertools-lambda-python/issues/2099))
* **batch:** bugfix to clear exceptions between executions ([#1022](https://github.com/aws-powertools/powertools-lambda-python/issues/1022))
* **batch:** resolve use of ValidationError in batch ([#2157](https://github.com/aws-powertools/powertools-lambda-python/issues/2157))
* **batch:** missing space in BatchProcessingError message ([#1201](https://github.com/aws-powertools/powertools-lambda-python/issues/1201))
* **build:** auto-generate setup.py for legacy build tools ([#2013](https://github.com/aws-powertools/powertools-lambda-python/issues/2013))
* **capture_method:** should yield inside with ([#124](https://github.com/aws-powertools/powertools-lambda-python/issues/124))
* **ci:** add the rest of the changed docs
* **ci:** pypi publishing was targetting test endpoint
* **ci:** scope e2e tests by python version
* **ci:** use gh-pages env as official docs are wrong
* **ci:** api docs path
* **ci:** pr label regex for special chars in title
* **ci:** increase permission to allow version sync back to repo
* **ci:** disable pre-commit hook download from version bump
* **ci:** setup git client earlier to prevent dirty stash error
* **ci:** fix layer version in tracer, logger and metrics
* **ci:** add auth to API HTTP Gateway and Lambda Function Url ([#1882](https://github.com/aws-powertools/powertools-lambda-python/issues/1882))
* **ci:** reusable workflow secrets param
* **ci:** remove utf-8 body in octokit body req
* **ci:** linting issues after flake8-blackbear,mypy upgrades
* **ci:** quote prBody GH expr on_opened_pr
* **ci:** typo
* **ci:** use docker driver on buildx
* **ci:** build without buildkit
* **ci:** fix arm64 layer builds
* **ci:** remove v2 suffix from SAR apps ([#1633](https://github.com/aws-powertools/powertools-lambda-python/issues/1633))
* **ci:** new artifact path, sed gnu/linux syntax, and pypi test
* **ci:** temporarly remove pypi test deployment
* **ci:** secret and OIDC inheritance in nested children workflow
* **ci:** comment custom publish version checker
* **ci:** change SAR assume role options ([#3005](https://github.com/aws-powertools/powertools-lambda-python/issues/3005))
* **ci:** revert aws credentials action ([#3010](https://github.com/aws-powertools/powertools-lambda-python/issues/3010))
* **ci:** workflow should use npx for CDK CLI
* **ci:** skip sync master on docs hotfix
* **ci:** regex group name for on_merge workflow
* **ci:** integrate isort 5.0 with black to resolve conflicts
* **ci:** upgraded cdk to match the version used on e2e tests
* **ci:** merged_pr add issues write access
* **ci:** replace the correct files for Layer ARN
* **ci:** bump CDK version
* **ci:** disable merged_pr workflow
* **ci:** ignore v2 action for now
* **ci:** only run e2e tests on py 3.7
* **ci:** improve msg visibility on closed issues
* **ci:** pass core fns to large pr workflow script
* **ci:** on_label permissioning model & workflow execution
* **ci:** ensure PR_AUTHOR is present for large_pr_split workflow
* **ci:** gracefully and successful exit changelog upon no changes
* **ci:** event resolution for on_label_added workflow
* **ci:** calculate parallel jobs based on infrastructure needs ([#1475](https://github.com/aws-powertools/powertools-lambda-python/issues/1475))
* **ci:** del flake8 direct dep over py3.6 conflicts and docs failure
* **ci:** checkout project before validating related issue workflow
* **ci:** move from pip-tools to poetry on layers to fix conflicts
* **ci:** typo and bust gh actions cache
* **ci:** use poetry to resolve layer deps; pip for CDK
* **ci:** disable poetry venv for layer workflow as cdk ignores venv
* **ci:** add cdk v2 dep for layers workflow
* **ci:** move from pip-tools to poetry on layers reusable workflow
* **ci:** move from pip-tools to poetry on layers
* **ci:** temporarily disable changelog upon release
* **ci:** add explicit origin to fix release detached head
* **ci:** regex to catch combination of related issues workflow
* **ci:** fix working directory
* **ci:** add additional input to accurately describe intent on skip
* **ci:** job permissions
* **ci:** add debug log to NPM install
* **ci:** add missing oidc token generation permission
* **ci:** use project's CDK version when building layers
* **ci:** allow inherit secrets for reusable workflow
* **ci:** remove unused secret
* **ci:** fail dispatch analytics job when Lambda call fails ([#3579](https://github.com/aws-powertools/powertools-lambda-python/issues/3579))
* **ci:** cond doesnt support two expr w/ env
* **ci:** only event is resolved in cond
* **ci:** remove unsupported env in workflow_call
* **ci:** unexpected symbol due to double quotes...
* **ci:** create one layer artifact per region & merge ([#3808](https://github.com/aws-powertools/powertools-lambda-python/issues/3808))
* **ci:** keep layer version permission ([#1318](https://github.com/aws-powertools/powertools-lambda-python/issues/1318))
* **ci:** lambda layer workflow release version and conditionals ([#1316](https://github.com/aws-powertools/powertools-lambda-python/issues/1316))
* **ci:** fetch all git info so we can check tags
* **ci:** lambda layer workflow release version and conditionals ([#1316](https://github.com/aws-powertools/powertools-lambda-python/issues/1316))
* **ci:** remove additional quotes in PR action ([#1317](https://github.com/aws-powertools/powertools-lambda-python/issues/1317))
* **ci:** install poetry before calling setup/python with cache ([#1315](https://github.com/aws-powertools/powertools-lambda-python/issues/1315))
* **ci:** revert layer version bump write-only back to append  ([#3818](https://github.com/aws-powertools/powertools-lambda-python/issues/3818))
* **ci:** fixes typos and small issues on github scripts ([#1302](https://github.com/aws-powertools/powertools-lambda-python/issues/1302))
* **ci:** address conditional type on_merge
* **ci:** address pr title semantic not found logic
* **ci:** address gh-actions additional quotes; remove debug
* **ci:** inject PR_LABELS env for PR Label automation ([#3819](https://github.com/aws-powertools/powertools-lambda-python/issues/3819))
* **ci:** escape outputs as certain PRs can break GH Actions expressions
* **ci:** move conditionals from yaml to code; leftover
* **ci:** move conditionals from yaml to code
* **ci:** accept core arg in label related issue workflow
* **ci:** match the name of the cdk synth from the build phase
* **ci:** regex to catch combination of related issues workflow
* **ci:** checkout project before validating related issue workflow
* **ci:** update layer version on logger, tracer and metrics docs ([#2120](https://github.com/aws-powertools/powertools-lambda-python/issues/2120))
* **ci:** apply lessons learned to monthly roadmap reminder cross-repo ([#4078](https://github.com/aws-powertools/powertools-lambda-python/issues/4078))
* **ci:** label_related_issue unresolved var from history mixup
* **ci:** changelog workflow must receive git tags too
* **core:** fixes leftovers from rebase
* **data-classes:** use correct asdict funciton ([#666](https://github.com/aws-powertools/powertools-lambda-python/issues/666))
* **data-classes:** docstring typos and clean up ([#937](https://github.com/aws-powertools/powertools-lambda-python/issues/937))
* **data-classes:** include milliseconds in scalar types ([#504](https://github.com/aws-powertools/powertools-lambda-python/issues/504))
* **data-classes:** Add missing operationName ([#373](https://github.com/aws-powertools/powertools-lambda-python/issues/373))
* **data-classes:** underscore support in api gateway authorizer resource name ([#969](https://github.com/aws-powertools/powertools-lambda-python/issues/969))
* **data-classes:** Add missing SES fields and ([#1045](https://github.com/aws-powertools/powertools-lambda-python/issues/1045))
* **data-masking:** fix and improve e2e tests for DataMasking ([#3695](https://github.com/aws-powertools/powertools-lambda-python/issues/3695))
* **data_class:** ensure DynamoDBStreamEvent conforms to decimal limits ([#4863](https://github.com/aws-powertools/powertools-lambda-python/issues/4863))
* **data_sources:** ensure correct types on SQSMessageAttributes ([#3898](https://github.com/aws-powertools/powertools-lambda-python/issues/3898))
* **deps:** correct mypy types as dev dependency ([#1322](https://github.com/aws-powertools/powertools-lambda-python/issues/1322))
* **deps:** bump dev dep mako version to address CVE-2022-40023 ([#1524](https://github.com/aws-powertools/powertools-lambda-python/issues/1524))
* **deps:** update build system to poetry-core ([#1651](https://github.com/aws-powertools/powertools-lambda-python/issues/1651))
* **deps:** Bump aws-xray-sdk from 2.6.0 to 2.8.0 ([#413](https://github.com/aws-powertools/powertools-lambda-python/issues/413))
* **deps:** update jmespath marker to support 1.0 and py3.6 ([#1139](https://github.com/aws-powertools/powertools-lambda-python/issues/1139))
* **deps:** correct py36 marker for jmespath
* **deps:** Bump dependencies and fix some of the dev tooling ([#354](https://github.com/aws-powertools/powertools-lambda-python/issues/354))
* **deps:** bump poetry to latest ([#592](https://github.com/aws-powertools/powertools-lambda-python/issues/592))
* **deps:** Ignore boto3 changes until needed ([#1151](https://github.com/aws-powertools/powertools-lambda-python/issues/1151))
* **deps-dev:** remove jmespath due to dev deps conflict  ([#1148](https://github.com/aws-powertools/powertools-lambda-python/issues/1148))
* **docs:** remove redundant code ([#2796](https://github.com/aws-powertools/powertools-lambda-python/issues/2796))
* **docs:** ensure versions.json is updated ([#2505](https://github.com/aws-powertools/powertools-lambda-python/issues/2505))
* **docs:** add Layer ARN for new 5 regions
* **docs:** Use updated names for ProxyEventType ([#424](https://github.com/aws-powertools/powertools-lambda-python/issues/424))
* **docs:** clarified usage of validation with fine grained responses ([#4101](https://github.com/aws-powertools/powertools-lambda-python/issues/4101))
* **docs:** remove Slack link ([#1210](https://github.com/aws-powertools/powertools-lambda-python/issues/1210))
* **docs:** workflow to include api ref in latest alias ([#408](https://github.com/aws-powertools/powertools-lambda-python/issues/408))
* **docs:** ensure version alias is in an array to prevent "you're not viewing the latest version" incorrect message ([#2629](https://github.com/aws-powertools/powertools-lambda-python/issues/2629))
* **docs:** ensure alias is applied to versioned releases ([#2644](https://github.com/aws-powertools/powertools-lambda-python/issues/2644))
* **docs:** use concrete secrets from settings ([#2322](https://github.com/aws-powertools/powertools-lambda-python/issues/2322))
* **docs:** correct feature_flags link and json exmaples ([#605](https://github.com/aws-powertools/powertools-lambda-python/issues/605))
* **docs:** make the Lambda Layer version consistent ([#3498](https://github.com/aws-powertools/powertools-lambda-python/issues/3498))
* **e2e:** fix test brittleness ([#2152](https://github.com/aws-powertools/powertools-lambda-python/issues/2152))
* **e2e:** fix idempotency tests ([#2576](https://github.com/aws-powertools/powertools-lambda-python/issues/2576))
* **event-handler:** swagger schema respects api stage ([#3796](https://github.com/aws-powertools/powertools-lambda-python/issues/3796))
* **event-handler:** handle aliased parameters e.g., Query(alias="categoryType") ([#3766](https://github.com/aws-powertools/powertools-lambda-python/issues/3766))
* **event-handler:** upgrade Swagger UI to fix regressions ([#3526](https://github.com/aws-powertools/powertools-lambda-python/issues/3526))
* **event-handler:** strip whitespace from Content-Type headers during OpenAPI schema validation ([#3677](https://github.com/aws-powertools/powertools-lambda-python/issues/3677))
* **event-handler:** set default OpenAPI version to 3.0.0 ([#3527](https://github.com/aws-powertools/powertools-lambda-python/issues/3527))
* **event-handler:** multi-value query string and validation of scalar parameters ([#3795](https://github.com/aws-powertools/powertools-lambda-python/issues/3795))
* **event-handler:** fix operation tags schema generation ([#3528](https://github.com/aws-powertools/powertools-lambda-python/issues/3528))
* **event-handler:** body to empty string in CORS preflight (ALB non-compliant) ([#1249](https://github.com/aws-powertools/powertools-lambda-python/issues/1249))
* **event-handler:** return dict on missing multi_value_headers ([#3824](https://github.com/aws-powertools/powertools-lambda-python/issues/3824))
* **event-handler:** enable path parameters on Bedrock handler ([#3312](https://github.com/aws-powertools/powertools-lambda-python/issues/3312))
* **event-sources:** Pass authorizer data to APIGatewayEventAuthorizer ([#897](https://github.com/aws-powertools/powertools-lambda-python/issues/897))
* **event-sources:** handle claimsOverrideDetails set to null ([#878](https://github.com/aws-powertools/powertools-lambda-python/issues/878))
* **event-sources:** handle dynamodb null type as none, not bool ([#929](https://github.com/aws-powertools/powertools-lambda-python/issues/929))
* **event-sources:** sane defaults for authorizer v1 and v2 ([#4298](https://github.com/aws-powertools/powertools-lambda-python/issues/4298))
* **event_handler:** serialize pydantic/dataclasses in exception handler ([#3455](https://github.com/aws-powertools/powertools-lambda-python/issues/3455))
* **event_handler:** allow responses and metadata when using Router ([#3514](https://github.com/aws-powertools/powertools-lambda-python/issues/3514))
* **event_handler:** docs snippets, high-level import CorsConfig ([#1019](https://github.com/aws-powertools/powertools-lambda-python/issues/1019))
* **event_handler:** OpenAPI schema version respects Pydantic version ([#3860](https://github.com/aws-powertools/powertools-lambda-python/issues/3860))
* **event_handler:** validate POST bodies on BedrockAgentResolver ([#3903](https://github.com/aws-powertools/powertools-lambda-python/issues/3903))
* **event_handler:** make decoded_body field optional in ApiGateway resolver ([#3937](https://github.com/aws-powertools/powertools-lambda-python/issues/3937))
* **event_handler:** prioritize static over dynamic route to prevent order of route registration mismatch ([#2458](https://github.com/aws-powertools/powertools-lambda-python/issues/2458))
* **event_handler:** Allow for event_source support ([#1159](https://github.com/aws-powertools/powertools-lambda-python/issues/1159))
* **event_handler:** hide error details by default ([#3406](https://github.com/aws-powertools/powertools-lambda-python/issues/3406))
* **event_handler:** exception_handler to handle ServiceError exceptions ([#1160](https://github.com/aws-powertools/powertools-lambda-python/issues/1160))
* **event_handler:** always add 422 response to the schema ([#3995](https://github.com/aws-powertools/powertools-lambda-python/issues/3995))
* **event_handler:** regression making pydantic required (it should not) ([#4500](https://github.com/aws-powertools/powertools-lambda-python/issues/4500))
* **event_handler:** CORS Origin for ALBResolver multi-headers  ([#4385](https://github.com/aws-powertools/powertools-lambda-python/issues/4385))
* **event_handler:** security scheme unhashable list when working with router ([#4421](https://github.com/aws-powertools/powertools-lambda-python/issues/4421))
* **event_handler:** raise more specific SerializationError exception for unsupported types in data validation ([#4415](https://github.com/aws-powertools/powertools-lambda-python/issues/4415))
* **event_handler:** do not skip middleware and exception handlers on 404 error ([#4492](https://github.com/aws-powertools/powertools-lambda-python/issues/4492))
* **event_handler:** current_event regression AppSyncResolver Router ([#4652](https://github.com/aws-powertools/powertools-lambda-python/issues/4652))
* **event_handler:** custom serializer recursive values when using data validation ([#4664](https://github.com/aws-powertools/powertools-lambda-python/issues/4664))
* **event_handler:** fix format for OpenAPI path templating ([#3399](https://github.com/aws-powertools/powertools-lambda-python/issues/3399))
* **event_handler:** convert null body to empty string in ALBResolver to avoid HTTP 502 ([#4683](https://github.com/aws-powertools/powertools-lambda-python/issues/4683))
* **event_handler:** lazy load Pydantic to improve cold start ([#3397](https://github.com/aws-powertools/powertools-lambda-python/issues/3397))
* **event_handler:** apply serialization as the last operation for middlewares ([#3392](https://github.com/aws-powertools/powertools-lambda-python/issues/3392))
* **event_handler:** disable allow-credentials header when origin allow_origin is * ([#4638](https://github.com/aws-powertools/powertools-lambda-python/issues/4638))
* **event_handler:** Router prefix mismatch regression after Middleware feat ([#3302](https://github.com/aws-powertools/powertools-lambda-python/issues/3302))
* **event_handler:** make invalid chars a raw str to fix DeprecationWarning ([#2982](https://github.com/aws-powertools/powertools-lambda-python/issues/2982))
* **event_handler:** make the max_age attribute comply with RFC specification ([#4731](https://github.com/aws-powertools/powertools-lambda-python/issues/4731))
* **event_handler:** expanding safe URI characters to include +$& ([#3026](https://github.com/aws-powertools/powertools-lambda-python/issues/3026))
* **event_handler:** fix compress handling ([#3420](https://github.com/aws-powertools/powertools-lambda-python/issues/3420))
* **event_handler:** escape OpenAPI schema on Swagger UI ([#3606](https://github.com/aws-powertools/powertools-lambda-python/issues/3606))
* **event_handler:** allow fine grained Response with data validation ([#3394](https://github.com/aws-powertools/powertools-lambda-python/issues/3394))
* **event_handlers:** handle lack of headers when using auto-compression feature ([#1325](https://github.com/aws-powertools/powertools-lambda-python/issues/1325))
* **event_handlers:** ImportError when importing Response from top-level event_handler ([#1388](https://github.com/aws-powertools/powertools-lambda-python/issues/1388))
* **event_handlers:** omit explicit None HTTP header values ([#1793](https://github.com/aws-powertools/powertools-lambda-python/issues/1793))
* **event_source:** kinesis subsequenceNumber str type to int ([#3275](https://github.com/aws-powertools/powertools-lambda-python/issues/3275))
* **event_source:** centralizing helper functions for query, header and base64 ([#2496](https://github.com/aws-powertools/powertools-lambda-python/issues/2496))
* **event_source:** change the import location of boto3 in CodePipelineJobEvent data class ([#2353](https://github.com/aws-powertools/powertools-lambda-python/issues/2353))
* **event_source:** fix typo in physicalname attribute for AmazonMQ events ([#4053](https://github.com/aws-powertools/powertools-lambda-python/issues/4053))
* **event_sources:** Update CodePipeline event source to include optional encryption_key field and make user_parameters field optional ([#2113](https://github.com/aws-powertools/powertools-lambda-python/issues/2113))
* **event_sources:** add test for Function URL AuthZ ([#1421](https://github.com/aws-powertools/powertools-lambda-python/issues/1421))
* **event_sources:** change partition and offset field types in KafkaEventRecord ([#4515](https://github.com/aws-powertools/powertools-lambda-python/issues/4515))
* **event_sources:** implement Mapping protocol on DictWrapper for better interop with existing middlewares ([#1516](https://github.com/aws-powertools/powertools-lambda-python/issues/1516))
* **feature-flags:** rules should evaluate with an AND op ([#724](https://github.com/aws-powertools/powertools-lambda-python/issues/724))
* **feature-flags:**  bug handling multiple conditions ([#599](https://github.com/aws-powertools/powertools-lambda-python/issues/599))
* **feature-flags:** revert RuleAction Enum inheritance on str ([#1910](https://github.com/aws-powertools/powertools-lambda-python/issues/1910))
* **feature-toggles:** correct cdk example ([#601](https://github.com/aws-powertools/powertools-lambda-python/issues/601))
* **feature_flags:** handle expected falsy values in conditions ([#2052](https://github.com/aws-powertools/powertools-lambda-python/issues/2052))
* **feature_flags:** make test conditions deterministic ([#2059](https://github.com/aws-powertools/powertools-lambda-python/issues/2059))
* **governance:** update label in names in issues
* **idempotency:** POWERTOOLS_IDEMPOTENCY_DISABLED should respect truthy values ([#4391](https://github.com/aws-powertools/powertools-lambda-python/issues/4391))
* **idempotency:** include decorated fn name in hash ([#869](https://github.com/aws-powertools/powertools-lambda-python/issues/869))
* **idempotency:** treat missing idempotency key as non-idempotent transaction (no-op) when raise_on_no_idempotency_key is False ([#2477](https://github.com/aws-powertools/powertools-lambda-python/issues/2477))
* **idempotency:** idempotent_function should support standalone falsy values ([#1669](https://github.com/aws-powertools/powertools-lambda-python/issues/1669))
* **idempotency:** make idempotent_function decorator thread safe ([#1899](https://github.com/aws-powertools/powertools-lambda-python/issues/1899))
* **idempotency:** sorting keys before hashing
* **idempotency:** pass by value on idem key to guard inadvert mutations ([#1090](https://github.com/aws-powertools/powertools-lambda-python/issues/1090))
* **idempotency:** revert dict mutation that impacted static_pk_value feature ([#1970](https://github.com/aws-powertools/powertools-lambda-python/issues/1970))
* **idempotency:** sorting keys before hashing ([#639](https://github.com/aws-powertools/powertools-lambda-python/issues/639))
* **idempotency:** TypeError when calling is_missing_idempotency_key with an int ([#315](https://github.com/aws-powertools/powertools-lambda-python/issues/315))
* **idempotency:** PR feedback on config and kwargs
* **idempotency:** ensure in_progress_expiration field is set on Lambda timeout. ([#4773](https://github.com/aws-powertools/powertools-lambda-python/issues/4773))
* **idempotency:** Correctly handle save_inprogress errors ([#313](https://github.com/aws-powertools/powertools-lambda-python/issues/313))
* **idempotency:** validate before saving to cache ([#3822](https://github.com/aws-powertools/powertools-lambda-python/issues/3822))
* **idempotency:** sorting keys before hashing ([#722](https://github.com/aws-powertools/powertools-lambda-python/issues/722))
* **idempotent:** Correctly raise IdempotencyKeyError ([#378](https://github.com/aws-powertools/powertools-lambda-python/issues/378))
* **internal:** call ruff with correct args ([#3901](https://github.com/aws-powertools/powertools-lambda-python/issues/3901))
* **jmespath_util:** snappy as dev dep and typing example ([#1446](https://github.com/aws-powertools/powertools-lambda-python/issues/1446))
* **lambda-authorizer:** allow proxy resources path in arn ([#1051](https://github.com/aws-powertools/powertools-lambda-python/issues/1051))
* **layers:** add debug to update layer arn script
* **license:** correction to MIT + MIT-0 (no proprietary anymore) ([#1883](https://github.com/aws-powertools/powertools-lambda-python/issues/1883))
* **license:** add MIT-0 license header ([#1871](https://github.com/aws-powertools/powertools-lambda-python/issues/1871))
* **lint:** Move `tests/THIRD-PARTY-LICENSES` to root ([#352](https://github.com/aws-powertools/powertools-lambda-python/issues/352))
* **logger:** fix unknown attributes being ignored by mypy ([#1670](https://github.com/aws-powertools/powertools-lambda-python/issues/1670))
* **logger:** clear_state regression on absent standard keys ([#1088](https://github.com/aws-powertools/powertools-lambda-python/issues/1088))
* **logger:** force Logger to use local timezone when UTC flag is not set ([#3168](https://github.com/aws-powertools/powertools-lambda-python/issues/3168))
* **logger:** clear_state should keep custom key formats ([#1095](https://github.com/aws-powertools/powertools-lambda-python/issues/1095))
* **logger:** exclude source_logger in copy_config_to_registered_loggers ([#1001](https://github.com/aws-powertools/powertools-lambda-python/issues/1001))
* **logger:** push extra keys to the end ([#722](https://github.com/aws-powertools/powertools-lambda-python/issues/722))
* **logger:** support exception and exception_name fields at any log level ([#1930](https://github.com/aws-powertools/powertools-lambda-python/issues/1930))
* **logger:** log non-ascii characters as is when JSON stringifying ([#3475](https://github.com/aws-powertools/powertools-lambda-python/issues/3475))
* **logger:** test generates logfile
* **logger:** add setLevel function to set level programmatically ([#2320](https://github.com/aws-powertools/powertools-lambda-python/issues/2320))
* **logger:** ensure logs stream to stdout by default, not stderr ([#2736](https://github.com/aws-powertools/powertools-lambda-python/issues/2736))
* **logger:** add explicit None return type annotations ([#3113](https://github.com/aws-powertools/powertools-lambda-python/issues/3113))
* **logger:** ensure state is cleared for custom formatters ([#1072](https://github.com/aws-powertools/powertools-lambda-python/issues/1072))
* **logger:** preserve std keys when using custom formatters ([#1264](https://github.com/aws-powertools/powertools-lambda-python/issues/1264))
* **logger:** preserve std keys when using custom formatters ([#1264](https://github.com/aws-powertools/powertools-lambda-python/issues/1264))
* **logger:** support additional args for handlers when injecting lambda context ([#1276](https://github.com/aws-powertools/powertools-lambda-python/issues/1276))
* **logger:** correctly pick powertools or custom handler in custom environments ([#4295](https://github.com/aws-powertools/powertools-lambda-python/issues/4295))
* **logger:** reverting logger child modification ([#4363](https://github.com/aws-powertools/powertools-lambda-python/issues/4363))
* **logger:** allow custom JMESPath functions to extract correlation ID ([#3382](https://github.com/aws-powertools/powertools-lambda-python/issues/3382))
* **logger:** strip xray_trace_id when explicitly disabled ([#2852](https://github.com/aws-powertools/powertools-lambda-python/issues/2852))
* **logger-utils:** regression on exclude set leading to no formatter ([#1080](https://github.com/aws-powertools/powertools-lambda-python/issues/1080))
* **logging:** Don't include `json_default` in logs ([#132](https://github.com/aws-powertools/powertools-lambda-python/issues/132))
* **make:** add twine as a dev dep
* **metrics:** support additional arguments in functions wrapped with log_metrics decorator ([#3120](https://github.com/aws-powertools/powertools-lambda-python/issues/3120))
* **metrics:** raise SchemaValidationError for >8 metric dimensions ([#1240](https://github.com/aws-powertools/powertools-lambda-python/issues/1240))
* **metrics:** explicit type to single_metric ctx manager ([#865](https://github.com/aws-powertools/powertools-lambda-python/issues/865))
* **metrics:** proxy service and namespace attrs to provider ([#2910](https://github.com/aws-powertools/powertools-lambda-python/issues/2910))
* **metrics:** clarify no-metrics user warning ([#1935](https://github.com/aws-powertools/powertools-lambda-python/issues/1935))
* **metrics:** preserve default_tags when metric-specific tag is set in Datadog provider ([#2997](https://github.com/aws-powertools/powertools-lambda-python/issues/2997))
* **metrics:** lambda_handler typing, and **kwargs preservation all middlewares ([#3460](https://github.com/aws-powertools/powertools-lambda-python/issues/3460))
* **metrics:** flush upon a single metric 100th data point ([#1046](https://github.com/aws-powertools/powertools-lambda-python/issues/1046))
* **metrics:** AttributeError raised by MediaManager and Typing and docs ([#357](https://github.com/aws-powertools/powertools-lambda-python/issues/357))
* **metrics:** ensure dimension_set is reused across instances (pointer) ([#1581](https://github.com/aws-powertools/powertools-lambda-python/issues/1581))
* **middleware_factory:** ret type annotation for handler dec ([#1066](https://github.com/aws-powertools/powertools-lambda-python/issues/1066))
* **mypy:** a few return types, type signatures, and untyped areas ([#718](https://github.com/aws-powertools/powertools-lambda-python/issues/718))
* **mypy:** fixes to resolve no implicit optional errors ([#521](https://github.com/aws-powertools/powertools-lambda-python/issues/521))
* **parameter:** improve AppConfig cached configuration retrieval ([#3195](https://github.com/aws-powertools/powertools-lambda-python/issues/3195))
* **parameters:** appconfig internal _get docstrings ([#934](https://github.com/aws-powertools/powertools-lambda-python/issues/934))
* **parameters:** get_secret correctly return SecretBinary value ([#1717](https://github.com/aws-powertools/powertools-lambda-python/issues/1717))
* **parameters:** distinct cache key for single vs path with same name ([#2839](https://github.com/aws-powertools/powertools-lambda-python/issues/2839))
* **parameters:** appconfig transform and return types ([#877](https://github.com/aws-powertools/powertools-lambda-python/issues/877))
* **parameters:** AppConfigProvider when retrieving multiple unique configuration names ([#2378](https://github.com/aws-powertools/powertools-lambda-python/issues/2378))
* **parameters:** Respect POWERTOOLS_PARAMETERS_SSM_DECRYPT environment variable when getting multiple ssm parameters. ([#3241](https://github.com/aws-powertools/powertools-lambda-python/issues/3241))
* **parser:** body/QS can be null or omitted in apigw v1/v2 ([#820](https://github.com/aws-powertools/powertools-lambda-python/issues/820))
* **parser:** apigw wss validation check_message_id; housekeeping ([#553](https://github.com/aws-powertools/powertools-lambda-python/issues/553))
* **parser:** loose validation on SNS fields to support FIFO ([#1606](https://github.com/aws-powertools/powertools-lambda-python/issues/1606))
* **parser:** Make ApiGateway version, authorizer fields optional ([#532](https://github.com/aws-powertools/powertools-lambda-python/issues/532))
* **parser:** API Gateway V2 request context scope field should be optional ([#2961](https://github.com/aws-powertools/powertools-lambda-python/issues/2961))
* **parser:** S3Model Object Deleted omits size and eTag attr ([#1638](https://github.com/aws-powertools/powertools-lambda-python/issues/1638))
* **parser:** kinesis sequence number is str, not int ([#907](https://github.com/aws-powertools/powertools-lambda-python/issues/907))
* **parser:** overload parse when using envelope ([#885](https://github.com/aws-powertools/powertools-lambda-python/issues/885))
* **parser:** Improve types for parser.py ([#419](https://github.com/aws-powertools/powertools-lambda-python/issues/419))
* **parser:** make etag optional field on S3 notification events ([#4173](https://github.com/aws-powertools/powertools-lambda-python/issues/4173))
* **parser:** S3Model support empty keys ([#375](https://github.com/aws-powertools/powertools-lambda-python/issues/375))
* **parser:** Add missing fields for SESEvent ([#1027](https://github.com/aws-powertools/powertools-lambda-python/issues/1027))
* **parser:** raise ValidationError when SNS->SQS keys are intentionally missing ([#1299](https://github.com/aws-powertools/powertools-lambda-python/issues/1299))
* **parser:** mypy support for payload type override as models ([#883](https://github.com/aws-powertools/powertools-lambda-python/issues/883))
* **parser:** change ApproximateCreationDateTime field to datetime in DynamoDBStreamChangedRecordModel ([#3049](https://github.com/aws-powertools/powertools-lambda-python/issues/3049))
* **setup:** correct license to MIT-0 in meta
* **setup:** correct invalid license classifier
* **shared:** move to static version bumping to prevent issues with customers custom builds ([#2386](https://github.com/aws-powertools/powertools-lambda-python/issues/2386))
* **shared:** skip user agent on much older botocore versions ([#2366](https://github.com/aws-powertools/powertools-lambda-python/issues/2366))
* **ssm:** Make decrypt an explicit option and refactoring ([#123](https://github.com/aws-powertools/powertools-lambda-python/issues/123))
* **tests:** make logs fetching more robust ([#1878](https://github.com/aws-powertools/powertools-lambda-python/issues/1878))
* **tests:** remove custom workers
* **tests:** make sure multiple e2e tests run concurrently ([#1861](https://github.com/aws-powertools/powertools-lambda-python/issues/1861))
* **tracer:** add warm start annotation (ColdStart=False) ([#851](https://github.com/aws-powertools/powertools-lambda-python/issues/851))
* **tracer:** mypy generic to preserve decorated method signature ([#529](https://github.com/aws-powertools/powertools-lambda-python/issues/529))
* **tracer:** add name sanitization for X-Ray subsegments ([#4005](https://github.com/aws-powertools/powertools-lambda-python/issues/4005))
* **tracer:** Correct type hint for MyPy ([#365](https://github.com/aws-powertools/powertools-lambda-python/issues/365))
* **typing:** swap NoReturn with None for methods with no return value ([#2004](https://github.com/aws-powertools/powertools-lambda-python/issues/2004))
* **typing:** make the case_sensitive field a boolean only ([#4128](https://github.com/aws-powertools/powertools-lambda-python/issues/4128))
* **typing:** level arg in copy_config_to_registered_loggers ([#1534](https://github.com/aws-powertools/powertools-lambda-python/issues/1534))
* **typing:** make Response headers covariant ([#3745](https://github.com/aws-powertools/powertools-lambda-python/issues/3745))
* **typing:** ensure return type is a str when default_value is set ([#3840](https://github.com/aws-powertools/powertools-lambda-python/issues/3840))
* **typing:** fix mypy error
* **typing:** improve overloads to ensure the return type follows the default_value type ([#4114](https://github.com/aws-powertools/powertools-lambda-python/issues/4114))
* **typing:** resolved_headers_field is not Optional ([#4148](https://github.com/aws-powertools/powertools-lambda-python/issues/4148))
* **validator:** event type annotation as any in validate fn ([#405](https://github.com/aws-powertools/powertools-lambda-python/issues/405))
* **validator:** handle built-in custom formats correctly ([#498](https://github.com/aws-powertools/powertools-lambda-python/issues/498))
* **warning:** future distutils deprecation ([#921](https://github.com/aws-powertools/powertools-lambda-python/issues/921))
* **workflow:** github actions depends on for release

## Code Refactoring

* correct type hint
* changes partial_sqs middleware in favor of a generic interface always expecting a BatchProcessor
* batch middleware
* use None instead of
* make requested changes
* split the objects into seperate files
* split properties and add docblocks
* simplify custom formatter for minor changes ([#417](https://github.com/aws-powertools/powertools-lambda-python/issues/417))
* fix import issues and provide context in docblocks
* remove initial reference
* change return for failure/success handlers
* pydantic as optional dependancy, remove lambdaContext
* replace LambdaEvent with Dict[str, Any]
* rename to clear_state
* remove references to BaseProcessor. Left BasePartialProcessor
* rename to remove_custom_keys
* change to advanced parser
* convert dict into a literal dict object and re-use it
* **apigateway:** remove POWERTOOLS_EVENT_HANDLER_DEBUG env var ([#1620](https://github.com/aws-powertools/powertools-lambda-python/issues/1620))
* **apigateway:** Add BaseRouter and duplicate route check ([#757](https://github.com/aws-powertools/powertools-lambda-python/issues/757))
* **batch:** remove legacy sqs_batch_processor ([#1492](https://github.com/aws-powertools/powertools-lambda-python/issues/1492))
* **batch:** type response() method ([#3023](https://github.com/aws-powertools/powertools-lambda-python/issues/3023))
* **data-classes:** clean up internal logic for APIGatewayAuthorizerResponse ([#643](https://github.com/aws-powertools/powertools-lambda-python/issues/643))
* **data-masking:** disable e2e tests. ([#3204](https://github.com/aws-powertools/powertools-lambda-python/issues/3204))
* **data-masking:** remove Non-GA comments ([#4334](https://github.com/aws-powertools/powertools-lambda-python/issues/4334))
* **data_masking:** move Data Masking utility to a private folder ([#3202](https://github.com/aws-powertools/powertools-lambda-python/issues/3202))
* **e2e:** support fail fast in get_lambda_response ([#2912](https://github.com/aws-powertools/powertools-lambda-python/issues/2912))
* **e2e:** fix idempotency typing
* **e2e:** make table name dynamic
* **event-handler:** Add ResponseBuilder and more docs ([#412](https://github.com/aws-powertools/powertools-lambda-python/issues/412))
* **event-handler:** api gateway handler review changes ([#420](https://github.com/aws-powertools/powertools-lambda-python/issues/420))
* **event-handler:** Inject CSS and JS files into SwaggerUI route when no custom CDN is used. ([#3562](https://github.com/aws-powertools/powertools-lambda-python/issues/3562))
* **event_handler:** match to match_results; 3.10 new keyword ([#616](https://github.com/aws-powertools/powertools-lambda-python/issues/616))
* **event_handler:** fix BedrockAgentResolver docstring ([#3645](https://github.com/aws-powertools/powertools-lambda-python/issues/3645))
* **event_source:** convert functional tests to unit tests ([#2506](https://github.com/aws-powertools/powertools-lambda-python/issues/2506))
* **feature-flags:** add debug for all features evaluation" ([#590](https://github.com/aws-powertools/powertools-lambda-python/issues/590))
* **feature-flags:** add intersection tests; structure refinement ([#3775](https://github.com/aws-powertools/powertools-lambda-python/issues/3775))
* **feature-toggles:** Code coverage and housekeeping ([#530](https://github.com/aws-powertools/powertools-lambda-python/issues/530))
* **feature_flags:** optimize UX and maintenance ([#563](https://github.com/aws-powertools/powertools-lambda-python/issues/563))
* **idempotent:** Change UX to use a config class for non-persistence related features ([#306](https://github.com/aws-powertools/powertools-lambda-python/issues/306))
* **logger:** add type annotation for append_keys method ([#3988](https://github.com/aws-powertools/powertools-lambda-python/issues/3988))
* **logger:** improve typing ([#3869](https://github.com/aws-powertools/powertools-lambda-python/issues/3869))
* **logger:** BYOFormatter and Handler, UTC support, and more ([#404](https://github.com/aws-powertools/powertools-lambda-python/issues/404))
* **logger:** remove subclassing and move unnecessary APIs ([#2334](https://github.com/aws-powertools/powertools-lambda-python/issues/2334))
* **metrics:** optimize validation and serialization ([#307](https://github.com/aws-powertools/powertools-lambda-python/issues/307))
* **metrics:** move from protocol to ABC; split provider tests ([#2934](https://github.com/aws-powertools/powertools-lambda-python/issues/2934))
* **parameters:** improve typing for get_secret method ([#3910](https://github.com/aws-powertools/powertools-lambda-python/issues/3910))
* **parameters:** Consistently reference env ([#319](https://github.com/aws-powertools/powertools-lambda-python/issues/319))
* **parameters:** BaseProvider._get to also support Dict ([#3090](https://github.com/aws-powertools/powertools-lambda-python/issues/3090))
* **parameters:** add overload signatures for get_parameter and get_parameters ([#3534](https://github.com/aws-powertools/powertools-lambda-python/issues/3534))
* **parser:** convert functional tests to unit tests ([#2656](https://github.com/aws-powertools/powertools-lambda-python/issues/2656))
* **parser:** only infer type hints when necessary ([#4183](https://github.com/aws-powertools/powertools-lambda-python/issues/4183))
* **parser:** Improve error message when parsing models and envelopes ([#3587](https://github.com/aws-powertools/powertools-lambda-python/issues/3587))
* **sqs:** add module middlewares
* **sqs:** change methods to protected
* **tests:** update tests to new batch processor middleware
* **tests:** processor using default config

## Documentation

* project name consistency
* fix type vs. field in comment ([#4832](https://github.com/aws-powertools/powertools-lambda-python/issues/4832))
* add install in main docs website
* clean up readme in favour of docs website
* clarify logger debug sampling message
* build on master only
* fix contrast on highlighted code text ([#73](https://github.com/aws-powertools/powertools-lambda-python/issues/73))
* customize contributing guide ([#77](https://github.com/aws-powertools/powertools-lambda-python/issues/77))
* add blog post in the readme
* clarify auto_patch as per [#108](https://github.com/aws-powertools/powertools-lambda-python/issues/108)
* bring new feature upfront when returning sensitive info
* grammar
* move concurrent asynchronous under escape hatch
* create Patching modules section; cleanup response wording
* make sensitive info more explicit with an example
* fix typos, log_event & sampling wording
* subtle rewording for better clarity
* add blog post, and quick example
* use table for clarity
* move tenets; remove extra space
* add Lambda Layer SAR App url and ARN
* Fix doc for log sampling ([#135](https://github.com/aws-powertools/powertools-lambda-python/issues/135))
* user specific documentation
* minor edit to letter case part 2
* new section "Migrating from other Loggers" ([#148](https://github.com/aws-powertools/powertools-lambda-python/issues/148))
* add description where to find the layer arn ([#145](https://github.com/aws-powertools/powertools-lambda-python/issues/145))
* fix suggestions made by [@heitorlessa](https://github.com/heitorlessa)
* add xray_trace_id key
* add troubleshooting section
* Add nathan hanks post community ([#3727](https://github.com/aws-powertools/powertools-lambda-python/issues/3727))
* describe the typing utility
* add newly created Slack Channel
* refactor example; improve docs about creating your own processor
* rephrase the wording to make it more clear
* simplify documentation more SQS specific focus Update for sqs_batch_processor interface
* add detail to batch processing
* address readability feedbacks
* document validator utility
* improve wording on jmespath fns
* add docs for data classes utility
* fix typo in DynamoDB example
* fixed more typos, correct index reference to new util
* update examples in README
* initial sketch of parser docs
* initial structure for parser docs
* add 101 parsing events content
* use non-hello world model to better exemplify parsing
* add data model validation section
* add envelope section
* add extending built-in models
* ensure examples can be copied/pasted as-is
* add a FAQ section
* add cold start data
* use yarn's resolution to fix incompatible dependency
* reorder extending models as parse fn wasn't introduced
* reorder data validation; improve envelopes section
* address Ran's feedback
* add a note that decorator will replace the event
* add more info on conditional keys [#195](https://github.com/aws-powertools/powertools-lambda-python/issues/195)
* reorder parser's payload sample position
* add minimal permission set for using layer
* add faq section
* correct example usage of SES data class
* fix broken link for github
* add source code link in nav bar
* shadow sidebar to remain expanded
* add Alb as a supported model
* add CW Logs as a supported model
* add CW Logs as a supported envelope
* add S3 as a supported model
* add Kinesis Streams as a supported model & envelope
* add clarification to Tracer docs for how `capture_method` decorator can cause function responses to be read and serialized.
* add missing parser models ([#254](https://github.com/aws-powertools/powertools-lambda-python/issues/254))
* fix note whitespace
* add info about extras layer ([#260](https://github.com/aws-powertools/powertools-lambda-python/issues/260))
* fix import ([#267](https://github.com/aws-powertools/powertools-lambda-python/issues/267))
* migrate documentation from Gatsby to MkDocs material ([#279](https://github.com/aws-powertools/powertools-lambda-python/issues/279))
* Correct code examples ([#317](https://github.com/aws-powertools/powertools-lambda-python/issues/317))
* surface new 1.12.0 features and enhancements  ([#344](https://github.com/aws-powertools/powertools-lambda-python/issues/344))
* enable versioning feature ([#374](https://github.com/aws-powertools/powertools-lambda-python/issues/374))
* update mkdocs-material to 7.1.0
* fix extra key for versioning
* Fix doc links and line highlights ([#380](https://github.com/aws-powertools/powertools-lambda-python/issues/380))
* introduce event handlers utility section ([#388](https://github.com/aws-powertools/powertools-lambda-python/issues/388))
* Correct link targets and line highlights ([#390](https://github.com/aws-powertools/powertools-lambda-python/issues/390))
* update list of features
* include new public roadmap ([#452](https://github.com/aws-powertools/powertools-lambda-python/issues/452))
* fix anchor
* enable dark mode switch ([#471](https://github.com/aws-powertools/powertools-lambda-python/issues/471))
* add Layers example for Serverless framework & CDK ([#500](https://github.com/aws-powertools/powertools-lambda-python/issues/500))
* add pypi badge
* add better BDD coments
* add team behind it and email
* Terraform reference for SAR Lambda Layer ([#716](https://github.com/aws-powertools/powertools-lambda-python/issues/716))
* add new public layer ARNs ([#746](https://github.com/aws-powertools/powertools-lambda-python/issues/746))
* add amplify-cli instructions for public layer ([#754](https://github.com/aws-powertools/powertools-lambda-python/issues/754))
* improve public lambda layer wording, clipboard buttons ([#762](https://github.com/aws-powertools/powertools-lambda-python/issues/762))
* fix indentation of SAM snippets in install section ([#778](https://github.com/aws-powertools/powertools-lambda-python/issues/778))
* updated Lambda Layers definition & limitations. ([#775](https://github.com/aws-powertools/powertools-lambda-python/issues/775))
* use higher contrast font
* use higher contrast font ([#822](https://github.com/aws-powertools/powertools-lambda-python/issues/822))
* Idiomatic tenet updated to Progressive
* update Lambda Layers version
* disable search blur in non-prod env
* add new public Slack invite
* external reference to cloudformation custom resource helper ([#914](https://github.com/aws-powertools/powertools-lambda-python/issues/914))
* Added GraphQL Sample API to Examples section of README.md ([#930](https://github.com/aws-powertools/powertools-lambda-python/issues/930))
* consistency around admonitions and snippets ([#919](https://github.com/aws-powertools/powertools-lambda-python/issues/919))
* add final consideration section
* rename to tutorial given the size
* rename quickstart to tutorial in readme
* fix syntax errors and line highlights ([#1004](https://github.com/aws-powertools/powertools-lambda-python/issues/1004))
* **api-gateway:** add new API mapping support
* **api-gateway:** document new HTTP service error exceptions ([#546](https://github.com/aws-powertools/powertools-lambda-python/issues/546))
* **api-gateway:** add support for new router feature ([#767](https://github.com/aws-powertools/powertools-lambda-python/issues/767))
* **api_gateway:** new event handler for API Gateway and ALB ([#418](https://github.com/aws-powertools/powertools-lambda-python/issues/418))
* **apigateway:** add new not_found feature ([#915](https://github.com/aws-powertools/powertools-lambda-python/issues/915))
* **apigateway:** add all resolvers in testing your code section for accuracy ([#1688](https://github.com/aws-powertools/powertools-lambda-python/issues/1688))
* **apigateway:** re-add sample layout, add considerations ([#826](https://github.com/aws-powertools/powertools-lambda-python/issues/826))
* **apigateway:** removes duplicate admonition ([#1426](https://github.com/aws-powertools/powertools-lambda-python/issues/1426))
* **apigateway:** fix sample layout provided ([#864](https://github.com/aws-powertools/powertools-lambda-python/issues/864))
* **appconfig:** Use correct import for docstring ([#271](https://github.com/aws-powertools/powertools-lambda-python/issues/271))
* **appsync:** fix users.py typo to locations [#830](https://github.com/aws-powertools/powertools-lambda-python/issues/830)
* **appsync:** fix typo
* **appsync:** add new router feature ([#821](https://github.com/aws-powertools/powertools-lambda-python/issues/821))
* **appsync:** add mutation example and infrastructure fix ([#1964](https://github.com/aws-powertools/powertools-lambda-python/issues/1964))
* **batch:** improved the example demonstrating how to create a custom partial processor. ([#4024](https://github.com/aws-powertools/powertools-lambda-python/issues/4024))
* **batch:** remove leftover from legacy
* **batch:** fix typo in context manager keyword ([#938](https://github.com/aws-powertools/powertools-lambda-python/issues/938))
* **batch:** fixed typo in DynamoDB Streams section ([#2189](https://github.com/aws-powertools/powertools-lambda-python/issues/2189))
* **batch:** add encryption at rest for SQS ([#2290](https://github.com/aws-powertools/powertools-lambda-python/issues/2290))
* **batch:** add example on how to integrate with sentry.io ([#308](https://github.com/aws-powertools/powertools-lambda-python/issues/308))
* **batch:** use newly supported Json model ([#2100](https://github.com/aws-powertools/powertools-lambda-python/issues/2100))
* **batch:** new visuals and error handling section ([#2857](https://github.com/aws-powertools/powertools-lambda-python/issues/2857))
* **batch:** document the new lambda context feature
* **batch:** fix custom batch processor example ([#2714](https://github.com/aws-powertools/powertools-lambda-python/issues/2714))
* **batch:** snippet typo on batch processed messages iteration ([#951](https://github.com/aws-powertools/powertools-lambda-python/issues/951))
* **batch:** remove legacy reference to sqs processor
* **batch:** explain record type discrepancy in failure and success handler ([#2868](https://github.com/aws-powertools/powertools-lambda-python/issues/2868))
* **batch_processing:** snippets split, improved, and lint ([#2231](https://github.com/aws-powertools/powertools-lambda-python/issues/2231))
* **bedrock-agents:** fix type in Bedrock operation example ([#3948](https://github.com/aws-powertools/powertools-lambda-python/issues/3948))
* **community:** fix twitch parent domain for embedded video
* **community:** fix social handlers for Ran ([#1654](https://github.com/aws-powertools/powertools-lambda-python/issues/1654))
* **community:** new batch processing article ([#2828](https://github.com/aws-powertools/powertools-lambda-python/issues/2828))
* **contributing:** operational excellence pause
* **contributing:** add code integration journey graph ([#2685](https://github.com/aws-powertools/powertools-lambda-python/issues/2685))
* **contributing:** initial structure for revamped contributing guide ([#3133](https://github.com/aws-powertools/powertools-lambda-python/issues/3133))
* **customer-reference:** add Transformity as a customer reference ([#3497](https://github.com/aws-powertools/powertools-lambda-python/issues/3497))
* **customer-reference:** add Jit Security as a customer reference ([#2801](https://github.com/aws-powertools/powertools-lambda-python/issues/2801))
* **customer-reference:** add Vertex Pharmaceuticals as a customer reference ([#3210](https://github.com/aws-powertools/powertools-lambda-python/issues/3210))
* **data-class:** fix invalid syntax in new AppSync Authorizer
* **data-classes:** make authorizer concise; use enum ([#630](https://github.com/aws-powertools/powertools-lambda-python/issues/630))
* **data-classes:** Add more cognito code examples ([#340](https://github.com/aws-powertools/powertools-lambda-python/issues/340))
* **data-classes:** Correct import for DynamoDBRecordEventName ([#299](https://github.com/aws-powertools/powertools-lambda-python/issues/299))
* **data-classes:** Fix anchor tags to be lower case ([#288](https://github.com/aws-powertools/powertools-lambda-python/issues/288))
* **data-masking:** add docs for data masking utility ([#3186](https://github.com/aws-powertools/powertools-lambda-python/issues/3186))
* **data_classes:** fix missing dynamodb stream get_type/value
* **dataclasses:** new Connect Contact Flow ([#310](https://github.com/aws-powertools/powertools-lambda-python/issues/310))
* **engine:** re-enable clipboard button for code snippets
* **event-handler:** snippets split, improved, and lint ([#1279](https://github.com/aws-powertools/powertools-lambda-python/issues/1279))
* **event-handler:** new custom serializer option
* **event-handler:** improve testing section for graphql ([#996](https://github.com/aws-powertools/powertools-lambda-python/issues/996))
* **event-handler:** document catch-all routes ([#705](https://github.com/aws-powertools/powertools-lambda-python/issues/705))
* **event-handler:** fixed SchemaValidationMiddleware link ([#3247](https://github.com/aws-powertools/powertools-lambda-python/issues/3247))
* **event-handler:** snippets split, improved, and lint ([#1279](https://github.com/aws-powertools/powertools-lambda-python/issues/1279))
* **event-source:**  fix incorrect method in example CloudWatch Logs ([#1857](https://github.com/aws-powertools/powertools-lambda-python/issues/1857))
* **event_handler:** fix typing in micro function example ([#3098](https://github.com/aws-powertools/powertools-lambda-python/issues/3098))
* **event_handler:** add missing note on trimmed responses
* **event_handler:** fix closing brackets in CORS sample
* **event_handler:** add bedrock agent resolver documentation ([#3602](https://github.com/aws-powertools/powertools-lambda-python/issues/3602))
* **event_handler:** improve compress example using Response class ([#2426](https://github.com/aws-powertools/powertools-lambda-python/issues/2426))
* **event_handler:** add micro function examples ([#3056](https://github.com/aws-powertools/powertools-lambda-python/issues/3056))
* **event_handler:** demonstrate how to combine logger correlation ID and middleware ([#3064](https://github.com/aws-powertools/powertools-lambda-python/issues/3064))
* **event_handler:** add information about case-insensitive header lookup function ([#3183](https://github.com/aws-powertools/powertools-lambda-python/issues/3183))
* **event_handler:** remove beta flag from new HTTP utility
* **event_handler:** use correct correlation_id for logger in middleware example ([#3063](https://github.com/aws-powertools/powertools-lambda-python/issues/3063))
* **event_handlers:** new data validation and OpenAPI feature ([#3386](https://github.com/aws-powertools/powertools-lambda-python/issues/3386))
* **event_handlers:** note that CORS and */* binary mime type don't work in API Gateway ([#3383](https://github.com/aws-powertools/powertools-lambda-python/issues/3383))
* **event_handlers:** Fix REST API - HTTP Methods documentation ([#1936](https://github.com/aws-powertools/powertools-lambda-python/issues/1936))
* **event_sources:** fix DynamoDB stream event docstring ([#2468](https://github.com/aws-powertools/powertools-lambda-python/issues/2468))
* **examples:** linting unnecessary whitespace
* **examples:** enforce and fix all mypy errors ([#1393](https://github.com/aws-powertools/powertools-lambda-python/issues/1393))
* **examples:** standardize lambda handler function name ([#2192](https://github.com/aws-powertools/powertools-lambda-python/issues/2192))
* **feature-flags:** add guidance when to use vs env vars vs parameters
* **feature-flags:** fix sample feature name in evaluate
* **feature-flags:** create concrete documentation ([#594](https://github.com/aws-powertools/powertools-lambda-python/issues/594))
* **feature-toggles:** correct docs and typing ([#588](https://github.com/aws-powertools/powertools-lambda-python/issues/588))
* **feature_flags:** snippets split, improved, and lint ([#2222](https://github.com/aws-powertools/powertools-lambda-python/issues/2222))
* **feature_flags:** fix SAM infra, convert CDK to Python
* **feature_flags:** fix incorrect line markers and envelope name ([#3792](https://github.com/aws-powertools/powertools-lambda-python/issues/3792))
* **general:** update documentation to add info about v3 ([#4234](https://github.com/aws-powertools/powertools-lambda-python/issues/4234))
* **governance:** link roadmap and maintainers doc
* **governance:** allow community to suggest feature content ([#1593](https://github.com/aws-powertools/powertools-lambda-python/issues/1593))
* **governance:** new form to allow customers self-nominate as public reference ([#1589](https://github.com/aws-powertools/powertools-lambda-python/issues/1589))
* **governance:** add security doc to the root
* **governance:** typos on PR template fixes [#1314](https://github.com/aws-powertools/powertools-lambda-python/issues/1314)
* **graphql:** snippets split, improved, and lint ([#1287](https://github.com/aws-powertools/powertools-lambda-python/issues/1287))
* **home:** add note about POWERTOOLS_DEV side effects in CloudWatch Logs ([#3770](https://github.com/aws-powertools/powertools-lambda-python/issues/3770))
* **home:** add discord invitation link ([#1471](https://github.com/aws-powertools/powertools-lambda-python/issues/1471))
* **home:** update layer version to 62 for package version 2.33.1 ([#3778](https://github.com/aws-powertools/powertools-lambda-python/issues/3778))
* **home:** update powertools definition
* **home:** fix discord syntax and add Discord badge
* **homepage:** remove v1 layer limitation on pydantic not being included
* **homepage:** note about v2 version
* **homepage:** revamp install UX & share how we build Lambda Layer ([#1978](https://github.com/aws-powertools/powertools-lambda-python/issues/1978))
* **homepage:** include .NET powertools
* **homepage:** add banner for end-of-support v1 ([#1879](https://github.com/aws-powertools/powertools-lambda-python/issues/1879))
* **homepage:** set url for end-of-support in announce block ([#1893](https://github.com/aws-powertools/powertools-lambda-python/issues/1893))
* **homepage:** add Open Source Security Foundation badge; update links to new url ([#2545](https://github.com/aws-powertools/powertools-lambda-python/issues/2545))
* **homepage:** add customer references section ([#2159](https://github.com/aws-powertools/powertools-lambda-python/issues/2159))
* **homepage:** introduce POWERTOOLS_DEV env var ([#1569](https://github.com/aws-powertools/powertools-lambda-python/issues/1569))
* **homepage:** link to typescript version ([#950](https://github.com/aws-powertools/powertools-lambda-python/issues/950))
* **homepage:** remove leftover announcement banner ([#3783](https://github.com/aws-powertools/powertools-lambda-python/issues/3783))
* **homepage:** fix .NET repository link ([#2549](https://github.com/aws-powertools/powertools-lambda-python/issues/2549))
* **homepage:** discord flat badge style; remove former devax email ([#3768](https://github.com/aws-powertools/powertools-lambda-python/issues/3768))
* **homepage:** remove banner for end-of-support v1 ([#2098](https://github.com/aws-powertools/powertools-lambda-python/issues/2098))
* **homepage:** Change installation to CDK v2 ([#4351](https://github.com/aws-powertools/powertools-lambda-python/issues/4351))
* **homepage:** add Pulumi code example ([#1652](https://github.com/aws-powertools/powertools-lambda-python/issues/1652))
* **homepage:** auto-update Layer ARN on every release ([#1610](https://github.com/aws-powertools/powertools-lambda-python/issues/1610))
* **homepage:** emphasize additional powertools languages ([#1292](https://github.com/aws-powertools/powertools-lambda-python/issues/1292))
* **homepage:** Fix homepage link ([#4587](https://github.com/aws-powertools/powertools-lambda-python/issues/4587))
* **homepage:** remove 3.6 and add hero image
* **homepage:** update default value for `POWERTOOLS_DEV` ([#1695](https://github.com/aws-powertools/powertools-lambda-python/issues/1695))
* **homepage:** add banner about Python 3.7 deprecation ([#3618](https://github.com/aws-powertools/powertools-lambda-python/issues/3618))
* **homepage:** Replace poetry command to add group parameter ([#1917](https://github.com/aws-powertools/powertools-lambda-python/issues/1917))
* **homepage:** add link to new and official workshop ([#4292](https://github.com/aws-powertools/powertools-lambda-python/issues/4292))
* **i-made-this:** added new article on how to create a serverless API with CDK and Powertools ([#3605](https://github.com/aws-powertools/powertools-lambda-python/issues/3605))
* **i-made-this:** add new article about best practices for accelerating serverless development ([#4518](https://github.com/aws-powertools/powertools-lambda-python/issues/4518))
* **i-made-this:** article on idempotency w/ CDK and Powertools ([#2569](https://github.com/aws-powertools/powertools-lambda-python/issues/2569))
* **i-made-this:** added new article on idempotency ([#2582](https://github.com/aws-powertools/powertools-lambda-python/issues/2582))
* **i-made-this:** Bedrock agents with Powertools for AWS Lambda ([#4705](https://github.com/aws-powertools/powertools-lambda-python/issues/4705))
* **idempotency:** split snippets, improve wording and lint examples ([#2492](https://github.com/aws-powertools/powertools-lambda-python/issues/2492))
* **idempotency:** remove beta flag
* **idempotency:** new sequence flow when idempotency key is optional ([#2480](https://github.com/aws-powertools/powertools-lambda-python/issues/2480))
* **idempotency:** fixes to testing your code section ([#2073](https://github.com/aws-powertools/powertools-lambda-python/issues/2073))
* **idempotency:** fix highlight and import path ([#4154](https://github.com/aws-powertools/powertools-lambda-python/issues/4154))
* **idempotency:** tidy up doc before release ([#309](https://github.com/aws-powertools/powertools-lambda-python/issues/309))
* **idempotency:** new sequence diagrams, fix idempotency record vs DynamoDB TTL confusion ([#2074](https://github.com/aws-powertools/powertools-lambda-python/issues/2074))
* **idempotency:** add CDK example ([#2434](https://github.com/aws-powertools/powertools-lambda-python/issues/2434))
* **idempotency:** add missing Lambda Context; note on thread-safe ([#1732](https://github.com/aws-powertools/powertools-lambda-python/issues/1732))
* **idempotency:** fix misleading idempotent examples ([#661](https://github.com/aws-powertools/powertools-lambda-python/issues/661))
* **idempotency:** Correct examples and line highlights ([#312](https://github.com/aws-powertools/powertools-lambda-python/issues/312))
* **idempotency:** improve navigation, wording, and new section on guarantees ([#4613](https://github.com/aws-powertools/powertools-lambda-python/issues/4613))
* **idempotency:** use tab navigation, improves custom serializer example, and additional explanations ([#3067](https://github.com/aws-powertools/powertools-lambda-python/issues/3067))
* **idempotency:** add support for DynamoDB composite keys ([#808](https://github.com/aws-powertools/powertools-lambda-python/issues/808))
* **idempotency:** "persisntence" typo ([#1596](https://github.com/aws-powertools/powertools-lambda-python/issues/1596))
* **idempotency:** fix register_lambda_context order ([#1747](https://github.com/aws-powertools/powertools-lambda-python/issues/1747))
* **idempotency:** fix, improve, and increase visibility for batch integration ([#1776](https://github.com/aws-powertools/powertools-lambda-python/issues/1776))
* **idempotency:** add default configuration for those not using CFN ([#391](https://github.com/aws-powertools/powertools-lambda-python/issues/391))
* **idempotency:** add IAM permissions section ([#1902](https://github.com/aws-powertools/powertools-lambda-python/issues/1902))
* **idempotency:** remove old todo
* **idempotent:** Fix typos and code formatting ([#305](https://github.com/aws-powertools/powertools-lambda-python/issues/305))
* **index:** fold support us banner
* **index:** add quotes to pip for zsh customers
* **index:** fix link to event handler
* **install:** make minimum install the default option then extra ([#3834](https://github.com/aws-powertools/powertools-lambda-python/issues/3834))
* **install:** new lambda layer for 1.24.0 release
* **install:** address early v2 feedback on installation and project support
* **install:** instructions to reduce pydantic package size ([#1077](https://github.com/aws-powertools/powertools-lambda-python/issues/1077))
* **jmespath:** fix MD037/no-space-in-emphasis
* **jmespath:** clarify envelope terminology
* **jmespath_util:** snippets split, improved, and lint ([#1419](https://github.com/aws-powertools/powertools-lambda-python/issues/1419))
* **lambda_layer:** fix CDK layer syntax
* **layer:** bump Lambda Layer to version 6
* **layer:** upgrade to 1.27.0
* **layer:** upgrade to 1.27.0
* **layer:** upgrade to 1.25.10
* **layer:** remove link from clipboard button ([#1135](https://github.com/aws-powertools/powertools-lambda-python/issues/1135))
* **layer:** update to 1.24.1
* **layer:** upgrade to 1.28.0 (v33)
* **layer:** update to 1.25.7
* **layer:** update to 1.25.6; cosmetic changes
* **layer:** bump to 1.25.5
* **layer:** update to 1.25.3
* **layer:** update to 1.25.1
* **layer:** update to 1.24.2
* **layer:** upgrade to 1.26.7
* **layer:** upgrade to 1.25.9
* **lint:** add markdownlint rules and automation ([#1256](https://github.com/aws-powertools/powertools-lambda-python/issues/1256))
* **logger:** improve ALC messaging in the PT context ([#3359](https://github.com/aws-powertools/powertools-lambda-python/issues/3359))
* **logger:** update uncaught exception message value
* **logger:** fix incorrect field names in example structured logs ([#1830](https://github.com/aws-powertools/powertools-lambda-python/issues/1830))
* **logger:** snippets split, improved, and lint ([#1262](https://github.com/aws-powertools/powertools-lambda-python/issues/1262))
* **logger:** add FAQ for cross-account searches ([#501](https://github.com/aws-powertools/powertools-lambda-python/issues/501))
* **logger:** document new get_correlation_id method ([#545](https://github.com/aws-powertools/powertools-lambda-python/issues/545))
* **logger:** improvements extensibility & new features ([#415](https://github.com/aws-powertools/powertools-lambda-python/issues/415))
* **logger:** fix typo. ([#1587](https://github.com/aws-powertools/powertools-lambda-python/issues/1587))
* **logger:** add example on how to set UTC timestamp ([#392](https://github.com/aws-powertools/powertools-lambda-python/issues/392))
* **logger:** warn append_keys on not being thread-safe ([#2046](https://github.com/aws-powertools/powertools-lambda-python/issues/2046))
* **logger:** Fix ALC link ([#3352](https://github.com/aws-powertools/powertools-lambda-python/issues/3352))
* **logger:** Add warning of uncaught exceptions ([#1826](https://github.com/aws-powertools/powertools-lambda-python/issues/1826))
* **logger:** document enriching logs with logrecord attributes ([#1271](https://github.com/aws-powertools/powertools-lambda-python/issues/1271))
* **maintainers:** add cicd pipeline diagram ([#2692](https://github.com/aws-powertools/powertools-lambda-python/issues/2692))
* **maintainers:** initial maintainers playbook ([#1222](https://github.com/aws-powertools/powertools-lambda-python/issues/1222))
* **maintainers:** visual representation of release process ([#2399](https://github.com/aws-powertools/powertools-lambda-python/issues/2399))
* **metrics:** update Datadog integration diagram ([#2954](https://github.com/aws-powertools/powertools-lambda-python/issues/2954))
* **metrics:** snippets split, improved, and lint
* **metrics:** snippets split, improved, and lint ([#1272](https://github.com/aws-powertools/powertools-lambda-python/issues/1272))
* **metrics:** fix syntax highlighting for new default_dimensions
* **metrics:** remove reduntant wording before release
* **metrics:** remove minimum dimensions
* **metrics:** keep it consistent with other sections, update metric names
* **metrics:** fix empty metric warning filter ([#3660](https://github.com/aws-powertools/powertools-lambda-python/issues/3660))
* **metrics:** Corrections to the code examples ([#314](https://github.com/aws-powertools/powertools-lambda-python/issues/314))
* **metrics:** fix high-resolution metrics announcement link ([#2017](https://github.com/aws-powertools/powertools-lambda-python/issues/2017))
* **metrics:** Correct code examples in markdown ([#316](https://github.com/aws-powertools/powertools-lambda-python/issues/316))
* **middleware-factory:** Fix and improve typing ([#3569](https://github.com/aws-powertools/powertools-lambda-python/issues/3569))
* **middleware-factory:** snippets split, improved, and lint ([#1451](https://github.com/aws-powertools/powertools-lambda-python/issues/1451))
* **multiple:** fix highlighting after new isort/black integration
* **nav:** make REST and GraphQL event handlers more explicit ([#959](https://github.com/aws-powertools/powertools-lambda-python/issues/959))
* **navigation:** make Key Feature the first section ([#2517](https://github.com/aws-powertools/powertools-lambda-python/issues/2517))
* **navigation:** remove nofollow attribute for internal links ([#2867](https://github.com/aws-powertools/powertools-lambda-python/issues/2867))
* **navigation:** standardize link targets to enhance customer experience ([#2420](https://github.com/aws-powertools/powertools-lambda-python/issues/2420))
* **navigation:** add nofollow attribute ([#2842](https://github.com/aws-powertools/powertools-lambda-python/issues/2842))
* **parameters:** auto-transforming values based on suffix ([#573](https://github.com/aws-powertools/powertools-lambda-python/issues/573))
* **parameters:** snippets split, improved, and lint ([#1564](https://github.com/aws-powertools/powertools-lambda-python/issues/1564))
* **parameters:** fix typos and inconsistencies ([#1966](https://github.com/aws-powertools/powertools-lambda-python/issues/1966))
* **parameters:** improve readability on error handling get_parameter… ([#2833](https://github.com/aws-powertools/powertools-lambda-python/issues/2833))
* **parameters:** add testing your code section ([#1017](https://github.com/aws-powertools/powertools-lambda-python/issues/1017))
* **parser:** fix incorrect import in root_validator example ([#735](https://github.com/aws-powertools/powertools-lambda-python/issues/735))
* **parser:** fix highlighted line ([#2064](https://github.com/aws-powertools/powertools-lambda-python/issues/2064))
* **parser:** APIGatewayProxyEvent to APIGatewayProxyEventModel ([#1061](https://github.com/aws-powertools/powertools-lambda-python/issues/1061))
* **parser:** add JSON string field extension example ([#1526](https://github.com/aws-powertools/powertools-lambda-python/issues/1526))
* **parser:** minor grammar fix ([#1427](https://github.com/aws-powertools/powertools-lambda-python/issues/1427))
* **parser:** fix table and heading syntax
* **partial-processor:** add simple docstrings to success/failure handlers
* **plugin:** add mermaid to create diagram as code ([#1070](https://github.com/aws-powertools/powertools-lambda-python/issues/1070))
* **proccess:** add versioning and maintenance policy ([#3682](https://github.com/aws-powertools/powertools-lambda-python/issues/3682))
* **process:** explain our integration automated checks; revamp navigation ([#2764](https://github.com/aws-powertools/powertools-lambda-python/issues/2764))
* **project:** rename project to Powertools for AWS Lambda (Python) ([#2313](https://github.com/aws-powertools/powertools-lambda-python/issues/2313))
* **public reference:** add Brsk as a public reference ([#4597](https://github.com/aws-powertools/powertools-lambda-python/issues/4597))
* **public reference:** add Recast as a public reference ([#4491](https://github.com/aws-powertools/powertools-lambda-python/issues/4491))
* **public_reference:** add BusPatrol as a public reference ([#4713](https://github.com/aws-powertools/powertools-lambda-python/issues/4713))
* **public_reference:** add Caylent as a public reference ([#4822](https://github.com/aws-powertools/powertools-lambda-python/issues/4822))
* **public_reference:** add LocalStack as a public reference ([#4858](https://github.com/aws-powertools/powertools-lambda-python/issues/4858))
* **quickstart:** expand on intro line
* **quickstart:** tidy requirements up
* **quickstart:** add sub-sections, fix highlight & code
* **quickstart:** same process for Logger
* **quickstart:** sentence fragmentation, tidy up
* **quickstart:** make section agnostic to json lib
* **readme:** add code coverage badge ([#577](https://github.com/aws-powertools/powertools-lambda-python/issues/577))
* **readme:** add lambda layer latest version badge
* **readme:** update python version badge to 3.10
* **roadmap:** add new roadmap section ([#1204](https://github.com/aws-powertools/powertools-lambda-python/issues/1204))
* **roadmap:** april updates ([#4181](https://github.com/aws-powertools/powertools-lambda-python/issues/4181))
* **roadmap:** use pinned pause issue instead
* **roadmap:** update roadmap themes ([#2915](https://github.com/aws-powertools/powertools-lambda-python/issues/2915))
* **roadmap:** latest roadmap update; use new grid to de-clutter homepage ([#3755](https://github.com/aws-powertools/powertools-lambda-python/issues/3755))
* **roadmap:** refresh roadmap post-v2 launch
* **roadmap:** add GovCloud and China region item ([#2960](https://github.com/aws-powertools/powertools-lambda-python/issues/2960))
* **roadmap:** include observability provider and lambda layer themes before v2
* **sqs:** docstrings for PartialSQS
* **sqs-base:** docstring for base class
* **streaming:** fix leftover newline
* **tenets:** update Idiomatic tenet to Progressive ([#823](https://github.com/aws-powertools/powertools-lambda-python/issues/823))
* **tenets:** make core, non-core more explicit
* **theme:** upgrade mkdocs-material to 8.x ([#1002](https://github.com/aws-powertools/powertools-lambda-python/issues/1002))
* **tracer:** additional scenario when to disable auto-capture ([#499](https://github.com/aws-powertools/powertools-lambda-python/issues/499))
* **tracer:** add note on why X-Ray SDK over ADOT closes [#1675](https://github.com/aws-powertools/powertools-lambda-python/issues/1675)
* **tracer:** add initial image, requirements
* **tracer:** update ServiceLens image w/ API GW, copywriting
* **tracer:** update wording that it auto-disables on non-Lambda env
* **tracer:** split and lint code snippets ([#1260](https://github.com/aws-powertools/powertools-lambda-python/issues/1260))
* **tracer:** warning to note on local traces
* **tracer:** add annotation, metadata, and image
* **tracer:** Fix line highlighting ([#395](https://github.com/aws-powertools/powertools-lambda-python/issues/395))
* **tracer:** snippets split, improved, and lint ([#1261](https://github.com/aws-powertools/powertools-lambda-python/issues/1261))
* **tracer:** Fix Tracer typing hinting for Pycharm ([#345](https://github.com/aws-powertools/powertools-lambda-python/issues/345))
* **tracer:** new ignore_endpoint feature ([#931](https://github.com/aws-powertools/powertools-lambda-python/issues/931))
* **tutorial:** fix "Simplifying with Tracer" section in the tutorial  ([#3962](https://github.com/aws-powertools/powertools-lambda-python/issues/3962))
* **tutorial:** add support for Python 3.11 ([#2860](https://github.com/aws-powertools/powertools-lambda-python/issues/2860))
* **tutorial:** fix broken internal links ([#1000](https://github.com/aws-powertools/powertools-lambda-python/issues/1000))
* **tutorial:** fix path to images ([#963](https://github.com/aws-powertools/powertools-lambda-python/issues/963))
* **tutorial:** use newer sam cli template; update to py3.10 ([#2167](https://github.com/aws-powertools/powertools-lambda-python/issues/2167))
* **typing:** snippets split, improved, and lint ([#1465](https://github.com/aws-powertools/powertools-lambda-python/issues/1465))
* **upgrade_guide:** add latest changes and quick summary ([#1623](https://github.com/aws-powertools/powertools-lambda-python/issues/1623))
* **v2:** document optional dependencies and local dev ([#1574](https://github.com/aws-powertools/powertools-lambda-python/issues/1574))
* **validation:** fix broken link; enrich built-in jmespath links ([#1777](https://github.com/aws-powertools/powertools-lambda-python/issues/1777))
* **validation:** snippets split, improved, and lint ([#1449](https://github.com/aws-powertools/powertools-lambda-python/issues/1449))
* **validator:** include more complete examples & intro to JSON Schema ([#389](https://github.com/aws-powertools/powertools-lambda-python/issues/389))
* **we-made-this:** add reinvent 2023 session ([#3790](https://github.com/aws-powertools/powertools-lambda-python/issues/3790))
* **we-made-this:** new community content section ([#1650](https://github.com/aws-powertools/powertools-lambda-python/issues/1650))
* **we-made-this:** add swagger post ([#3799](https://github.com/aws-powertools/powertools-lambda-python/issues/3799))
* **we-made-this:** new article about idempotency design ([#2425](https://github.com/aws-powertools/powertools-lambda-python/issues/2425))
* **we-made-this:** add Feature Flags post ([#1939](https://github.com/aws-powertools/powertools-lambda-python/issues/1939))
* **we-made-this:** add CI/CD using Feature Flags video   ([#1940](https://github.com/aws-powertools/powertools-lambda-python/issues/1940))
* **we-made-this:** new article on how to stream data with AWS Lambda & Powertools for AWS Lambda ([#4068](https://github.com/aws-powertools/powertools-lambda-python/issues/4068))
* **we-made-this:** add serverless transactional message app ([#2182](https://github.com/aws-powertools/powertools-lambda-python/issues/2182))
* **we-made-this:** fix broken Twitch video embeds ([#3096](https://github.com/aws-powertools/powertools-lambda-python/issues/3096))

## Features

* add xray_trace_id key when tracing is active [#137](https://github.com/aws-powertools/powertools-lambda-python/issues/137)
* Add Python3.8 support
* Add Kinesis lambda event support to Parser utility
* add docs to CI
* toggle to disable log deduplication locally for pytest live log [#262](https://github.com/aws-powertools/powertools-lambda-python/issues/262) ([#268](https://github.com/aws-powertools/powertools-lambda-python/issues/268))
* add documentation website ([#37](https://github.com/aws-powertools/powertools-lambda-python/issues/37))
* add algolia search for docs and api ref ([#39](https://github.com/aws-powertools/powertools-lambda-python/issues/39))
* enforce semantic PR titles ([#54](https://github.com/aws-powertools/powertools-lambda-python/issues/54))
* add stale issues config [#33](https://github.com/aws-powertools/powertools-lambda-python/issues/33) ([#55](https://github.com/aws-powertools/powertools-lambda-python/issues/55))
* Add S3 lambda event support to Parser utility [#224](https://github.com/aws-powertools/powertools-lambda-python/issues/224)
* Add cloudwatch lambda event support to Parser utility
* Add Ses lambda event support to Parser utility [#213](https://github.com/aws-powertools/powertools-lambda-python/issues/213)
* add release drafter ([#56](https://github.com/aws-powertools/powertools-lambda-python/issues/56))
* include new replay-name field in parser and data_classes
* readd release drafter action [#33](https://github.com/aws-powertools/powertools-lambda-python/issues/33)
* create issue templates
* experiment with codeQL over LGTM
* add RFC template for proposals
* add standalone parse function
* Add Kinesis lambda event support to Parser utility
* support custom formats in JSON Schema validation ([#247](https://github.com/aws-powertools/powertools-lambda-python/issues/247))
* support extra parameter in Logger messages ([#257](https://github.com/aws-powertools/powertools-lambda-python/issues/257))
* Advanced parser utility (pydantic)
* add pull request template [#33](https://github.com/aws-powertools/powertools-lambda-python/issues/33)
* expose jmespath powertools functions ([#736](https://github.com/aws-powertools/powertools-lambda-python/issues/736))
* boto3 sessions in batch, parameters & idempotency ([#717](https://github.com/aws-powertools/powertools-lambda-python/issues/717))
* add security and complexity baseline [#33](https://github.com/aws-powertools/powertools-lambda-python/issues/33) ([#57](https://github.com/aws-powertools/powertools-lambda-python/issues/57))
* add codecov service ([#59](https://github.com/aws-powertools/powertools-lambda-python/issues/59))
* emf multiple metric values ([#167](https://github.com/aws-powertools/powertools-lambda-python/issues/167))
* update Metrics interface to resemble tracer & logger: use "service" as its namespace.
* add pre-commit hooks ([#64](https://github.com/aws-powertools/powertools-lambda-python/issues/64))
* add get_raw_configuration property in store; expose store
* automate publishing to pypi ([#58](https://github.com/aws-powertools/powertools-lambda-python/issues/58))
* add initial validator tests
* add cloudwatch_logs based on Bryan's feedback
* add capture_cold_start_metric for log_metrics ([#67](https://github.com/aws-powertools/powertools-lambda-python/issues/67))
* add high level imports ([#70](https://github.com/aws-powertools/powertools-lambda-python/issues/70))
* add powertools_base64 custom fn
* improve error handling for log_metrics decorator ([#71](https://github.com/aws-powertools/powertools-lambda-python/issues/71))
* add metrics metadata ([#81](https://github.com/aws-powertools/powertools-lambda-python/issues/81))
* add built-in envelopes
* add custom jmespath functions support
* docs anonymized page view ([#82](https://github.com/aws-powertools/powertools-lambda-python/issues/82))
* Add AppConfig parameter provider ([#236](https://github.com/aws-powertools/powertools-lambda-python/issues/236))
* add jmespath as optional dependency
* enable issue auto-assigner to core team
* add support for logger inheritance ([#99](https://github.com/aws-powertools/powertools-lambda-python/issues/99))
* add support to persist default dimensions ([#410](https://github.com/aws-powertools/powertools-lambda-python/issues/410))
* add support for tracing of generators using capture_method decorator ([#113](https://github.com/aws-powertools/powertools-lambda-python/issues/113))
* Idempotency helper utility ([#245](https://github.com/aws-powertools/powertools-lambda-python/issues/245))
* add parameter utility ([#96](https://github.com/aws-powertools/powertools-lambda-python/issues/96))
* RFC: Validate incoming and outgoing events utility [#95](https://github.com/aws-powertools/powertools-lambda-python/issues/95)
* add support for SNS->SQS protocol ([#272](https://github.com/aws-powertools/powertools-lambda-python/issues/272))
* capture_response as metadata option [#127](https://github.com/aws-powertools/powertools-lambda-python/issues/127)
* add batch module
* add initial draft simple validator
* include base processors
* add sqs failure processors
* add package level import for batch utility
* initial implementation as the proposed gist is
* Add alb lambda event support to Parser utility [#228](https://github.com/aws-powertools/powertools-lambda-python/issues/228)
* **Idempotency:** add feature for manipulating idempotent responses ([#4037](https://github.com/aws-powertools/powertools-lambda-python/issues/4037))
* **api-gateway:** add support for custom serializer ([#568](https://github.com/aws-powertools/powertools-lambda-python/issues/568))
* **api-gateway:** add common service errors ([#506](https://github.com/aws-powertools/powertools-lambda-python/issues/506))
* **api-gateway:** add debug mode ([#507](https://github.com/aws-powertools/powertools-lambda-python/issues/507))
* **apigateway:** add Router to allow large routing composition ([#645](https://github.com/aws-powertools/powertools-lambda-python/issues/645))
* **apigateway:** ignore trailing slashes in routes (APIGatewayRestResolver) ([#1609](https://github.com/aws-powertools/powertools-lambda-python/issues/1609))
* **apigateway:** access parent api resolver from router ([#842](https://github.com/aws-powertools/powertools-lambda-python/issues/842))
* **apigateway:** multiple exceptions in exception_handler ([#1707](https://github.com/aws-powertools/powertools-lambda-python/issues/1707))
* **apigateway:** add exception_handler support ([#898](https://github.com/aws-powertools/powertools-lambda-python/issues/898))
* **appsync:** add Router to allow large resolver composition ([#776](https://github.com/aws-powertools/powertools-lambda-python/issues/776))
* **batch:** reduce boilerplate with process_partial_response ([#2090](https://github.com/aws-powertools/powertools-lambda-python/issues/2090))
* **batch:** new BatchProcessor for SQS, DynamoDB, Kinesis ([#886](https://github.com/aws-powertools/powertools-lambda-python/issues/886))
* **batch:** add option to not raise `BatchProcessingError` exception when the entire batch fails ([#4719](https://github.com/aws-powertools/powertools-lambda-python/issues/4719))
* **batch:** inject lambda_context if record handler signature accepts it ([#1561](https://github.com/aws-powertools/powertools-lambda-python/issues/1561))
* **batch:** add support to SQS FIFO queues (SqsFifoPartialProcessor) ([#1934](https://github.com/aws-powertools/powertools-lambda-python/issues/1934))
* **batch:** add flag in SqsFifoProcessor to enable continuous message processing ([#3954](https://github.com/aws-powertools/powertools-lambda-python/issues/3954))
* **batch:** add async_batch_processor for concurrent processing ([#1724](https://github.com/aws-powertools/powertools-lambda-python/issues/1724))
* **ci:** create reusable changelog generation
* **ci:** create reusable changelog generation ([#1418](https://github.com/aws-powertools/powertools-lambda-python/issues/1418))
* **ci:** add actionlint in pre-commit hook
* **ci:** dispatch GitHub analytics action ([#2161](https://github.com/aws-powertools/powertools-lambda-python/issues/2161))
* **ci:** auto-notify & close issues on release
* **ci:** include changelog generation on docs build
* **ci:** release docs as alpha when doing a pre-release ([#1624](https://github.com/aws-powertools/powertools-lambda-python/issues/1624))
* **data-classes:** add AttributeValueType to DynamoDBStreamEvent ([#462](https://github.com/aws-powertools/powertools-lambda-python/issues/462))
* **data-classes:** decode base64 encoded body ([#425](https://github.com/aws-powertools/powertools-lambda-python/issues/425))
* **data-classes:** support for code pipeline job event ([#416](https://github.com/aws-powertools/powertools-lambda-python/issues/416))
* **data-classes:** replace AttributeValue in DynamoDBStreamEvent with deserialized Python values ([#1619](https://github.com/aws-powertools/powertools-lambda-python/issues/1619))
* **data-classes:** add KafkaEvent and KafkaEventRecord ([#1485](https://github.com/aws-powertools/powertools-lambda-python/issues/1485))
* **data-classes:** decode json_body if based64 encoded ([#560](https://github.com/aws-powertools/powertools-lambda-python/issues/560))
* **data-classes:** ActiveMQ and RabbitMQ support ([#770](https://github.com/aws-powertools/powertools-lambda-python/issues/770))
* **data-classes:** decorator to instantiate data_classes and docs updates ([#442](https://github.com/aws-powertools/powertools-lambda-python/issues/442))
* **data-classes:** authorizer for http api and rest api ([#620](https://github.com/aws-powertools/powertools-lambda-python/issues/620))
* **data-classes:** Add connect contact flow event ([#304](https://github.com/aws-powertools/powertools-lambda-python/issues/304))
* **data-classes:** AppSync Resolver Event ([#323](https://github.com/aws-powertools/powertools-lambda-python/issues/323))
* **data-classes:** Add appsync scalar_types_utils ([#339](https://github.com/aws-powertools/powertools-lambda-python/issues/339))
* **data-classes:** Add S3 Object Lambda Event ([#353](https://github.com/aws-powertools/powertools-lambda-python/issues/353))
* **data-classes:** data_as_bytes prop KinesisStreamRecordPayload ([#628](https://github.com/aws-powertools/powertools-lambda-python/issues/628))
* **data-classes:** AppSync Lambda authorizer event ([#610](https://github.com/aws-powertools/powertools-lambda-python/issues/610))
* **data_classes:** add KinesisFirehoseEvent ([#1540](https://github.com/aws-powertools/powertools-lambda-python/issues/1540))
* **data_classes:** Add CloudWatchAlarmEvent data class ([#3868](https://github.com/aws-powertools/powertools-lambda-python/issues/3868))
* **data_classes:** API Gateway V2 IAM and Lambda
* **data_classes:** Cognito custom auth triggers
* **data_classes:** case insensitive header lookup
* **data_classes:** add support for Bedrock Agents event ([#3262](https://github.com/aws-powertools/powertools-lambda-python/issues/3262))
* **data_masking:** add new sensitive data masking utility ([#2197](https://github.com/aws-powertools/powertools-lambda-python/issues/2197))
* **docs:** Move docs to S3 ([#2277](https://github.com/aws-powertools/powertools-lambda-python/issues/2277))
* **event-handle:** allow for cors=None setting ([#421](https://github.com/aws-powertools/powertools-lambda-python/issues/421))
* **event-handler:** context support to share data between routers ([#1567](https://github.com/aws-powertools/powertools-lambda-python/issues/1567))
* **event-handler:** add http ProxyEvent handler ([#369](https://github.com/aws-powertools/powertools-lambda-python/issues/369))
* **event-handler:** add compress option when serving Swagger HTML ([#3946](https://github.com/aws-powertools/powertools-lambda-python/issues/3946))
* **event-handler:** Add AppSync handler decorator ([#363](https://github.com/aws-powertools/powertools-lambda-python/issues/363))
* **event-handler:** Support AppSyncResolverEvent subclassing ([#526](https://github.com/aws-powertools/powertools-lambda-python/issues/526))
* **event-handler:** new resolvers to fix current_event typing ([#978](https://github.com/aws-powertools/powertools-lambda-python/issues/978))
* **event-handler:** add appsync batch resolvers ([#1998](https://github.com/aws-powertools/powertools-lambda-python/issues/1998))
* **event-handler:** add description to request body in OpenAPI schema ([#3548](https://github.com/aws-powertools/powertools-lambda-python/issues/3548))
* **event-handler:** prefixes to strip for custom mappings ([#579](https://github.com/aws-powertools/powertools-lambda-python/issues/579))
* **event-source:** add function to get multi-value query string params by name ([#3846](https://github.com/aws-powertools/powertools-lambda-python/issues/3846))
* **event-sources:** cache parsed json in data class ([#909](https://github.com/aws-powertools/powertools-lambda-python/issues/909))
* **event_handler:** add Middleware support for REST Event Handler ([#2917](https://github.com/aws-powertools/powertools-lambda-python/issues/2917))
* **event_handler:** support richer top level Tags ([#3543](https://github.com/aws-powertools/powertools-lambda-python/issues/3543))
* **event_handler:** allow customers to catch request validation errors ([#3396](https://github.com/aws-powertools/powertools-lambda-python/issues/3396))
* **event_handler:** improved support for headers and cookies in v2 ([#1455](https://github.com/aws-powertools/powertools-lambda-python/issues/1455))
* **event_handler:** add cookies as 1st class citizen in v2 ([#1487](https://github.com/aws-powertools/powertools-lambda-python/issues/1487))
* **event_handler:** add support to download OpenAPI spec file ([#3571](https://github.com/aws-powertools/powertools-lambda-python/issues/3571))
* **event_handler:** add support for additional response models ([#3591](https://github.com/aws-powertools/powertools-lambda-python/issues/3591))
* **event_handler:** add support for multiValueQueryStringParameters in OpenAPI schema ([#3667](https://github.com/aws-powertools/powertools-lambda-python/issues/3667))
* **event_handler:** support Header parameter validation in OpenAPI schema ([#3687](https://github.com/aws-powertools/powertools-lambda-python/issues/3687))
* **event_handler:** add Bedrock Agent event handler ([#3285](https://github.com/aws-powertools/powertools-lambda-python/issues/3285))
* **event_handler:** use custom serializer during openapi serialization ([#3900](https://github.com/aws-powertools/powertools-lambda-python/issues/3900))
* **event_handler:** add ability to expose a Swagger UI ([#3254](https://github.com/aws-powertools/powertools-lambda-python/issues/3254))
* **event_handler:** generate OpenAPI specifications and validate input/output ([#3109](https://github.com/aws-powertools/powertools-lambda-python/issues/3109))
* **event_handler:** add support to VPC Lattice payload v2 ([#3153](https://github.com/aws-powertools/powertools-lambda-python/issues/3153))
* **event_handler:** allow stripping route prefixes using regexes ([#2521](https://github.com/aws-powertools/powertools-lambda-python/issues/2521))
* **event_handler:** add support for OpenAPI security schemes ([#4103](https://github.com/aws-powertools/powertools-lambda-python/issues/4103))
* **event_handler:** add VPCLatticeResolver ([#2601](https://github.com/aws-powertools/powertools-lambda-python/issues/2601))
* **event_handler:** add decorator for HTTP HEAD verb ([#4275](https://github.com/aws-powertools/powertools-lambda-python/issues/4275))
* **event_handler:** add support for persisting authorization session in OpenAPI ([#4312](https://github.com/aws-powertools/powertools-lambda-python/issues/4312))
* **event_handler:** support to enable or disable compression in custom responses ([#2544](https://github.com/aws-powertools/powertools-lambda-python/issues/2544))
* **event_handler:**  define exception_handler directly from the router ([#3979](https://github.com/aws-powertools/powertools-lambda-python/issues/3979))
* **event_handler:** add OpenAPI extensions ([#4703](https://github.com/aws-powertools/powertools-lambda-python/issues/4703))
* **event_handlers:** Add support for Lambda Function URLs ([#1408](https://github.com/aws-powertools/powertools-lambda-python/issues/1408))
* **event_source:** decode nested messages on SQS events ([#2349](https://github.com/aws-powertools/powertools-lambda-python/issues/2349))
* **event_source:** support custom json_deserializer; add json_body in SQSEvent ([#2200](https://github.com/aws-powertools/powertools-lambda-python/issues/2200))
* **event_source:** add Kinesis Firehose Data Transformation data class ([#3029](https://github.com/aws-powertools/powertools-lambda-python/issues/3029))
* **event_source:** add CloudFormationCustomResourceEvent data class. ([#4342](https://github.com/aws-powertools/powertools-lambda-python/issues/4342))
* **event_source:** allow multiple CORS origins ([#2279](https://github.com/aws-powertools/powertools-lambda-python/issues/2279))
* **event_source:** add support for dynamic partitions in the Api Gateway Authorizer event ([#2176](https://github.com/aws-powertools/powertools-lambda-python/issues/2176))
* **event_source:** Add support for S3 batch operations ([#3572](https://github.com/aws-powertools/powertools-lambda-python/issues/3572))
* **event_source:** Add support for policyLevel field in CloudWatch Logs event and parser ([#3624](https://github.com/aws-powertools/powertools-lambda-python/issues/3624))
* **event_sources:** add Secrets Manager secret rotation event ([#3061](https://github.com/aws-powertools/powertools-lambda-python/issues/3061))
* **event_sources:** add queue_url field in SQS EventSource DataClass ([#2146](https://github.com/aws-powertools/powertools-lambda-python/issues/2146))
* **event_sources:** Add __str__ to Data Classes base DictWrapper ([#2129](https://github.com/aws-powertools/powertools-lambda-python/issues/2129))
* **event_sources:** support for S3 Event Notifications through EventBridge ([#2024](https://github.com/aws-powertools/powertools-lambda-python/issues/2024))
* **event_sources:** add get_context() to standardize API Gateway Lambda Authorizer context in v1 and v2 ([#3454](https://github.com/aws-powertools/powertools-lambda-python/issues/3454))
* **event_sources:** support for custom properties in ActiveMQEvent ([#1999](https://github.com/aws-powertools/powertools-lambda-python/issues/1999))
* **event_sources:** extract CloudWatch Logs in Kinesis streams ([#1710](https://github.com/aws-powertools/powertools-lambda-python/issues/1710))
* **event_sources:** add support for VPC Lattice events ([#2358](https://github.com/aws-powertools/powertools-lambda-python/issues/2358))
* **event_sources:** add AWS Config Rule event data class ([#2175](https://github.com/aws-powertools/powertools-lambda-python/issues/2175))
* **event_sources:** add CloudWatch dashboard custom widget event ([#1474](https://github.com/aws-powertools/powertools-lambda-python/issues/1474))
* **events:** Update and Add Cognito User Pool Events ([#4423](https://github.com/aws-powertools/powertools-lambda-python/issues/4423))
* **feat-toggle:** New simple feature toggles rule engine (WIP) ([#494](https://github.com/aws-powertools/powertools-lambda-python/issues/494))
* **feature flags:** Add not_in action and rename contains to in ([#589](https://github.com/aws-powertools/powertools-lambda-python/issues/589))
* **feature-flags:** get_raw_configuration property in Store ([#720](https://github.com/aws-powertools/powertools-lambda-python/issues/720))
* **feature-flags:** improve "IN/NOT_IN"; new rule actions ([#710](https://github.com/aws-powertools/powertools-lambda-python/issues/710))
* **feature-flags:** Bring your own logger for debug ([#709](https://github.com/aws-powertools/powertools-lambda-python/issues/709))
* **feature_flags:** support beyond boolean values (JSON values) ([#804](https://github.com/aws-powertools/powertools-lambda-python/issues/804))
* **feature_flags:** Added inequality conditions ([#721](https://github.com/aws-powertools/powertools-lambda-python/issues/721))
* **feature_flags:** add modulo range condition for segmented experimentation support ([#2331](https://github.com/aws-powertools/powertools-lambda-python/issues/2331))
* **feature_flags:** allow customers to bring their own boto3 client and session ([#4717](https://github.com/aws-powertools/powertools-lambda-python/issues/4717))
* **feature_flags:** Add Time based feature flags actions ([#1846](https://github.com/aws-powertools/powertools-lambda-python/issues/1846))
* **feature_flags:** add intersect actions for conditions ([#3692](https://github.com/aws-powertools/powertools-lambda-python/issues/3692))
* **general:** add support for Python 3.12 ([#3304](https://github.com/aws-powertools/powertools-lambda-python/issues/3304))
* **general:** support for Python 3.9 ([#626](https://github.com/aws-powertools/powertools-lambda-python/issues/626))
* **general:** add support for Python 3.11 ([#2820](https://github.com/aws-powertools/powertools-lambda-python/issues/2820))
* **idempotency:** support for any synchronous function ([#625](https://github.com/aws-powertools/powertools-lambda-python/issues/625))
* **idempotency:** handle lambda timeout scenarios for INPROGRESS records ([#1387](https://github.com/aws-powertools/powertools-lambda-python/issues/1387))
* **idempotency:** add support to custom serialization/deserialization on idempotency decorator ([#2951](https://github.com/aws-powertools/powertools-lambda-python/issues/2951))
* **idempotency:** allow custom sdk clients in DynamoDBPersistenceLayer ([#2087](https://github.com/aws-powertools/powertools-lambda-python/issues/2087))
* **idempotency:** support methods with the same name (ABCs) by including fully qualified name in v2 ([#1535](https://github.com/aws-powertools/powertools-lambda-python/issues/1535))
* **idempotency:** leverage new DynamoDB Failed conditional writes behavior with ReturnValuesOnConditionCheckFailure ([#3446](https://github.com/aws-powertools/powertools-lambda-python/issues/3446))
* **idempotency:** makes customers unit testing easier ([#719](https://github.com/aws-powertools/powertools-lambda-python/issues/719))
* **idempotency:** support dataclasses & pydantic models payloads ([#908](https://github.com/aws-powertools/powertools-lambda-python/issues/908))
* **idempotency:** Fix KeyError when local_cache is True and an error is raised in the lambda handler ([#300](https://github.com/aws-powertools/powertools-lambda-python/issues/300))
* **idempotency:** Add raise_on_no_idempotency_key flag ([#297](https://github.com/aws-powertools/powertools-lambda-python/issues/297))
* **idempotency:** adding redis as idempotency backend ([#2567](https://github.com/aws-powertools/powertools-lambda-python/issues/2567))
* **idempotent:** Include function name in the idempotent key ([#326](https://github.com/aws-powertools/powertools-lambda-python/issues/326))
* **idempotent:** Add support for jmespath_options ([#302](https://github.com/aws-powertools/powertools-lambda-python/issues/302))
* **jmespath:** new built-in envelopes to unwrap S3 events ([#2169](https://github.com/aws-powertools/powertools-lambda-python/issues/2169))
* **layer:** publish SAR v2 via Github actions ([#1585](https://github.com/aws-powertools/powertools-lambda-python/issues/1585))
* **layers:** add arm64 support in more regions ([#3151](https://github.com/aws-powertools/powertools-lambda-python/issues/3151))
* **layers:** add new comercial region Israel(Tel Aviv) ([#2907](https://github.com/aws-powertools/powertools-lambda-python/issues/2907))
* **layers:** add support for publishing v2 layer ([#1558](https://github.com/aws-powertools/powertools-lambda-python/issues/1558))
* **layers:** add new comercial region Canada - ca-west-1 ([#3549](https://github.com/aws-powertools/powertools-lambda-python/issues/3549))
* **layers:** add layer balancer script ([#1643](https://github.com/aws-powertools/powertools-lambda-python/issues/1643))
* **logger:** new stack_trace field with rich exception details ([#3147](https://github.com/aws-powertools/powertools-lambda-python/issues/3147))
* **logger:** type log record in LambdaPowertoolsFormatter with TypedDict ([#2419](https://github.com/aws-powertools/powertools-lambda-python/issues/2419))
* **logger:** accept arbitrary keyword=value for ephemeral metadata ([#1658](https://github.com/aws-powertools/powertools-lambda-python/issues/1658))
* **logger:** clone powertools logger config to any Python logger ([#927](https://github.com/aws-powertools/powertools-lambda-python/issues/927))
* **logger:** add method to return currently configured keys ([#4033](https://github.com/aws-powertools/powertools-lambda-python/issues/4033))
* **logger:** readable log_dict seq
* **logger:** log uncaught exceptions via system's exception hook ([#1727](https://github.com/aws-powertools/powertools-lambda-python/issues/1727))
* **logger:** introduce POWERTOOLS_DEBUG for internal debugging ([#1572](https://github.com/aws-powertools/powertools-lambda-python/issues/1572))
* **logger:** unwrap event from common models if asked to log ([#1778](https://github.com/aws-powertools/powertools-lambda-python/issues/1778))
* **logger:** implement addFilter/removeFilter to address static typing errors ([#3380](https://github.com/aws-powertools/powertools-lambda-python/issues/3380))
* **logger:** include logger name attribute when copy_config_to_registered_logger is used ([#1568](https://github.com/aws-powertools/powertools-lambda-python/issues/1568))
* **logger:** support use_datetime_directive for timestamps ([#920](https://github.com/aws-powertools/powertools-lambda-python/issues/920))
* **logger:** add log sampling
* **logger:** Adding support to new env variables ([#3348](https://github.com/aws-powertools/powertools-lambda-python/issues/3348))
* **logger:** add option to clear state per invocation
* **logger:** add option to clear state per invocation ([#467](https://github.com/aws-powertools/powertools-lambda-python/issues/467))
* **logger:** pretty-print JSON when POWERTOOLS_DEV is set ([#1548](https://github.com/aws-powertools/powertools-lambda-python/issues/1548))
* **logger:** add ALB correlation ID support ([#816](https://github.com/aws-powertools/powertools-lambda-python/issues/816))
* **logger:** add use_rfc3339 and auto-complete formatter opts in Logger ([#1662](https://github.com/aws-powertools/powertools-lambda-python/issues/1662))
* **logger:** add DatadogLogFormatter and observability provider ([#2183](https://github.com/aws-powertools/powertools-lambda-python/issues/2183))
* **logger:** log_event support event data classes (e.g. S3Event) ([#984](https://github.com/aws-powertools/powertools-lambda-python/issues/984))
* **logger:** add get_correlation_id method ([#516](https://github.com/aws-powertools/powertools-lambda-python/issues/516))
* **logger:** allow handler with custom kwargs signature ([#913](https://github.com/aws-powertools/powertools-lambda-python/issues/913))
* **logger-utils:** preserve log level for discovered third-party top-level loggers ([#4299](https://github.com/aws-powertools/powertools-lambda-python/issues/4299))
* **logging:** allow for custom json order
* **logging:** suppress some log keys
* **logging:** Include exception_name ([#320](https://github.com/aws-powertools/powertools-lambda-python/issues/320))
* **logging:** Add correlation_id support ([#321](https://github.com/aws-powertools/powertools-lambda-python/issues/321))
* **metrics:** add EphemeralMetrics as a non-singleton option ([#1676](https://github.com/aws-powertools/powertools-lambda-python/issues/1676))
* **metrics:** add Datadog observability provider ([#2906](https://github.com/aws-powertools/powertools-lambda-python/issues/2906))
* **metrics:** update max user-defined dimensions from 9 to 29 ([#1417](https://github.com/aws-powertools/powertools-lambda-python/issues/1417))
* **metrics:** allow custom timestamps for metrics ([#4006](https://github.com/aws-powertools/powertools-lambda-python/issues/4006))
* **metrics:** support to bring your own metrics provider ([#2194](https://github.com/aws-powertools/powertools-lambda-python/issues/2194))
* **metrics:** support to set default dimension in EphemeralMetrics ([#2748](https://github.com/aws-powertools/powertools-lambda-python/issues/2748))
* **metrics:** add flush_metrics() method to allow manual flushing of metrics ([#2171](https://github.com/aws-powertools/powertools-lambda-python/issues/2171))
* **metrics:** add default_dimensions to single_metric ([#1880](https://github.com/aws-powertools/powertools-lambda-python/issues/1880))
* **mypy:** complete mypy support for the entire codebase ([#943](https://github.com/aws-powertools/powertools-lambda-python/issues/943))
* **mypy:** add mypy support to makefile ([#508](https://github.com/aws-powertools/powertools-lambda-python/issues/508))
* **parameter:** add dynamodb_endpoint_url for local_testing ([#376](https://github.com/aws-powertools/powertools-lambda-python/issues/376))
* **parameters:** accept boto3_client to support private endpoints and ease testing ([#1096](https://github.com/aws-powertools/powertools-lambda-python/issues/1096))
* **parameters:** transform = "auto" ([#133](https://github.com/aws-powertools/powertools-lambda-python/issues/133))
* **parameters:** migrate AppConfig to new APIs due to API deprecation ([#1553](https://github.com/aws-powertools/powertools-lambda-python/issues/1553))
* **parameters:** Add force_fetch option ([#341](https://github.com/aws-powertools/powertools-lambda-python/issues/341))
* **parameters:** Configure max_age and decrypt parameters via environment variables ([#2088](https://github.com/aws-powertools/powertools-lambda-python/issues/2088))
* **parameters:** add clear_cache method for providers ([#1194](https://github.com/aws-powertools/powertools-lambda-python/issues/1194))
* **parameters:** add get_parameters_by_name for SSM params in distinct paths ([#1678](https://github.com/aws-powertools/powertools-lambda-python/issues/1678))
* **parameters:** add feature for creating and updating Parameters and Secrets ([#2858](https://github.com/aws-powertools/powertools-lambda-python/issues/2858))
* **params:** expose high level max_age, raise_on_transform_error ([#567](https://github.com/aws-powertools/powertools-lambda-python/issues/567))
* **parser:** add support for API Gateway HTTP API [#434](https://github.com/aws-powertools/powertools-lambda-python/issues/434) ([#441](https://github.com/aws-powertools/powertools-lambda-python/issues/441))
* **parser:** add support for Pydantic v2 ([#2733](https://github.com/aws-powertools/powertools-lambda-python/issues/2733))
* **parser:** add support to VpcLatticeModel ([#2584](https://github.com/aws-powertools/powertools-lambda-python/issues/2584))
* **parser:** support for CloudFormation Custom Resources ([#2335](https://github.com/aws-powertools/powertools-lambda-python/issues/2335))
* **parser:** add KafkaMskEventModel and KafkaSelfManagedEventModel ([#1499](https://github.com/aws-powertools/powertools-lambda-python/issues/1499))
* **parser:** add support for API Gateway Lambda authorizer events ([#4718](https://github.com/aws-powertools/powertools-lambda-python/issues/4718))
* **parser:** add support for Lambda Function URL ([#1442](https://github.com/aws-powertools/powertools-lambda-python/issues/1442))
* **parser:** Support for API GW v1 proxy schema & envelope ([#403](https://github.com/aws-powertools/powertools-lambda-python/issues/403))
* **parser:** extract CloudWatch Logs in Kinesis streams ([#1726](https://github.com/aws-powertools/powertools-lambda-python/issues/1726))
* **parser:** infer model from type hint ([#3181](https://github.com/aws-powertools/powertools-lambda-python/issues/3181))
* **parser:** add BedrockEventModel parser and envelope ([#3286](https://github.com/aws-powertools/powertools-lambda-python/issues/3286))
* **parser:** support for S3 Event Notifications via EventBridge ([#1982](https://github.com/aws-powertools/powertools-lambda-python/issues/1982))
* **parser:** Add S3 Object Lambda Event ([#362](https://github.com/aws-powertools/powertools-lambda-python/issues/362))
* **parser:** add support for parsing SQS events wrapped in Kinesis Firehose ([#2294](https://github.com/aws-powertools/powertools-lambda-python/issues/2294))
* **parser:** add KinesisFirehoseModel ([#1556](https://github.com/aws-powertools/powertools-lambda-python/issues/1556))
* **parser:** security issue in Pydantic [#436](https://github.com/aws-powertools/powertools-lambda-python/issues/436) ([#437](https://github.com/aws-powertools/powertools-lambda-python/issues/437))
* **parser:** add support for SQS-wrapped S3 event notifications ([#2108](https://github.com/aws-powertools/powertools-lambda-python/issues/2108))
* **parser:** export Pydantic.errors through escape hatch ([#1728](https://github.com/aws-powertools/powertools-lambda-python/issues/1728))
* **pep-561:** Create py.typed file and include into pyproject.
* **pypi:** add bumpversion, public release pypi
* **pyproject.toml:** move to poetry
* **runtime:** add support for python 3.10 ([#2137](https://github.com/aws-powertools/powertools-lambda-python/issues/2137))
* **sqs:** add optional config parameter
* **sqs:** improve validation for queue_url
* **streaming:** add new s3 streaming utility ([#1719](https://github.com/aws-powertools/powertools-lambda-python/issues/1719))
* **tracer:** add service annotation when service is set ([#861](https://github.com/aws-powertools/powertools-lambda-python/issues/861))
* **tracer:** ignore tracing for certain hostname(s) or url(s) ([#910](https://github.com/aws-powertools/powertools-lambda-python/issues/910))
* **tracer:** disable tracer when for non-Lambda envs ([#598](https://github.com/aws-powertools/powertools-lambda-python/issues/598))
* **tracer:** support methods with the same name (ABCs) by including fully qualified name in v2 ([#1486](https://github.com/aws-powertools/powertools-lambda-python/issues/1486))
* **tracer:** auto-disable tracer when for AWS SAM and Chalice environments ([#3949](https://github.com/aws-powertools/powertools-lambda-python/issues/3949))
* **trigger:** data class and helper functions for lambda trigger events ([#159](https://github.com/aws-powertools/powertools-lambda-python/issues/159))
* **user-agent:** add custom header User-Agent to AWS SDK requests ([#2267](https://github.com/aws-powertools/powertools-lambda-python/issues/2267))
* **validation:** support JSON Schema referencing in validation utils ([#4508](https://github.com/aws-powertools/powertools-lambda-python/issues/4508))
* **validator:** include missing data elements from a validation error ([#686](https://github.com/aws-powertools/powertools-lambda-python/issues/686))

## Maintenance

* include feature-flags docs hotfix
* public beta version
* bump 0.3.1 with logging patch
* CI badge
* add Python 3.8 in badge as it's supported
* lint
* bump history
* lint
* bump to 1.19.0
* only build docs on docs path
* pypi monthly download badge
* update v2 layer ARN on documentation
* fix github badge typo
* add dummy reusable dispatch analytics job
* clean up CI workflows
* update v2 layer ARN on documentation
* bump example to use 0.8.0 features
* grammar issues
* renamed history to changelog dependabot
* enable autolabel based on PR title
* bump to release candidate
* add Python 3.10 PyPi language classifier ([#2144](https://github.com/aws-powertools/powertools-lambda-python/issues/2144))
* reformat changelog to follow KeepAChangelog standard ([#50](https://github.com/aws-powertools/powertools-lambda-python/issues/50))
* update v2 layer ARN on documentation
* plat wheels are not needed
* formatting
* update v2 layer ARN on documentation
* update v2 layer ARN on documentation
* remove unused import
* Correct test comment
* fix typo in metrics doc
* correct docstring for log_metrics
* rename Makefile target docs-dev to docs-local ([#65](https://github.com/aws-powertools/powertools-lambda-python/issues/65))
* update v2 layer ARN on documentation
* update v2 layer ARN on documentation
* update v2 layer ARN on documentation
* version bump ([#68](https://github.com/aws-powertools/powertools-lambda-python/issues/68))
* version bump 0.10.1
* update CHANGELOG
* move blockquotes as hidden comments
* update v2 layer ARN on documentation
* update v2 layer ARN on documentation
* remove deprecated code before GA ([#78](https://github.com/aws-powertools/powertools-lambda-python/issues/78))
* cleanup tests ([#79](https://github.com/aws-powertools/powertools-lambda-python/issues/79))
* add missing ':' and identation in examples
* update v2 layer ARN on documentation
* bump to 1.0.0 GA ([#83](https://github.com/aws-powertools/powertools-lambda-python/issues/83))
* support aws-xray-sdk >=2.5.0 till <3.0.0 ([#89](https://github.com/aws-powertools/powertools-lambda-python/issues/89))
* bump to 1.0.2 ([#90](https://github.com/aws-powertools/powertools-lambda-python/issues/90))
* bump to 1.1.0 ([#101](https://github.com/aws-powertools/powertools-lambda-python/issues/101))
* trigger docs on new release
* update project description
* update v2 layer ARN on documentation
* trigger docs on new release ([#102](https://github.com/aws-powertools/powertools-lambda-python/issues/102))
* trigger docs on new release ([#102](https://github.com/aws-powertools/powertools-lambda-python/issues/102)) ([#103](https://github.com/aws-powertools/powertools-lambda-python/issues/103))
* fix test level typo
* update v2 layer ARN on documentation
* fix docstring on level [str,int] consistency
* update v2 layer ARN on documentation
* update v2 layer ARN on documentation
* fix unused fixture
* bump patch version
* update Tracer docs as per [#108](https://github.com/aws-powertools/powertools-lambda-python/issues/108)
* update v2 layer ARN on documentation
* update v2 layer ARN on documentation
* remove unused stdout fixture
* update v2 layer ARN on documentation
* add autocomplete as unreleased
* update v2 layer ARN on documentation
* suppress LGTM alert
* bump to 1.1.3
* test build layer hardware to 8 core
* update v2 layer ARN on documentation
* apigw test event wrongly set with base64
* version bump to 1.3.1
* correct typos
* update v2 layer ARN on documentation
* update v2 layer ARN on documentation
* add metrics fix description
* grammar
* fix debug log adding unused obj
* remove/correct unnecessary debug logs
* update v2 layer ARN on documentation
* update v2 layer ARN on documentation
* clarify changelog bugfix vs breaking change
* update v2 layer ARN on documentation
* update changelog to reflect new feature
* update internal docstrings for consistency
* bump to 1.4.0
* doc typo
* update v2 layer ARN on documentation
* merge v2 branch
* tiny changes for readability
* fix typos, docstrings and type hints ([#154](https://github.com/aws-powertools/powertools-lambda-python/issues/154))
* add sqs_batch_processor decorator to simplify interface
* add test for sqs_batch_processor interface
* remove middlewares module, moving decorator functionality to base and sqs
* add debug logging for sqs batch processing
* bump pyproject version to 2.0
* add dummy v2 sar deploy job
* bump 1.18.1
* bump layer version to 38
* fix docstring; import order
* update changelog
* bump 1.18.0 ([#547](https://github.com/aws-powertools/powertools-lambda-python/issues/547))
* remove leftover from fork one more time
* better type hinting
* bump to 1.6.0
* typo
* bump to 1.6.1 ([#177](https://github.com/aws-powertools/powertools-lambda-python/issues/177))
* remove kitchen sink example
* debug full event
* remove dev deps from example project
* print full workflow event depth
* upgrade apollo-docs theme
* upgrade amplify, antd, and gatsby plugins
* print full event depth
* upgrade gatsby
* remove kitchen sink example
* remove dev deps from example project
* Add token to codecov action ([#4682](https://github.com/aws-powertools/powertools-lambda-python/issues/4682))
* upgrade docs dep
* dummy for PR test
* bump to version 1.26.3
* fix make build syntax for internal build whl
* remove test for commented code
* kwarg over arg to ease refactoring
* explicit DynamoDB Stream schema naming
* move to approach B for multiple IaC
* add sam build gitignore
* bump to 1.26.2
* remove flake8 polyfill as explicit dep
* typo on code generation tool
* bump version 1.26.1
* bump to 1.26.0
* include regression in changelog
* typo in list
* spacing
* fix repository URL
* bump dependencies
* bump to 1.25.10
* bump to 1.25.9
* bump to 1.25.8
* bump to 1.25.7
* bump to 1.25.6
* bump to 1.8.0
* bump to 1.25.5
* bump to 1.25.4
* remove duplicate test
* implement phony targets correctly
* comment reason for change
* add changelog
* bump to 1.9.1 ([#252](https://github.com/aws-powertools/powertools-lambda-python/issues/252))
* remove unnecessary test
* hardcode axios transitive resolution ([#256](https://github.com/aws-powertools/powertools-lambda-python/issues/256))
* lint unused import
* general simplifications and cleanup ([#255](https://github.com/aws-powertools/powertools-lambda-python/issues/255))
* update stale bot
* move env names to constant file ([#264](https://github.com/aws-powertools/powertools-lambda-python/issues/264))
* bump to 1.10.0 ([#270](https://github.com/aws-powertools/powertools-lambda-python/issues/270))
* bump to 1.25.3
* bump to 1.10.1 ([#273](https://github.com/aws-powertools/powertools-lambda-python/issues/273))
* typo in parser docs
* fix immer and socket.io CVEs ([#278](https://github.com/aws-powertools/powertools-lambda-python/issues/278))
* bump to 1.10.2 ([#282](https://github.com/aws-powertools/powertools-lambda-python/issues/282))
* bump to 1.10.3 ([#287](https://github.com/aws-powertools/powertools-lambda-python/issues/287))
* add auto-label for known files
* bump to 1.25.2
* bump to 1.25.1
* bump to 1.25.0
* correct docs
* enable PR labeler workflow
* Correct the docs location ([#289](https://github.com/aws-powertools/powertools-lambda-python/issues/289))
* add default runtime key
* version bump to 1.10.4 ([#291](https://github.com/aws-powertools/powertools-lambda-python/issues/291))
* correct docs
* use isinstance over type
* version bump to 1.10.5 ([#292](https://github.com/aws-powertools/powertools-lambda-python/issues/292))
* attempt 1 to fix PR labeler
* update labeler bot to sync upon PR changes
* remove unsuccessful labeler bot
* adjusts Metrics SLA for slow py36 interpreters
* bump to 1.24.2
* bump to 1.24.1
* bump to 1.24.1
* public beta version
* bump to 1.24.0
* bump to 1.23.0
* minor housekeeping before release ([#912](https://github.com/aws-powertools/powertools-lambda-python/issues/912))
* correct pr label order
* update changelog ([#311](https://github.com/aws-powertools/powertools-lambda-python/issues/311))
* bump to 1.22.0
* remove gatsby mention as migrated completed
* add PR auto-label action
* add PR size labelling action
* add PR size labelling action # 2
* conditional to publish docs only attempt 3
* conditional to publish docs only attempt 2
* conditional to publish docs only
* remove Lambda Layer version tag
* fix var expr
* include public layers changelog
* bump to 1.21.1
* include regression in changelog
* increase perf SLA due to slow GitHub Actions machine
* remove auto-label as restrictions prevent it from working
* bump to 1.12.0
* ignore constants in test cov ([#745](https://github.com/aws-powertools/powertools-lambda-python/issues/745))
* ignore constants in tests cov
* correct 3rd party license
* bump to 1.13.0
* include internals in release template
* update automated steps in release process
* make RFC proposal more explicit
* add approved by field in RFC template
* bump to 1.14.0
* bump to 1.15.0 ([#422](https://github.com/aws-powertools/powertools-lambda-python/issues/422))
* bump to 1.15.1
* bump to 1.16.0
* bump to 1.16.1
* add support for publishing fallback
* bump to 1.21.0
* add python 3.9 support
* trial boring cyborg automation
* assited changelog pre-generation, auto-label PR ([#443](https://github.com/aws-powertools/powertools-lambda-python/issues/443))
* enable dependabot for dep upgrades ([#444](https://github.com/aws-powertools/powertools-lambda-python/issues/444))
* enable mergify ([#450](https://github.com/aws-powertools/powertools-lambda-python/issues/450))
* dependabot/mergify guardrail for major versions
* fix dependabot commit messages prefix
* fix dependabot unique set config
* bump mkdocs-material from 7.1.5 to 7.1.6 ([#451](https://github.com/aws-powertools/powertools-lambda-python/issues/451))
* bump boto3 from 1.17.78 to 1.17.84 ([#449](https://github.com/aws-powertools/powertools-lambda-python/issues/449))
* bump xenon from 0.7.1 to 0.7.3 ([#446](https://github.com/aws-powertools/powertools-lambda-python/issues/446))
* bump actions/setup-python from 1 to 2.2.2 ([#445](https://github.com/aws-powertools/powertools-lambda-python/issues/445))
* bump to 1.20.2
* bump to 1.20.1
* markdown linter fixes ([#636](https://github.com/aws-powertools/powertools-lambda-python/issues/636))
* setup codespaces ([#637](https://github.com/aws-powertools/powertools-lambda-python/issues/637))
* update new changelog version tag
* update mergify to require approval on dependabot ([#456](https://github.com/aws-powertools/powertools-lambda-python/issues/456))
* update changelog to reflect out-of-band commits
* fix path for PR auto-labelling
* reintroduce codecov token
* ignore codecov upload
* include dependencies label under maintenance
* fix changelog file redirection
* bump to 1.20.0
* lint
* bump 1.17.1 ([#502](https://github.com/aws-powertools/powertools-lambda-python/issues/502))
* update pypi description, keywords
* **actions:** include new labels
* **analytics:** update docs base origin url ([#2560](https://github.com/aws-powertools/powertools-lambda-python/issues/2560))
* **api-docs:** enable allow_reuse to fix the docs ([#612](https://github.com/aws-powertools/powertools-lambda-python/issues/612))
* **automation:** remove previous labels when PR is updated ([#3066](https://github.com/aws-powertools/powertools-lambda-python/issues/3066))
* **batch:** Housekeeping for recent changes ([#157](https://github.com/aws-powertools/powertools-lambda-python/issues/157))
* **batch:** safeguard custom use of BatchProcessingError exception ([#2155](https://github.com/aws-powertools/powertools-lambda-python/issues/2155))
* **batch:** deprecate sqs_batch_processor ([#1463](https://github.com/aws-powertools/powertools-lambda-python/issues/1463))
* **ci:** introduce tests with Nox ([#4537](https://github.com/aws-powertools/powertools-lambda-python/issues/4537))
* **ci:** add the Metrics feature to nox tests ([#4552](https://github.com/aws-powertools/powertools-lambda-python/issues/4552))
* **ci:** add the Tracer feature to nox tests ([#4567](https://github.com/aws-powertools/powertools-lambda-python/issues/4567))
* **ci:** add the Middleware Factory feature to nox tests ([#4568](https://github.com/aws-powertools/powertools-lambda-python/issues/4568))
* **ci:** add the Parameters feature to nox tests ([#4569](https://github.com/aws-powertools/powertools-lambda-python/issues/4569))
* **ci:** add the Feature Flags feature to nox tests ([#4570](https://github.com/aws-powertools/powertools-lambda-python/issues/4570))
* **ci:** add the Validation feature to nox tests ([#4571](https://github.com/aws-powertools/powertools-lambda-python/issues/4571))
* **ci:** add the Typing feature to nox tests ([#4572](https://github.com/aws-powertools/powertools-lambda-python/issues/4572))
* **ci:** add the Data Masking feature to nox tests ([#4574](https://github.com/aws-powertools/powertools-lambda-python/issues/4574))
* **ci:** split latest docs workflow
* **ci:** add the Streaming feature to nox tests ([#4575](https://github.com/aws-powertools/powertools-lambda-python/issues/4575))
* **ci:** add the Event Handler feature to nox tests ([#4581](https://github.com/aws-powertools/powertools-lambda-python/issues/4581))
* **ci:** add the Data Class feature to nox tests ([#4583](https://github.com/aws-powertools/powertools-lambda-python/issues/4583))
* **ci:** add the Parser feature to nox tests ([#4584](https://github.com/aws-powertools/powertools-lambda-python/issues/4584))
* **ci:** safely label PR based on title
* **ci:** add the Idempotency feature to nox tests ([#4585](https://github.com/aws-powertools/powertools-lambda-python/issues/4585))
* **ci:** update mergify bot breaking change
* **ci:** remove mergify legacy key
* **ci:** add queue name in mergify
* **ci:** fix mergify dependabot queue
* **ci:** run codeql analysis on push only
* **ci:** add the Batch Processor feature to nox tests ([#4586](https://github.com/aws-powertools/powertools-lambda-python/issues/4586))
* **ci:** introduce daily pre-releases ([#4535](https://github.com/aws-powertools/powertools-lambda-python/issues/4535))
* **ci:** new pre-release 2.39.2a0 ([#4590](https://github.com/aws-powertools/powertools-lambda-python/issues/4590))
* **ci:** new pre-release 2.39.2a1 ([#4598](https://github.com/aws-powertools/powertools-lambda-python/issues/4598))
* **ci:** new pre-release 2.39.2a2 ([#4610](https://github.com/aws-powertools/powertools-lambda-python/issues/4610))
* **ci:** new pre-release 2.39.2a3 ([#4620](https://github.com/aws-powertools/powertools-lambda-python/issues/4620))
* **ci:** new pre-release 2.39.2a4 ([#4629](https://github.com/aws-powertools/powertools-lambda-python/issues/4629))
* **ci:** new pre-release 2.39.2a5 ([#4636](https://github.com/aws-powertools/powertools-lambda-python/issues/4636))
* **ci:** new pre-release 2.40.1a0 ([#4648](https://github.com/aws-powertools/powertools-lambda-python/issues/4648))
* **ci:** new pre-release 2.40.1a1 ([#4653](https://github.com/aws-powertools/powertools-lambda-python/issues/4653))
* **ci:** disable mergify configuration after breaking changes ([#1188](https://github.com/aws-powertools/powertools-lambda-python/issues/1188))
* **ci:** post release on tagged issues too
* **ci:** changelog pre-generation to fetch tags from origin
* **ci:** new pre-release 2.40.2a0 ([#4665](https://github.com/aws-powertools/powertools-lambda-python/issues/4665))
* **ci:** new pre-release 2.40.2a1 ([#4669](https://github.com/aws-powertools/powertools-lambda-python/issues/4669))
* **ci:** bump download artifact action to v4 ([#4358](https://github.com/aws-powertools/powertools-lambda-python/issues/4358))
* **ci:** bump upload artifact action to v4 ([#4355](https://github.com/aws-powertools/powertools-lambda-python/issues/4355))
* **ci:** deactivate on_merged_pr workflow
* **ci:** improve wording on closed issues action
* **ci:** reactivate on_merged_pr workflow
* **ci:** new pre-release 2.40.2a2 ([#4679](https://github.com/aws-powertools/powertools-lambda-python/issues/4679))
* **ci:** limits concurrency for docs workflow
* **ci:** fix reference error in related_issue
* **ci:** limits concurrency for docs workflow
* **ci:** fix reference error in related_issue
* **ci:** convert inline gh-script to file
* **ci:** make export PR reusable
* **ci:** move error prone env to code as constants
* **ci:** move all scripts under .github/scripts
* **ci:** auto-merge cdk lib and lambda layer construct
* **ci:** disable output debugging as pr body isnt accepted
* **ci:** add end to end testing mechanism ([#1247](https://github.com/aws-powertools/powertools-lambda-python/issues/1247))
* **ci:** improve error handling for non-issue numbers
* **ci:** experiment with conditional on outputs
* **ci:** automatically add area label based on title ([#1300](https://github.com/aws-powertools/powertools-lambda-python/issues/1300))
* **ci:** lockdown 3rd party workflows to pin sha ([#1301](https://github.com/aws-powertools/powertools-lambda-python/issues/1301))
* **ci:** increase release automation and limit to one manual step ([#1297](https://github.com/aws-powertools/powertools-lambda-python/issues/1297))
* **ci:** update project with version 1.26.4
* **ci:** adds caching when installing python dependencies ([#1311](https://github.com/aws-powertools/powertools-lambda-python/issues/1311))
* **ci:** update project with version 1.26.5
* **ci:** confirm workflow_run event
* **ci:** new pre-release 2.40.2a3 ([#4688](https://github.com/aws-powertools/powertools-lambda-python/issues/4688))
* **ci:** new pre-release 2.40.2a4 ([#4694](https://github.com/aws-powertools/powertools-lambda-python/issues/4694))
* **ci:** experiment hardening origin
* **ci:** experiment hardening origin
* **ci:** test default env
* **ci:** test env expr
* **ci:** test upstream job skip
* **ci:** lockdown workflow_run by origin ([#1350](https://github.com/aws-powertools/powertools-lambda-python/issues/1350))
* **ci:** introduce codeowners ([#1352](https://github.com/aws-powertools/powertools-lambda-python/issues/1352))
* **ci:** use OIDC and encrypt release secrets ([#1355](https://github.com/aws-powertools/powertools-lambda-python/issues/1355))
* **ci:** remove core group from codeowners ([#1358](https://github.com/aws-powertools/powertools-lambda-python/issues/1358))
* **ci:** use gh environment for beta and prod layer deploy ([#1356](https://github.com/aws-powertools/powertools-lambda-python/issues/1356))
* **ci:** update project with version 1.26.6
* **ci:** add conditional to skip pypi release ([#1366](https://github.com/aws-powertools/powertools-lambda-python/issues/1366))
* **ci:** update project with version 1.26.6
* **ci:** update project with version 1.26.6
* **ci:** increase skip_pypi logic to cover tests/changelog on re-run failures
* **ci:** remove leftover logic from on_merged_pr workflow
* **ci:** drop 3.6 from workflows
* **ci:** drop 3.6 from workflows ([#1395](https://github.com/aws-powertools/powertools-lambda-python/issues/1395))
* **ci:** temporarily disable changelog push on release
* **ci:** move changelog generation to rebuild_latest_doc workflow
* **ci:** update project with version
* **ci:** move changelog generation to rebuild_latest_doc workflow
* **ci:** readd changelog step on release
* **ci:** update release automated activities
* **ci:** update changelog with latest changes
* **ci:** update changelog with latest changes
* **ci:** add manual trigger for docs
* **ci:** update changelog with latest changes
* **ci:** update changelog with latest changes
* **ci:** sync area labels to prevent dedup
* **ci:** update changelog with latest changes
* **ci:** update changelog with latest changes
* **ci:** update changelog with latest changes
* **ci:** reduce payload and only send prod notification
* **ci:** remove area/utilities conflicting label
* **ci:** add branch v3 to quality check and e2e actions ([#4232](https://github.com/aws-powertools/powertools-lambda-python/issues/4232))
* **ci:** remove conventional changelog commit to reduce noise
* **ci:** new pre-release 2.40.2a5 ([#4706](https://github.com/aws-powertools/powertools-lambda-python/issues/4706))
* **ci:** temp disable e2e matrix
* **ci:** include py version in stack and cache lock
* **ci:** revert e2e py version matrix
* **ci:** disable e2e py version matrix due to concurrent locking
* **ci:** prevent concurrent git update in critical workflows ([#1478](https://github.com/aws-powertools/powertools-lambda-python/issues/1478))
* **ci:** limit E2E workflow run for source code change
* **ci:** remove unused and undeclared OS matrix env
* **ci:** add missing description fields
* **ci:** fix invalid dependency leftover
* **ci:** remove dangling debug step
* **ci:** add linter for GitHub Actions as pre-commit hook ([#1479](https://github.com/aws-powertools/powertools-lambda-python/issues/1479))
* **ci:** add workflow to suggest splitting large PRs ([#1480](https://github.com/aws-powertools/powertools-lambda-python/issues/1480))
* **ci:** enable ci checks for v2
* **ci:** record pr details upon labeling
* **ci:** destructure assignment on comment_large_pr
* **ci:** add note for state persistence on comment_large_pr
* **ci:** format comment  on comment_large_pr script
* **ci:** create reusable docs publishing workflow ([#1482](https://github.com/aws-powertools/powertools-lambda-python/issues/1482))
* **ci:** create docs workflow for v2
* **ci:** create adhoc docs workflow for v2
* **ci:** create adhoc docs workflow for v2
* **ci:** sync package version with pypi
* **ci:** disable v2 docs
* **ci:** new pre-release 2.40.2a6 ([#4715](https://github.com/aws-powertools/powertools-lambda-python/issues/4715))
* **ci:** migrate E2E tests to CDK CLI and off Docker ([#1501](https://github.com/aws-powertools/powertools-lambda-python/issues/1501))
* **ci:** new pre-release 2.40.2a7 ([#4726](https://github.com/aws-powertools/powertools-lambda-python/issues/4726))
* **ci:** new pre-release 2.40.2a8 ([#4737](https://github.com/aws-powertools/powertools-lambda-python/issues/4737))
* **ci:** make release process manual
* **ci:** fix typo on version description
* **ci:** new pre-release 2.41.1a0 ([#4749](https://github.com/aws-powertools/powertools-lambda-python/issues/4749))
* **ci:** limit to src only to prevent dependabot failures
* **ci:** use new custom hw for E2E
* **ci:** prevent dependabot updates to trigger E2E
* **ci:** revert custom hw for E2E due to lack of hw
* **ci:** new pre-release 2.41.1a1 ([#4756](https://github.com/aws-powertools/powertools-lambda-python/issues/4756))
* **ci:** uncomment test pypi, fix version bump sync
* **ci:** try bigger hardware for e2e test
* **ci:** bump hardware for build steps
* **ci:** new pre-release 2.41.1a2 ([#4758](https://github.com/aws-powertools/powertools-lambda-python/issues/4758))
* **ci:** new pre-release 2.41.1a3 ([#4766](https://github.com/aws-powertools/powertools-lambda-python/issues/4766))
* **ci:** new pre-release 2.41.1a4 ([#4772](https://github.com/aws-powertools/powertools-lambda-python/issues/4772))
* **ci:** attempt gh-pages deployment via beta route
* **ci:** increase permission in parent job for docs publishing
* **ci:** re-create versioned API docs for new pages deployment
* **ci:** re-create versioned API docs for new pages deployment
* **ci:** new pre-release 2.41.1a5 ([#4777](https://github.com/aws-powertools/powertools-lambda-python/issues/4777))
* **ci:** new pre-release 2.41.1a6 ([#4783](https://github.com/aws-powertools/powertools-lambda-python/issues/4783))
* **ci:** new pre-release 2.41.1a7 ([#4792](https://github.com/aws-powertools/powertools-lambda-python/issues/4792))
* **ci:** replace deprecated set-output commands ([#1957](https://github.com/aws-powertools/powertools-lambda-python/issues/1957))
* **ci:** disable pypi test due to maintenance mode
* **ci:** new pre-release 2.41.1a8 ([#4802](https://github.com/aws-powertools/powertools-lambda-python/issues/4802))
* **ci:** allow dependabot to upgrade CDK for JS
* **ci:** new pre-release 2.41.1a9 ([#4808](https://github.com/aws-powertools/powertools-lambda-python/issues/4808))
* **ci:** add monthly roadmap reminder workflow ([#4075](https://github.com/aws-powertools/powertools-lambda-python/issues/4075))
* **ci:** bump the cdk-aws-lambda-powertools-layer version ([#2121](https://github.com/aws-powertools/powertools-lambda-python/issues/2121))
* **ci:** add support for x86-64 regions only ([#2122](https://github.com/aws-powertools/powertools-lambda-python/issues/2122))
* **ci:** new pre-release 2.42.1a0 ([#4827](https://github.com/aws-powertools/powertools-lambda-python/issues/4827))
* **ci:** new pre-release 2.42.1a1 ([#4837](https://github.com/aws-powertools/powertools-lambda-python/issues/4837))
* **ci:** new pre-release 2.42.1a2 ([#4847](https://github.com/aws-powertools/powertools-lambda-python/issues/4847))
* **ci:** prevent deprecated custom runner from being used ([#4061](https://github.com/aws-powertools/powertools-lambda-python/issues/4061))
* **ci:** new pre-release 2.42.1a3 ([#4856](https://github.com/aws-powertools/powertools-lambda-python/issues/4856))
* **ci:** new pre-release 2.42.1a4 ([#4864](https://github.com/aws-powertools/powertools-lambda-python/issues/4864))
* **ci:** use new pypi trusted publisher for increase security ([#2198](https://github.com/aws-powertools/powertools-lambda-python/issues/2198))
* **ci:** remove build step from release env; no more secrets need
* **ci:** enforce zero trust for third party workflows ([#2215](https://github.com/aws-powertools/powertools-lambda-python/issues/2215))
* **ci:** remove auto-merge workflow ([#2214](https://github.com/aws-powertools/powertools-lambda-python/issues/2214))
* **ci:** schedule changelog to rebuild daily at 8am, and on release only ([#2216](https://github.com/aws-powertools/powertools-lambda-python/issues/2216))
* **ci:** create pull request on changelog update ([#2224](https://github.com/aws-powertools/powertools-lambda-python/issues/2224))
* **ci:** skip analytics on forks ([#2225](https://github.com/aws-powertools/powertools-lambda-python/issues/2225))
* **ci:** convert create-pr steps into composite action ([#2238](https://github.com/aws-powertools/powertools-lambda-python/issues/2238))
* **ci:** bump package version after release via pull request ([#2239](https://github.com/aws-powertools/powertools-lambda-python/issues/2239))
* **ci:** update layer ARN docs and create PR during release ([#2240](https://github.com/aws-powertools/powertools-lambda-python/issues/2240))
* **ci:** fail create-pr when branch cannot be created or behind tip
* **ci:** filter out bot commits from CHANGELOG
* **ci:** add more permissions to analytics
* **ci:** source code tampering protection for release ([#2301](https://github.com/aws-powertools/powertools-lambda-python/issues/2301))
* **ci:** document all github action workflows and enforce least-privilege ([#2395](https://github.com/aws-powertools/powertools-lambda-python/issues/2395))
* **ci:** fix PR labeling permission scope ([#2396](https://github.com/aws-powertools/powertools-lambda-python/issues/2396))
* **ci:** remove GH pages action ([#2501](https://github.com/aws-powertools/powertools-lambda-python/issues/2501))
* **ci:** updates runner names in workflows ([#2510](https://github.com/aws-powertools/powertools-lambda-python/issues/2510))
* **ci:** introduces OSSF Scorecard ([#2512](https://github.com/aws-powertools/powertools-lambda-python/issues/2512))
* **ci:** fix codeowners team name ([#2516](https://github.com/aws-powertools/powertools-lambda-python/issues/2516))
* **ci:** fix changelog build permissions ([#2519](https://github.com/aws-powertools/powertools-lambda-python/issues/2519))
* **ci:** new pre-release 2.42.1a5 ([#4868](https://github.com/aws-powertools/powertools-lambda-python/issues/4868))
* **ci:** replace flake8 with Ruff as a linter ([#2495](https://github.com/aws-powertools/powertools-lambda-python/issues/2495))
* **ci:** enable Ruff rule E501 and fix errors ([#2587](https://github.com/aws-powertools/powertools-lambda-python/issues/2587))
* **ci:** enable Ruff rule ERA001 and fix errors ([#2591](https://github.com/aws-powertools/powertools-lambda-python/issues/2591))
* **ci:** enable Ruff rules PLW, PLR, PLC and PLE and fix the errors ([#2593](https://github.com/aws-powertools/powertools-lambda-python/issues/2593))
* **ci:** enable Ruff rule COM812 and fix the errors ([#2595](https://github.com/aws-powertools/powertools-lambda-python/issues/2595))
* **ci:** enable Ruff rules ISC, I001, B018 and fix the errors ([#2597](https://github.com/aws-powertools/powertools-lambda-python/issues/2597))
* **ci:** enable Ruff autofix rules ([#2599](https://github.com/aws-powertools/powertools-lambda-python/issues/2599))
* **ci:** prevent merging PRs that do not meet minimum requirements ([#2639](https://github.com/aws-powertools/powertools-lambda-python/issues/2639))
* **ci:** enforce top-level permission to minimum fail-safe permission as per openssf ([#2638](https://github.com/aws-powertools/powertools-lambda-python/issues/2638))
* **ci:** propagate checkout permission to nested workflows ([#2642](https://github.com/aws-powertools/powertools-lambda-python/issues/2642))
* **ci:** improves dependabot based on ossf scorecard recommendations ([#2647](https://github.com/aws-powertools/powertools-lambda-python/issues/2647))
* **ci:** use deps sha for docs and gitpod images based on ossf findings ([#2662](https://github.com/aws-powertools/powertools-lambda-python/issues/2662))
* **ci:** use sast on every commit on any supported language ([#2646](https://github.com/aws-powertools/powertools-lambda-python/issues/2646))
* **ci:** add gitleaks in pre-commit hooks as an extra safety measure ([#2677](https://github.com/aws-powertools/powertools-lambda-python/issues/2677))
* **ci:** enforce pip --require-hashes to maybe satistify scorecard ([#2679](https://github.com/aws-powertools/powertools-lambda-python/issues/2679))
* **ci:** address ossf scorecard findings on npm, pip, and top-level permission leftover ([#2694](https://github.com/aws-powertools/powertools-lambda-python/issues/2694))
* **ci:** prevent sast codeql to run in forks ([#2711](https://github.com/aws-powertools/powertools-lambda-python/issues/2711))
* **ci:** introduce provenance and attestation in release ([#2746](https://github.com/aws-powertools/powertools-lambda-python/issues/2746))
* **ci:** build changelog on a schedule only ([#2832](https://github.com/aws-powertools/powertools-lambda-python/issues/2832))
* **ci:** add baking time for layer build ([#2834](https://github.com/aws-powertools/powertools-lambda-python/issues/2834))
* **ci:** group dependabot updates ([#2896](https://github.com/aws-powertools/powertools-lambda-python/issues/2896))
* **ci:** enable protected branch auditing ([#2913](https://github.com/aws-powertools/powertools-lambda-python/issues/2913))
* **ci:** remove aws-encryption-sdk from Lambda layer due to cffi being tied to python version ([#3853](https://github.com/aws-powertools/powertools-lambda-python/issues/3853))
* **ci:** enable Redis e2e tests ([#3718](https://github.com/aws-powertools/powertools-lambda-python/issues/3718))
* **ci:** drop support for Python 3.7 ([#3638](https://github.com/aws-powertools/powertools-lambda-python/issues/3638))
* **ci:** lint and type checking removal in Pydantic v2 quality check ([#3360](https://github.com/aws-powertools/powertools-lambda-python/issues/3360))
* **ci:** Disable Redis e2e until we drop Python 3.7 ([#3652](https://github.com/aws-powertools/powertools-lambda-python/issues/3652))
* **ci:** update boto3 library version to 1.26.164+ ([#3632](https://github.com/aws-powertools/powertools-lambda-python/issues/3632))
* **ci:** Remove dev dependencies locked to Pydantic v1 within the Pydantic v2 workflow. ([#3582](https://github.com/aws-powertools/powertools-lambda-python/issues/3582))
* **ci:** remove v1 workflows ([#1617](https://github.com/aws-powertools/powertools-lambda-python/issues/1617))
* **common:** reusable function to extract event from models
* **core:** expose modules in the Top-level package ([#1517](https://github.com/aws-powertools/powertools-lambda-python/issues/1517))
* **dep:** bump pyproject to pypi sync
* **dep:** add cfn-lint as a dev dependency; pre-commit ([#1612](https://github.com/aws-powertools/powertools-lambda-python/issues/1612))
* **deps:** bump actions/setup-node from 3.6.0 to 3.7.0 ([#2689](https://github.com/aws-powertools/powertools-lambda-python/issues/2689))
* **deps:** bump pypa/gh-action-pypi-publish from 1.8.14 to 1.9.0 ([#4592](https://github.com/aws-powertools/powertools-lambda-python/issues/4592))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 3 updates ([#4580](https://github.com/aws-powertools/powertools-lambda-python/issues/4580))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 3 updates ([#4565](https://github.com/aws-powertools/powertools-lambda-python/issues/4565))
* **deps:** bump fastjsonschema from 2.19.1 to 2.20.0 ([#4543](https://github.com/aws-powertools/powertools-lambda-python/issues/4543))
* **deps:** bump squidfunk/mkdocs-material from `96abcbb` to `257eca8` in /docs ([#4540](https://github.com/aws-powertools/powertools-lambda-python/issues/4540))
* **deps:** bump zgosalvez/github-actions-ensure-sha-pinned-actions from 3.0.7 to 3.0.9 ([#4539](https://github.com/aws-powertools/powertools-lambda-python/issues/4539))
* **deps:** bump pypa/gh-action-pypi-publish from 1.8.14 to 1.9.0 ([#4538](https://github.com/aws-powertools/powertools-lambda-python/issues/4538))
* **deps:** bump fastjsonschema from 2.19.0 to 2.19.1 ([#3567](https://github.com/aws-powertools/powertools-lambda-python/issues/3567))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 3 updates ([#4546](https://github.com/aws-powertools/powertools-lambda-python/issues/4546))
* **deps:** bump redis from 5.0.5 to 5.0.6 ([#4527](https://github.com/aws-powertools/powertools-lambda-python/issues/4527))
* **deps:** bump codecov/codecov-action from 4.4.1 to 4.5.0 ([#4514](https://github.com/aws-powertools/powertools-lambda-python/issues/4514))
* **deps:** bump actions/checkout from 4.1.6 to 4.1.7 ([#4493](https://github.com/aws-powertools/powertools-lambda-python/issues/4493))
* **deps:** bump boto3 from 1.17.84 to 1.17.85 ([#455](https://github.com/aws-powertools/powertools-lambda-python/issues/455))
* **deps:** bump boto3 from 1.17.85 to 1.17.86 ([#458](https://github.com/aws-powertools/powertools-lambda-python/issues/458))
* **deps:** bump boto3 from 1.17.86 to 1.17.87 ([#459](https://github.com/aws-powertools/powertools-lambda-python/issues/459))
* **deps:** bump boto3 from 1.17.87 to 1.17.88 ([#463](https://github.com/aws-powertools/powertools-lambda-python/issues/463))
* **deps:** bump squidfunk/mkdocs-material from `876b39c` to `9af3b7e` in /docs ([#3486](https://github.com/aws-powertools/powertools-lambda-python/issues/3486))
* **deps:** bump actions/dependency-review-action from 3.1.4 to 3.1.5 ([#3592](https://github.com/aws-powertools/powertools-lambda-python/issues/3592))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 4 updates ([#3593](https://github.com/aws-powertools/powertools-lambda-python/issues/3593))
* **deps:** bump boto3 from 1.17.88 to 1.17.89 ([#466](https://github.com/aws-powertools/powertools-lambda-python/issues/466))
* **deps:** bump datadog-lambda from 6.95.0 to 6.96.0 ([#4489](https://github.com/aws-powertools/powertools-lambda-python/issues/4489))
* **deps:** bump pydantic from 1.10.15 to 1.10.16 ([#4485](https://github.com/aws-powertools/powertools-lambda-python/issues/4485))
* **deps:** bump squidfunk/mkdocs-material from `20241c6` to `876b39c` in /docs ([#3477](https://github.com/aws-powertools/powertools-lambda-python/issues/3477))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 2 updates ([#3476](https://github.com/aws-powertools/powertools-lambda-python/issues/3476))
* **deps:** bump gitpython from 3.1.37 to 3.1.41 in /docs ([#3610](https://github.com/aws-powertools/powertools-lambda-python/issues/3610))
* **deps:** bump squidfunk/mkdocs-material from `8c72011` to `20241c6` in /docs ([#3470](https://github.com/aws-powertools/powertools-lambda-python/issues/3470))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 3 updates ([#3469](https://github.com/aws-powertools/powertools-lambda-python/issues/3469))
* **deps:** bump actions/setup-python from 4.8.0 to 5.0.0 ([#3465](https://github.com/aws-powertools/powertools-lambda-python/issues/3465))
* **deps:** bump boto3 from 1.17.89 to 1.17.91 ([#473](https://github.com/aws-powertools/powertools-lambda-python/issues/473))
* **deps:** bump datadog-lambda from 5.84.0 to 5.85.0 ([#3466](https://github.com/aws-powertools/powertools-lambda-python/issues/3466))
* **deps:** bump email-validator from 1.1.2 to 1.1.3 ([#478](https://github.com/aws-powertools/powertools-lambda-python/issues/478))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 2 updates ([#3467](https://github.com/aws-powertools/powertools-lambda-python/issues/3467))
* **deps:** bump redis from 4.6.0 to 5.0.1 ([#3613](https://github.com/aws-powertools/powertools-lambda-python/issues/3613))
* **deps:** bump boto3 from 1.17.91 to 1.17.101 ([#490](https://github.com/aws-powertools/powertools-lambda-python/issues/490))
* **deps:** bump boto3 from 1.17.101 to 1.17.102 ([#493](https://github.com/aws-powertools/powertools-lambda-python/issues/493))
* **deps:** bump boto3 from 1.17.102 to 1.17.110 ([#523](https://github.com/aws-powertools/powertools-lambda-python/issues/523))
* **deps:** bump boto3 from 1.17.110 to 1.18.0 ([#527](https://github.com/aws-powertools/powertools-lambda-python/issues/527))
* **deps:** bump actions/setup-python from 4.7.1 to 4.8.0 ([#3456](https://github.com/aws-powertools/powertools-lambda-python/issues/3456))
* **deps:** bump boto3 from 1.18.0 to 1.18.1 ([#528](https://github.com/aws-powertools/powertools-lambda-python/issues/528))
* **deps:** bump jinja2 from 3.1.2 to 3.1.3 in /docs ([#3620](https://github.com/aws-powertools/powertools-lambda-python/issues/3620))
* **deps:** bump zgosalvez/github-actions-ensure-sha-pinned-actions from 3.0.1 to 3.0.2 ([#3449](https://github.com/aws-powertools/powertools-lambda-python/issues/3449))
* **deps:** bump datadog-lambda from 5.83.0 to 5.84.0 ([#3438](https://github.com/aws-powertools/powertools-lambda-python/issues/3438))
* **deps:** bump cryptography from 41.0.4 to 41.0.6 ([#3431](https://github.com/aws-powertools/powertools-lambda-python/issues/3431))
* **deps:** bump codecov/codecov-action from 1 to 2.0.1 ([#539](https://github.com/aws-powertools/powertools-lambda-python/issues/539))
* **deps:** bump zgosalvez/github-actions-ensure-sha-pinned-actions from 3.0.6 to 3.0.7 ([#4478](https://github.com/aws-powertools/powertools-lambda-python/issues/4478))
* **deps:** bump codecov/codecov-action from 2.0.1 to 2.0.2 ([#558](https://github.com/aws-powertools/powertools-lambda-python/issues/558))
* **deps:** bump pypa/gh-action-pypi-publish from 1.8.10 to 1.8.11 ([#3433](https://github.com/aws-powertools/powertools-lambda-python/issues/3433))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 3 updates ([#3441](https://github.com/aws-powertools/powertools-lambda-python/issues/3441))
* **deps:** bump boto3 from 1.18.1 to 1.18.15 ([#591](https://github.com/aws-powertools/powertools-lambda-python/issues/591))
* **deps:** bump actions/dependency-review-action from 3.1.3 to 3.1.4 ([#3426](https://github.com/aws-powertools/powertools-lambda-python/issues/3426))
* **deps:** bump boto3 from 1.18.15 to 1.18.17 ([#597](https://github.com/aws-powertools/powertools-lambda-python/issues/597))
* **deps:** bump squidfunk/mkdocs-material from `fc42bac` to `8c72011` in /docs ([#3416](https://github.com/aws-powertools/powertools-lambda-python/issues/3416))
* **deps:** bump typing-extensions from 4.12.1 to 4.12.2 ([#4470](https://github.com/aws-powertools/powertools-lambda-python/issues/4470))
* **deps:** bump datadog-lambda from 5.94.0 to 6.95.0 ([#4471](https://github.com/aws-powertools/powertools-lambda-python/issues/4471))
* **deps:** bump boto3 from 1.18.17 to 1.18.21 ([#608](https://github.com/aws-powertools/powertools-lambda-python/issues/608))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 3 updates ([#4468](https://github.com/aws-powertools/powertools-lambda-python/issues/4468))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 2 updates ([#4635](https://github.com/aws-powertools/powertools-lambda-python/issues/4635))
* **deps:** bump squidfunk/mkdocs-material from `2f29d71` to `58eef6c` in /docs ([#3633](https://github.com/aws-powertools/powertools-lambda-python/issues/3633))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 1 update ([#3639](https://github.com/aws-powertools/powertools-lambda-python/issues/3639))
* **deps:** bump boto3 from 1.18.21 to 1.18.22 ([#614](https://github.com/aws-powertools/powertools-lambda-python/issues/614))
* **deps:** bump boto3 from 1.18.22 to 1.18.24 ([#619](https://github.com/aws-powertools/powertools-lambda-python/issues/619))
* **deps:** bump datadog-lambda from 4.82.0 to 5.83.0 ([#3401](https://github.com/aws-powertools/powertools-lambda-python/issues/3401))
* **deps:** bump boto3 from 1.18.24 to 1.18.25 ([#623](https://github.com/aws-powertools/powertools-lambda-python/issues/623))
* **deps:** bump boto3 from 1.18.25 to 1.18.26 ([#627](https://github.com/aws-powertools/powertools-lambda-python/issues/627))
* **deps:** bump redis from 5.0.4 to 5.0.5 ([#4464](https://github.com/aws-powertools/powertools-lambda-python/issues/4464))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 1 update ([#3649](https://github.com/aws-powertools/powertools-lambda-python/issues/3649))
* **deps:** bump ini from 1.3.5 to 1.3.8 in /docs
* **deps:** bump pydantic from 1.10.13 to 1.10.14 ([#3655](https://github.com/aws-powertools/powertools-lambda-python/issues/3655))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 3 updates ([#3389](https://github.com/aws-powertools/powertools-lambda-python/issues/3389))
* **deps:** bump squidfunk/mkdocs-material from `8a87f05` to `96abcbb` in /docs ([#4461](https://github.com/aws-powertools/powertools-lambda-python/issues/4461))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 1 update ([#3374](https://github.com/aws-powertools/powertools-lambda-python/issues/3374))
* **deps:** bump actions/github-script from 7.0.0 to 7.0.1 ([#3377](https://github.com/aws-powertools/powertools-lambda-python/issues/3377))
* **deps:** bump boto3 from 1.18.26 to 1.18.32 ([#663](https://github.com/aws-powertools/powertools-lambda-python/issues/663))
* **deps:** bump squidfunk/mkdocs-material from `2c57e4d` to `fc42bac` in /docs ([#3375](https://github.com/aws-powertools/powertools-lambda-python/issues/3375))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 1 update ([#3665](https://github.com/aws-powertools/powertools-lambda-python/issues/3665))
* **deps:** bump boto3 from 1.18.32 to 1.18.38 ([#671](https://github.com/aws-powertools/powertools-lambda-python/issues/671))
* **deps:** bump boto3 from 1.18.38 to 1.18.41 ([#677](https://github.com/aws-powertools/powertools-lambda-python/issues/677))
* **deps:** bump actions/dependency-review-action from 4.3.2 to 4.3.3 ([#4456](https://github.com/aws-powertools/powertools-lambda-python/issues/4456))
* **deps:** bump codecov/codecov-action from 2.0.2 to 2.1.0 ([#675](https://github.com/aws-powertools/powertools-lambda-python/issues/675))
* **deps:** bump squidfunk/mkdocs-material from `58eef6c` to `9aad7af` in /docs ([#3670](https://github.com/aws-powertools/powertools-lambda-python/issues/3670))
* **deps:** bump squidfunk/mkdocs-material from `f486dc9` to `2c57e4d` in /docs ([#3366](https://github.com/aws-powertools/powertools-lambda-python/issues/3366))
* **deps:** bump boto3 from 1.18.41 to 1.18.49 ([#703](https://github.com/aws-powertools/powertools-lambda-python/issues/703))
* **deps:** bump boto3 from 1.18.49 to 1.18.51 ([#713](https://github.com/aws-powertools/powertools-lambda-python/issues/713))
* **deps:** bump boto3 from 1.18.51 to 1.18.54 ([#733](https://github.com/aws-powertools/powertools-lambda-python/issues/733))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 2 updates ([#3353](https://github.com/aws-powertools/powertools-lambda-python/issues/3353))
* **deps:** bump codecov/codecov-action from 3.1.4 to 3.1.5 ([#3674](https://github.com/aws-powertools/powertools-lambda-python/issues/3674))
* **deps:** bump squidfunk/mkdocs-material from `9aad7af` to `a4a2029` in /docs ([#3679](https://github.com/aws-powertools/powertools-lambda-python/issues/3679))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 3 updates ([#3345](https://github.com/aws-powertools/powertools-lambda-python/issues/3345))
* **deps:** bump aws-xray-sdk from 2.13.1 to 2.14.0 ([#4453](https://github.com/aws-powertools/powertools-lambda-python/issues/4453))
* **deps:** bump boto3 from 1.18.54 to 1.18.56 ([#742](https://github.com/aws-powertools/powertools-lambda-python/issues/742))
* **deps:** bump datadog-lambda from 4.81.0 to 4.82.0 ([#3338](https://github.com/aws-powertools/powertools-lambda-python/issues/3338))
* **deps:** bump zgosalvez/github-actions-ensure-sha-pinned-actions from 3.0.5 to 3.0.6 ([#4445](https://github.com/aws-powertools/powertools-lambda-python/issues/4445))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 2 updates ([#3340](https://github.com/aws-powertools/powertools-lambda-python/issues/3340))
* **deps:** bump fastjsonschema from 2.18.1 to 2.19.0 ([#3337](https://github.com/aws-powertools/powertools-lambda-python/issues/3337))
* **deps:** bump boto3 from 1.18.56 to 1.18.58 ([#755](https://github.com/aws-powertools/powertools-lambda-python/issues/755))
* **deps:** bump codecov/codecov-action from 3.1.5 to 3.1.6 ([#3683](https://github.com/aws-powertools/powertools-lambda-python/issues/3683))
* **deps:** bump boto3 from 1.18.58 to 1.18.59 ([#760](https://github.com/aws-powertools/powertools-lambda-python/issues/760))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 3 updates ([#4444](https://github.com/aws-powertools/powertools-lambda-python/issues/4444))
* **deps:** bump actions/github-script from 6.4.1 to 7.0.0 ([#3330](https://github.com/aws-powertools/powertools-lambda-python/issues/3330))
* **deps:** bump typing-extensions from 4.12.0 to 4.12.1 ([#4440](https://github.com/aws-powertools/powertools-lambda-python/issues/4440))
* **deps:** bump boto3 from 1.18.59 to 1.18.61 ([#766](https://github.com/aws-powertools/powertools-lambda-python/issues/766))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 1 update ([#3329](https://github.com/aws-powertools/powertools-lambda-python/issues/3329))
* **deps:** bump actions/dependency-review-action from 3.1.2 to 3.1.3 ([#3331](https://github.com/aws-powertools/powertools-lambda-python/issues/3331))
* **deps:** bump boto3 from 1.18.61 to 1.19.6 ([#783](https://github.com/aws-powertools/powertools-lambda-python/issues/783))
* **deps:** bump urllib3 from 1.26.4 to 1.26.5 ([#787](https://github.com/aws-powertools/powertools-lambda-python/issues/787))
* **deps:** bump boto3 from 1.19.6 to 1.20.3 ([#809](https://github.com/aws-powertools/powertools-lambda-python/issues/809))
* **deps:** bump boto3 from 1.20.3 to 1.20.5 ([#817](https://github.com/aws-powertools/powertools-lambda-python/issues/817))
* **deps:** bump actions/setup-python from 2.2.2 to 2.3.0 ([#831](https://github.com/aws-powertools/powertools-lambda-python/issues/831))
* **deps:** bump actions/setup-python from 2.3.0 to 2.3.1 ([#852](https://github.com/aws-powertools/powertools-lambda-python/issues/852))
* **deps:** support arm64 when developing locally ([#862](https://github.com/aws-powertools/powertools-lambda-python/issues/862))
* **deps:** bump aws-xray-sdk from 2.8.0 to 2.9.0 ([#876](https://github.com/aws-powertools/powertools-lambda-python/issues/876))
* **deps:** bump fastjsonschema from 2.15.1 to 2.15.2 ([#891](https://github.com/aws-powertools/powertools-lambda-python/issues/891))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 3 updates ([#3313](https://github.com/aws-powertools/powertools-lambda-python/issues/3313))
* **deps:** bump squidfunk/mkdocs-material from `5358893` to `8a87f05` in /docs ([#4408](https://github.com/aws-powertools/powertools-lambda-python/issues/4408))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 1 update ([#3310](https://github.com/aws-powertools/powertools-lambda-python/issues/3310))
* **deps:** bump actions/dependency-review-action from 3.1.1 to 3.1.2 ([#3308](https://github.com/aws-powertools/powertools-lambda-python/issues/3308))
* **deps:** bump typing-extensions from 4.11.0 to 4.12.0 ([#4404](https://github.com/aws-powertools/powertools-lambda-python/issues/4404))
* **deps:** bump fastjsonschema from 2.15.2 to 2.15.3 ([#949](https://github.com/aws-powertools/powertools-lambda-python/issues/949))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 1 update ([#3305](https://github.com/aws-powertools/powertools-lambda-python/issues/3305))
* **deps:** bump actions/dependency-review-action from 3.1.5 to 4.0.0 ([#3646](https://github.com/aws-powertools/powertools-lambda-python/issues/3646))
* **deps:** bump actions/dependency-review-action from 3.1.0 to 3.1.1 ([#3301](https://github.com/aws-powertools/powertools-lambda-python/issues/3301))
* **deps:** bump zgosalvez/github-actions-ensure-sha-pinned-actions from 3.0.0 to 3.0.1 ([#3300](https://github.com/aws-powertools/powertools-lambda-python/issues/3300))
* **deps:** bump squidfunk/mkdocs-material from `772e14e` to `f486dc9` in /docs ([#3299](https://github.com/aws-powertools/powertools-lambda-python/issues/3299))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 2 updates ([#3298](https://github.com/aws-powertools/powertools-lambda-python/issues/3298))
* **deps:** bump actions/github-script from 5 to 6 ([#1023](https://github.com/aws-powertools/powertools-lambda-python/issues/1023))
* **deps:** bump release-drafter/release-drafter from 5.25.0 to 6.0.0 ([#3699](https://github.com/aws-powertools/powertools-lambda-python/issues/3699))
* **deps:** bump squidfunk/mkdocs-material from `a4a2029` to `e0d6c67` in /docs ([#3708](https://github.com/aws-powertools/powertools-lambda-python/issues/3708))
* **deps:** bump actions/checkout from 2 to 3 ([#1052](https://github.com/aws-powertools/powertools-lambda-python/issues/1052))
* **deps:** bump actions/setup-python from 2.3.1 to 3 ([#1048](https://github.com/aws-powertools/powertools-lambda-python/issues/1048))
* **deps:** bump zgosalvez/github-actions-ensure-sha-pinned-actions from 2.1.5 to 3.0.0 ([#3289](https://github.com/aws-powertools/powertools-lambda-python/issues/3289))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 2 updates ([#4396](https://github.com/aws-powertools/powertools-lambda-python/issues/4396))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 1 update ([#3287](https://github.com/aws-powertools/powertools-lambda-python/issues/3287))
* **deps:** bump aws-encryption-sdk from 3.2.0 to 3.3.0 ([#4393](https://github.com/aws-powertools/powertools-lambda-python/issues/4393))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 3 updates ([#3282](https://github.com/aws-powertools/powertools-lambda-python/issues/3282))
* **deps:** bump zgosalvez/github-actions-ensure-sha-pinned-actions from 2.1.4 to 2.1.5 ([#3281](https://github.com/aws-powertools/powertools-lambda-python/issues/3281))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 3 updates ([#4659](https://github.com/aws-powertools/powertools-lambda-python/issues/4659))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 3 updates ([#3278](https://github.com/aws-powertools/powertools-lambda-python/issues/3278))
* **deps:** bump zgosalvez/github-actions-ensure-sha-pinned-actions from 3.0.9 to 3.0.10 ([#4678](https://github.com/aws-powertools/powertools-lambda-python/issues/4678))
* **deps:** bump codecov/codecov-action from 3.1.6 to 4.0.1 ([#3700](https://github.com/aws-powertools/powertools-lambda-python/issues/3700))
* **deps:** bump actions/upload-artifact from 2 to 3 ([#1103](https://github.com/aws-powertools/powertools-lambda-python/issues/1103))
* **deps:** bump codecov/codecov-action from 2.1.0 to 3.0.0 ([#1102](https://github.com/aws-powertools/powertools-lambda-python/issues/1102))
* **deps:** bump actions/download-artifact from 3.0.2 to 4.1.1 ([#3612](https://github.com/aws-powertools/powertools-lambda-python/issues/3612))
* **deps:** bump codecov/codecov-action from 4.4.0 to 4.4.1 ([#4376](https://github.com/aws-powertools/powertools-lambda-python/issues/4376))
* **deps:** bump codecov/codecov-action from 3.0.0 to 3.1.0 ([#1143](https://github.com/aws-powertools/powertools-lambda-python/issues/1143))
* **deps:** bump squidfunk/mkdocs-material from `df9409b` to `772e14e` in /docs ([#3265](https://github.com/aws-powertools/powertools-lambda-python/issues/3265))
* **deps:** bump aws-xray-sdk from 2.13.0 to 2.13.1 ([#4379](https://github.com/aws-powertools/powertools-lambda-python/issues/4379))
* **deps:** bump requests from 2.31.0 to 2.32.0 ([#4383](https://github.com/aws-powertools/powertools-lambda-python/issues/4383))
* **deps:** bump github/codeql-action from 1 to 2 ([#1154](https://github.com/aws-powertools/powertools-lambda-python/issues/1154))
* **deps:** bump squidfunk/mkdocs-material from `48d1914` to `5358893` in /docs ([#4377](https://github.com/aws-powertools/powertools-lambda-python/issues/4377))
* **deps:** bump email-validator from 1.1.3 to 1.2.1 ([#1199](https://github.com/aws-powertools/powertools-lambda-python/issues/1199))
* **deps:** bump actions/upload-artifact from 3.1.3 to 4.3.1 ([#3714](https://github.com/aws-powertools/powertools-lambda-python/issues/3714))
* **deps:** bump actions/setup-node from 3.8.1 to 4.0.0 ([#3244](https://github.com/aws-powertools/powertools-lambda-python/issues/3244))
* **deps:** bump pydantic from 1.9.0 to 1.9.1 ([#1221](https://github.com/aws-powertools/powertools-lambda-python/issues/1221))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 2 updates ([#3248](https://github.com/aws-powertools/powertools-lambda-python/issues/3248))
* **deps:** bump github.com/aws/aws-sdk-go-v2/config from 1.27.23 to 1.27.24 in /layer/scripts/layer-balancer in the layer-balancer group ([#4684](https://github.com/aws-powertools/powertools-lambda-python/issues/4684))
* **deps:** bump docker/setup-qemu-action from 3.0.0 to 3.1.0 ([#4685](https://github.com/aws-powertools/powertools-lambda-python/issues/4685))
* **deps:** bump ossf/scorecard-action from 2.3.0 to 2.3.1 ([#3245](https://github.com/aws-powertools/powertools-lambda-python/issues/3245))
* **deps:** bump docker/setup-buildx-action from 3.3.0 to 3.4.0 ([#4693](https://github.com/aws-powertools/powertools-lambda-python/issues/4693))
* **deps:** bump actions/setup-python from 3 to 4 ([#1244](https://github.com/aws-powertools/powertools-lambda-python/issues/1244))
* **deps:** bump actions/download-artifact from 4.1.7 to 4.1.8 ([#4699](https://github.com/aws-powertools/powertools-lambda-python/issues/4699))
* **deps:** bump actions/upload-artifact from 4.3.3 to 4.3.4 ([#4698](https://github.com/aws-powertools/powertools-lambda-python/issues/4698))
* **deps:** bump actions/download-artifact from 4.1.1 to 4.1.2 ([#3725](https://github.com/aws-powertools/powertools-lambda-python/issues/3725))
* **deps:** bump certifi from 2024.6.2 to 2024.7.4 ([#4700](https://github.com/aws-powertools/powertools-lambda-python/issues/4700))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 3 updates ([#4369](https://github.com/aws-powertools/powertools-lambda-python/issues/4369))
* **deps:** bump dependabot/fetch-metadata from 1.1.1 to 1.3.2 ([#1269](https://github.com/aws-powertools/powertools-lambda-python/issues/1269))
* **deps:** bump aws-xray-sdk from 2.9.0 to 2.10.0 ([#1270](https://github.com/aws-powertools/powertools-lambda-python/issues/1270))
* **deps:** bump datadog-lambda from 4.80.0 to 4.81.0 ([#3228](https://github.com/aws-powertools/powertools-lambda-python/issues/3228))
* **deps:** bump dependabot/fetch-metadata from 1.3.2 to 1.3.3 ([#1273](https://github.com/aws-powertools/powertools-lambda-python/issues/1273))
* **deps:** bump zipp from 3.17.0 to 3.19.1 in /docs ([#4720](https://github.com/aws-powertools/powertools-lambda-python/issues/4720))
* **deps:** bump actions/checkout from 4.1.5 to 4.1.6 ([#4344](https://github.com/aws-powertools/powertools-lambda-python/issues/4344))
* **deps:** bump urllib3 from 1.26.17 to 1.26.18 ([#3222](https://github.com/aws-powertools/powertools-lambda-python/issues/3222))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 3 updates ([#4337](https://github.com/aws-powertools/powertools-lambda-python/issues/4337))
* **deps:** bump actions/checkout from 4.1.0 to 4.1.1 ([#3220](https://github.com/aws-powertools/powertools-lambda-python/issues/3220))
* **deps:** bump release-drafter/release-drafter from 5.24.0 to 5.25.0 ([#3219](https://github.com/aws-powertools/powertools-lambda-python/issues/3219))
* **deps:** bump squidfunk/mkdocs-material from `8ef47d7` to `48d1914` in /docs ([#4336](https://github.com/aws-powertools/powertools-lambda-python/issues/4336))
* **deps:** bump codecov/codecov-action from 4.3.1 to 4.4.0 ([#4328](https://github.com/aws-powertools/powertools-lambda-python/issues/4328))
* **deps:** bump actions/setup-node from 4.0.2 to 4.0.3 ([#4725](https://github.com/aws-powertools/powertools-lambda-python/issues/4725))
* **deps:** revert aws-cdk-lib as a runtime dep ([#3730](https://github.com/aws-powertools/powertools-lambda-python/issues/3730))
* **deps:** bump squidfunk/mkdocs-material from `cb38dc2` to `df9409b` in /docs ([#3216](https://github.com/aws-powertools/powertools-lambda-python/issues/3216))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 1 update ([#3215](https://github.com/aws-powertools/powertools-lambda-python/issues/3215))
* **deps:** bump actions/setup-node from 2 to 3 ([#1281](https://github.com/aws-powertools/powertools-lambda-python/issues/1281))
* **deps:** bump squidfunk/mkdocs-material from `e0d6c67` to `6a72238` in /docs ([#3735](https://github.com/aws-powertools/powertools-lambda-python/issues/3735))
* **deps:** bump aws-cdk-lib from 2.29.0 to 2.31.1 ([#1290](https://github.com/aws-powertools/powertools-lambda-python/issues/1290))
* **deps:** bump cdk-lambda-powertools-python-layer ([#1284](https://github.com/aws-powertools/powertools-lambda-python/issues/1284))
* **deps:** bump actions/setup-node from 4.0.1 to 4.0.2 ([#3737](https://github.com/aws-powertools/powertools-lambda-python/issues/3737))
* **deps:** bump attrs from 21.2.0 to 21.4.0 ([#1282](https://github.com/aws-powertools/powertools-lambda-python/issues/1282))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 3 updates ([#3198](https://github.com/aws-powertools/powertools-lambda-python/issues/3198))
* **deps:** bump aws-xray-sdk from 2.12.0 to 2.12.1 ([#3197](https://github.com/aws-powertools/powertools-lambda-python/issues/3197))
* **deps:** bump squidfunk/mkdocs-material from `11d7ec0` to `8ef47d7` in /docs ([#4323](https://github.com/aws-powertools/powertools-lambda-python/issues/4323))
* **deps:** bump zgosalvez/github-actions-ensure-sha-pinned-actions from 3.0.2 to 3.0.3 ([#3536](https://github.com/aws-powertools/powertools-lambda-python/issues/3536))
* **deps:** bump jsii from 1.61.0 to 1.62.0 ([#1294](https://github.com/aws-powertools/powertools-lambda-python/issues/1294))
* **deps:** bump squidfunk/mkdocs-material from `a4cfa88` to `cb38dc2` in /docs ([#3189](https://github.com/aws-powertools/powertools-lambda-python/issues/3189))
* **deps:** bump gitpython from 3.1.35 to 3.1.37 in /docs ([#3188](https://github.com/aws-powertools/powertools-lambda-python/issues/3188))
* **deps:** bump github.com/aws/aws-sdk-go-v2/config from 1.27.12 to 1.27.13 in /layer/scripts/layer-balancer in the layer-balancer group ([#4319](https://github.com/aws-powertools/powertools-lambda-python/issues/4319))
* **deps:** bump constructs from 10.1.1 to 10.1.46 ([#1306](https://github.com/aws-powertools/powertools-lambda-python/issues/1306))
* **deps:** bump fastjsonschema from 2.15.3 to 2.16.1 ([#1309](https://github.com/aws-powertools/powertools-lambda-python/issues/1309))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 3 updates ([#3177](https://github.com/aws-powertools/powertools-lambda-python/issues/3177))
* **deps:** bump ossf/scorecard-action from 2.2.0 to 2.3.0 ([#3178](https://github.com/aws-powertools/powertools-lambda-python/issues/3178))
* **deps:** bump constructs from 10.1.1 to 10.1.49 ([#1308](https://github.com/aws-powertools/powertools-lambda-python/issues/1308))
* **deps:** bump ossf/scorecard-action from 2.3.1 to 2.3.3 ([#4315](https://github.com/aws-powertools/powertools-lambda-python/issues/4315))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 3 updates ([#4733](https://github.com/aws-powertools/powertools-lambda-python/issues/4733))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 1 update ([#3174](https://github.com/aws-powertools/powertools-lambda-python/issues/3174))
* **deps:** bump squidfunk/mkdocs-material from `cbfecae` to `a4cfa88` in /docs ([#3175](https://github.com/aws-powertools/powertools-lambda-python/issues/3175))
* **deps:** bump constructs from 10.1.1 to 10.1.51 ([#1323](https://github.com/aws-powertools/powertools-lambda-python/issues/1323))
* **deps:** bump actions/setup-python from 5.1.0 to 5.1.1 ([#4732](https://github.com/aws-powertools/powertools-lambda-python/issues/4732))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 3 updates ([#4745](https://github.com/aws-powertools/powertools-lambda-python/issues/4745))
* **deps:** bump constructs from 10.1.1 to 10.1.52 ([#1343](https://github.com/aws-powertools/powertools-lambda-python/issues/1343))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 2 updates ([#4302](https://github.com/aws-powertools/powertools-lambda-python/issues/4302))
* **deps:** bump zgosalvez/github-actions-ensure-sha-pinned-actions from 3.0.4 to 3.0.5 ([#4281](https://github.com/aws-powertools/powertools-lambda-python/issues/4281))
* **deps:** bump urllib3 from 1.26.16 to 1.26.17 ([#3162](https://github.com/aws-powertools/powertools-lambda-python/issues/3162))
* **deps:** bump actions/checkout from 4.1.4 to 4.1.5 ([#4282](https://github.com/aws-powertools/powertools-lambda-python/issues/4282))
* **deps:** bump fastjsonschema from 2.18.0 to 2.18.1 ([#3159](https://github.com/aws-powertools/powertools-lambda-python/issues/3159))
* **deps:** bump actions/setup-python from 4.7.0 to 4.7.1 ([#3158](https://github.com/aws-powertools/powertools-lambda-python/issues/3158))
* **deps:** bump jinja2 from 3.1.3 to 3.1.4 in /docs ([#4284](https://github.com/aws-powertools/powertools-lambda-python/issues/4284))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 1 update ([#3156](https://github.com/aws-powertools/powertools-lambda-python/issues/3156))
* **deps:** bump squidfunk/mkdocs-material from `e5f28aa` to `cbfecae` in /docs ([#3157](https://github.com/aws-powertools/powertools-lambda-python/issues/3157))
* **deps:** bump actions/dependency-review-action from 4.0.0 to 4.1.0 ([#3771](https://github.com/aws-powertools/powertools-lambda-python/issues/3771))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 3 updates ([#3764](https://github.com/aws-powertools/powertools-lambda-python/issues/3764))
* **deps:** bump squidfunk/mkdocs-material from `98c9809` to `11d7ec0` in /docs ([#4269](https://github.com/aws-powertools/powertools-lambda-python/issues/4269))
* **deps:** bump squidfunk/mkdocs-material from `6a72238` to `62d3668` in /docs ([#3756](https://github.com/aws-powertools/powertools-lambda-python/issues/3756))
* **deps:** bump slsa-framework/slsa-github-generator from 1.10.0 to 2.0.0 ([#4179](https://github.com/aws-powertools/powertools-lambda-python/issues/4179))
* **deps:** bump pydantic from 1.10.12 to 1.10.13 ([#3144](https://github.com/aws-powertools/powertools-lambda-python/issues/3144))
* **deps:** bump actions/dependency-review-action from 4.3.3 to 4.3.4 ([#4753](https://github.com/aws-powertools/powertools-lambda-python/issues/4753))
* **deps:** bump constructs from 10.1.1 to 10.1.59 ([#1396](https://github.com/aws-powertools/powertools-lambda-python/issues/1396))
* **deps:** bump jsii from 1.57.0 to 1.63.1 ([#1390](https://github.com/aws-powertools/powertools-lambda-python/issues/1390))
* **deps:** bump prismjs from 1.20.0 to 1.21.0 in /docs
* **deps:** bump jsii from 1.57.0 to 1.63.2 ([#1400](https://github.com/aws-powertools/powertools-lambda-python/issues/1400))
* **deps:** bump constructs from 10.1.1 to 10.1.60 ([#1399](https://github.com/aws-powertools/powertools-lambda-python/issues/1399))
* **deps:** bump squidfunk/mkdocs-material from `06673a1` to `e5f28aa` in /docs ([#3134](https://github.com/aws-powertools/powertools-lambda-python/issues/3134))
* **deps:** bump constructs from 10.1.1 to 10.1.63 ([#1402](https://github.com/aws-powertools/powertools-lambda-python/issues/1402))
* **deps:** bump actions/checkout from 4.0.0 to 4.1.0 ([#3128](https://github.com/aws-powertools/powertools-lambda-python/issues/3128))
* **deps:** bump attrs from 21.4.0 to 22.1.0 ([#1397](https://github.com/aws-powertools/powertools-lambda-python/issues/1397))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 1 update ([#3127](https://github.com/aws-powertools/powertools-lambda-python/issues/3127))
* **deps:** bump constructs from 10.1.1 to 10.1.64 ([#1405](https://github.com/aws-powertools/powertools-lambda-python/issues/1405))
* **deps:** bump constructs from 10.1.1 to 10.1.65 ([#1407](https://github.com/aws-powertools/powertools-lambda-python/issues/1407))
* **deps:** bump squidfunk/mkdocs-material from `b41ba6d` to `06673a1` in /docs ([#3124](https://github.com/aws-powertools/powertools-lambda-python/issues/3124))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 1 update ([#3784](https://github.com/aws-powertools/powertools-lambda-python/issues/3784))
* **deps:** bump elliptic from 6.5.2 to 6.5.3 in /docs
* **deps:** bump datadog-lambda from 5.93.0 to 5.94.0 ([#4253](https://github.com/aws-powertools/powertools-lambda-python/issues/4253))
* **deps:** bump squidfunk/mkdocs-material from `4ff781e` to `b41ba6d` in /docs ([#3117](https://github.com/aws-powertools/powertools-lambda-python/issues/3117))
* **deps:** bump constructs from 10.1.1 to 10.1.66 ([#1414](https://github.com/aws-powertools/powertools-lambda-python/issues/1414))
* **deps:** bump codecov/codecov-action from 4.3.0 to 4.3.1 ([#4252](https://github.com/aws-powertools/powertools-lambda-python/issues/4252))
* **deps:** bump actions/dependency-review-action from 4.3.1 to 4.3.2 ([#4244](https://github.com/aws-powertools/powertools-lambda-python/issues/4244))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 1 update ([#3115](https://github.com/aws-powertools/powertools-lambda-python/issues/3115))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 1 update ([#3108](https://github.com/aws-powertools/powertools-lambda-python/issues/3108))
* **deps:** bump squidfunk/mkdocs-material from `c4890ab` to `4ff781e` in /docs ([#3110](https://github.com/aws-powertools/powertools-lambda-python/issues/3110))
* **deps:** bump actions/dependency-review-action from 4.2.5 to 4.3.1 ([#4240](https://github.com/aws-powertools/powertools-lambda-python/issues/4240))
* **deps:** bump squidfunk/mkdocs-material from `e309089` to `98c9809` in /docs ([#4236](https://github.com/aws-powertools/powertools-lambda-python/issues/4236))
* **deps:** bump pydantic from 1.9.1 to 1.9.2 ([#1448](https://github.com/aws-powertools/powertools-lambda-python/issues/1448))
* **deps:** bump release-drafter/release-drafter from 5.20.0 to 5.20.1 ([#1458](https://github.com/aws-powertools/powertools-lambda-python/issues/1458))
* **deps:** bump datadog-lambda from 6.96.0 to 6.97.0 ([#4770](https://github.com/aws-powertools/powertools-lambda-python/issues/4770))
* **deps:** bump github.com/aws/aws-sdk-go-v2/config from 1.27.26 to 1.27.27 in /layer/scripts/layer-balancer in the layer-balancer group ([#4779](https://github.com/aws-powertools/powertools-lambda-python/issues/4779))
* **deps:** bump squidfunk/mkdocs-material from `62d3668` to `43b898a` in /docs ([#3801](https://github.com/aws-powertools/powertools-lambda-python/issues/3801))
* **deps:** bump datadog-lambda from 5.92.0 to 5.93.0 ([#4211](https://github.com/aws-powertools/powertools-lambda-python/issues/4211))
* **deps:** bump actions/dependency-review-action from 4.1.0 to 4.1.2 ([#3800](https://github.com/aws-powertools/powertools-lambda-python/issues/3800))
* **deps:** bump aws-actions/closed-issue-message from 8b6324312193476beecf11f8e8539d73a3553bf4 to 80edfc24bdf1283400eb04d20a8a605ae8bf7d48 ([#4786](https://github.com/aws-powertools/powertools-lambda-python/issues/4786))
* **deps:** bump squidfunk/mkdocs-material from `521644b` to `e309089` in /docs ([#4216](https://github.com/aws-powertools/powertools-lambda-python/issues/4216))
* **deps:** bump docker/setup-qemu-action from 2.2.0 to 3.0.0 ([#3081](https://github.com/aws-powertools/powertools-lambda-python/issues/3081))
* **deps:** bump docker/setup-buildx-action from 2.10.0 to 3.0.0 ([#3083](https://github.com/aws-powertools/powertools-lambda-python/issues/3083))
* **deps:** bump actions/checkout from 4.1.3 to 4.1.4 ([#4206](https://github.com/aws-powertools/powertools-lambda-python/issues/4206))
* **deps:** bump actions/download-artifact from 4.1.6 to 4.1.7 ([#4205](https://github.com/aws-powertools/powertools-lambda-python/issues/4205))
* **deps:** bump redis from 5.0.3 to 5.0.4 ([#4187](https://github.com/aws-powertools/powertools-lambda-python/issues/4187))
* **deps:** bump actions/download-artifact from 4.1.5 to 4.1.6 ([#4178](https://github.com/aws-powertools/powertools-lambda-python/issues/4178))
* **deps:** bump actions/upload-artifact from 4.3.2 to 4.3.3 ([#4177](https://github.com/aws-powertools/powertools-lambda-python/issues/4177))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 2 updates ([#3814](https://github.com/aws-powertools/powertools-lambda-python/issues/3814))
* **deps:** bump release-drafter/release-drafter from 5.20.1 to 5.21.0 ([#1520](https://github.com/aws-powertools/powertools-lambda-python/issues/1520))
* **deps:** bump actions/dependency-review-action from 4.1.2 to 4.1.3 ([#3813](https://github.com/aws-powertools/powertools-lambda-python/issues/3813))
* **deps:** bump actions/setup-python from 3 to 4 ([#1528](https://github.com/aws-powertools/powertools-lambda-python/issues/1528))
* **deps:** bump codecov/codecov-action from 3.1.0 to 3.1.1 ([#1529](https://github.com/aws-powertools/powertools-lambda-python/issues/1529))
* **deps:** bump squidfunk/mkdocs-material from `dd1770c` to `c4890ab` in /docs ([#3078](https://github.com/aws-powertools/powertools-lambda-python/issues/3078))
* **deps:** bump fastjsonschema from 2.16.1 to 2.16.2 ([#1530](https://github.com/aws-powertools/powertools-lambda-python/issues/1530))
* **deps:** bump email-validator from 1.2.1 to 1.3.0 ([#1533](https://github.com/aws-powertools/powertools-lambda-python/issues/1533))
* **deps:** bump dependabot/fetch-metadata from 1.3.3 to 1.3.4 ([#1565](https://github.com/aws-powertools/powertools-lambda-python/issues/1565))
* **deps:** bump lodash from 4.17.15 to 4.17.19 in /docs ([#93](https://github.com/aws-powertools/powertools-lambda-python/issues/93))
* **deps:** bump actions/dependency-review-action from 3.0.8 to 3.1.0 ([#3071](https://github.com/aws-powertools/powertools-lambda-python/issues/3071))
* **deps:** bump docker/setup-buildx-action from 3.4.0 to 3.5.0 ([#4801](https://github.com/aws-powertools/powertools-lambda-python/issues/4801))
* **deps:** bump squidfunk/mkdocs-material from `9af3b7e` to `2f29d71` in /docs ([#3559](https://github.com/aws-powertools/powertools-lambda-python/issues/3559))
* **deps:** bump docker/setup-qemu-action from 3.1.0 to 3.2.0 ([#4800](https://github.com/aws-powertools/powertools-lambda-python/issues/4800))
* **deps:** bump pydantic from 1.10.16 to 1.10.17 ([#4595](https://github.com/aws-powertools/powertools-lambda-python/issues/4595))
* **deps:** bump actions/checkout from 4.1.2 to 4.1.3 ([#4168](https://github.com/aws-powertools/powertools-lambda-python/issues/4168))
* **deps:** bump gitpython from 3.1.32 to 3.1.35 in /docs ([#3059](https://github.com/aws-powertools/powertools-lambda-python/issues/3059))
* **deps:** lock importlib to 4.x
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 3 updates ([#3835](https://github.com/aws-powertools/powertools-lambda-python/issues/3835))
* **deps:** bump actions/upload-artifact from 3.1.2 to 3.1.3 ([#3053](https://github.com/aws-powertools/powertools-lambda-python/issues/3053))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 1 update ([#3052](https://github.com/aws-powertools/powertools-lambda-python/issues/3052))
* **deps:** bump release-drafter/release-drafter from 5.21.0 to 5.21.1 ([#1611](https://github.com/aws-powertools/powertools-lambda-python/issues/1611))
* **deps:** remove email-validator; use Str over EmailStr in SES model ([#1608](https://github.com/aws-powertools/powertools-lambda-python/issues/1608))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 2 updates ([#3544](https://github.com/aws-powertools/powertools-lambda-python/issues/3544))
* **deps:** bump actions/checkout from 3.6.0 to 4.0.0 ([#3041](https://github.com/aws-powertools/powertools-lambda-python/issues/3041))
* **deps:** bump pydantic from 1.8.2 to 1.9.0 ([#933](https://github.com/aws-powertools/powertools-lambda-python/issues/933))
* **deps:** bump actions/download-artifact from 4.1.4 to 4.1.5 ([#4161](https://github.com/aws-powertools/powertools-lambda-python/issues/4161))
* **deps:** bump actions/upload-artifact from 4.3.1 to 4.3.2 ([#4162](https://github.com/aws-powertools/powertools-lambda-python/issues/4162))
* **deps:** bump squidfunk/mkdocs-material from `f4764d1` to `dd1770c` in /docs ([#3044](https://github.com/aws-powertools/powertools-lambda-python/issues/3044))
* **deps:** bump cryptography from 42.0.2 to 42.0.4 ([#3827](https://github.com/aws-powertools/powertools-lambda-python/issues/3827))
* **deps:** bump peaceiris/actions-gh-pages from 3.8.0 to 3.9.0 ([#1649](https://github.com/aws-powertools/powertools-lambda-python/issues/1649))
* **deps:** bump docker/setup-qemu-action from 2.0.0 to 2.1.0 ([#1627](https://github.com/aws-powertools/powertools-lambda-python/issues/1627))
* **deps:** bump package to 2.2.0
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 3 updates ([#3844](https://github.com/aws-powertools/powertools-lambda-python/issues/3844))
* **deps:** bump dependabot/fetch-metadata from 1.3.4 to 1.3.5 ([#1689](https://github.com/aws-powertools/powertools-lambda-python/issues/1689))
* **deps:** bump squidfunk/mkdocs-material from `b1f7f94` to `f4764d1` in /docs ([#3031](https://github.com/aws-powertools/powertools-lambda-python/issues/3031))
* **deps:** bump squidfunk/mkdocs-material from `6b124e1` to `521644b` in /docs ([#4141](https://github.com/aws-powertools/powertools-lambda-python/issues/4141))
* **deps:** bump codecov/codecov-action from 4.0.1 to 4.0.2 ([#3842](https://github.com/aws-powertools/powertools-lambda-python/issues/3842))
* **deps:** bump sqlparse from 0.4.4 to 0.5.0 ([#4138](https://github.com/aws-powertools/powertools-lambda-python/issues/4138))
* **deps:** bump graphql-playground-html from 1.6.19 to 1.6.25 in /docs
* **deps:** bump idna from 3.6 to 3.7 ([#4121](https://github.com/aws-powertools/powertools-lambda-python/issues/4121))
* **deps:** bump docker/setup-buildx-action from 2.9.1 to 2.10.0 ([#3022](https://github.com/aws-powertools/powertools-lambda-python/issues/3022))
* **deps:** bump squidfunk/mkdocs-material from `97da15b` to `b1f7f94` in /docs ([#3021](https://github.com/aws-powertools/powertools-lambda-python/issues/3021))
* **deps:** bump aws-xray-sdk from 2.10.0 to 2.11.0 ([#1730](https://github.com/aws-powertools/powertools-lambda-python/issues/1730))
* **deps:** bump squidfunk/mkdocs-material from `43b898a` to `49d1bfd` in /docs ([#3857](https://github.com/aws-powertools/powertools-lambda-python/issues/3857))
* **deps:** bump zgosalvez/github-actions-ensure-sha-pinned-actions from 1.3.0 to 1.4.0 ([#1749](https://github.com/aws-powertools/powertools-lambda-python/issues/1749))
* **deps:** bump codecov/codecov-action from 4.0.2 to 4.1.0 ([#3856](https://github.com/aws-powertools/powertools-lambda-python/issues/3856))
* **deps:** bump zgosalvez/github-actions-ensure-sha-pinned-actions from 1.4.0 to 2.0.1 ([#1752](https://github.com/aws-powertools/powertools-lambda-python/issues/1752))
* **deps:** bump docker/setup-buildx-action from 3.0.0 to 3.1.0 ([#3864](https://github.com/aws-powertools/powertools-lambda-python/issues/3864))
* **deps:** bump aws-actions/configure-aws-credentials from 2.2.0 to 3.0.0 ([#3000](https://github.com/aws-powertools/powertools-lambda-python/issues/3000))
* **deps:** bump actions/checkout from 3.5.3 to 3.6.0 ([#2999](https://github.com/aws-powertools/powertools-lambda-python/issues/2999))
* **deps:** bump pypa/gh-action-pypi-publish from 1.8.11 to 1.8.12 ([#3863](https://github.com/aws-powertools/powertools-lambda-python/issues/3863))
* **deps:** bump slsa-framework/slsa-github-generator from 1.8.0 to 1.9.0 ([#2992](https://github.com/aws-powertools/powertools-lambda-python/issues/2992))
* **deps:** bump actions/setup-node from 4.0.0 to 4.0.1 ([#3535](https://github.com/aws-powertools/powertools-lambda-python/issues/3535))
* **deps:** bump squidfunk/mkdocs-material from `cd3a522` to `97da15b` in /docs ([#2987](https://github.com/aws-powertools/powertools-lambda-python/issues/2987))
* **deps:** bump certifi from 2022.9.24 to 2022.12.7 ([#1768](https://github.com/aws-powertools/powertools-lambda-python/issues/1768))
* **deps:** bump websocket-extensions from 0.1.3 to 0.1.4 in /docs ([#66](https://github.com/aws-powertools/powertools-lambda-python/issues/66))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 3 updates ([#2983](https://github.com/aws-powertools/powertools-lambda-python/issues/2983))
* **deps:** bump actions/download-artifact from 4.1.2 to 4.1.3 ([#3862](https://github.com/aws-powertools/powertools-lambda-python/issues/3862))
* **deps:** bump zgosalvez/github-actions-ensure-sha-pinned-actions from 2.0.1 to 2.0.3 ([#1801](https://github.com/aws-powertools/powertools-lambda-python/issues/1801))
* **deps:** bump release-drafter/release-drafter from 5.21.1 to 5.22.0 ([#1802](https://github.com/aws-powertools/powertools-lambda-python/issues/1802))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 3 updates ([#2978](https://github.com/aws-powertools/powertools-lambda-python/issues/2978))
* **deps:** bump redis from 5.0.1 to 5.0.2 ([#3867](https://github.com/aws-powertools/powertools-lambda-python/issues/3867))
* **deps:** bump gitpython from 3.1.29 to 3.1.30 ([#1812](https://github.com/aws-powertools/powertools-lambda-python/issues/1812))
* **deps:** bump pydantic from 1.10.2 to 1.10.4 ([#1817](https://github.com/aws-powertools/powertools-lambda-python/issues/1817))
* **deps:** bump actions/setup-node from 3.8.0 to 3.8.1 ([#2970](https://github.com/aws-powertools/powertools-lambda-python/issues/2970))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 3 updates ([#2971](https://github.com/aws-powertools/powertools-lambda-python/issues/2971))
* **deps:** bump squidfunk/mkdocs-material from `49d1bfd` to `7be068b` in /docs ([#3872](https://github.com/aws-powertools/powertools-lambda-python/issues/3872))
* **deps:** bump peaceiris/actions-gh-pages from 3.9.0 to 3.9.1 ([#1814](https://github.com/aws-powertools/powertools-lambda-python/issues/1814))
* **deps:** bump actions/download-artifact from 4.1.3 to 4.1.4 ([#3875](https://github.com/aws-powertools/powertools-lambda-python/issues/3875))
* **deps:** bump zgosalvez/github-actions-ensure-sha-pinned-actions from 2.0.3 to 2.0.4 ([#1821](https://github.com/aws-powertools/powertools-lambda-python/issues/1821))
* **deps:** bump future from 0.18.2 to 0.18.3 ([#1836](https://github.com/aws-powertools/powertools-lambda-python/issues/1836))
* **deps:** bump actions/dependency-review-action from 3.0.7 to 3.0.8 ([#2963](https://github.com/aws-powertools/powertools-lambda-python/issues/2963))
* **deps:** bump zgosalvez/github-actions-ensure-sha-pinned-actions from 2.0.4 to 2.0.5 ([#1837](https://github.com/aws-powertools/powertools-lambda-python/issues/1837))
* **deps:** bump peaceiris/actions-gh-pages from 3.9.1 to 3.9.2 ([#1841](https://github.com/aws-powertools/powertools-lambda-python/issues/1841))
* **deps:** bump actions/setup-node from 3.7.0 to 3.8.0 ([#2957](https://github.com/aws-powertools/powertools-lambda-python/issues/2957))
* **deps:** bump dependabot/fetch-metadata from 1.3.5 to 1.3.6 ([#1855](https://github.com/aws-powertools/powertools-lambda-python/issues/1855))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 1 update ([#3884](https://github.com/aws-powertools/powertools-lambda-python/issues/3884))
* **deps:** bump pypa/gh-action-pypi-publish from 1.8.9 to 1.8.10 ([#2946](https://github.com/aws-powertools/powertools-lambda-python/issues/2946))
* **deps:** bump gitpython from 3.1.31 to 3.1.32 in /docs ([#2948](https://github.com/aws-powertools/powertools-lambda-python/issues/2948))
* **deps:** bump docker/setup-buildx-action from 2.0.0 to 2.4.0 ([#1873](https://github.com/aws-powertools/powertools-lambda-python/issues/1873))
* **deps:** bump zgosalvez/github-actions-ensure-sha-pinned-actions from 3.0.3 to 3.0.4 ([#4099](https://github.com/aws-powertools/powertools-lambda-python/issues/4099))
* **deps:** bump docker/setup-buildx-action from 2.4.0 to 2.4.1 ([#1903](https://github.com/aws-powertools/powertools-lambda-python/issues/1903))
* **deps:** bump pypa/gh-action-pypi-publish from 1.8.8 to 1.8.9 ([#2943](https://github.com/aws-powertools/powertools-lambda-python/issues/2943))
* **deps:** bump codecov/codecov-action from 4.2.0 to 4.3.0 ([#4098](https://github.com/aws-powertools/powertools-lambda-python/issues/4098))
* **deps:** bump pydantic from 1.10.4 to 1.10.5 ([#1931](https://github.com/aws-powertools/powertools-lambda-python/issues/1931))
* **deps:** bump actions/upload-artifact from 4.3.4 to 4.3.5 ([#4871](https://github.com/aws-powertools/powertools-lambda-python/issues/4871))
* **deps:** bump actions/dependency-review-action from 3.0.6 to 3.0.7 ([#2941](https://github.com/aws-powertools/powertools-lambda-python/issues/2941))
* **deps:** bump zgosalvez/github-actions-ensure-sha-pinned-actions from 2.0.5 to 2.1.0 ([#1943](https://github.com/aws-powertools/powertools-lambda-python/issues/1943))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 1 update ([#3887](https://github.com/aws-powertools/powertools-lambda-python/issues/3887))
* **deps:** bump release-drafter/release-drafter from 5.22.0 to 5.23.0 ([#1947](https://github.com/aws-powertools/powertools-lambda-python/issues/1947))
* **deps:** bump github.com/aws/aws-sdk-go-v2/service/lambda from 1.38.0 to 1.38.1 in /layer/scripts/layer-balancer ([#2876](https://github.com/aws-powertools/powertools-lambda-python/issues/2876))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 3 updates ([#2933](https://github.com/aws-powertools/powertools-lambda-python/issues/2933))
* **deps:** bump squidfunk/mkdocs-material from `7be068b` to `3678304` in /docs ([#3894](https://github.com/aws-powertools/powertools-lambda-python/issues/3894))
* **deps:** bump fastjsonschema from 2.16.2 to 2.16.3 ([#1961](https://github.com/aws-powertools/powertools-lambda-python/issues/1961))
* **deps:** bump slsa-framework/slsa-github-generator from 1.7.0 to 1.8.0 ([#2927](https://github.com/aws-powertools/powertools-lambda-python/issues/2927))
* **deps:** bump bleach from 3.1.0 to 3.1.1 in /python
* **deps:** bump squidfunk/mkdocs-material from `257eca8` to `9919d6e` in /docs ([#4878](https://github.com/aws-powertools/powertools-lambda-python/issues/4878))
* **deps:** bump zgosalvez/github-actions-ensure-sha-pinned-actions from 2.1.0 to 2.1.1 ([#1958](https://github.com/aws-powertools/powertools-lambda-python/issues/1958))
* **deps:** bump ossf/scorecard-action from 2.3.3 to 2.4.0 ([#4829](https://github.com/aws-powertools/powertools-lambda-python/issues/4829))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 2 updates ([#2904](https://github.com/aws-powertools/powertools-lambda-python/issues/2904))
* **deps:** bump docker/setup-buildx-action from 3.2.0 to 3.3.0 ([#4091](https://github.com/aws-powertools/powertools-lambda-python/issues/4091))
* **deps:** bump zgosalvez/github-actions-ensure-sha-pinned-actions from 2.1.1 to 2.1.2 ([#1979](https://github.com/aws-powertools/powertools-lambda-python/issues/1979))
* **deps:** bump aws-actions/configure-aws-credentials from 1 to 2 ([#1987](https://github.com/aws-powertools/powertools-lambda-python/issues/1987))
* **deps:** bump pydantic from 1.10.5 to 1.10.6 ([#1991](https://github.com/aws-powertools/powertools-lambda-python/issues/1991))
* **deps:** bump docker/setup-buildx-action from 2.4.1 to 2.5.0 ([#1995](https://github.com/aws-powertools/powertools-lambda-python/issues/1995))
* **deps:** bump typing-extensions from 4.10.0 to 4.11.0 ([#4080](https://github.com/aws-powertools/powertools-lambda-python/issues/4080))
* **deps:** bump github.com/aws/aws-sdk-go-v2/config from 1.18.30 to 1.18.31 in /layer/scripts/layer-balancer ([#2889](https://github.com/aws-powertools/powertools-lambda-python/issues/2889))
* **deps:** bump pydantic from 1.10.6 to 1.10.7 ([#2034](https://github.com/aws-powertools/powertools-lambda-python/issues/2034))
* **deps:** bump github.com/aws/aws-sdk-go-v2/service/lambda from 1.38.1 to 1.39.0 in /layer/scripts/layer-balancer ([#2890](https://github.com/aws-powertools/powertools-lambda-python/issues/2890))
* **deps:** bump peaceiris/actions-gh-pages from 3.9.2 to 3.9.3 ([#2069](https://github.com/aws-powertools/powertools-lambda-python/issues/2069))
* **deps:** bump aws-xray-sdk from 2.12.1 to 2.13.0 ([#3906](https://github.com/aws-powertools/powertools-lambda-python/issues/3906))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 3 updates ([#3911](https://github.com/aws-powertools/powertools-lambda-python/issues/3911))
* **deps:** bump aws-xray-sdk from 2.11.0 to 2.12.0 ([#2080](https://github.com/aws-powertools/powertools-lambda-python/issues/2080))
* **deps:** bump github.com/aws/aws-sdk-go-v2/config from 1.27.10 to 1.27.11 in /layer/scripts/layer-balancer in the layer-balancer group ([#4079](https://github.com/aws-powertools/powertools-lambda-python/issues/4079))
* **deps:** bump codecov/codecov-action from 3.1.1 to 3.1.2 ([#2110](https://github.com/aws-powertools/powertools-lambda-python/issues/2110))
* **deps:** bump codecov/codecov-action from 4.1.1 to 4.2.0 ([#4072](https://github.com/aws-powertools/powertools-lambda-python/issues/4072))
* **deps:** bump golang.org/x/sync from 0.6.0 to 0.7.0 in /layer/scripts/layer-balancer in the layer-balancer group ([#4071](https://github.com/aws-powertools/powertools-lambda-python/issues/4071))
* **deps:** bump github.com/aws/aws-sdk-go-v2/config from 1.18.29 to 1.18.30 in /layer/scripts/layer-balancer ([#2875](https://github.com/aws-powertools/powertools-lambda-python/issues/2875))
* **deps:** bump pydantic from 1.10.14 to 1.10.15 ([#4064](https://github.com/aws-powertools/powertools-lambda-python/issues/4064))
* **deps:** bump github.com/aws/aws-sdk-go-v2 from 1.19.0 to 1.19.1 in /layer/scripts/layer-balancer ([#2877](https://github.com/aws-powertools/powertools-lambda-python/issues/2877))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 1 update ([#4066](https://github.com/aws-powertools/powertools-lambda-python/issues/4066))
* **deps:** bump dependabot/fetch-metadata from 1.3.6 to 1.4.0 ([#2140](https://github.com/aws-powertools/powertools-lambda-python/issues/2140))
* **deps:** bump codecov/codecov-action from 3.1.2 to 3.1.3 ([#2153](https://github.com/aws-powertools/powertools-lambda-python/issues/2153))
* **deps:** bump squidfunk/mkdocs-material from `065f3af` to `6b124e1` in /docs ([#4055](https://github.com/aws-powertools/powertools-lambda-python/issues/4055))
* **deps:** bump docker/setup-buildx-action from 3.5.0 to 3.6.1 ([#4844](https://github.com/aws-powertools/powertools-lambda-python/issues/4844))
* **deps:** bump pypa/gh-action-pypi-publish from 1.8.5 to 1.8.6 ([#2201](https://github.com/aws-powertools/powertools-lambda-python/issues/2201))
* **deps:** bump squidfunk/mkdocs-material from `3307665` to `065f3af` in /docs ([#4052](https://github.com/aws-powertools/powertools-lambda-python/issues/4052))
* **deps:** bump squidfunk/mkdocs-material from `33e28bd` to `cd3a522` in /docs ([#2859](https://github.com/aws-powertools/powertools-lambda-python/issues/2859))
* **deps:** bump datadog-lambda from 5.88.0 to 5.89.0 ([#3907](https://github.com/aws-powertools/powertools-lambda-python/issues/3907))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 3 updates ([#4042](https://github.com/aws-powertools/powertools-lambda-python/issues/4042))
* **deps:** bump zgosalvez/github-actions-ensure-sha-pinned-actions from 2.1.2 to 2.1.3 ([#2227](https://github.com/aws-powertools/powertools-lambda-python/issues/2227))
* **deps:** bump github.com/aws/aws-sdk-go-v2/config from 1.18.28 to 1.18.29 in /layer/scripts/layer-balancer ([#2844](https://github.com/aws-powertools/powertools-lambda-python/issues/2844))
* **deps:** bump github.com/aws/aws-sdk-go-v2/service/lambda from 1.37.1 to 1.38.0 in /layer/scripts/layer-balancer ([#2843](https://github.com/aws-powertools/powertools-lambda-python/issues/2843))
* **deps:** bump datadog-lambda from 5.91.0 to 5.92.0 ([#4038](https://github.com/aws-powertools/powertools-lambda-python/issues/4038))
* **deps:** bump pydantic from 1.10.11 to 1.10.12 ([#2846](https://github.com/aws-powertools/powertools-lambda-python/issues/2846))
* **deps:** bump codecov/codecov-action from 4.1.0 to 4.1.1 ([#4021](https://github.com/aws-powertools/powertools-lambda-python/issues/4021))
* **deps:** bump pypa/gh-action-pypi-publish from 1.8.12 to 1.8.14 ([#3918](https://github.com/aws-powertools/powertools-lambda-python/issues/3918))
* **deps:** bump actions/setup-python from 5.0.0 to 5.1.0 ([#4022](https://github.com/aws-powertools/powertools-lambda-python/issues/4022))
* **deps:** bump actions/dependency-review-action from 4.2.4 to 4.2.5 ([#4023](https://github.com/aws-powertools/powertools-lambda-python/issues/4023))
* **deps:** bump squidfunk/mkdocs-material from `6c81a89` to `3307665` in /docs ([#4017](https://github.com/aws-powertools/powertools-lambda-python/issues/4017))
* **deps:** bump codecov/codecov-action from 3.1.3 to 3.1.4 ([#2263](https://github.com/aws-powertools/powertools-lambda-python/issues/2263))
* **deps:** bump pymdown-extensions from 9.11 to 10.0 ([#2262](https://github.com/aws-powertools/powertools-lambda-python/issues/2262))
* **deps:** update mkdocs configuration to support pymdown-extensions 10.0 ([#2271](https://github.com/aws-powertools/powertools-lambda-python/issues/2271))
* **deps:** bump actions/dependency-review-action from 4.2.3 to 4.2.4 ([#4012](https://github.com/aws-powertools/powertools-lambda-python/issues/4012))
* **deps:** bump actions/setup-python from 4.6.1 to 4.7.0 ([#2821](https://github.com/aws-powertools/powertools-lambda-python/issues/2821))
* **deps:** bump fastjsonschema from 2.16.3 to 2.17.1 ([#2307](https://github.com/aws-powertools/powertools-lambda-python/issues/2307))
* **deps:** bump requests from 2.28.2 to 2.31.0 ([#2308](https://github.com/aws-powertools/powertools-lambda-python/issues/2308))
* **deps:** bump pydantic from 1.10.7 to 1.10.8 ([#2316](https://github.com/aws-powertools/powertools-lambda-python/issues/2316))
* **deps:** bump actions/setup-python from 4.6.0 to 4.6.1 ([#2325](https://github.com/aws-powertools/powertools-lambda-python/issues/2325))
* **deps:** bump typing-extensions from 4.5.0 to 4.6.2 ([#2345](https://github.com/aws-powertools/powertools-lambda-python/issues/2345))
* **deps:** bump aws-actions/configure-aws-credentials from 2.0.0 to 2.1.0 ([#2350](https://github.com/aws-powertools/powertools-lambda-python/issues/2350))
* **deps:** bump slsa-framework/slsa-github-generator from 1.9.0 to 1.10.0 ([#3997](https://github.com/aws-powertools/powertools-lambda-python/issues/3997))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 1 update ([#4001](https://github.com/aws-powertools/powertools-lambda-python/issues/4001))
* **deps:** bump docker/setup-buildx-action from 2.5.0 to 2.6.0 ([#2403](https://github.com/aws-powertools/powertools-lambda-python/issues/2403))
* **deps:** bump squidfunk/mkdocs-material from `a28ed81` to `33e28bd` in /docs ([#2797](https://github.com/aws-powertools/powertools-lambda-python/issues/2797))
* **deps:** bump docker/setup-qemu-action from 2.1.0 to 2.2.0 ([#2404](https://github.com/aws-powertools/powertools-lambda-python/issues/2404))
* **deps:** bump pydantic from 1.10.8 to 1.10.9 ([#2405](https://github.com/aws-powertools/powertools-lambda-python/issues/2405))
* **deps:** bump actions/checkout from 3.5.2 to 3.5.3 ([#2431](https://github.com/aws-powertools/powertools-lambda-python/issues/2431))
* **deps:** bump docker/setup-buildx-action from 2.6.0 to 2.7.0 ([#2450](https://github.com/aws-powertools/powertools-lambda-python/issues/2450))
* **deps:** bump aws-actions/configure-aws-credentials from 2.1.0 to 2.2.0 ([#2469](https://github.com/aws-powertools/powertools-lambda-python/issues/2469))
* **deps:** bump actions/dependency-review-action from 4.1.3 to 4.2.3 ([#3993](https://github.com/aws-powertools/powertools-lambda-python/issues/3993))
* **deps:** bump redis from 5.0.2 to 5.0.3 ([#3929](https://github.com/aws-powertools/powertools-lambda-python/issues/3929))
* **deps:** bump aws-encryption-sdk from 3.1.1 to 3.2.0 ([#3983](https://github.com/aws-powertools/powertools-lambda-python/issues/3983))
* **deps:** bump github.com/aws/aws-sdk-go-v2/service/lambda from 1.37.0 to 1.37.1 in /layer/scripts/layer-balancer ([#2769](https://github.com/aws-powertools/powertools-lambda-python/issues/2769))
* **deps:** bump actions/upload-artifact from 3.1.0 to 3.1.2 ([#2522](https://github.com/aws-powertools/powertools-lambda-python/issues/2522))
* **deps:** bump github.com/aws/aws-sdk-go-v2/config from 1.18.27 to 1.18.28 in /layer/scripts/layer-balancer ([#2770](https://github.com/aws-powertools/powertools-lambda-python/issues/2770))
* **deps:** bump actions/setup-python from 4.6.1 to 4.7.0 ([#2768](https://github.com/aws-powertools/powertools-lambda-python/issues/2768))
* **deps:** bump github.com/aws/aws-sdk-go-v2 from 1.18.1 to 1.19.0 in /layer/scripts/layer-balancer ([#2771](https://github.com/aws-powertools/powertools-lambda-python/issues/2771))
* **deps:** bump actions/checkout from 3.1.0 to 3.5.3 ([#2523](https://github.com/aws-powertools/powertools-lambda-python/issues/2523))
* **deps:** bump squidfunk/mkdocs-material from `3678304` to `6c81a89` in /docs ([#3973](https://github.com/aws-powertools/powertools-lambda-python/issues/3973))
* **deps:** bump ossf/scorecard-action from 2.1.3 to 2.2.0 ([#2563](https://github.com/aws-powertools/powertools-lambda-python/issues/2563))
* **deps:** bump pypa/gh-action-pypi-publish from 1.8.7 to 1.8.8 ([#2754](https://github.com/aws-powertools/powertools-lambda-python/issues/2754))
* **deps:** bump pypa/gh-action-pypi-publish from 1.8.6 to 1.8.7 ([#2573](https://github.com/aws-powertools/powertools-lambda-python/issues/2573))
* **deps:** bump docker/setup-buildx-action from 2.9.0 to 2.9.1 ([#2755](https://github.com/aws-powertools/powertools-lambda-python/issues/2755))
* **deps:** bump the layer-balancer group in /layer/scripts/layer-balancer with 3 updates ([#3972](https://github.com/aws-powertools/powertools-lambda-python/issues/3972))
* **deps:** bump release-drafter/release-drafter from 5.23.0 to 5.24.0 ([#2603](https://github.com/aws-powertools/powertools-lambda-python/issues/2603))
* **deps:** bump docker/setup-buildx-action from 2.7.0 to 2.8.0 ([#2604](https://github.com/aws-powertools/powertools-lambda-python/issues/2604))
* **deps:** bump datadog-lambda from 5.90.0 to 5.91.0 ([#3958](https://github.com/aws-powertools/powertools-lambda-python/issues/3958))
* **deps:** bump pydantic from 1.10.9 to 1.10.10 ([#2624](https://github.com/aws-powertools/powertools-lambda-python/issues/2624))
* **deps:** bump docker/setup-buildx-action from 3.1.0 to 3.2.0 ([#3955](https://github.com/aws-powertools/powertools-lambda-python/issues/3955))
* **deps:** bump zgosalvez/github-actions-ensure-sha-pinned-actions from 2.1.3 to 2.1.4 ([#2738](https://github.com/aws-powertools/powertools-lambda-python/issues/2738))
* **deps:** bump github.com/aws/aws-sdk-go-v2 from 1.16.16 to 1.18.1 in /layer/scripts/layer-balancer ([#2654](https://github.com/aws-powertools/powertools-lambda-python/issues/2654))
* **deps:** bump actions/dependency-review-action from 2.5.1 to 3.0.6 ([#2650](https://github.com/aws-powertools/powertools-lambda-python/issues/2650))
* **deps:** bump golang.org/x/sync from 0.1.0 to 0.3.0 in /layer/scripts/layer-balancer ([#2649](https://github.com/aws-powertools/powertools-lambda-python/issues/2649))
* **deps:** bump github.com/aws/aws-sdk-go-v2/service/lambda from 1.24.6 to 1.37.0 in /layer/scripts/layer-balancer ([#2653](https://github.com/aws-powertools/powertools-lambda-python/issues/2653))
* **deps:** bump github.com/aws/aws-sdk-go-v2/config from 1.17.8 to 1.18.27 in /layer/scripts/layer-balancer ([#2651](https://github.com/aws-powertools/powertools-lambda-python/issues/2651))
* **deps:** bump docker/setup-buildx-action from 2.8.0 to 2.9.0 ([#2718](https://github.com/aws-powertools/powertools-lambda-python/issues/2718))
* **deps:** migrate from retry to retry2 to address CVE-2022-42969 ([#2665](https://github.com/aws-powertools/powertools-lambda-python/issues/2665))
* **deps:** bump actions/checkout from 4.1.1 to 4.1.2 ([#3939](https://github.com/aws-powertools/powertools-lambda-python/issues/3939))
* **deps:** bump squidfunk/mkdocs-material from `3837c0f` to `a28ed81` in /docs ([#2669](https://github.com/aws-powertools/powertools-lambda-python/issues/2669))
* **deps:** bump redis from 5.0.7 to 5.0.8 ([#4854](https://github.com/aws-powertools/powertools-lambda-python/issues/4854))
* **deps:** bump pydantic from 1.10.10 to 1.10.11 ([#2671](https://github.com/aws-powertools/powertools-lambda-python/issues/2671))
* **deps:** bump datadog-lambda from 5.89.0 to 5.90.0 ([#3941](https://github.com/aws-powertools/powertools-lambda-python/issues/3941))
* **deps-dev:** bump types-requests from 2.28.11.14 to 2.28.11.15 ([#1962](https://github.com/aws-powertools/powertools-lambda-python/issues/1962))
* **deps-dev:** bump pytest from 8.0.2 to 8.1.1 ([#3943](https://github.com/aws-powertools/powertools-lambda-python/issues/3943))
* **deps-dev:** bump mypy-boto3-appconfigdata from 1.27.0 to 1.28.0 ([#2699](https://github.com/aws-powertools/powertools-lambda-python/issues/2699))
* **deps-dev:** bump mypy-boto3-cloudformation from 1.27.0 to 1.28.0 ([#2700](https://github.com/aws-powertools/powertools-lambda-python/issues/2700))
* **deps-dev:** bump sentry-sdk from 1.27.0 to 1.27.1 ([#2701](https://github.com/aws-powertools/powertools-lambda-python/issues/2701))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.87 to 0.1.88 ([#3942](https://github.com/aws-powertools/powertools-lambda-python/issues/3942))
* **deps-dev:** bump mypy-boto3-lambda from 1.27.0 to 1.28.0 ([#2698](https://github.com/aws-powertools/powertools-lambda-python/issues/2698))
* **deps-dev:** bump ruff from 0.0.276 to 0.0.277 ([#2682](https://github.com/aws-powertools/powertools-lambda-python/issues/2682))
* **deps-dev:** bump the boto-typing group with 2 updates ([#3940](https://github.com/aws-powertools/powertools-lambda-python/issues/3940))
* **deps-dev:** bump aws-cdk from 2.86.0 to 2.87.0 ([#2696](https://github.com/aws-powertools/powertools-lambda-python/issues/2696))
* **deps-dev:** bump mypy-boto3-cloudwatch from 1.27.0 to 1.28.0 ([#2697](https://github.com/aws-powertools/powertools-lambda-python/issues/2697))
* **deps-dev:** bump typed-ast from 1.5.4 to 1.5.5 ([#2670](https://github.com/aws-powertools/powertools-lambda-python/issues/2670))
* **deps-dev:** bump aws-cdk-aws-lambda-python-alpha from 2.131.0a0 to 2.132.1a0 ([#3944](https://github.com/aws-powertools/powertools-lambda-python/issues/3944))
* **deps-dev:** bump ruff from 0.0.275 to 0.0.276 ([#2655](https://github.com/aws-powertools/powertools-lambda-python/issues/2655))
* **deps-dev:** bump sentry-sdk from 1.26.0 to 1.27.0 ([#2652](https://github.com/aws-powertools/powertools-lambda-python/issues/2652))
* **deps-dev:** bump sentry-sdk from 2.11.0 to 2.12.0 ([#4861](https://github.com/aws-powertools/powertools-lambda-python/issues/4861))
* **deps-dev:** bump the boto-typing group with 1 update ([#3950](https://github.com/aws-powertools/powertools-lambda-python/issues/3950))
* **deps-dev:** bump sentry-sdk from 1.41.0 to 1.42.0 ([#3951](https://github.com/aws-powertools/powertools-lambda-python/issues/3951))
* **deps-dev:** bump mypy-boto3-appconfig from 1.27.0 to 1.28.0 ([#2722](https://github.com/aws-powertools/powertools-lambda-python/issues/2722))
* **deps-dev:** bump mypy-boto3-s3 from 1.27.0 to 1.28.0 ([#2721](https://github.com/aws-powertools/powertools-lambda-python/issues/2721))
* **deps-dev:** bump mypy-boto3-logs from 1.27.0 to 1.28.1 ([#2723](https://github.com/aws-powertools/powertools-lambda-python/issues/2723))
* **deps-dev:** bump mypy-boto3-ssm from 1.27.0 to 1.28.0 ([#2724](https://github.com/aws-powertools/powertools-lambda-python/issues/2724))
* **deps-dev:** bump mypy-boto3-xray from 1.27.0 to 1.28.0 ([#2720](https://github.com/aws-powertools/powertools-lambda-python/issues/2720))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.88 to 0.1.89 ([#3952](https://github.com/aws-powertools/powertools-lambda-python/issues/3952))
* **deps-dev:** bump coverage from 7.4.3 to 7.4.4 ([#3959](https://github.com/aws-powertools/powertools-lambda-python/issues/3959))
* **deps-dev:** bump mypy-boto3-dynamodb from 1.27.0 to 1.28.0 ([#2740](https://github.com/aws-powertools/powertools-lambda-python/issues/2740))
* **deps-dev:** bump the boto-typing group with 1 update ([#3956](https://github.com/aws-powertools/powertools-lambda-python/issues/3956))
* **deps-dev:** bump mypy-boto3-appconfigdata from 1.26.70 to 1.27.0 ([#2636](https://github.com/aws-powertools/powertools-lambda-python/issues/2636))
* **deps-dev:** bump mypy-boto3-secretsmanager from 1.27.0 to 1.28.0 ([#2739](https://github.com/aws-powertools/powertools-lambda-python/issues/2739))
* **deps-dev:** bump mypy-boto3-dynamodb from 1.26.158 to 1.26.164 ([#2622](https://github.com/aws-powertools/powertools-lambda-python/issues/2622))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.89 to 0.1.90 ([#3957](https://github.com/aws-powertools/powertools-lambda-python/issues/3957))
* **deps-dev:** bump sentry-sdk from 1.27.1 to 1.28.0 ([#2741](https://github.com/aws-powertools/powertools-lambda-python/issues/2741))
* **deps-dev:** bump the boto-typing group with 1 update ([#3964](https://github.com/aws-powertools/powertools-lambda-python/issues/3964))
* **deps-dev:** bump aws-cdk from 2.85.0 to 2.86.0 ([#2613](https://github.com/aws-powertools/powertools-lambda-python/issues/2613))
* **deps-dev:** bump mypy-boto3-ssm from 1.26.97 to 1.26.162 ([#2606](https://github.com/aws-powertools/powertools-lambda-python/issues/2606))
* **deps-dev:** bump mypy-boto3-s3 from 1.26.155 to 1.26.163 ([#2608](https://github.com/aws-powertools/powertools-lambda-python/issues/2608))
* **deps-dev:** bump mypy-boto3-lambda from 1.26.157 to 1.26.163 ([#2607](https://github.com/aws-powertools/powertools-lambda-python/issues/2607))
* **deps-dev:** bump aws-cdk from 2.132.0 to 2.132.1 ([#3938](https://github.com/aws-powertools/powertools-lambda-python/issues/3938))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.224 to 0.1.228 ([#4867](https://github.com/aws-powertools/powertools-lambda-python/issues/4867))
* **deps-dev:** bump aws-cdk from 2.132.1 to 2.133.0 ([#3963](https://github.com/aws-powertools/powertools-lambda-python/issues/3963))
* **deps-dev:** bump types-python-dateutil from 2.8.19.20240311 to 2.9.0.20240315 ([#3966](https://github.com/aws-powertools/powertools-lambda-python/issues/3966))
* **deps-dev:** bump black from 24.2.0 to 24.3.0 ([#3968](https://github.com/aws-powertools/powertools-lambda-python/issues/3968))
* **deps-dev:** bump aws-cdk-lib from 2.132.1 to 2.133.0 ([#3965](https://github.com/aws-powertools/powertools-lambda-python/issues/3965))
* **deps-dev:** bump ruff from 0.3.2 to 0.3.3 ([#3967](https://github.com/aws-powertools/powertools-lambda-python/issues/3967))
* **deps-dev:** bump ruff from 0.0.272 to 0.0.275 ([#2586](https://github.com/aws-powertools/powertools-lambda-python/issues/2586))
* **deps-dev:** bump the boto-typing group with 2 updates ([#3974](https://github.com/aws-powertools/powertools-lambda-python/issues/3974))
* **deps-dev:** bump ruff from 0.0.277 to 0.0.278 ([#2758](https://github.com/aws-powertools/powertools-lambda-python/issues/2758))
* **deps-dev:** bump pytest-asyncio from 0.21.0 to 0.21.1 ([#2756](https://github.com/aws-powertools/powertools-lambda-python/issues/2756))
* **deps-dev:** bump mypy from 1.4.0 to 1.4.1 ([#2574](https://github.com/aws-powertools/powertools-lambda-python/issues/2574))
* **deps-dev:** bump mkdocs-material from 9.1.16 to 9.1.17 ([#2564](https://github.com/aws-powertools/powertools-lambda-python/issues/2564))
* **deps-dev:** bump cfn-lint from 0.77.10 to 0.78.1 ([#2757](https://github.com/aws-powertools/powertools-lambda-python/issues/2757))
* **deps-dev:** bump aws-cdk-lib from 2.131.0 to 2.132.1 ([#3936](https://github.com/aws-powertools/powertools-lambda-python/issues/3936))
* **deps-dev:** bump pytest from 7.3.2 to 7.4.0 ([#2557](https://github.com/aws-powertools/powertools-lambda-python/issues/2557))
* **deps-dev:** bump types-python-dateutil from 2.9.0.20240315 to 2.9.0.20240316 ([#3977](https://github.com/aws-powertools/powertools-lambda-python/issues/3977))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.90 to 0.1.91 ([#3975](https://github.com/aws-powertools/powertools-lambda-python/issues/3975))
* **deps-dev:** bump ijson from 3.2.1 to 3.2.2 ([#2526](https://github.com/aws-powertools/powertools-lambda-python/issues/2526))
* **deps-dev:** bump mypy-boto3-dynamodb from 1.26.152 to 1.26.158 ([#2528](https://github.com/aws-powertools/powertools-lambda-python/issues/2528))
* **deps-dev:** bump mypy-boto3-s3 from 1.28.0 to 1.28.3 ([#2774](https://github.com/aws-powertools/powertools-lambda-python/issues/2774))
* **deps-dev:** bump aws-cdk from 2.84.0 to 2.85.0 ([#2524](https://github.com/aws-powertools/powertools-lambda-python/issues/2524))
* **deps-dev:** bump sentry-sdk from 1.25.1 to 1.26.0 ([#2527](https://github.com/aws-powertools/powertools-lambda-python/issues/2527))
* **deps-dev:** bump flake8-variables-names from 0.0.5 to 0.0.6 ([#2525](https://github.com/aws-powertools/powertools-lambda-python/issues/2525))
* **deps-dev:** bump sentry-sdk from 1.28.0 to 1.28.1 ([#2772](https://github.com/aws-powertools/powertools-lambda-python/issues/2772))
* **deps-dev:** bump mkdocs-material from 9.5.13 to 9.5.14 ([#3978](https://github.com/aws-powertools/powertools-lambda-python/issues/3978))
* **deps-dev:** bump aws-cdk-aws-lambda-python-alpha from 2.132.1a0 to 2.133.0a0 ([#3976](https://github.com/aws-powertools/powertools-lambda-python/issues/3976))
* **deps-dev:** bump the boto-typing group with 2 updates ([#3982](https://github.com/aws-powertools/powertools-lambda-python/issues/3982))
* **deps-dev:** bump mypy-boto3-secretsmanager from 1.28.0 to 1.28.3 ([#2773](https://github.com/aws-powertools/powertools-lambda-python/issues/2773))
* **deps-dev:** bump mypy from 1.3.0 to 1.4.0 ([#2509](https://github.com/aws-powertools/powertools-lambda-python/issues/2509))
* **deps-dev:** bump mypy-boto3-lambda from 1.26.147 to 1.26.157 ([#2507](https://github.com/aws-powertools/powertools-lambda-python/issues/2507))
* **deps-dev:** bump cfn-lint from 0.77.9 to 0.77.10 ([#2508](https://github.com/aws-powertools/powertools-lambda-python/issues/2508))
* **deps-dev:** bump mypy-boto3-cloudformation from 1.26.149 to 1.26.156 ([#2503](https://github.com/aws-powertools/powertools-lambda-python/issues/2503))
* **deps-dev:** bump mypy-boto3-s3 from 1.26.153 to 1.26.155 ([#2498](https://github.com/aws-powertools/powertools-lambda-python/issues/2498))
* **deps-dev:** bump hvac from 1.1.0 to 1.1.1 ([#2497](https://github.com/aws-powertools/powertools-lambda-python/issues/2497))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.91 to 0.1.94 ([#3985](https://github.com/aws-powertools/powertools-lambda-python/issues/3985))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.223 to 0.1.224 ([#4855](https://github.com/aws-powertools/powertools-lambda-python/issues/4855))
* **deps-dev:** bump pytest-mock from 3.10.0 to 3.11.1 ([#2485](https://github.com/aws-powertools/powertools-lambda-python/issues/2485))
* **deps-dev:** bump pytest-asyncio from 0.23.5.post1 to 0.23.6 ([#3984](https://github.com/aws-powertools/powertools-lambda-python/issues/3984))
* **deps-dev:** bump the boto-typing group with 1 update ([#3991](https://github.com/aws-powertools/powertools-lambda-python/issues/3991))
* **deps-dev:** bump mypy-boto3-s3 from 1.28.3 to 1.28.3.post1 ([#2786](https://github.com/aws-powertools/powertools-lambda-python/issues/2786))
* **deps-dev:** bump mkdocs-material from 9.1.15 to 9.1.16 ([#2470](https://github.com/aws-powertools/powertools-lambda-python/issues/2470))
* **deps-dev:** bump flake8-comprehensions from 3.12.0 to 3.13.0 ([#2471](https://github.com/aws-powertools/powertools-lambda-python/issues/2471))
* **deps-dev:** bump cfn-lint from 0.77.8 to 0.77.9 ([#2472](https://github.com/aws-powertools/powertools-lambda-python/issues/2472))
* **deps-dev:** bump mypy-boto3-secretsmanager from 1.28.3 to 1.28.3.post1 ([#2785](https://github.com/aws-powertools/powertools-lambda-python/issues/2785))
* **deps-dev:** bump aws-cdk from 2.83.1 to 2.84.0 ([#2460](https://github.com/aws-powertools/powertools-lambda-python/issues/2460))
* **deps-dev:** bump sentry-sdk from 1.42.0 to 1.43.0 ([#3992](https://github.com/aws-powertools/powertools-lambda-python/issues/3992))
* **deps-dev:** bump mypy-boto3-s3 from 1.26.127 to 1.26.153 ([#2452](https://github.com/aws-powertools/powertools-lambda-python/issues/2452))
* **deps-dev:** bump cfn-lint from 0.77.7 to 0.77.8 ([#2451](https://github.com/aws-powertools/powertools-lambda-python/issues/2451))
* **deps-dev:** bump aws-cdk from 2.131.0 to 2.132.0 ([#3928](https://github.com/aws-powertools/powertools-lambda-python/issues/3928))
* **deps-dev:** bump pytest from 7.3.1 to 7.3.2 ([#2443](https://github.com/aws-powertools/powertools-lambda-python/issues/2443))
* **deps-dev:** bump filelock from 3.12.0 to 3.12.2 ([#2446](https://github.com/aws-powertools/powertools-lambda-python/issues/2446))
* **deps-dev:** bump ijson from 3.2.0.post0 to 3.2.1 ([#2441](https://github.com/aws-powertools/powertools-lambda-python/issues/2441))
* **deps-dev:** bump mypy-boto3-dynamodb from 1.26.115 to 1.26.152 ([#2444](https://github.com/aws-powertools/powertools-lambda-python/issues/2444))
* **deps-dev:** bump cfn-lint from 1.9.1 to 1.9.3 ([#4866](https://github.com/aws-powertools/powertools-lambda-python/issues/4866))
* **deps-dev:** bump aws-cdk from 2.83.0 to 2.83.1 ([#2432](https://github.com/aws-powertools/powertools-lambda-python/issues/2432))
* **deps-dev:** bump cfn-lint from 0.77.6 to 0.77.7 ([#2414](https://github.com/aws-powertools/powertools-lambda-python/issues/2414))
* **deps-dev:** bump mypy-boto3-s3 from 1.28.3.post1 to 1.28.3.post2 ([#2793](https://github.com/aws-powertools/powertools-lambda-python/issues/2793))
* **deps-dev:** bump sentry-sdk from 1.25.0 to 1.25.1 ([#2408](https://github.com/aws-powertools/powertools-lambda-python/issues/2408))
* **deps-dev:** bump mypy-boto3-cloudformation from 1.26.147 to 1.26.149 ([#2410](https://github.com/aws-powertools/powertools-lambda-python/issues/2410))
* **deps-dev:** bump aws-cdk from 2.82.0 to 2.83.0 ([#2406](https://github.com/aws-powertools/powertools-lambda-python/issues/2406))
* **deps-dev:** bump mypy-boto3-logs from 1.26.53 to 1.26.149 ([#2409](https://github.com/aws-powertools/powertools-lambda-python/issues/2409))
* **deps-dev:** bump mkdocs-material from 9.1.18 to 9.1.19 ([#2798](https://github.com/aws-powertools/powertools-lambda-python/issues/2798))
* **deps-dev:** bump mypy-boto3-secretsmanager from 1.28.3.post1 to 1.28.3.post2 ([#2794](https://github.com/aws-powertools/powertools-lambda-python/issues/2794))
* **deps-dev:** bump types-python-dateutil from 2.8.19.13 to 2.8.19.14 ([#2807](https://github.com/aws-powertools/powertools-lambda-python/issues/2807))
* **deps-dev:** bump mypy-boto3-s3 from 1.28.3.post2 to 1.28.8 ([#2808](https://github.com/aws-powertools/powertools-lambda-python/issues/2808))
* **deps-dev:** bump ruff from 0.3.3 to 0.3.4 ([#3996](https://github.com/aws-powertools/powertools-lambda-python/issues/3996))
* **deps-dev:** bump pytest-mock from 3.12.0 to 3.13.0 ([#3999](https://github.com/aws-powertools/powertools-lambda-python/issues/3999))
* **deps-dev:** bump mypy-boto3-logs from 1.34.66 to 1.34.151 in the boto-typing group ([#4853](https://github.com/aws-powertools/powertools-lambda-python/issues/4853))
* **deps-dev:** bump mypy-boto3-cloudformation from 1.26.108 to 1.26.147 ([#2383](https://github.com/aws-powertools/powertools-lambda-python/issues/2383))
* **deps-dev:** bump mypy-boto3-lambda from 1.26.122 to 1.26.147 ([#2382](https://github.com/aws-powertools/powertools-lambda-python/issues/2382))
* **deps-dev:** bump sentry-sdk from 1.24.0 to 1.25.0 ([#2374](https://github.com/aws-powertools/powertools-lambda-python/issues/2374))
* **deps-dev:** bump aws-cdk from 2.81.0 to 2.82.0 ([#2373](https://github.com/aws-powertools/powertools-lambda-python/issues/2373))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.94 to 0.1.96 ([#4002](https://github.com/aws-powertools/powertools-lambda-python/issues/4002))
* **deps-dev:** bump cfn-lint from 0.86.0 to 0.86.1 ([#3998](https://github.com/aws-powertools/powertools-lambda-python/issues/3998))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.96 to 0.1.99 ([#4008](https://github.com/aws-powertools/powertools-lambda-python/issues/4008))
* **deps-dev:** bump pytest-mock from 3.13.0 to 3.14.0 ([#4007](https://github.com/aws-powertools/powertools-lambda-python/issues/4007))
* **deps-dev:** bump cfn-lint from 0.77.5 to 0.77.6 ([#2360](https://github.com/aws-powertools/powertools-lambda-python/issues/2360))
* **deps-dev:** bump types-requests from 2.31.0.1 to 2.31.0.2 ([#2806](https://github.com/aws-powertools/powertools-lambda-python/issues/2806))
* **deps-dev:** bump aws-cdk from 2.87.0 to 2.88.0 ([#2812](https://github.com/aws-powertools/powertools-lambda-python/issues/2812))
* **deps-dev:** bump types-requests from 2.31.0.0 to 2.31.0.1 ([#2339](https://github.com/aws-powertools/powertools-lambda-python/issues/2339))
* **deps-dev:** bump coverage from 7.2.6 to 7.2.7 ([#2338](https://github.com/aws-powertools/powertools-lambda-python/issues/2338))
* **deps-dev:** bump mkdocs-material from 9.1.14 to 9.1.15 ([#2337](https://github.com/aws-powertools/powertools-lambda-python/issues/2337))
* **deps-dev:** bump aws-cdk from 2.80.0 to 2.81.0 ([#2332](https://github.com/aws-powertools/powertools-lambda-python/issues/2332))
* **deps-dev:** bump coverage from 7.2.5 to 7.2.6 ([#2326](https://github.com/aws-powertools/powertools-lambda-python/issues/2326))
* **deps-dev:** bump pytest-cov from 4.0.0 to 4.1.0 ([#2327](https://github.com/aws-powertools/powertools-lambda-python/issues/2327))
* **deps-dev:** bump types-redis from 4.6.0.20240218 to 4.6.0.20240311 ([#3931](https://github.com/aws-powertools/powertools-lambda-python/issues/3931))
* **deps-dev:** bump types-requests from 2.30.0.0 to 2.31.0.0 ([#2315](https://github.com/aws-powertools/powertools-lambda-python/issues/2315))
* **deps-dev:** bump sentry-sdk from 1.23.1 to 1.24.0 ([#2314](https://github.com/aws-powertools/powertools-lambda-python/issues/2314))
* **deps-dev:** bump types-python-dateutil from 2.8.19.20240106 to 2.8.19.20240311 ([#3932](https://github.com/aws-powertools/powertools-lambda-python/issues/3932))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.99 to 0.1.101 ([#4015](https://github.com/aws-powertools/powertools-lambda-python/issues/4015))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.83 to 0.1.87 ([#3930](https://github.com/aws-powertools/powertools-lambda-python/issues/3930))
* **deps-dev:** bump aws-cdk from 2.79.1 to 2.80.0 ([#2305](https://github.com/aws-powertools/powertools-lambda-python/issues/2305))
* **deps-dev:** bump cfn-lint from 0.78.1 to 0.78.2 ([#2823](https://github.com/aws-powertools/powertools-lambda-python/issues/2823))
* **deps-dev:** bump mkdocs-material from 9.1.13 to 9.1.14 ([#2304](https://github.com/aws-powertools/powertools-lambda-python/issues/2304))
* **deps-dev:** bump httpx from 0.24.0 to 0.24.1 ([#2298](https://github.com/aws-powertools/powertools-lambda-python/issues/2298))
* **deps-dev:** bump pytest-xdist from 3.3.0 to 3.3.1 ([#2297](https://github.com/aws-powertools/powertools-lambda-python/issues/2297))
* **deps-dev:** bump mypy-boto3-secretsmanager from 1.26.116 to 1.26.135 ([#2282](https://github.com/aws-powertools/powertools-lambda-python/issues/2282))
* **deps-dev:** bump sentry-sdk from 1.23.0 to 1.23.1 ([#2283](https://github.com/aws-powertools/powertools-lambda-python/issues/2283))
* **deps-dev:** bump mkdocs-material from 9.1.12 to 9.1.13 ([#2280](https://github.com/aws-powertools/powertools-lambda-python/issues/2280))
* **deps-dev:** bump cfn-lint from 1.8.2 to 1.9.1 ([#4851](https://github.com/aws-powertools/powertools-lambda-python/issues/4851))
* **deps-dev:** bump ruff from 0.0.278 to 0.0.279 ([#2822](https://github.com/aws-powertools/powertools-lambda-python/issues/2822))
* **deps-dev:** bump ruff from 0.3.0 to 0.3.2 ([#3925](https://github.com/aws-powertools/powertools-lambda-python/issues/3925))
* **deps-dev:** bump mypy from 1.8.0 to 1.9.0 ([#3921](https://github.com/aws-powertools/powertools-lambda-python/issues/3921))
* **deps-dev:** bump sentry-sdk from 1.22.2 to 1.23.0 ([#2264](https://github.com/aws-powertools/powertools-lambda-python/issues/2264))
* **deps-dev:** bump bandit from 1.7.7 to 1.7.8 ([#3920](https://github.com/aws-powertools/powertools-lambda-python/issues/3920))
* **deps-dev:** bump filelock from 3.13.1 to 3.13.3 ([#4014](https://github.com/aws-powertools/powertools-lambda-python/issues/4014))
* **deps-dev:** bump mkdocs-material from 9.1.11 to 9.1.12 ([#2253](https://github.com/aws-powertools/powertools-lambda-python/issues/2253))
* **deps-dev:** bump pytest-xdist from 3.2.1 to 3.3.0 ([#2251](https://github.com/aws-powertools/powertools-lambda-python/issues/2251))
* **deps-dev:** bump aws-cdk from 2.79.0 to 2.79.1 ([#2252](https://github.com/aws-powertools/powertools-lambda-python/issues/2252))
* **deps-dev:** bump pytest-cov from 4.1.0 to 5.0.0 ([#4013](https://github.com/aws-powertools/powertools-lambda-python/issues/4013))
* **deps-dev:** bump mkdocs-material from 9.5.14 to 9.5.15 ([#4016](https://github.com/aws-powertools/powertools-lambda-python/issues/4016))
* **deps-dev:** bump ruff from 0.0.279 to 0.0.280 ([#2836](https://github.com/aws-powertools/powertools-lambda-python/issues/2836))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.101 to 0.1.104 ([#4020](https://github.com/aws-powertools/powertools-lambda-python/issues/4020))
* **deps-dev:** bump mypy-boto3-cloudformation from 1.28.0 to 1.28.10 ([#2837](https://github.com/aws-powertools/powertools-lambda-python/issues/2837))
* **deps-dev:** bump pytest-asyncio from 0.23.5 to 0.23.5.post1 ([#3923](https://github.com/aws-powertools/powertools-lambda-python/issues/3923))
* **deps-dev:** bump the boto-typing group with 2 updates ([#3919](https://github.com/aws-powertools/powertools-lambda-python/issues/3919))
* **deps-dev:** bump the boto-typing group with 1 update ([#4029](https://github.com/aws-powertools/powertools-lambda-python/issues/4029))
* **deps-dev:** bump aws-cdk from 2.133.0 to 2.134.0 ([#4032](https://github.com/aws-powertools/powertools-lambda-python/issues/4032))
* **deps-dev:** bump aws-cdk from 2.78.0 to 2.79.0 ([#2235](https://github.com/aws-powertools/powertools-lambda-python/issues/2235))
* **deps-dev:** bump mypy from 1.2.0 to 1.3.0 ([#2233](https://github.com/aws-powertools/powertools-lambda-python/issues/2233))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.104 to 0.1.105 ([#4030](https://github.com/aws-powertools/powertools-lambda-python/issues/4030))
* **deps-dev:** bump types-python-dateutil from 2.8.19.12 to 2.8.19.13 ([#2234](https://github.com/aws-powertools/powertools-lambda-python/issues/2234))
* **deps-dev:** bump aws-cdk-lib from 2.133.0 to 2.134.0 ([#4031](https://github.com/aws-powertools/powertools-lambda-python/issues/4031))
* **deps-dev:** bump mypy-boto3-dynamodb from 1.28.0 to 1.28.11 ([#2847](https://github.com/aws-powertools/powertools-lambda-python/issues/2847))
* **deps-dev:** bump mkdocs-material from 9.1.9 to 9.1.11 ([#2229](https://github.com/aws-powertools/powertools-lambda-python/issues/2229))
* **deps-dev:** bump cfn-lint from 0.77.4 to 0.77.5 ([#2228](https://github.com/aws-powertools/powertools-lambda-python/issues/2228))
* **deps-dev:** bump mypy-boto3-lambda from 1.28.0 to 1.28.11 ([#2845](https://github.com/aws-powertools/powertools-lambda-python/issues/2845))
* **deps-dev:** bump sentry-sdk from 1.43.0 to 1.44.0 ([#4040](https://github.com/aws-powertools/powertools-lambda-python/issues/4040))
* **deps-dev:** bump aws-cdk-aws-lambda-python-alpha from 2.133.0a0 to 2.134.0a0 ([#4039](https://github.com/aws-powertools/powertools-lambda-python/issues/4039))
* **deps-dev:** bump mypy-boto3-cloudwatch from 1.26.99 to 1.26.127 ([#2219](https://github.com/aws-powertools/powertools-lambda-python/issues/2219))
* **deps-dev:** bump types-requests from 2.29.0.0 to 2.30.0.0 ([#2220](https://github.com/aws-powertools/powertools-lambda-python/issues/2220))
* **deps-dev:** bump mypy-boto3-s3 from 1.26.116 to 1.26.127 ([#2218](https://github.com/aws-powertools/powertools-lambda-python/issues/2218))
* **deps-dev:** bump cfn-lint from 0.78.2 to 0.79.3 ([#2854](https://github.com/aws-powertools/powertools-lambda-python/issues/2854))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.105 to 0.1.106 ([#4048](https://github.com/aws-powertools/powertools-lambda-python/issues/4048))
* **deps-dev:** bump mypy-boto3-ssm from 1.28.0 to 1.28.12 ([#2863](https://github.com/aws-powertools/powertools-lambda-python/issues/2863))
* **deps-dev:** bump aws-cdk from 2.77.0 to 2.78.0 ([#2202](https://github.com/aws-powertools/powertools-lambda-python/issues/2202))
* **deps-dev:** bump the boto-typing group with 1 update ([#4047](https://github.com/aws-powertools/powertools-lambda-python/issues/4047))
* **deps-dev:** bump mkdocs-material from 9.5.15 to 9.5.16 ([#4050](https://github.com/aws-powertools/powertools-lambda-python/issues/4050))
* **deps-dev:** bump mypy-boto3-appconfig from 1.28.0 to 1.28.12 ([#2861](https://github.com/aws-powertools/powertools-lambda-python/issues/2861))
* **deps-dev:** bump ruff from 0.3.4 to 0.3.5 ([#4049](https://github.com/aws-powertools/powertools-lambda-python/issues/4049))
* **deps-dev:** bump cfn-lint from 0.79.3 to 0.79.4 ([#2862](https://github.com/aws-powertools/powertools-lambda-python/issues/2862))
* **deps-dev:** bump mkdocs-material from 9.1.8 to 9.1.9 ([#2190](https://github.com/aws-powertools/powertools-lambda-python/issues/2190))
* **deps-dev:** bump types-requests from 2.28.11.17 to 2.29.0.0 ([#2187](https://github.com/aws-powertools/powertools-lambda-python/issues/2187))
* **deps-dev:** bump coverage from 7.2.4 to 7.2.5 ([#2186](https://github.com/aws-powertools/powertools-lambda-python/issues/2186))
* **deps-dev:** bump coverage from 7.2.3 to 7.2.4 ([#2179](https://github.com/aws-powertools/powertools-lambda-python/issues/2179))
* **deps-dev:** bump cfn-lint from 0.77.3 to 0.77.4 ([#2178](https://github.com/aws-powertools/powertools-lambda-python/issues/2178))
* **deps-dev:** bump mypy-boto3-xray from 1.26.11.post1 to 1.26.122 ([#2173](https://github.com/aws-powertools/powertools-lambda-python/issues/2173))
* **deps-dev:** bump aws-cdk from 2.76.0 to 2.77.0 ([#2174](https://github.com/aws-powertools/powertools-lambda-python/issues/2174))
* **deps-dev:** bump mypy-boto3-lambda from 1.26.115 to 1.26.122 ([#2172](https://github.com/aws-powertools/powertools-lambda-python/issues/2172))
* **deps-dev:** bump cfn-lint from 0.77.2 to 0.77.3 ([#2165](https://github.com/aws-powertools/powertools-lambda-python/issues/2165))
* **deps-dev:** bump mkdocs-material from 9.1.6 to 9.1.8 ([#2162](https://github.com/aws-powertools/powertools-lambda-python/issues/2162))
* **deps-dev:** bump importlib-metadata from 6.5.0 to 6.6.0 ([#2163](https://github.com/aws-powertools/powertools-lambda-python/issues/2163))
* **deps-dev:** bump mypy-boto3-cloudwatch from 1.28.0 to 1.28.12 ([#2865](https://github.com/aws-powertools/powertools-lambda-python/issues/2865))
* **deps-dev:** bump mkdocs-material from 9.5.16 to 9.5.17 ([#4056](https://github.com/aws-powertools/powertools-lambda-python/issues/4056))
* **deps-dev:** bump aws-cdk-lib from 2.134.0 to 2.135.0 ([#4057](https://github.com/aws-powertools/powertools-lambda-python/issues/4057))
* **deps-dev:** bump aws-cdk from 2.75.1 to 2.76.0 ([#2154](https://github.com/aws-powertools/powertools-lambda-python/issues/2154))
* **deps-dev:** bump mypy-boto3-cloudformation from 1.28.10 to 1.28.12 ([#2864](https://github.com/aws-powertools/powertools-lambda-python/issues/2864))
* **deps-dev:** bump mypy-boto3-s3 from 1.26.104 to 1.26.116 ([#2149](https://github.com/aws-powertools/powertools-lambda-python/issues/2149))
* **deps-dev:** bump aws-cdk from 2.75.0 to 2.75.1 ([#2150](https://github.com/aws-powertools/powertools-lambda-python/issues/2150))
* **deps-dev:** bump cfn-lint from 0.77.1 to 0.77.2 ([#2148](https://github.com/aws-powertools/powertools-lambda-python/issues/2148))
* **deps-dev:** bump mypy-boto3-secretsmanager from 1.26.89 to 1.26.116 ([#2147](https://github.com/aws-powertools/powertools-lambda-python/issues/2147))
* **deps-dev:** bump aws-cdk from 2.134.0 to 2.135.0 ([#4058](https://github.com/aws-powertools/powertools-lambda-python/issues/4058))
* **deps-dev:** bump importlib-metadata from 6.4.1 to 6.5.0 ([#2141](https://github.com/aws-powertools/powertools-lambda-python/issues/2141))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.82 to 0.1.83 ([#3908](https://github.com/aws-powertools/powertools-lambda-python/issues/3908))
* **deps-dev:** bump filelock from 3.11.0 to 3.12.0 ([#2142](https://github.com/aws-powertools/powertools-lambda-python/issues/2142))
* **deps-dev:** bump cfn-lint from 0.79.4 to 0.79.5 ([#2870](https://github.com/aws-powertools/powertools-lambda-python/issues/2870))
* **deps-dev:** bump the boto-typing group with 2 updates ([#4062](https://github.com/aws-powertools/powertools-lambda-python/issues/4062))
* **deps-dev:** bump importlib-metadata from 6.3.0 to 6.4.1 ([#2134](https://github.com/aws-powertools/powertools-lambda-python/issues/2134))
* **deps-dev:** bump mypy-boto3-lambda from 1.26.114 to 1.26.115 ([#2135](https://github.com/aws-powertools/powertools-lambda-python/issues/2135))
* **deps-dev:** bump cfn-lint from 0.77.0 to 0.77.1 ([#2133](https://github.com/aws-powertools/powertools-lambda-python/issues/2133))
* **deps-dev:** bump mypy-boto3-dynamodb from 1.26.97.post1 to 1.26.115 ([#2132](https://github.com/aws-powertools/powertools-lambda-python/issues/2132))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.222 to 0.1.223 ([#4843](https://github.com/aws-powertools/powertools-lambda-python/issues/4843))
* **deps-dev:** bump pytest from 7.3.0 to 7.3.1 ([#2127](https://github.com/aws-powertools/powertools-lambda-python/issues/2127))
* **deps-dev:** bump mypy-boto3-lambda from 1.26.109 to 1.26.114 ([#2126](https://github.com/aws-powertools/powertools-lambda-python/issues/2126))
* **deps-dev:** bump sentry-sdk from 1.31.0 to 1.32.0 ([#3192](https://github.com/aws-powertools/powertools-lambda-python/issues/3192))
* **deps-dev:** bump pytest from 8.3.1 to 8.3.2 ([#4824](https://github.com/aws-powertools/powertools-lambda-python/issues/4824))
* **deps-dev:** bump aws-cdk-aws-lambda-python-alpha from 2.134.0a0 to 2.135.0a0 ([#4063](https://github.com/aws-powertools/powertools-lambda-python/issues/4063))
* **deps-dev:** bump sentry-sdk from 1.44.0 to 1.44.1 ([#4065](https://github.com/aws-powertools/powertools-lambda-python/issues/4065))
* **deps-dev:** bump mypy-boto3-xray from 1.28.0 to 1.28.15 ([#2881](https://github.com/aws-powertools/powertools-lambda-python/issues/2881))
* **deps-dev:** bump flake8-comprehensions from 3.11.1 to 3.12.0 ([#2124](https://github.com/aws-powertools/powertools-lambda-python/issues/2124))
* **deps-dev:** bump aws-cdk from 2.73.0 to 2.74.0 ([#2125](https://github.com/aws-powertools/powertools-lambda-python/issues/2125))
* **deps-dev:** bump aws-cdk-lib from 2.73.0 to 2.74.0 ([#2123](https://github.com/aws-powertools/powertools-lambda-python/issues/2123))
* **deps-dev:** bump mypy-boto3-lambda from 1.28.11 to 1.28.15 ([#2878](https://github.com/aws-powertools/powertools-lambda-python/issues/2878))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.219 to 0.1.222 ([#4836](https://github.com/aws-powertools/powertools-lambda-python/issues/4836))
* **deps-dev:** bump mypy-boto3-appconfigdata from 1.28.0 to 1.28.15 ([#2879](https://github.com/aws-powertools/powertools-lambda-python/issues/2879))
* **deps-dev:** bump httpx from 0.23.3 to 0.24.0 ([#2111](https://github.com/aws-powertools/powertools-lambda-python/issues/2111))
* **deps-dev:** bump mypy from 1.1.1 to 1.2.0 ([#2096](https://github.com/aws-powertools/powertools-lambda-python/issues/2096))
* **deps-dev:** bump cfn-lint from 0.76.2 to 0.77.0 ([#2107](https://github.com/aws-powertools/powertools-lambda-python/issues/2107))
* **deps-dev:** bump pytest from 7.2.2 to 7.3.0 ([#2106](https://github.com/aws-powertools/powertools-lambda-python/issues/2106))
* **deps-dev:** bump importlib-metadata from 6.1.0 to 6.3.0 ([#2105](https://github.com/aws-powertools/powertools-lambda-python/issues/2105))
* **deps-dev:** bump mkdocs-material from 9.1.5 to 9.1.6 ([#2104](https://github.com/aws-powertools/powertools-lambda-python/issues/2104))
* **deps-dev:** bump mypy-boto3-lambda from 1.26.80 to 1.26.109 ([#2103](https://github.com/aws-powertools/powertools-lambda-python/issues/2103))
* **deps-dev:** bump mypy-boto3-logs from 1.28.1 to 1.28.15 ([#2880](https://github.com/aws-powertools/powertools-lambda-python/issues/2880))
* **deps-dev:** bump aws-cdk-lib from 2.72.1 to 2.73.0 ([#2097](https://github.com/aws-powertools/powertools-lambda-python/issues/2097))
* **deps-dev:** bump filelock from 3.10.7 to 3.11.0 ([#2094](https://github.com/aws-powertools/powertools-lambda-python/issues/2094))
* **deps-dev:** bump coverage from 7.2.2 to 7.2.3 ([#2092](https://github.com/aws-powertools/powertools-lambda-python/issues/2092))
* **deps-dev:** bump aws-cdk from 2.72.1 to 2.73.0 ([#2093](https://github.com/aws-powertools/powertools-lambda-python/issues/2093))
* **deps-dev:** bump mypy-boto3-cloudformation from 1.26.60 to 1.26.108 ([#2095](https://github.com/aws-powertools/powertools-lambda-python/issues/2095))
* **deps-dev:** bump types-python-dateutil from 2.8.19.11 to 2.8.19.12 ([#2085](https://github.com/aws-powertools/powertools-lambda-python/issues/2085))
* **deps-dev:** bump cfn-lint from 0.76.1 to 0.76.2 ([#2084](https://github.com/aws-powertools/powertools-lambda-python/issues/2084))
* **deps-dev:** bump aws-cdk from 2.72.0 to 2.72.1 ([#2081](https://github.com/aws-powertools/powertools-lambda-python/issues/2081))
* **deps-dev:** bump sentry-sdk from 1.40.6 to 1.41.0 ([#3905](https://github.com/aws-powertools/powertools-lambda-python/issues/3905))
* **deps-dev:** bump mkdocs-material from 9.1.4 to 9.1.5 ([#2077](https://github.com/aws-powertools/powertools-lambda-python/issues/2077))
* **deps-dev:** bump aws-cdk-lib from 2.72.0 to 2.72.1 ([#2076](https://github.com/aws-powertools/powertools-lambda-python/issues/2076))
* **deps-dev:** bump mypy-boto3-s3 from 1.26.99 to 1.26.104 ([#2075](https://github.com/aws-powertools/powertools-lambda-python/issues/2075))
* **deps-dev:** bump aws-cdk from 2.71.0 to 2.72.0 ([#2071](https://github.com/aws-powertools/powertools-lambda-python/issues/2071))
* **deps-dev:** bump mkdocs-material from 9.1.19 to 9.1.21 ([#2894](https://github.com/aws-powertools/powertools-lambda-python/issues/2894))
* **deps-dev:** bump aws-cdk-lib from 2.71.0 to 2.72.0 ([#2070](https://github.com/aws-powertools/powertools-lambda-python/issues/2070))
* **deps-dev:** bump black from 23.1.0 to 23.3.0 ([#2066](https://github.com/aws-powertools/powertools-lambda-python/issues/2066))
* **deps-dev:** bump aws-cdk from 2.70.0 to 2.71.0 ([#2067](https://github.com/aws-powertools/powertools-lambda-python/issues/2067))
* **deps-dev:** bump aws-cdk-lib from 2.70.0 to 2.71.0 ([#2065](https://github.com/aws-powertools/powertools-lambda-python/issues/2065))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.106 to 0.1.107 ([#4082](https://github.com/aws-powertools/powertools-lambda-python/issues/4082))
* **deps-dev:** bump types-requests from 2.28.11.16 to 2.28.11.17 ([#2061](https://github.com/aws-powertools/powertools-lambda-python/issues/2061))
* **deps-dev:** bump filelock from 3.10.4 to 3.10.7 ([#2055](https://github.com/aws-powertools/powertools-lambda-python/issues/2055))
* **deps-dev:** bump cfn-lint from 0.75.1 to 0.76.1 ([#2056](https://github.com/aws-powertools/powertools-lambda-python/issues/2056))
* **deps-dev:** bump types-python-dateutil from 2.8.19.10 to 2.8.19.11 ([#2057](https://github.com/aws-powertools/powertools-lambda-python/issues/2057))
* **deps-dev:** bump mypy-boto3-s3 from 1.26.97.post2 to 1.26.99 ([#2054](https://github.com/aws-powertools/powertools-lambda-python/issues/2054))
* **deps-dev:** bump mkdocs-material from 9.1.3 to 9.1.4 ([#2050](https://github.com/aws-powertools/powertools-lambda-python/issues/2050))
* **deps-dev:** bump filelock from 3.10.2 to 3.10.4 ([#2048](https://github.com/aws-powertools/powertools-lambda-python/issues/2048))
* **deps-dev:** bump mypy-boto3-cloudwatch from 1.26.52 to 1.26.99 ([#2049](https://github.com/aws-powertools/powertools-lambda-python/issues/2049))
* **deps-dev:** bump filelock from 3.10.1 to 3.10.2 ([#2045](https://github.com/aws-powertools/powertools-lambda-python/issues/2045))
* **deps-dev:** bump types-requests from 2.28.11.15 to 2.28.11.16 ([#2044](https://github.com/aws-powertools/powertools-lambda-python/issues/2044))
* **deps-dev:** bump mypy-boto3-s3 from 1.26.97 to 1.26.97.post2 ([#2043](https://github.com/aws-powertools/powertools-lambda-python/issues/2043))
* **deps-dev:** bump mypy-boto3-dynamodb from 1.26.97 to 1.26.97.post1 ([#2042](https://github.com/aws-powertools/powertools-lambda-python/issues/2042))
* **deps-dev:** bump filelock from 3.10.0 to 3.10.1 ([#2036](https://github.com/aws-powertools/powertools-lambda-python/issues/2036))
* **deps-dev:** bump aws-cdk from 2.69.0 to 2.70.0 ([#2039](https://github.com/aws-powertools/powertools-lambda-python/issues/2039))
* **deps-dev:** bump mypy-boto3-dynamodb from 1.26.87 to 1.26.97 ([#2035](https://github.com/aws-powertools/powertools-lambda-python/issues/2035))
* **deps-dev:** bump mypy-boto3-s3 from 1.26.62 to 1.26.97 ([#2037](https://github.com/aws-powertools/powertools-lambda-python/issues/2037))
* **deps-dev:** bump aws-cdk-lib from 2.69.0 to 2.70.0 ([#2038](https://github.com/aws-powertools/powertools-lambda-python/issues/2038))
* **deps-dev:** bump aws-cdk from 2.88.0 to 2.89.0 ([#2887](https://github.com/aws-powertools/powertools-lambda-python/issues/2887))
* **deps-dev:** bump mypy-boto3-ssm from 1.26.77 to 1.26.97 ([#2033](https://github.com/aws-powertools/powertools-lambda-python/issues/2033))
* **deps-dev:** bump flake8-comprehensions from 3.11.0 to 3.11.1 ([#2029](https://github.com/aws-powertools/powertools-lambda-python/issues/2029))
* **deps-dev:** bump cfn-lint from 0.75.0 to 0.75.1 ([#2027](https://github.com/aws-powertools/powertools-lambda-python/issues/2027))
* **deps-dev:** bump pytest-asyncio from 0.20.3 to 0.21.0 ([#2026](https://github.com/aws-powertools/powertools-lambda-python/issues/2026))
* **deps-dev:** bump the boto-typing group with 11 updates ([#2901](https://github.com/aws-powertools/powertools-lambda-python/issues/2901))
* **deps-dev:** bump cfn-lint from 0.74.3 to 0.75.0 ([#2020](https://github.com/aws-powertools/powertools-lambda-python/issues/2020))
* **deps-dev:** bump coverage from 7.2.1 to 7.2.2 ([#2021](https://github.com/aws-powertools/powertools-lambda-python/issues/2021))
* **deps-dev:** bump filelock from 3.9.1 to 3.10.0 ([#2019](https://github.com/aws-powertools/powertools-lambda-python/issues/2019))
* **deps-dev:** bump aws-cdk from 2.67.0 to 2.69.0 ([#2010](https://github.com/aws-powertools/powertools-lambda-python/issues/2010))
* **deps-dev:** bump cfn-lint from 0.86.1 to 0.86.2 ([#4081](https://github.com/aws-powertools/powertools-lambda-python/issues/4081))
* **deps-dev:** bump mkdocs-material from 9.1.2 to 9.1.3 ([#2009](https://github.com/aws-powertools/powertools-lambda-python/issues/2009))
* **deps-dev:** bump cfn-lint from 0.74.2 to 0.74.3 ([#2008](https://github.com/aws-powertools/powertools-lambda-python/issues/2008))
* **deps-dev:** bump filelock from 3.9.0 to 3.9.1 ([#2006](https://github.com/aws-powertools/powertools-lambda-python/issues/2006))
* **deps-dev:** bump aws-cdk-lib from 2.68.0 to 2.69.0 ([#2007](https://github.com/aws-powertools/powertools-lambda-python/issues/2007))
* **deps-dev:** bump cfn-lint from 0.74.1 to 0.74.2 ([#2005](https://github.com/aws-powertools/powertools-lambda-python/issues/2005))
* **deps-dev:** bump mypy from 0.982 to 1.1.1 ([#1985](https://github.com/aws-powertools/powertools-lambda-python/issues/1985))
* **deps-dev:** bump pytest-xdist from 3.2.0 to 3.2.1 ([#2000](https://github.com/aws-powertools/powertools-lambda-python/issues/2000))
* **deps-dev:** bump flake8-bugbear from 23.2.13 to 23.3.12 ([#2001](https://github.com/aws-powertools/powertools-lambda-python/issues/2001))
* **deps-dev:** bump bandit from 1.7.4 to 1.7.5 ([#1997](https://github.com/aws-powertools/powertools-lambda-python/issues/1997))
* **deps-dev:** bump cfn-lint from 0.79.5 to 0.79.6 ([#2899](https://github.com/aws-powertools/powertools-lambda-python/issues/2899))
* **deps-dev:** bump mypy-boto3-secretsmanager from 1.26.49 to 1.26.89 ([#1996](https://github.com/aws-powertools/powertools-lambda-python/issues/1996))
* **deps-dev:** bump mkdocs-material from 9.1.1 to 9.1.2 ([#1994](https://github.com/aws-powertools/powertools-lambda-python/issues/1994))
* **deps-dev:** bump mypy-boto3-dynamodb from 1.26.84 to 1.26.87 ([#1993](https://github.com/aws-powertools/powertools-lambda-python/issues/1993))
* **deps-dev:** bump sentry-sdk from 1.28.1 to 1.29.0 ([#2900](https://github.com/aws-powertools/powertools-lambda-python/issues/2900))
* **deps-dev:** bump aws-cdk-lib from 2.67.0 to 2.68.0 ([#1992](https://github.com/aws-powertools/powertools-lambda-python/issues/1992))
* **deps-dev:** bump cfn-lint from 0.74.0 to 0.74.1 ([#1988](https://github.com/aws-powertools/powertools-lambda-python/issues/1988))
* **deps-dev:** bump ruff from 0.0.280 to 0.0.281 ([#2891](https://github.com/aws-powertools/powertools-lambda-python/issues/2891))
* **deps-dev:** bump pytest from 7.2.1 to 7.2.2 ([#1980](https://github.com/aws-powertools/powertools-lambda-python/issues/1980))
* **deps-dev:** bump the boto-typing group with 1 update ([#3904](https://github.com/aws-powertools/powertools-lambda-python/issues/3904))
* **deps-dev:** bump types-python-dateutil from 2.8.19.9 to 2.8.19.10 ([#1973](https://github.com/aws-powertools/powertools-lambda-python/issues/1973))
* **deps-dev:** bump hvac from 1.0.2 to 1.1.0 ([#1983](https://github.com/aws-powertools/powertools-lambda-python/issues/1983))
* **deps-dev:** bump mkdocs-material from 9.1.0 to 9.1.1 ([#1984](https://github.com/aws-powertools/powertools-lambda-python/issues/1984))
* **deps-dev:** bump mypy-boto3-dynamodb from 1.26.24 to 1.26.84 ([#1981](https://github.com/aws-powertools/powertools-lambda-python/issues/1981))
* **deps-dev:** bump mkdocs-material from 9.0.15 to 9.1.0 ([#1976](https://github.com/aws-powertools/powertools-lambda-python/issues/1976))
* **deps-dev:** bump cfn-lint from 0.67.0 to 0.74.0 ([#1974](https://github.com/aws-powertools/powertools-lambda-python/issues/1974))
* **deps-dev:** bump aws-cdk-lib from 2.66.1 to 2.67.0 ([#1977](https://github.com/aws-powertools/powertools-lambda-python/issues/1977))
* **deps-dev:** bump aws-cdk-lib from 2.135.0 to 2.136.0 ([#4092](https://github.com/aws-powertools/powertools-lambda-python/issues/4092))
* **deps-dev:** bump ruff from 0.0.281 to 0.0.282 ([#2905](https://github.com/aws-powertools/powertools-lambda-python/issues/2905))
* **deps-dev:** bump aws-cdk from 2.135.0 to 2.136.0 ([#4090](https://github.com/aws-powertools/powertools-lambda-python/issues/4090))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.81 to 0.1.82 ([#3896](https://github.com/aws-powertools/powertools-lambda-python/issues/3896))
* **deps-dev:** bump mypy-boto3-lambda from 1.26.55 to 1.26.80 ([#1967](https://github.com/aws-powertools/powertools-lambda-python/issues/1967))
* **deps-dev:** bump types-redis from 4.6.0.20240311 to 4.6.0.20240409 ([#4094](https://github.com/aws-powertools/powertools-lambda-python/issues/4094))
* **deps-dev:** bump mkdocs-material from 9.5.12 to 9.5.13 ([#3895](https://github.com/aws-powertools/powertools-lambda-python/issues/3895))
* **deps-dev:** bump mkdocs-material from 9.0.14 to 9.0.15 ([#1959](https://github.com/aws-powertools/powertools-lambda-python/issues/1959))
* **deps-dev:** bump types-python-dateutil from 2.8.19.8 to 2.8.19.9 ([#1960](https://github.com/aws-powertools/powertools-lambda-python/issues/1960))
* **deps-dev:** bump the boto-typing group with 4 updates ([#2928](https://github.com/aws-powertools/powertools-lambda-python/issues/2928))
* **deps-dev:** bump coverage from 7.2.0 to 7.2.1 ([#1963](https://github.com/aws-powertools/powertools-lambda-python/issues/1963))
* **deps-dev:** bump aws-cdk from 2.89.0 to 2.90.0 ([#2932](https://github.com/aws-powertools/powertools-lambda-python/issues/2932))
* **deps-dev:** bump aws-cdk-lib from 2.66.0 to 2.66.1 ([#1954](https://github.com/aws-powertools/powertools-lambda-python/issues/1954))
* **deps-dev:** bump coverage from 7.1.0 to 7.2.0 ([#1951](https://github.com/aws-powertools/powertools-lambda-python/issues/1951))
* **deps-dev:** bump mkdocs-material from 9.0.13 to 9.0.14 ([#1952](https://github.com/aws-powertools/powertools-lambda-python/issues/1952))
* **deps-dev:** bump mypy-boto3-ssm from 1.26.43 to 1.26.77 ([#1949](https://github.com/aws-powertools/powertools-lambda-python/issues/1949))
* **deps-dev:** bump mkdocs-material from 9.5.30 to 9.5.31 ([#4877](https://github.com/aws-powertools/powertools-lambda-python/issues/4877))
* **deps-dev:** bump aws-cdk-lib from 2.65.0 to 2.66.0 ([#1948](https://github.com/aws-powertools/powertools-lambda-python/issues/1948))
* **deps-dev:** bump types-requests from 2.28.11.13 to 2.28.11.14 ([#1946](https://github.com/aws-powertools/powertools-lambda-python/issues/1946))
* **deps-dev:** bump types-python-dateutil from 2.8.19.7 to 2.8.19.8 ([#1945](https://github.com/aws-powertools/powertools-lambda-python/issues/1945))
* **deps-dev:** bump aws-cdk-aws-lambda-python-alpha from 2.135.0a0 to 2.136.0a0 ([#4095](https://github.com/aws-powertools/powertools-lambda-python/issues/4095))
* **deps-dev:** bump ruff from 0.0.282 to 0.0.283 ([#2937](https://github.com/aws-powertools/powertools-lambda-python/issues/2937))
* **deps-dev:** bump mkdocs-material from 9.0.12 to 9.0.13 ([#1944](https://github.com/aws-powertools/powertools-lambda-python/issues/1944))
* **deps-dev:** bump aws-cdk-lib from 2.64.0 to 2.65.0 ([#1938](https://github.com/aws-powertools/powertools-lambda-python/issues/1938))
* **deps-dev:** bump types-python-dateutil from 2.8.19.6 to 2.8.19.7 ([#1932](https://github.com/aws-powertools/powertools-lambda-python/issues/1932))
* **deps-dev:** bump types-requests from 2.28.11.12 to 2.28.11.13 ([#1933](https://github.com/aws-powertools/powertools-lambda-python/issues/1933))
* **deps-dev:** bump cfn-lint from 0.85.3 to 0.86.0 ([#3882](https://github.com/aws-powertools/powertools-lambda-python/issues/3882))
* **deps-dev:** bump mypy-boto3-appconfig from 1.26.63 to 1.26.71 ([#1928](https://github.com/aws-powertools/powertools-lambda-python/issues/1928))
* **deps-dev:** bump flake8-bugbear from 23.1.20 to 23.2.13 ([#1924](https://github.com/aws-powertools/powertools-lambda-python/issues/1924))
* **deps-dev:** bump mypy-boto3-appconfigdata from 1.26.0.post1 to 1.26.70 ([#1925](https://github.com/aws-powertools/powertools-lambda-python/issues/1925))
* **deps-dev:** bump ruff from 0.0.283 to 0.0.284 ([#2940](https://github.com/aws-powertools/powertools-lambda-python/issues/2940))
* **deps-dev:** bump mkdocs-material from 9.0.11 to 9.0.12 ([#1919](https://github.com/aws-powertools/powertools-lambda-python/issues/1919))
* **deps-dev:** bump aws-cdk-lib from 2.63.2 to 2.64.0 ([#1918](https://github.com/aws-powertools/powertools-lambda-python/issues/1918))
* **deps-dev:** bump types-redis from 4.6.0.20240425 to 4.6.0.20240726 ([#4831](https://github.com/aws-powertools/powertools-lambda-python/issues/4831))
* **deps-dev:** bump types-requests from 2.28.11.8 to 2.28.11.12 ([#1906](https://github.com/aws-powertools/powertools-lambda-python/issues/1906))
* **deps-dev:** bump pytest-xdist from 3.1.0 to 3.2.0 ([#1905](https://github.com/aws-powertools/powertools-lambda-python/issues/1905))
* **deps-dev:** bump the boto-typing group with 1 update ([#2944](https://github.com/aws-powertools/powertools-lambda-python/issues/2944))
* **deps-dev:** bump aws-cdk-lib from 2.63.0 to 2.63.2 ([#1904](https://github.com/aws-powertools/powertools-lambda-python/issues/1904))
* **deps-dev:** bump mkdocs-material from 9.0.10 to 9.0.11 ([#1896](https://github.com/aws-powertools/powertools-lambda-python/issues/1896))
* **deps-dev:** bump mypy-boto3-appconfig from 1.26.0.post1 to 1.26.63 ([#1895](https://github.com/aws-powertools/powertools-lambda-python/issues/1895))
* **deps-dev:** bump ruff from 0.5.4 to 0.5.5 ([#4823](https://github.com/aws-powertools/powertools-lambda-python/issues/4823))
* **deps-dev:** bump mkdocs-material from 9.0.9 to 9.0.10 ([#1888](https://github.com/aws-powertools/powertools-lambda-python/issues/1888))
* **deps-dev:** bump mypy-boto3-s3 from 1.26.58 to 1.26.62 ([#1889](https://github.com/aws-powertools/powertools-lambda-python/issues/1889))
* **deps-dev:** bump black from 22.12.0 to 23.1.0 ([#1886](https://github.com/aws-powertools/powertools-lambda-python/issues/1886))
* **deps-dev:** bump aws-cdk-lib from 2.62.2 to 2.63.0 ([#1887](https://github.com/aws-powertools/powertools-lambda-python/issues/1887))
* **deps-dev:** bump aws-cdk from 2.130.0 to 2.131.0 ([#3883](https://github.com/aws-powertools/powertools-lambda-python/issues/3883))
* **deps-dev:** bump flake8-bugbear from 22.12.6 to 23.1.20 ([#1854](https://github.com/aws-powertools/powertools-lambda-python/issues/1854))
* **deps-dev:** bump mkdocs-material from 9.0.6 to 9.0.8 ([#1874](https://github.com/aws-powertools/powertools-lambda-python/issues/1874))
* **deps-dev:** bump aws-cdk from 2.90.0 to 2.91.0 ([#2947](https://github.com/aws-powertools/powertools-lambda-python/issues/2947))
* **deps-dev:** bump isort from 5.11.4 to 5.11.5 ([#1875](https://github.com/aws-powertools/powertools-lambda-python/issues/1875))
* **deps-dev:** bump aws-cdk-lib from 2.62.1 to 2.62.2 ([#1869](https://github.com/aws-powertools/powertools-lambda-python/issues/1869))
* **deps-dev:** bump mypy-boto3-s3 from 1.26.0.post1 to 1.26.58 ([#1868](https://github.com/aws-powertools/powertools-lambda-python/issues/1868))
* **deps-dev:** bump aws-cdk-lib from 2.62.0 to 2.62.1 ([#1866](https://github.com/aws-powertools/powertools-lambda-python/issues/1866))
* **deps-dev:** bump mypy-boto3-cloudformation from 1.26.35.post1 to 1.26.57 ([#1865](https://github.com/aws-powertools/powertools-lambda-python/issues/1865))
* **deps-dev:** bump coverage from 7.0.5 to 7.1.0 ([#1862](https://github.com/aws-powertools/powertools-lambda-python/issues/1862))
* **deps-dev:** bump aws-cdk-lib from 2.61.1 to 2.62.0 ([#1863](https://github.com/aws-powertools/powertools-lambda-python/issues/1863))
* **deps-dev:** bump xenon from 0.9.0 to 0.9.1 ([#2955](https://github.com/aws-powertools/powertools-lambda-python/issues/2955))
* **deps-dev:** bump mypy-boto3-lambda from 1.26.49 to 1.26.55 ([#1856](https://github.com/aws-powertools/powertools-lambda-python/issues/1856))
* **deps-dev:** bump filelock from 3.13.3 to 3.13.4 ([#4096](https://github.com/aws-powertools/powertools-lambda-python/issues/4096))
* **deps-dev:** bump mkdocs-material from 9.0.5 to 9.0.6 ([#1851](https://github.com/aws-powertools/powertools-lambda-python/issues/1851))
* **deps-dev:** bump mypy-boto3-logs from 1.26.49 to 1.26.53 ([#1850](https://github.com/aws-powertools/powertools-lambda-python/issues/1850))
* **deps-dev:** bump aws-cdk-lib from 2.60.0 to 2.61.1 ([#1849](https://github.com/aws-powertools/powertools-lambda-python/issues/1849))
* **deps-dev:** bump mypy-boto3-cloudwatch from 1.26.30 to 1.26.52 ([#1847](https://github.com/aws-powertools/powertools-lambda-python/issues/1847))
* **deps-dev:** bump types-requests from 2.28.11.7 to 2.28.11.8 ([#1843](https://github.com/aws-powertools/powertools-lambda-python/issues/1843))
* **deps-dev:** bump cfn-lint from 0.79.6 to 0.79.7 ([#2956](https://github.com/aws-powertools/powertools-lambda-python/issues/2956))
* **deps-dev:** bump pytest from 7.2.0 to 7.2.1 ([#1838](https://github.com/aws-powertools/powertools-lambda-python/issues/1838))
* **deps-dev:** bump mkdocs-material from 9.0.4 to 9.0.5 ([#1840](https://github.com/aws-powertools/powertools-lambda-python/issues/1840))
* **deps-dev:** bump aws-cdk-lib from 2.130.0 to 2.131.0 ([#3881](https://github.com/aws-powertools/powertools-lambda-python/issues/3881))
* **deps-dev:** bump aws-cdk from 2.91.0 to 2.92.0 ([#2965](https://github.com/aws-powertools/powertools-lambda-python/issues/2965))
* **deps-dev:** bump mkdocs-material from 9.0.3 to 9.0.4 ([#1833](https://github.com/aws-powertools/powertools-lambda-python/issues/1833))
* **deps-dev:** bump mypy-boto3-logs from 1.26.43 to 1.26.49 ([#1834](https://github.com/aws-powertools/powertools-lambda-python/issues/1834))
* **deps-dev:** bump mypy-boto3-secretsmanager from 1.26.40 to 1.26.49 ([#1835](https://github.com/aws-powertools/powertools-lambda-python/issues/1835))
* **deps-dev:** bump mypy-boto3-lambda from 1.26.18 to 1.26.49 ([#1832](https://github.com/aws-powertools/powertools-lambda-python/issues/1832))
* **deps-dev:** bump aws-cdk-lib from 2.59.0 to 2.60.0 ([#1831](https://github.com/aws-powertools/powertools-lambda-python/issues/1831))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.107 to 0.1.110 ([#4097](https://github.com/aws-powertools/powertools-lambda-python/issues/4097))
* **deps-dev:** bump coverage from 7.0.4 to 7.0.5 ([#1829](https://github.com/aws-powertools/powertools-lambda-python/issues/1829))
* **deps-dev:** bump mkdocs-material from 9.0.2 to 9.0.3 ([#1823](https://github.com/aws-powertools/powertools-lambda-python/issues/1823))
* **deps-dev:** bump coverage from 7.0.3 to 7.0.4 ([#1822](https://github.com/aws-powertools/powertools-lambda-python/issues/1822))
* **deps-dev:** bump radon from 5.1.0 to 6.0.1 ([#2964](https://github.com/aws-powertools/powertools-lambda-python/issues/2964))
* **deps-dev:** bump ijson from 3.1.4 to 3.2.0.post0 ([#1815](https://github.com/aws-powertools/powertools-lambda-python/issues/1815))
* **deps-dev:** bump the boto-typing group with 3 updates ([#2967](https://github.com/aws-powertools/powertools-lambda-python/issues/2967))
* **deps-dev:** bump mkdocs-material from 9.5.11 to 9.5.12 ([#3870](https://github.com/aws-powertools/powertools-lambda-python/issues/3870))
* **deps-dev:** bump mypy-boto3-ssm from 1.26.11.post1 to 1.26.43 ([#1819](https://github.com/aws-powertools/powertools-lambda-python/issues/1819))
* **deps-dev:** bump mypy-boto3-logs from 1.26.27 to 1.26.43 ([#1820](https://github.com/aws-powertools/powertools-lambda-python/issues/1820))
* **deps-dev:** bump filelock from 3.8.2 to 3.9.0 ([#1816](https://github.com/aws-powertools/powertools-lambda-python/issues/1816))
* **deps-dev:** bump mypy-boto3-cloudformation from 1.26.11.post1 to 1.26.35.post1 ([#1818](https://github.com/aws-powertools/powertools-lambda-python/issues/1818))
* **deps-dev:** bump mkdocs-material from 8.5.11 to 9.0.2 ([#1808](https://github.com/aws-powertools/powertools-lambda-python/issues/1808))
* **deps-dev:** bump coverage from 6.5.0 to 7.0.3 ([#1806](https://github.com/aws-powertools/powertools-lambda-python/issues/1806))
* **deps-dev:** bump flake8-builtins from 2.0.1 to 2.1.0 ([#1799](https://github.com/aws-powertools/powertools-lambda-python/issues/1799))
* **deps-dev:** bump ruff from 0.2.2 to 0.3.0 ([#3871](https://github.com/aws-powertools/powertools-lambda-python/issues/3871))
* **deps-dev:** bump mypy-boto3-secretsmanager from 1.26.12 to 1.26.40 ([#1811](https://github.com/aws-powertools/powertools-lambda-python/issues/1811))
* **deps-dev:** bump isort from 5.11.3 to 5.11.4 ([#1809](https://github.com/aws-powertools/powertools-lambda-python/issues/1809))
* **deps-dev:** bump aws-cdk-lib from 2.55.1 to 2.59.0 ([#1810](https://github.com/aws-powertools/powertools-lambda-python/issues/1810))
* **deps-dev:** bump importlib-metadata from 5.1.0 to 6.0.0 ([#1804](https://github.com/aws-powertools/powertools-lambda-python/issues/1804))
* **deps-dev:** bump cfn-lint from 0.85.2 to 0.85.3 ([#3861](https://github.com/aws-powertools/powertools-lambda-python/issues/3861))
* **deps-dev:** bump black from 22.10.0 to 22.12.0 ([#1770](https://github.com/aws-powertools/powertools-lambda-python/issues/1770))
* **deps-dev:** bump flake8-black from 0.3.5 to 0.3.6 ([#1792](https://github.com/aws-powertools/powertools-lambda-python/issues/1792))
* **deps-dev:** bump ruff from 0.0.284 to 0.0.285 ([#2977](https://github.com/aws-powertools/powertools-lambda-python/issues/2977))
* **deps-dev:** bump types-requests from 2.28.11.5 to 2.28.11.7 ([#1795](https://github.com/aws-powertools/powertools-lambda-python/issues/1795))
* **deps-dev:** bump aws-cdk from 2.136.0 to 2.136.1 ([#4106](https://github.com/aws-powertools/powertools-lambda-python/issues/4106))
* **deps-dev:** bump isort from 5.11.2 to 5.11.3 ([#1788](https://github.com/aws-powertools/powertools-lambda-python/issues/1788))
* **deps-dev:** bump aws-cdk-lib from 2.54.0 to 2.55.1 ([#1787](https://github.com/aws-powertools/powertools-lambda-python/issues/1787))
* **deps-dev:** bump mypy-boto3-cloudwatch from 1.26.17 to 1.26.30 ([#1785](https://github.com/aws-powertools/powertools-lambda-python/issues/1785))
* **deps-dev:** bump isort from 5.10.1 to 5.11.2 ([#1782](https://github.com/aws-powertools/powertools-lambda-python/issues/1782))
* **deps-dev:** bump pytest-asyncio from 0.20.2 to 0.20.3 ([#1767](https://github.com/aws-powertools/powertools-lambda-python/issues/1767))
* **deps-dev:** bump mkdocs-material from 9.1.21 to 9.2.0 ([#2984](https://github.com/aws-powertools/powertools-lambda-python/issues/2984))
* **deps-dev:** bump mkdocs-material from 9.2.0 to 9.2.3 ([#2988](https://github.com/aws-powertools/powertools-lambda-python/issues/2988))
* **deps-dev:** bump aws-cdk from 2.92.0 to 2.93.0 ([#2993](https://github.com/aws-powertools/powertools-lambda-python/issues/2993))
* **deps-dev:** bump mypy-boto3-dynamodb from 1.26.13.post16 to 1.26.24 ([#1765](https://github.com/aws-powertools/powertools-lambda-python/issues/1765))
* **deps-dev:** bump mypy-boto3-logs from 1.26.17 to 1.26.27 ([#1775](https://github.com/aws-powertools/powertools-lambda-python/issues/1775))
* **deps-dev:** bump aws-cdk-lib from 2.53.0 to 2.54.0 ([#1764](https://github.com/aws-powertools/powertools-lambda-python/issues/1764))
* **deps-dev:** bump flake8-bugbear from 22.10.27 to 22.12.6 ([#1760](https://github.com/aws-powertools/powertools-lambda-python/issues/1760))
* **deps-dev:** bump filelock from 3.8.0 to 3.8.2 ([#1759](https://github.com/aws-powertools/powertools-lambda-python/issues/1759))
* **deps-dev:** bump pytest-xdist from 3.0.2 to 3.1.0 ([#1758](https://github.com/aws-powertools/powertools-lambda-python/issues/1758))
* **deps-dev:** bump mkdocs-material from 8.5.10 to 8.5.11 ([#1756](https://github.com/aws-powertools/powertools-lambda-python/issues/1756))
* **deps-dev:** bump importlib-metadata from 4.13.0 to 5.1.0 ([#1750](https://github.com/aws-powertools/powertools-lambda-python/issues/1750))
* **deps-dev:** bump black from 24.1.1 to 24.2.0 ([#3760](https://github.com/aws-powertools/powertools-lambda-python/issues/3760))
* **deps-dev:** bump flake8-black from 0.3.3 to 0.3.5 ([#1738](https://github.com/aws-powertools/powertools-lambda-python/issues/1738))
* **deps-dev:** bump mypy-boto3-cloudwatch from 1.26.0.post1 to 1.26.17 ([#1753](https://github.com/aws-powertools/powertools-lambda-python/issues/1753))
* **deps-dev:** bump ruff from 0.0.285 to 0.0.286 ([#3014](https://github.com/aws-powertools/powertools-lambda-python/issues/3014))
* **deps-dev:** bump aws-cdk-lib from 2.136.0 to 2.136.1 ([#4107](https://github.com/aws-powertools/powertools-lambda-python/issues/4107))
* **deps-dev:** bump sentry-sdk from 1.44.1 to 1.45.0 ([#4108](https://github.com/aws-powertools/powertools-lambda-python/issues/4108))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.110 to 0.1.112 ([#4109](https://github.com/aws-powertools/powertools-lambda-python/issues/4109))
* **deps-dev:** bump aws-cdk from 2.136.1 to 2.137.0 ([#4115](https://github.com/aws-powertools/powertools-lambda-python/issues/4115))
* **deps-dev:** bump mypy-boto3-cloudwatch from 1.34.75 to 1.34.83 in the boto-typing group ([#4116](https://github.com/aws-powertools/powertools-lambda-python/issues/4116))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.212 to 0.1.219 ([#4817](https://github.com/aws-powertools/powertools-lambda-python/issues/4817))
* **deps-dev:** bump mypy-boto3-cloudformation from 1.26.0.post1 to 1.26.11.post1 ([#1746](https://github.com/aws-powertools/powertools-lambda-python/issues/1746))
* **deps-dev:** bump mypy-boto3-lambda from 1.26.0.post1 to 1.26.12 ([#1742](https://github.com/aws-powertools/powertools-lambda-python/issues/1742))
* **deps-dev:** bump aws-cdk-lib from 2.50.0 to 2.51.1 ([#1741](https://github.com/aws-powertools/powertools-lambda-python/issues/1741))
* **deps-dev:** bump mypy-boto3-dynamodb from 1.26.0.post1 to 1.26.13.post16 ([#1743](https://github.com/aws-powertools/powertools-lambda-python/issues/1743))
* **deps-dev:** bump mypy-boto3-secretsmanager from 1.26.0.post1 to 1.26.12 ([#1744](https://github.com/aws-powertools/powertools-lambda-python/issues/1744))
* **deps-dev:** bump mypy-boto3-ssm from 1.26.4 to 1.26.11.post1 ([#1740](https://github.com/aws-powertools/powertools-lambda-python/issues/1740))
* **deps-dev:** bump types-requests from 2.28.11.4 to 2.28.11.5 ([#1729](https://github.com/aws-powertools/powertools-lambda-python/issues/1729))
* **deps-dev:** bump the boto-typing group with 1 update ([#3013](https://github.com/aws-powertools/powertools-lambda-python/issues/3013))
* **deps-dev:** bump mkdocs-material from 8.5.9 to 8.5.10 ([#1731](https://github.com/aws-powertools/powertools-lambda-python/issues/1731))
* **deps-dev:** bump ruff from 0.3.5 to 0.3.7 ([#4123](https://github.com/aws-powertools/powertools-lambda-python/issues/4123))
* **deps-dev:** bump aws-cdk-lib from 2.136.1 to 2.137.0 ([#4119](https://github.com/aws-powertools/powertools-lambda-python/issues/4119))
* **deps-dev:** bump mypy-boto3-xray from 1.26.9 to 1.26.11.post1 ([#1734](https://github.com/aws-powertools/powertools-lambda-python/issues/1734))
* **deps-dev:** bump aws-cdk from 2.129.0 to 2.130.0 ([#3843](https://github.com/aws-powertools/powertools-lambda-python/issues/3843))
* **deps-dev:** bump the boto-typing group with 11 updates ([#3027](https://github.com/aws-powertools/powertools-lambda-python/issues/3027))
* **deps-dev:** bump aws-cdk-aws-lambda-python-alpha from 2.136.0a0 to 2.137.0a0 ([#4124](https://github.com/aws-powertools/powertools-lambda-python/issues/4124))
* **deps-dev:** bump mypy-boto3-cloudformation from 1.34.77 to 1.34.84 in the boto-typing group ([#4126](https://github.com/aws-powertools/powertools-lambda-python/issues/4126))
* **deps-dev:** bump aws-cdk-aws-lambda-python-alpha from 2.148.1a0 to 2.150.0a0 ([#4813](https://github.com/aws-powertools/powertools-lambda-python/issues/4813))
* **deps-dev:** bump flake8-builtins from 2.0.0 to 2.0.1 ([#1715](https://github.com/aws-powertools/powertools-lambda-python/issues/1715))
* **deps-dev:** bump pytest-asyncio from 0.20.1 to 0.20.2 ([#1723](https://github.com/aws-powertools/powertools-lambda-python/issues/1723))
* **deps-dev:** bump mypy-boto3-appconfig from 1.25.0 to 1.26.0.post1 ([#1722](https://github.com/aws-powertools/powertools-lambda-python/issues/1722))
* **deps-dev:** bump mypy-boto3-ssm from 1.26.0.post1 to 1.26.4 ([#1721](https://github.com/aws-powertools/powertools-lambda-python/issues/1721))
* **deps-dev:** bump mypy-boto3-xray from 1.26.0.post1 to 1.26.9 ([#1720](https://github.com/aws-powertools/powertools-lambda-python/issues/1720))
* **deps-dev:** bump mypy-boto3-lambda from 1.25.0 to 1.26.0.post1 ([#1705](https://github.com/aws-powertools/powertools-lambda-python/issues/1705))
* **deps-dev:** bump mypy-boto3-s3 from 1.25.0 to 1.26.0.post1 ([#1716](https://github.com/aws-powertools/powertools-lambda-python/issues/1716))
* **deps-dev:** bump mypy-boto3-appconfigdata from 1.25.0 to 1.26.0.post1 ([#1704](https://github.com/aws-powertools/powertools-lambda-python/issues/1704))
* **deps-dev:** bump mypy-boto3-xray from 1.25.0 to 1.26.0.post1 ([#1703](https://github.com/aws-powertools/powertools-lambda-python/issues/1703))
* **deps-dev:** bump mypy-boto3-cloudwatch from 1.25.0 to 1.26.0.post1 ([#1714](https://github.com/aws-powertools/powertools-lambda-python/issues/1714))
* **deps-dev:** bump mkdocs-material from 9.5.29 to 9.5.30 ([#4807](https://github.com/aws-powertools/powertools-lambda-python/issues/4807))
* **deps-dev:** bump black from 24.3.0 to 24.4.0 ([#4135](https://github.com/aws-powertools/powertools-lambda-python/issues/4135))
* **deps-dev:** bump types-requests from 2.28.11.3 to 2.28.11.4 ([#1701](https://github.com/aws-powertools/powertools-lambda-python/issues/1701))
* **deps-dev:** bump mypy-boto3-logs from 1.25.0 to 1.26.3 ([#1702](https://github.com/aws-powertools/powertools-lambda-python/issues/1702))
* **deps-dev:** bump sentry-sdk from 1.29.2 to 1.30.0 ([#3028](https://github.com/aws-powertools/powertools-lambda-python/issues/3028))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.112 to 0.1.113 ([#4136](https://github.com/aws-powertools/powertools-lambda-python/issues/4136))
* **deps-dev:** bump cfn-lint from 0.86.2 to 0.86.3 ([#4137](https://github.com/aws-powertools/powertools-lambda-python/issues/4137))
* **deps-dev:** bump mkdocs-material from 9.2.5 to 9.2.6 ([#3032](https://github.com/aws-powertools/powertools-lambda-python/issues/3032))
* **deps-dev:** bump pytest-xdist from 2.5.0 to 3.0.2 ([#1655](https://github.com/aws-powertools/powertools-lambda-python/issues/1655))
* **deps-dev:** bump mkdocs-material from 8.5.7 to 8.5.9 ([#1697](https://github.com/aws-powertools/powertools-lambda-python/issues/1697))
* **deps-dev:** bump flake8-comprehensions from 3.10.0 to 3.10.1 ([#1699](https://github.com/aws-powertools/powertools-lambda-python/issues/1699))
* **deps-dev:** bump types-requests from 2.28.11.2 to 2.28.11.3 ([#1698](https://github.com/aws-powertools/powertools-lambda-python/issues/1698))
* **deps-dev:** bump pytest-benchmark from 3.4.1 to 4.0.0 ([#1659](https://github.com/aws-powertools/powertools-lambda-python/issues/1659))
* **deps-dev:** bump mypy-boto3-secretsmanager from 1.25.0 to 1.26.0.post1 ([#1691](https://github.com/aws-powertools/powertools-lambda-python/issues/1691))
* **deps-dev:** bump cfn-lint from 0.79.7 to 0.79.8 ([#3033](https://github.com/aws-powertools/powertools-lambda-python/issues/3033))
* **deps-dev:** bump flake8-bugbear from 22.10.25 to 22.10.27 ([#1665](https://github.com/aws-powertools/powertools-lambda-python/issues/1665))
* **deps-dev:** bump mypy-boto3-ssm from 1.25.0 to 1.26.0.post1 ([#1690](https://github.com/aws-powertools/powertools-lambda-python/issues/1690))
* **deps-dev:** bump ruff from 0.0.286 to 0.0.287 ([#3035](https://github.com/aws-powertools/powertools-lambda-python/issues/3035))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.113 to 0.1.115 ([#4142](https://github.com/aws-powertools/powertools-lambda-python/issues/4142))
* **deps-dev:** bump aws-cdk-lib from 2.49.0 to 2.50.0 ([#1683](https://github.com/aws-powertools/powertools-lambda-python/issues/1683))
* **deps-dev:** bump mypy-boto3-dynamodb from 1.25.0 to 1.26.0.post1 ([#1682](https://github.com/aws-powertools/powertools-lambda-python/issues/1682))
* **deps-dev:** bump mypy-boto3-cloudformation from 1.25.0 to 1.26.0.post1 ([#1679](https://github.com/aws-powertools/powertools-lambda-python/issues/1679))
* **deps-dev:** bump sentry-sdk from 2.10.0 to 2.11.0 ([#4815](https://github.com/aws-powertools/powertools-lambda-python/issues/4815))
* **deps-dev:** bump mkdocs-material from 9.5.17 to 9.5.18 ([#4143](https://github.com/aws-powertools/powertools-lambda-python/issues/4143))
* **deps-dev:** bump mypy-boto3-dynamodb from 1.34.131 to 1.34.148 in the boto-typing group ([#4812](https://github.com/aws-powertools/powertools-lambda-python/issues/4812))
* **deps-dev:** bump aws-cdk-lib from 2.48.0 to 2.49.0 ([#1671](https://github.com/aws-powertools/powertools-lambda-python/issues/1671))
* **deps-dev:** bump aws-cdk-lib from 2.47.0 to 2.48.0 ([#1664](https://github.com/aws-powertools/powertools-lambda-python/issues/1664))
* **deps-dev:** bump flake8-variables-names from 0.0.4 to 0.0.5 ([#1628](https://github.com/aws-powertools/powertools-lambda-python/issues/1628))
* **deps-dev:** bump aws-cdk from 2.93.0 to 2.94.0 ([#3036](https://github.com/aws-powertools/powertools-lambda-python/issues/3036))
* **deps-dev:** bump pytest-asyncio from 0.16.0 to 0.20.1 ([#1635](https://github.com/aws-powertools/powertools-lambda-python/issues/1635))
* **deps-dev:** bump httpx from 0.26.0 to 0.27.0 ([#3828](https://github.com/aws-powertools/powertools-lambda-python/issues/3828))
* **deps-dev:** bump types-redis from 4.6.0.20240409 to 4.6.0.20240417 ([#4145](https://github.com/aws-powertools/powertools-lambda-python/issues/4145))
* **deps-dev:** bump aws-cdk from 2.149.0 to 2.150.0 ([#4805](https://github.com/aws-powertools/powertools-lambda-python/issues/4805))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.115 to 0.1.119 ([#4150](https://github.com/aws-powertools/powertools-lambda-python/issues/4150))
* **deps-dev:** bump pytest from 7.4.0 to 7.4.1 ([#3042](https://github.com/aws-powertools/powertools-lambda-python/issues/3042))
* **deps-dev:** bump mkdocs-material from 9.2.6 to 9.2.7 ([#3043](https://github.com/aws-powertools/powertools-lambda-python/issues/3043))
* **deps-dev:** bump aws-cdk-lib from 2.137.0 to 2.138.0 ([#4160](https://github.com/aws-powertools/powertools-lambda-python/issues/4160))
* **deps-dev:** bump aws-cdk from 2.137.0 to 2.138.0 ([#4157](https://github.com/aws-powertools/powertools-lambda-python/issues/4157))
* **deps-dev:** bump aws-cdk-lib from 2.46.0 to 2.47.0 ([#1629](https://github.com/aws-powertools/powertools-lambda-python/issues/1629))
* **deps-dev:** bump ruff from 0.3.7 to 0.4.1 ([#4166](https://github.com/aws-powertools/powertools-lambda-python/issues/4166))
* **deps-dev:** bump mypy-boto3-s3 from 1.24.76 to 1.24.94 ([#1622](https://github.com/aws-powertools/powertools-lambda-python/issues/1622))
* **deps-dev:** bump aws-cdk-lib from 2.128.0 to 2.130.0 ([#3838](https://github.com/aws-powertools/powertools-lambda-python/issues/3838))
* **deps-dev:** bump cfn-lint from 0.79.8 to 0.79.9 ([#3046](https://github.com/aws-powertools/powertools-lambda-python/issues/3046))
* **deps-dev:** bump aws-cdk from 2.128.0 to 2.129.0 ([#3831](https://github.com/aws-powertools/powertools-lambda-python/issues/3831))
* **deps-dev:** bump hvac from 1.1.1 to 1.2.0  ([#3054](https://github.com/aws-powertools/powertools-lambda-python/issues/3054))
* **deps-dev:** bump pytest from 7.4.1 to 7.4.2 ([#3057](https://github.com/aws-powertools/powertools-lambda-python/issues/3057))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.119 to 0.1.121 ([#4167](https://github.com/aws-powertools/powertools-lambda-python/issues/4167))
* **deps-dev:** bump gitpython from 3.1.32 to 3.1.35 ([#3060](https://github.com/aws-powertools/powertools-lambda-python/issues/3060))
* **deps-dev:** bump the boto-typing group with 1 update ([#3836](https://github.com/aws-powertools/powertools-lambda-python/issues/3836))
* **deps-dev:** bump aws-cdk-lib from 2.148.1 to 2.150.0 ([#4806](https://github.com/aws-powertools/powertools-lambda-python/issues/4806))
* **deps-dev:** bump mypy-boto3-ssm from 1.24.81 to 1.24.90 ([#1594](https://github.com/aws-powertools/powertools-lambda-python/issues/1594))
* **deps-dev:** bump flake8-builtins from 1.5.3 to 2.0.0 ([#1582](https://github.com/aws-powertools/powertools-lambda-python/issues/1582))
* **deps-dev:** bump aws-cdk-aws-lambda-python-alpha from 2.137.0a0 to 2.138.0a0 ([#4169](https://github.com/aws-powertools/powertools-lambda-python/issues/4169))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.121 to 0.1.123 ([#4176](https://github.com/aws-powertools/powertools-lambda-python/issues/4176))
* **deps-dev:** bump types-requests from 2.28.11.1 to 2.28.11.2 ([#1576](https://github.com/aws-powertools/powertools-lambda-python/issues/1576))
* **deps-dev:** bump typing-extensions from 4.3.0 to 4.4.0 ([#1575](https://github.com/aws-powertools/powertools-lambda-python/issues/1575))
* **deps-dev:** bump pytest from 8.2.2 to 8.3.1 ([#4799](https://github.com/aws-powertools/powertools-lambda-python/issues/4799))
* **deps-dev:** bump ruff from 0.2.1 to 0.2.2 ([#3802](https://github.com/aws-powertools/powertools-lambda-python/issues/3802))
* **deps-dev:** bump the boto-typing group with 2 updates ([#3810](https://github.com/aws-powertools/powertools-lambda-python/issues/3810))
* **deps-dev:** bump aws-cdk from 2.94.0 to 2.95.0 ([#3070](https://github.com/aws-powertools/powertools-lambda-python/issues/3070))
* **deps-dev:** bump coverage from 7.4.1 to 7.4.2 ([#3811](https://github.com/aws-powertools/powertools-lambda-python/issues/3811))
* **deps-dev:** bump types-requests from 2.28.11 to 2.28.11.1 ([#1571](https://github.com/aws-powertools/powertools-lambda-python/issues/1571))
* **deps-dev:** bump pytest from 8.0.0 to 8.0.1 ([#3812](https://github.com/aws-powertools/powertools-lambda-python/issues/3812))
* **deps-dev:** bump mkdocs-material from 8.5.3 to 8.5.4 ([#1563](https://github.com/aws-powertools/powertools-lambda-python/issues/1563))
* **deps-dev:** bump mypy-boto3-secretsmanager from 1.24.54 to 1.24.83 ([#1557](https://github.com/aws-powertools/powertools-lambda-python/issues/1557))
* **deps-dev:** bump ruff from 0.5.3 to 0.5.4 ([#4798](https://github.com/aws-powertools/powertools-lambda-python/issues/4798))
* **deps-dev:** bump pytest-cov from 3.0.0 to 4.0.0 ([#1551](https://github.com/aws-powertools/powertools-lambda-python/issues/1551))
* **deps-dev:** bump flake8-bugbear from 22.9.11 to 22.9.23 ([#1541](https://github.com/aws-powertools/powertools-lambda-python/issues/1541))
* **deps-dev:** bump mypy-boto3-ssm from 1.24.80 to 1.24.81 ([#1544](https://github.com/aws-powertools/powertools-lambda-python/issues/1544))
* **deps-dev:** bump mypy-boto3-ssm from 1.24.69 to 1.24.80 ([#1542](https://github.com/aws-powertools/powertools-lambda-python/issues/1542))
* **deps-dev:** bump mako from 1.2.2 to 1.2.3 ([#1537](https://github.com/aws-powertools/powertools-lambda-python/issues/1537))
* **deps-dev:** bump types-requests from 2.28.10 to 2.28.11 ([#1538](https://github.com/aws-powertools/powertools-lambda-python/issues/1538))
* **deps-dev:** bump cfn-lint from 1.8.1 to 1.8.2 ([#4788](https://github.com/aws-powertools/powertools-lambda-python/issues/4788))
* **deps-dev:** bump aws-cdk from 2.95.0 to 2.95.1 ([#3074](https://github.com/aws-powertools/powertools-lambda-python/issues/3074))
* **deps-dev:** bump mkdocs-material from 8.5.1 to 8.5.3 ([#1532](https://github.com/aws-powertools/powertools-lambda-python/issues/1532))
* **deps-dev:** bump ruff from 0.0.287 to 0.0.288 ([#3076](https://github.com/aws-powertools/powertools-lambda-python/issues/3076))
* **deps-dev:** bump hvac from 1.2.0 to 1.2.1 ([#3075](https://github.com/aws-powertools/powertools-lambda-python/issues/3075))
* **deps-dev:** bump cfn-lint from 0.79.9 to 0.79.10 ([#3077](https://github.com/aws-powertools/powertools-lambda-python/issues/3077))
* **deps-dev:** bump mypy-boto3-s3 from 1.24.36.post1 to 1.24.76 ([#1531](https://github.com/aws-powertools/powertools-lambda-python/issues/1531))
* **deps-dev:** bump ruff from 0.0.288 to 0.0.289 ([#3080](https://github.com/aws-powertools/powertools-lambda-python/issues/3080))
* **deps-dev:** bump mkdocs-material from 8.5.0 to 8.5.1 ([#1521](https://github.com/aws-powertools/powertools-lambda-python/issues/1521))
* **deps-dev:** bump mypy-boto3-dynamodb from 1.24.60 to 1.24.74 ([#1522](https://github.com/aws-powertools/powertools-lambda-python/issues/1522))
* **deps-dev:** bump black from 21.12b0 to 22.8.0 ([#1515](https://github.com/aws-powertools/powertools-lambda-python/issues/1515))
* **deps-dev:** bump mkdocs-material from 8.4.4 to 8.5.0 ([#1514](https://github.com/aws-powertools/powertools-lambda-python/issues/1514))
* **deps-dev:** bump cfn-lint from 0.86.3 to 0.86.4 ([#4180](https://github.com/aws-powertools/powertools-lambda-python/issues/4180))
* **deps-dev:** bump mypy-boto3-secretsmanager from 1.34.128 to 1.34.145 in the boto-typing group ([#4787](https://github.com/aws-powertools/powertools-lambda-python/issues/4787))
* **deps-dev:** revert to v1.28.0 dependencies
* **deps-dev:** bump the boto-typing group with 1 update ([#3085](https://github.com/aws-powertools/powertools-lambda-python/issues/3085))
* **deps-dev:** bump mkdocs-material from 8.4.1 to 8.4.2 ([#1483](https://github.com/aws-powertools/powertools-lambda-python/issues/1483))
* **deps-dev:** bump aws-cdk from 2.95.1 to 2.96.0 ([#3087](https://github.com/aws-powertools/powertools-lambda-python/issues/3087))
* **deps-dev:** bump types-redis from 4.6.0.20240417 to 4.6.0.20240423 ([#4185](https://github.com/aws-powertools/powertools-lambda-python/issues/4185))
* **deps-dev:** bump mypy-boto3-dynamodb from 1.24.55.post1 to 1.24.60 ([#306](https://github.com/aws-powertools/powertools-lambda-python/issues/306))
* **deps-dev:** bump sentry-sdk from 1.30.0 to 1.31.0 ([#3086](https://github.com/aws-powertools/powertools-lambda-python/issues/3086))
* **deps-dev:** bump coverage from 7.4.4 to 7.5.0 ([#4186](https://github.com/aws-powertools/powertools-lambda-python/issues/4186))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.123 to 0.1.126 ([#4188](https://github.com/aws-powertools/powertools-lambda-python/issues/4188))
* **deps-dev:** bump mypy-boto3-ssm from 1.34.61 to 1.34.91 in the boto-typing group ([#4201](https://github.com/aws-powertools/powertools-lambda-python/issues/4201))
* **deps-dev:** bump mypy from 1.9.0 to 1.10.0 ([#4202](https://github.com/aws-powertools/powertools-lambda-python/issues/4202))
* **deps-dev:** bump black from 24.4.0 to 24.4.1 ([#4203](https://github.com/aws-powertools/powertools-lambda-python/issues/4203))
* **deps-dev:** bump mypy-boto3-dynamodb from 1.24.55.post1 to 1.24.60 ([#1481](https://github.com/aws-powertools/powertools-lambda-python/issues/1481))
* **deps-dev:** bump aws-cdk-lib from 2.150.0 to 2.151.0 ([#4875](https://github.com/aws-powertools/powertools-lambda-python/issues/4875))
* **deps-dev:** bump cfn-lint from 0.79.10 to 0.79.11 ([#3088](https://github.com/aws-powertools/powertools-lambda-python/issues/3088))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.126 to 0.1.130 ([#4209](https://github.com/aws-powertools/powertools-lambda-python/issues/4209))
* **deps-dev:** bump the boto-typing group with 2 updates ([#4210](https://github.com/aws-powertools/powertools-lambda-python/issues/4210))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.228 to 0.1.230 ([#4876](https://github.com/aws-powertools/powertools-lambda-python/issues/4876))
* **deps-dev:** bump types-redis from 4.6.0.20240423 to 4.6.0.20240425 ([#4214](https://github.com/aws-powertools/powertools-lambda-python/issues/4214))
* **deps-dev:** bump aws-cdk from 2.138.0 to 2.139.0 ([#4215](https://github.com/aws-powertools/powertools-lambda-python/issues/4215))
* **deps-dev:** bump aws-cdk-lib from 2.138.0 to 2.139.0 ([#4213](https://github.com/aws-powertools/powertools-lambda-python/issues/4213))
* **deps-dev:** bump aws-cdk from 2.96.0 to 2.96.1 ([#3093](https://github.com/aws-powertools/powertools-lambda-python/issues/3093))
* **deps-dev:** bump ruff from 0.4.1 to 0.4.2 ([#4212](https://github.com/aws-powertools/powertools-lambda-python/issues/4212))
* **deps-dev:** bump types-redis from 4.6.0.20240106 to 4.6.0.20240218 ([#3804](https://github.com/aws-powertools/powertools-lambda-python/issues/3804))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.130 to 0.1.131 ([#4221](https://github.com/aws-powertools/powertools-lambda-python/issues/4221))
* **deps-dev:** bump aws-cdk-aws-lambda-python-alpha from 2.138.0a0 to 2.139.0a0 ([#4225](https://github.com/aws-powertools/powertools-lambda-python/issues/4225))
* **deps-dev:** bump black from 24.4.1 to 24.4.2 ([#4222](https://github.com/aws-powertools/powertools-lambda-python/issues/4222))
* **deps-dev:** bump flake8-bugbear from 22.8.22 to 22.8.23 ([#1473](https://github.com/aws-powertools/powertools-lambda-python/issues/1473))
* **deps-dev:** bump ruff from 0.5.2 to 0.5.3 ([#4781](https://github.com/aws-powertools/powertools-lambda-python/issues/4781))
* **deps-dev:** bump cfn-lint from 1.6.1 to 1.8.1 ([#4780](https://github.com/aws-powertools/powertools-lambda-python/issues/4780))
* **deps-dev:** bump pytest-asyncio from 0.23.7 to 0.23.8 ([#4776](https://github.com/aws-powertools/powertools-lambda-python/issues/4776))
* **deps-dev:** bump mkdocs-material from 9.5.18 to 9.5.19 ([#4224](https://github.com/aws-powertools/powertools-lambda-python/issues/4224))
* **deps-dev:** bump the boto-typing group with 1 update ([#3101](https://github.com/aws-powertools/powertools-lambda-python/issues/3101))
* **deps-dev:** bump mkdocs-material from 9.5.9 to 9.5.10 ([#3803](https://github.com/aws-powertools/powertools-lambda-python/issues/3803))
* **deps-dev:** bump aws-cdk from 2.96.1 to 2.96.2 ([#3102](https://github.com/aws-powertools/powertools-lambda-python/issues/3102))
* **deps-dev:** bump ruff from 0.0.289 to 0.0.290 ([#3105](https://github.com/aws-powertools/powertools-lambda-python/issues/3105))
* **deps-dev:** bump sentry-sdk from 1.45.0 to 2.0.1 ([#4223](https://github.com/aws-powertools/powertools-lambda-python/issues/4223))
* **deps-dev:** bump sentry-sdk from 1.40.4 to 1.40.5 ([#3805](https://github.com/aws-powertools/powertools-lambda-python/issues/3805))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.211 to 0.1.212 ([#4769](https://github.com/aws-powertools/powertools-lambda-python/issues/4769))
* **deps-dev:** bump types-requests from 2.28.7 to 2.28.8 ([#1423](https://github.com/aws-powertools/powertools-lambda-python/issues/1423))
* **deps-dev:** bump pytest from 8.1.1 to 8.2.0 ([#4237](https://github.com/aws-powertools/powertools-lambda-python/issues/4237))
* **deps-dev:** bump cfn-lint from 0.79.11 to 0.80.2 ([#3107](https://github.com/aws-powertools/powertools-lambda-python/issues/3107))
* **deps-dev:** bump mkdocs-material from 9.5.19 to 9.5.20 ([#4242](https://github.com/aws-powertools/powertools-lambda-python/issues/4242))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.131 to 0.1.132 ([#4239](https://github.com/aws-powertools/powertools-lambda-python/issues/4239))
* **deps-dev:** bump hvac from 2.1.0 to 2.2.0 ([#4238](https://github.com/aws-powertools/powertools-lambda-python/issues/4238))
* **deps-dev:** bump filelock from 3.13.4 to 3.14.0 ([#4241](https://github.com/aws-powertools/powertools-lambda-python/issues/4241))
* **deps-dev:** bump aws-cdk-lib from 2.127.0 to 2.128.0 ([#3777](https://github.com/aws-powertools/powertools-lambda-python/issues/3777))
* **deps-dev:** bump aws-cdk from 2.139.0 to 2.139.1 ([#4245](https://github.com/aws-powertools/powertools-lambda-python/issues/4245))
* **deps-dev:** bump types-requests from 2.31.0.2 to 2.31.0.3 ([#3114](https://github.com/aws-powertools/powertools-lambda-python/issues/3114))
* **deps-dev:** bump mkdocs-material from 9.5.28 to 9.5.29 ([#4764](https://github.com/aws-powertools/powertools-lambda-python/issues/4764))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.132 to 0.1.133 ([#4246](https://github.com/aws-powertools/powertools-lambda-python/issues/4246))
* **deps-dev:** bump aws-cdk from 2.148.0 to 2.149.0 ([#4765](https://github.com/aws-powertools/powertools-lambda-python/issues/4765))
* **deps-dev:** bump the boto-typing group with 3 updates ([#3118](https://github.com/aws-powertools/powertools-lambda-python/issues/3118))
* **deps-dev:** bump the boto-typing group with 2 updates ([#3797](https://github.com/aws-powertools/powertools-lambda-python/issues/3797))
* **deps-dev:** bump pytest-xdist from 3.5.0 to 3.6.1 ([#4247](https://github.com/aws-powertools/powertools-lambda-python/issues/4247))
* **deps-dev:** bump ruff from 0.5.1 to 0.5.2 ([#4762](https://github.com/aws-powertools/powertools-lambda-python/issues/4762))
* **deps-dev:** bump sentry-sdk from 2.9.0 to 2.10.0 ([#4763](https://github.com/aws-powertools/powertools-lambda-python/issues/4763))
* **deps-dev:** bump aws-cdk from 2.127.0 to 2.128.0 ([#3776](https://github.com/aws-powertools/powertools-lambda-python/issues/3776))
* **deps-dev:** bump cfn-lint from 0.80.2 to 0.80.3 ([#3125](https://github.com/aws-powertools/powertools-lambda-python/issues/3125))
* **deps-dev:** bump types-requests from 2.28.6 to 2.28.7 ([#1406](https://github.com/aws-powertools/powertools-lambda-python/issues/1406))
* **deps-dev:** bump cfn-lint from 0.85.1 to 0.85.2 ([#3786](https://github.com/aws-powertools/powertools-lambda-python/issues/3786))
* **deps-dev:** bump aws-cdk from 2.96.2 to 2.97.0 ([#3129](https://github.com/aws-powertools/powertools-lambda-python/issues/3129))
* **deps-dev:** bump ruff from 0.0.290 to 0.0.291 ([#3126](https://github.com/aws-powertools/powertools-lambda-python/issues/3126))
* **deps-dev:** bump types-requests from 2.28.5 to 2.28.6 ([#1401](https://github.com/aws-powertools/powertools-lambda-python/issues/1401))
* **deps-dev:** bump the boto-typing group with 1 update ([#3135](https://github.com/aws-powertools/powertools-lambda-python/issues/3135))
* **deps-dev:** bump types-requests from 2.31.0.3 to 2.31.0.5 ([#3136](https://github.com/aws-powertools/powertools-lambda-python/issues/3136))
* **deps-dev:** bump cfn-lint from 0.86.4 to 0.87.0 ([#4249](https://github.com/aws-powertools/powertools-lambda-python/issues/4249))
* **deps-dev:** bump aws-cdk-lib from 2.139.0 to 2.139.1 ([#4248](https://github.com/aws-powertools/powertools-lambda-python/issues/4248))
* **deps-dev:** bump mypy-boto3-dynamodb from 1.34.91 to 1.34.97 in the boto-typing group ([#4257](https://github.com/aws-powertools/powertools-lambda-python/issues/4257))
* **deps-dev:** bump pytest-asyncio from 0.21.1 to 0.23.5 ([#3773](https://github.com/aws-powertools/powertools-lambda-python/issues/3773))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.207 to 0.1.211 ([#4760](https://github.com/aws-powertools/powertools-lambda-python/issues/4760))
* **deps-dev:** bump aws-cdk from 2.139.1 to 2.140.0 ([#4256](https://github.com/aws-powertools/powertools-lambda-python/issues/4256))
* **deps-dev:** bump aws-cdk from 2.97.0 to 2.98.0 ([#3139](https://github.com/aws-powertools/powertools-lambda-python/issues/3139))
* **deps-dev:** bump sentry-sdk from 1.40.3 to 1.40.4 ([#3765](https://github.com/aws-powertools/powertools-lambda-python/issues/3765))
* **deps-dev:** bump flake8-isort from 4.1.1 to 4.1.2.post0 ([#1384](https://github.com/aws-powertools/powertools-lambda-python/issues/1384))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.133 to 0.1.134 ([#4260](https://github.com/aws-powertools/powertools-lambda-python/issues/4260))
* **deps-dev:** bump aws-cdk-aws-lambda-python-alpha from 2.139.0a0 to 2.139.1a0 ([#4261](https://github.com/aws-powertools/powertools-lambda-python/issues/4261))
* **deps-dev:** bump the boto-typing group with 2 updates ([#3143](https://github.com/aws-powertools/powertools-lambda-python/issues/3143))
* **deps-dev:** bump types-requests from 2.31.0.5 to 2.31.0.6 ([#3145](https://github.com/aws-powertools/powertools-lambda-python/issues/3145))
* **deps-dev:** bump cfn-lint from 1.6.0 to 1.6.1 ([#4751](https://github.com/aws-powertools/powertools-lambda-python/issues/4751))
* **deps-dev:** bump aws-cdk-lib from 2.139.1 to 2.140.0 ([#4259](https://github.com/aws-powertools/powertools-lambda-python/issues/4259))
* **deps-dev:** bump mike from 1.1.2 to 2.1.0 ([#4258](https://github.com/aws-powertools/powertools-lambda-python/issues/4258))
* **deps-dev:** bump mike from 2.1.0 to 2.1.1 ([#4268](https://github.com/aws-powertools/powertools-lambda-python/issues/4268))
* **deps-dev:** bump mkdocs-material from 9.5.20 to 9.5.21 ([#4271](https://github.com/aws-powertools/powertools-lambda-python/issues/4271))
* **deps-dev:** bump cfn-lint from 0.87.0 to 0.87.1 ([#4272](https://github.com/aws-powertools/powertools-lambda-python/issues/4272))
* **deps-dev:** bump aws-cdk-aws-lambda-python-alpha from 2.139.1a0 to 2.140.0a0 ([#4270](https://github.com/aws-powertools/powertools-lambda-python/issues/4270))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.134 to 0.1.135 ([#4273](https://github.com/aws-powertools/powertools-lambda-python/issues/4273))
* **deps-dev:** bump aws-cdk from 2.98.0 to 2.99.0 ([#3148](https://github.com/aws-powertools/powertools-lambda-python/issues/3148))
* **deps-dev:** bump coverage from 7.5.0 to 7.5.1 ([#4288](https://github.com/aws-powertools/powertools-lambda-python/issues/4288))
* **deps-dev:** bump sentry-sdk from 2.0.1 to 2.1.1 ([#4287](https://github.com/aws-powertools/powertools-lambda-python/issues/4287))
* **deps-dev:** bump ruff from 0.4.2 to 0.4.3 ([#4286](https://github.com/aws-powertools/powertools-lambda-python/issues/4286))
* **deps-dev:** bump jinja2 from 3.1.3 to 3.1.4 ([#4283](https://github.com/aws-powertools/powertools-lambda-python/issues/4283))
* **deps-dev:** bump aws-cdk from 2.99.0 to 2.99.1 ([#3155](https://github.com/aws-powertools/powertools-lambda-python/issues/3155))
* **deps-dev:** bump ruff from 0.0.291 to 0.0.292 ([#3161](https://github.com/aws-powertools/powertools-lambda-python/issues/3161))
* **deps-dev:** bump urllib3 from 1.26.16 to 1.26.17 in /layer ([#3163](https://github.com/aws-powertools/powertools-lambda-python/issues/3163))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.135 to 0.1.136 ([#4285](https://github.com/aws-powertools/powertools-lambda-python/issues/4285))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.136 to 0.1.139 ([#4293](https://github.com/aws-powertools/powertools-lambda-python/issues/4293))
* **deps-dev:** bump cfn-lint from 1.5.3 to 1.6.0 ([#4747](https://github.com/aws-powertools/powertools-lambda-python/issues/4747))
* **deps-dev:** bump the boto-typing group with 1 update ([#3757](https://github.com/aws-powertools/powertools-lambda-python/issues/3757))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.139 to 0.1.140 ([#4301](https://github.com/aws-powertools/powertools-lambda-python/issues/4301))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.140 to 0.1.142 ([#4307](https://github.com/aws-powertools/powertools-lambda-python/issues/4307))
* **deps-dev:** bump cfn-lint from 0.80.3 to 0.80.4 ([#3166](https://github.com/aws-powertools/powertools-lambda-python/issues/3166))
* **deps-dev:** bump mypy-boto3-cloudwatch from 1.24.0 to 1.24.35 ([#1342](https://github.com/aws-powertools/powertools-lambda-python/issues/1342))
* **deps-dev:** bump coverage from 7.5.4 to 7.6.0 ([#4746](https://github.com/aws-powertools/powertools-lambda-python/issues/4746))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.206 to 0.1.207 ([#4748](https://github.com/aws-powertools/powertools-lambda-python/issues/4748))
* **deps-dev:** bump aws-cdk-lib from 2.126.0 to 2.127.0 ([#3758](https://github.com/aws-powertools/powertools-lambda-python/issues/3758))
* **deps-dev:** bump sentry-sdk from 2.8.0 to 2.9.0 ([#4735](https://github.com/aws-powertools/powertools-lambda-python/issues/4735))
* **deps-dev:** bump cfn-lint from 1.5.2 to 1.5.3 ([#4734](https://github.com/aws-powertools/powertools-lambda-python/issues/4734))
* **deps-dev:** bump the boto-typing group with 1 update ([#3170](https://github.com/aws-powertools/powertools-lambda-python/issues/3170))
* **deps-dev:** bump aws-cdk from 2.140.0 to 2.141.0 ([#4306](https://github.com/aws-powertools/powertools-lambda-python/issues/4306))
* **deps-dev:** bump aws-cdk from 2.126.0 to 2.127.0 ([#3761](https://github.com/aws-powertools/powertools-lambda-python/issues/3761))
* **deps-dev:** bump mypy from 0.961 to 0.971 ([#1320](https://github.com/aws-powertools/powertools-lambda-python/issues/1320))
* **deps-dev:** bump mkdocs-material from 9.5.8 to 9.5.9 ([#3759](https://github.com/aws-powertools/powertools-lambda-python/issues/3759))
* **deps-dev:** bump aws-cdk-lib from 2.140.0 to 2.141.0 ([#4308](https://github.com/aws-powertools/powertools-lambda-python/issues/4308))
* **deps-dev:** bump ruff from 0.4.3 to 0.4.4 ([#4309](https://github.com/aws-powertools/powertools-lambda-python/issues/4309))
* **deps-dev:** bump cfn-lint from 0.80.4 to 0.81.0 ([#3179](https://github.com/aws-powertools/powertools-lambda-python/issues/3179))
* **deps-dev:** bump sentry-sdk from 1.40.2 to 1.40.3 ([#3750](https://github.com/aws-powertools/powertools-lambda-python/issues/3750))
* **deps-dev:** bump cfn-lint from 0.85.0 to 0.85.1 ([#3749](https://github.com/aws-powertools/powertools-lambda-python/issues/3749))
* **deps-dev:** bump aws-cdk from 2.99.1 to 2.100.0 ([#3185](https://github.com/aws-powertools/powertools-lambda-python/issues/3185))
* **deps-dev:** bump aws-cdk-aws-lambda-python-alpha from 2.140.0a0 to 2.141.0a0 ([#4318](https://github.com/aws-powertools/powertools-lambda-python/issues/4318))
* **deps-dev:** bump hvac from 1.2.1 to 2.1.0 ([#3738](https://github.com/aws-powertools/powertools-lambda-python/issues/3738))
* **deps-dev:** bump pytest-socket from 0.6.0 to 0.7.0 ([#3721](https://github.com/aws-powertools/powertools-lambda-python/issues/3721))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.142 to 0.1.144 ([#4316](https://github.com/aws-powertools/powertools-lambda-python/issues/4316))
* **deps-dev:** bump cfn-lint from 0.87.1 to 0.87.2 ([#4317](https://github.com/aws-powertools/powertools-lambda-python/issues/4317))
* **deps-dev:** bump ruff from 0.2.0 to 0.2.1 ([#3742](https://github.com/aws-powertools/powertools-lambda-python/issues/3742))
* **deps-dev:** bump mypy-boto3-appconfig from 1.24.0 to 1.24.29 ([#1295](https://github.com/aws-powertools/powertools-lambda-python/issues/1295))
* **deps-dev:** bump mypy-boto3-dynamodb from 1.24.12 to 1.24.27 ([#1293](https://github.com/aws-powertools/powertools-lambda-python/issues/1293))
* **deps-dev:** bump the boto-typing group with 1 update ([#3196](https://github.com/aws-powertools/powertools-lambda-python/issues/3196))
* **deps-dev:** bump black from 23.12.1 to 24.1.1 ([#3739](https://github.com/aws-powertools/powertools-lambda-python/issues/3739))
* **deps-dev:** bump sentry-sdk from 1.40.1 to 1.40.2 ([#3740](https://github.com/aws-powertools/powertools-lambda-python/issues/3740))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.144 to 0.1.145 ([#4325](https://github.com/aws-powertools/powertools-lambda-python/issues/4325))
* **deps-dev:** bump cfn-lint from 1.5.1 to 1.5.2 ([#4724](https://github.com/aws-powertools/powertools-lambda-python/issues/4724))
* **deps-dev:** bump the boto-typing group with 2 updates ([#3211](https://github.com/aws-powertools/powertools-lambda-python/issues/3211))
* **deps-dev:** bump mkdocs-material from 9.5.21 to 9.5.22 ([#4324](https://github.com/aws-powertools/powertools-lambda-python/issues/4324))
* **deps-dev:** bump aws-cdk from 2.100.0 to 2.101.0 ([#3214](https://github.com/aws-powertools/powertools-lambda-python/issues/3214))
* **deps-dev:** bump mypy-boto3-s3 from 1.34.91 to 1.34.105 in the boto-typing group ([#4329](https://github.com/aws-powertools/powertools-lambda-python/issues/4329))
* **deps-dev:** bump aws-cdk-lib from 2.100.0 to 2.101.1 ([#3217](https://github.com/aws-powertools/powertools-lambda-python/issues/3217))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.145 to 0.1.146 ([#4330](https://github.com/aws-powertools/powertools-lambda-python/issues/4330))
* **deps-dev:** bump ruff from 0.0.292 to 0.1.0 ([#3213](https://github.com/aws-powertools/powertools-lambda-python/issues/3213))
* **deps-dev:** bump urllib3 from 1.26.17 to 1.26.18 in /layer ([#3221](https://github.com/aws-powertools/powertools-lambda-python/issues/3221))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.202 to 0.1.205 ([#4723](https://github.com/aws-powertools/powertools-lambda-python/issues/4723))
* **deps-dev:** bump mkdocs-material from 9.5.22 to 9.5.23 ([#4338](https://github.com/aws-powertools/powertools-lambda-python/issues/4338))
* **deps-dev:** bump zipp from 3.17.0 to 3.19.1 in /layer ([#4721](https://github.com/aws-powertools/powertools-lambda-python/issues/4721))
* **deps-dev:** bump aws-cdk from 2.141.0 to 2.142.0 ([#4343](https://github.com/aws-powertools/powertools-lambda-python/issues/4343))
* **deps-dev:** bump aws-cdk-aws-lambda-python-alpha from 2.147.3a0 to 2.148.0a0 ([#4722](https://github.com/aws-powertools/powertools-lambda-python/issues/4722))
* **deps-dev:** bump aws-cdk from 2.101.0 to 2.101.1 ([#3223](https://github.com/aws-powertools/powertools-lambda-python/issues/3223))
* **deps-dev:** bump cfn-lint from 0.81.0 to 0.82.0 ([#3224](https://github.com/aws-powertools/powertools-lambda-python/issues/3224))
* **deps-dev:** bump mypy-boto3-secretsmanager from 1.34.72 to 1.34.107 in the boto-typing group ([#4345](https://github.com/aws-powertools/powertools-lambda-python/issues/4345))
* **deps-dev:** bump sentry-sdk from 2.1.1 to 2.2.0 ([#4348](https://github.com/aws-powertools/powertools-lambda-python/issues/4348))
* **deps-dev:** bump isort from 5.11.5 to 5.13.2 ([#3723](https://github.com/aws-powertools/powertools-lambda-python/issues/3723))
* **deps-dev:** bump flake8-bugbear from 22.6.22 to 22.7.1 ([#1274](https://github.com/aws-powertools/powertools-lambda-python/issues/1274))
* **deps-dev:** bump cfn-lint from 0.82.0 to 0.82.2 ([#3229](https://github.com/aws-powertools/powertools-lambda-python/issues/3229))
* **deps-dev:** bump cfn-lint from 0.83.8 to 0.85.0 ([#3724](https://github.com/aws-powertools/powertools-lambda-python/issues/3724))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.146 to 0.1.150 ([#4346](https://github.com/aws-powertools/powertools-lambda-python/issues/4346))
* **deps-dev:** bump aws-cdk-lib from 2.141.0 to 2.142.1 ([#4352](https://github.com/aws-powertools/powertools-lambda-python/issues/4352))
* **deps-dev:** bump cfn-lint from 0.87.2 to 0.87.3 ([#4370](https://github.com/aws-powertools/powertools-lambda-python/issues/4370))
* **deps-dev:** bump aws-cdk from 2.101.1 to 2.102.0 ([#3232](https://github.com/aws-powertools/powertools-lambda-python/issues/3232))
* **deps-dev:** bump flake8-bugbear from 22.4.25 to 22.6.22 ([#1258](https://github.com/aws-powertools/powertools-lambda-python/issues/1258))
* **deps-dev:** bump mypy-boto3-dynamodb from 1.24.0 to 1.24.12 ([#1255](https://github.com/aws-powertools/powertools-lambda-python/issues/1255))
* **deps-dev:** bump mypy-boto3-secretsmanager ([#1252](https://github.com/aws-powertools/powertools-lambda-python/issues/1252))
* **deps-dev:** bump aws-cdk-lib from 2.147.3 to 2.148.0 ([#4710](https://github.com/aws-powertools/powertools-lambda-python/issues/4710))
* **deps-dev:** bump aws-cdk from 2.147.3 to 2.148.0 ([#4708](https://github.com/aws-powertools/powertools-lambda-python/issues/4708))
* **deps-dev:** bump cfn-lint from 1.5.0 to 1.5.1 ([#4711](https://github.com/aws-powertools/powertools-lambda-python/issues/4711))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.150 to 0.1.152 ([#4368](https://github.com/aws-powertools/powertools-lambda-python/issues/4368))
* **deps-dev:** bump sentry-sdk from 2.7.1 to 2.8.0 ([#4712](https://github.com/aws-powertools/powertools-lambda-python/issues/4712))
* **deps-dev:** bump the boto-typing group with 1 update ([#3231](https://github.com/aws-powertools/powertools-lambda-python/issues/3231))
* **deps-dev:** bump ruff from 0.5.0 to 0.5.1 ([#4697](https://github.com/aws-powertools/powertools-lambda-python/issues/4697))
* **deps-dev:** bump ruff from 0.1.0 to 0.1.1 ([#3235](https://github.com/aws-powertools/powertools-lambda-python/issues/3235))
* **deps-dev:** bump types-python-dateutil from 2.8.19.14 to 2.8.19.20240106 ([#3720](https://github.com/aws-powertools/powertools-lambda-python/issues/3720))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.201 to 0.1.202 ([#4696](https://github.com/aws-powertools/powertools-lambda-python/issues/4696))
* **deps-dev:** bump pytest from 7.4.4 to 8.0.0 ([#3711](https://github.com/aws-powertools/powertools-lambda-python/issues/3711))
* **deps-dev:** bump mypy-boto3-appconfig from 1.23.0.post1 to 1.24.0 ([#1233](https://github.com/aws-powertools/powertools-lambda-python/issues/1233))
* **deps-dev:** bump cfn-lint from 0.82.2 to 0.83.0 ([#3243](https://github.com/aws-powertools/powertools-lambda-python/issues/3243))
* **deps-dev:** bump mypy-boto3-dynamodb from 1.23.0.post1 to 1.24.0 ([#1234](https://github.com/aws-powertools/powertools-lambda-python/issues/1234))
* **deps-dev:** bump aws-cdk-aws-lambda-python-alpha from 2.147.2a0 to 2.147.3a0 ([#4686](https://github.com/aws-powertools/powertools-lambda-python/issues/4686))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.200 to 0.1.201 ([#4687](https://github.com/aws-powertools/powertools-lambda-python/issues/4687))
* **deps-dev:** bump mypy-boto3-secretsmanager from 1.23.8 to 1.24.0 ([#1232](https://github.com/aws-powertools/powertools-lambda-python/issues/1232))
* **deps-dev:** bump the boto-typing group with 2 updates ([#3242](https://github.com/aws-powertools/powertools-lambda-python/issues/3242))
* **deps-dev:** bump mypy-boto3-ssm from 1.23.0.post1 to 1.24.0 ([#1231](https://github.com/aws-powertools/powertools-lambda-python/issues/1231))
* **deps-dev:** bump mypy from 0.960 to 0.961 ([#1241](https://github.com/aws-powertools/powertools-lambda-python/issues/1241))
* **deps-dev:** bump cfn-lint from 1.4.2 to 1.5.0 ([#4675](https://github.com/aws-powertools/powertools-lambda-python/issues/4675))
* **deps-dev:** bump ruff from 0.1.1 to 0.1.2 ([#3250](https://github.com/aws-powertools/powertools-lambda-python/issues/3250))
* **deps-dev:** bump aws-cdk-lib from 2.147.2 to 2.147.3 ([#4674](https://github.com/aws-powertools/powertools-lambda-python/issues/4674))
* **deps-dev:** bump aws-cdk from 2.142.0 to 2.142.1 ([#4366](https://github.com/aws-powertools/powertools-lambda-python/issues/4366))
* **deps-dev:** bump mypy from 0.950 to 0.960 ([#1224](https://github.com/aws-powertools/powertools-lambda-python/issues/1224))
* **deps-dev:** bump mypy-boto3-secretsmanager from 1.23.0.post1 to 1.23.8 ([#1225](https://github.com/aws-powertools/powertools-lambda-python/issues/1225))
* **deps-dev:** bump aws-cdk-aws-lambda-python-alpha from 2.141.0a0 to 2.142.1a0 ([#4367](https://github.com/aws-powertools/powertools-lambda-python/issues/4367))
* **deps-dev:** bump mypy-boto3-secretsmanager from 1.21.34 to 1.23.0.post1 ([#1218](https://github.com/aws-powertools/powertools-lambda-python/issues/1218))
* **deps-dev:** bump mypy-boto3-appconfig from 1.21.34 to 1.23.0.post1 ([#1219](https://github.com/aws-powertools/powertools-lambda-python/issues/1219))
* **deps-dev:** bump mypy-boto3-ssm from 1.21.34 to 1.23.0.post1 ([#1220](https://github.com/aws-powertools/powertools-lambda-python/issues/1220))
* **deps-dev:** bump pytest from 7.4.2 to 7.4.3 ([#3249](https://github.com/aws-powertools/powertools-lambda-python/issues/3249))
* **deps-dev:** bump mypy from 1.4.1 to 1.8.0 ([#3710](https://github.com/aws-powertools/powertools-lambda-python/issues/3710))
* **deps-dev:** bump aws-cdk-lib from 2.102.0 to 2.103.0 ([#3258](https://github.com/aws-powertools/powertools-lambda-python/issues/3258))
* **deps-dev:** bump pytest from 8.2.0 to 8.2.1 ([#4381](https://github.com/aws-powertools/powertools-lambda-python/issues/4381))
* **deps-dev:** bump mkdocs-material from 9.5.23 to 9.5.24 ([#4380](https://github.com/aws-powertools/powertools-lambda-python/issues/4380))
* **deps-dev:** bump flake8-bugbear from 22.1.11 to 22.4.25 ([#1156](https://github.com/aws-powertools/powertools-lambda-python/issues/1156))
* **deps-dev:** bump mypy from 0.942 to 0.950 ([#1162](https://github.com/aws-powertools/powertools-lambda-python/issues/1162))
* **deps-dev:** bump flake8-eradicate from 1.2.0 to 1.2.1 ([#1158](https://github.com/aws-powertools/powertools-lambda-python/issues/1158))
* **deps-dev:** bump ruff from 0.1.2 to 0.1.3 ([#3257](https://github.com/aws-powertools/powertools-lambda-python/issues/3257))
* **deps-dev:** bump aws-cdk from 2.102.0 to 2.103.0 ([#3259](https://github.com/aws-powertools/powertools-lambda-python/issues/3259))
* **deps-dev:** bump httpx from 0.24.1 to 0.26.0 ([#3712](https://github.com/aws-powertools/powertools-lambda-python/issues/3712))
* **deps-dev:** bump mkdocs-git-revision-date-plugin ([#1146](https://github.com/aws-powertools/powertools-lambda-python/issues/1146))
* **deps-dev:** bump aws-cdk-lib from 2.103.0 to 2.103.1 ([#3263](https://github.com/aws-powertools/powertools-lambda-python/issues/3263))
* **deps-dev:** bump xenon from 0.8.0 to 0.9.0 ([#1145](https://github.com/aws-powertools/powertools-lambda-python/issues/1145))
* **deps-dev:** bump mypy from 0.931 to 0.942 ([#1133](https://github.com/aws-powertools/powertools-lambda-python/issues/1133))
* **deps-dev:** bump mypy-boto3-secretsmanager from 1.34.107 to 1.34.109 in the boto-typing group ([#4378](https://github.com/aws-powertools/powertools-lambda-python/issues/4378))
* **deps-dev:** bump aws-cdk from 2.103.0 to 2.103.1 ([#3264](https://github.com/aws-powertools/powertools-lambda-python/issues/3264))
* **deps-dev:** bump mkdocs-material from 8.2.4 to 8.2.7 ([#1131](https://github.com/aws-powertools/powertools-lambda-python/issues/1131))
* **deps-dev:** bump pytest from 6.2.5 to 7.0.1 ([#1063](https://github.com/aws-powertools/powertools-lambda-python/issues/1063))
* **deps-dev:** bump cfn-lint from 0.83.0 to 0.83.1 ([#3274](https://github.com/aws-powertools/powertools-lambda-python/issues/3274))
* **deps-dev:** bump the boto-typing group with 1 update ([#3273](https://github.com/aws-powertools/powertools-lambda-python/issues/3273))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.152 to 0.1.154 ([#4382](https://github.com/aws-powertools/powertools-lambda-python/issues/4382))
* **deps-dev:** bump mkdocs-material from 9.5.27 to 9.5.28 ([#4676](https://github.com/aws-powertools/powertools-lambda-python/issues/4676))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.199 to 0.1.200 ([#4677](https://github.com/aws-powertools/powertools-lambda-python/issues/4677))
* **deps-dev:** bump sentry-sdk from 1.32.0 to 1.33.1 ([#3277](https://github.com/aws-powertools/powertools-lambda-python/issues/3277))
* **deps-dev:** bump aws-cdk from 2.147.2 to 2.147.3 ([#4672](https://github.com/aws-powertools/powertools-lambda-python/issues/4672))
* **deps-dev:** bump mypy-boto3-s3 from 1.34.120 to 1.34.138 in the boto-typing group ([#4673](https://github.com/aws-powertools/powertools-lambda-python/issues/4673))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.198 to 0.1.199 ([#4668](https://github.com/aws-powertools/powertools-lambda-python/issues/4668))
* **deps-dev:** bump aws-cdk-aws-lambda-python-alpha from 2.147.1a0 to 2.147.2a0 ([#4667](https://github.com/aws-powertools/powertools-lambda-python/issues/4667))
* **deps-dev:** bump cfn-lint from 1.4.1 to 1.4.2 ([#4660](https://github.com/aws-powertools/powertools-lambda-python/issues/4660))
* **deps-dev:** bump aws-cdk-lib from 2.147.1 to 2.147.2 ([#4661](https://github.com/aws-powertools/powertools-lambda-python/issues/4661))
* **deps-dev:** bump coverage from 7.2.7 to 7.4.1 ([#3713](https://github.com/aws-powertools/powertools-lambda-python/issues/3713))
* **deps-dev:** bump sentry-sdk from 2.2.0 to 2.2.1 ([#4388](https://github.com/aws-powertools/powertools-lambda-python/issues/4388))
* **deps-dev:** bump pytest-asyncio from 0.23.6 to 0.23.7 ([#4387](https://github.com/aws-powertools/powertools-lambda-python/issues/4387))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.154 to 0.1.155 ([#4386](https://github.com/aws-powertools/powertools-lambda-python/issues/4386))
* **deps-dev:** bump mypy-boto3-cloudformation from 1.34.84 to 1.34.111 in the boto-typing group ([#4392](https://github.com/aws-powertools/powertools-lambda-python/issues/4392))
* **deps-dev:** bump the boto-typing group with 7 updates ([#3709](https://github.com/aws-powertools/powertools-lambda-python/issues/3709))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.155 to 0.1.157 ([#4394](https://github.com/aws-powertools/powertools-lambda-python/issues/4394))
* **deps-dev:** bump aws-cdk from 2.103.1 to 2.104.0 ([#3288](https://github.com/aws-powertools/powertools-lambda-python/issues/3288))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.157 to 0.1.158 ([#4397](https://github.com/aws-powertools/powertools-lambda-python/issues/4397))
* **deps-dev:** bump sentry-sdk from 2.2.1 to 2.3.1 ([#4398](https://github.com/aws-powertools/powertools-lambda-python/issues/4398))
* **deps-dev:** bump mkdocs-material from 8.1.9 to 8.2.4 ([#1054](https://github.com/aws-powertools/powertools-lambda-python/issues/1054))
* **deps-dev:** bump sentry-sdk from 1.33.1 to 1.34.0 ([#3290](https://github.com/aws-powertools/powertools-lambda-python/issues/3290))
* **deps-dev:** bump aws-cdk-lib from 2.103.1 to 2.104.0 ([#3291](https://github.com/aws-powertools/powertools-lambda-python/issues/3291))
* **deps-dev:** bump ruff from 0.1.3 to 0.1.4 ([#3297](https://github.com/aws-powertools/powertools-lambda-python/issues/3297))
* **deps-dev:** bump ruff from 0.1.15 to 0.2.0 ([#3702](https://github.com/aws-powertools/powertools-lambda-python/issues/3702))
* **deps-dev:** bump ruff from 0.4.4 to 0.4.5 ([#4399](https://github.com/aws-powertools/powertools-lambda-python/issues/4399))
* **deps-dev:** bump aws-cdk from 2.147.1 to 2.147.2 ([#4657](https://github.com/aws-powertools/powertools-lambda-python/issues/4657))
* **deps-dev:** bump aws-cdk from 2.142.1 to 2.143.0 ([#4402](https://github.com/aws-powertools/powertools-lambda-python/issues/4402))
* **deps-dev:** bump ruff from 0.4.10 to 0.5.0 ([#4644](https://github.com/aws-powertools/powertools-lambda-python/issues/4644))
* **deps-dev:** bump aws-cdk-lib from 2.142.1 to 2.143.0 ([#4403](https://github.com/aws-powertools/powertools-lambda-python/issues/4403))
* **deps-dev:** bump aws-cdk from 2.104.0 to 2.105.0 ([#3307](https://github.com/aws-powertools/powertools-lambda-python/issues/3307))
* **deps-dev:** bump aws-cdk-lib from 2.104.0 to 2.105.0 ([#3309](https://github.com/aws-powertools/powertools-lambda-python/issues/3309))
* **deps-dev:** bump flake8-bugbear from 21.11.29 to 22.1.11 ([#955](https://github.com/aws-powertools/powertools-lambda-python/issues/955))
* **deps-dev:** bump coverage from 7.5.1 to 7.5.2 ([#4413](https://github.com/aws-powertools/powertools-lambda-python/issues/4413))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.158 to 0.1.159 ([#4412](https://github.com/aws-powertools/powertools-lambda-python/issues/4412))
* **deps-dev:** bump mypy-boto3-dynamodb from 1.34.97 to 1.34.113 in the boto-typing group ([#4409](https://github.com/aws-powertools/powertools-lambda-python/issues/4409))
* **deps-dev:** bump aws-cdk-aws-lambda-python-alpha from 2.142.1a0 to 2.143.0a0 ([#4410](https://github.com/aws-powertools/powertools-lambda-python/issues/4410))
* **deps-dev:** bump mkdocs-material from 9.5.24 to 9.5.25 ([#4411](https://github.com/aws-powertools/powertools-lambda-python/issues/4411))
* **deps-dev:** bump mypy-boto3-dynamodb from 1.34.113 to 1.34.114 in the boto-typing group ([#4416](https://github.com/aws-powertools/powertools-lambda-python/issues/4416))
* **deps-dev:** bump coverage from 7.5.2 to 7.5.3 ([#4418](https://github.com/aws-powertools/powertools-lambda-python/issues/4418))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.159 to 0.1.161 ([#4420](https://github.com/aws-powertools/powertools-lambda-python/issues/4420))
* **deps-dev:** bump cfn-lint from 0.87.3 to 0.87.4 ([#4419](https://github.com/aws-powertools/powertools-lambda-python/issues/4419))
* **deps-dev:** bump mypy from 0.930 to 0.931 ([#941](https://github.com/aws-powertools/powertools-lambda-python/issues/941))
* **deps-dev:** bump ruff from 0.4.5 to 0.4.6 ([#4417](https://github.com/aws-powertools/powertools-lambda-python/issues/4417))
* **deps-dev:** bump cfn-lint from 1.3.7 to 1.4.1 ([#4646](https://github.com/aws-powertools/powertools-lambda-python/issues/4646))
* **deps-dev:** bump mypy from 0.920 to 0.930 ([#925](https://github.com/aws-powertools/powertools-lambda-python/issues/925))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.161 to 0.1.163 ([#4425](https://github.com/aws-powertools/powertools-lambda-python/issues/4425))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.163 to 0.1.164 ([#4428](https://github.com/aws-powertools/powertools-lambda-python/issues/4428))
* **deps-dev:** bump mypy from 0.910 to 0.920 ([#903](https://github.com/aws-powertools/powertools-lambda-python/issues/903))
* **deps-dev:** bump aws-cdk from 2.125.0 to 2.126.0 ([#3701](https://github.com/aws-powertools/powertools-lambda-python/issues/3701))
* **deps-dev:** bump aws-cdk from 2.143.0 to 2.143.1 ([#4430](https://github.com/aws-powertools/powertools-lambda-python/issues/4430))
* **deps-dev:** bump black from 21.11b1 to 21.12b0 ([#872](https://github.com/aws-powertools/powertools-lambda-python/issues/872))
* **deps-dev:** bump the boto-typing group with 3 updates ([#3314](https://github.com/aws-powertools/powertools-lambda-python/issues/3314))
* **deps-dev:** bump ruff from 0.1.4 to 0.1.5 ([#3315](https://github.com/aws-powertools/powertools-lambda-python/issues/3315))
* **deps-dev:** bump flake8 from 3.9.2 to 4.0.1 ([#789](https://github.com/aws-powertools/powertools-lambda-python/issues/789))
* **deps-dev:** bump aws-cdk from 2.124.0 to 2.125.0 ([#3693](https://github.com/aws-powertools/powertools-lambda-python/issues/3693))
* **deps-dev:** bump black from 21.10b0 to 21.11b1 ([#839](https://github.com/aws-powertools/powertools-lambda-python/issues/839))
* **deps-dev:** bump ruff from 0.1.14 to 0.1.15 ([#3685](https://github.com/aws-powertools/powertools-lambda-python/issues/3685))
* **deps-dev:** bump aws-cdk-lib from 2.143.0 to 2.143.1 ([#4429](https://github.com/aws-powertools/powertools-lambda-python/issues/4429))
* **deps-dev:** bump isort from 5.9.3 to 5.10.1 ([#811](https://github.com/aws-powertools/powertools-lambda-python/issues/811))
* **deps-dev:** bump coverage from 6.0.2 to 6.1.2 ([#810](https://github.com/aws-powertools/powertools-lambda-python/issues/810))
* **deps-dev:** bump aws-cdk-aws-lambda-python-alpha from 2.143.0a0 to 2.143.1a0 ([#4433](https://github.com/aws-powertools/powertools-lambda-python/issues/4433))
* **deps-dev:** bump sentry-sdk from 1.39.2 to 1.40.0 ([#3684](https://github.com/aws-powertools/powertools-lambda-python/issues/3684))
* **deps-dev:** bump aws-cdk from 2.105.0 to 2.106.0 ([#3320](https://github.com/aws-powertools/powertools-lambda-python/issues/3320))
* **deps-dev:** bump mkdocs-material from 7.3.5 to 7.3.6 ([#791](https://github.com/aws-powertools/powertools-lambda-python/issues/791))
* **deps-dev:** bump mkdocs-material from 7.3.3 to 7.3.5 ([#781](https://github.com/aws-powertools/powertools-lambda-python/issues/781))
* **deps-dev:** bump flake8-isort from 4.0.0 to 4.1.1 ([#785](https://github.com/aws-powertools/powertools-lambda-python/issues/785))
* **deps-dev:** bump aws-cdk-lib from 2.105.0 to 2.106.0 ([#3319](https://github.com/aws-powertools/powertools-lambda-python/issues/3319))
* **deps-dev:** bump flake8-eradicate from 1.1.0 to 1.2.0 ([#784](https://github.com/aws-powertools/powertools-lambda-python/issues/784))
* **deps-dev:** bump aws-cdk from 2.106.0 to 2.106.1 ([#3328](https://github.com/aws-powertools/powertools-lambda-python/issues/3328))
* **deps-dev:** bump pytest-asyncio from 0.15.1 to 0.16.0 ([#782](https://github.com/aws-powertools/powertools-lambda-python/issues/782))
* **deps-dev:** bump coverage from 6.0.1 to 6.0.2 ([#764](https://github.com/aws-powertools/powertools-lambda-python/issues/764))
* **deps-dev:** bump sentry-sdk from 1.34.0 to 1.35.0 ([#3334](https://github.com/aws-powertools/powertools-lambda-python/issues/3334))
* **deps-dev:** bump ruff from 0.4.6 to 0.4.7 ([#4435](https://github.com/aws-powertools/powertools-lambda-python/issues/4435))
* **deps-dev:** bump cfn-lint from 0.83.1 to 0.83.2 ([#3335](https://github.com/aws-powertools/powertools-lambda-python/issues/3335))
* **deps-dev:** bump aws-cdk-lib from 2.106.0 to 2.107.0 ([#3333](https://github.com/aws-powertools/powertools-lambda-python/issues/3333))
* **deps-dev:** bump mkdocs-material from 7.3.2 to 7.3.3 ([#758](https://github.com/aws-powertools/powertools-lambda-python/issues/758))
* **deps-dev:** bump flake8-comprehensions from 3.6.1 to 3.7.0 ([#759](https://github.com/aws-powertools/powertools-lambda-python/issues/759))
* **deps-dev:** bump pytest-xdist from 3.3.1 to 3.4.0 ([#3332](https://github.com/aws-powertools/powertools-lambda-python/issues/3332))
* **deps-dev:** bump coverage from 6.0 to 6.0.1 ([#751](https://github.com/aws-powertools/powertools-lambda-python/issues/751))
* **deps-dev:** bump aws-cdk from 2.106.1 to 2.108.0 ([#3341](https://github.com/aws-powertools/powertools-lambda-python/issues/3341))
* **deps-dev:** bump aws-cdk from 2.123.0 to 2.124.0 ([#3678](https://github.com/aws-powertools/powertools-lambda-python/issues/3678))
* **deps-dev:** bump aws-cdk from 2.143.1 to 2.144.0 ([#4443](https://github.com/aws-powertools/powertools-lambda-python/issues/4443))
* **deps-dev:** bump aws-cdk-lib from 2.143.1 to 2.144.0 ([#4441](https://github.com/aws-powertools/powertools-lambda-python/issues/4441))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.164 to 0.1.169 ([#4442](https://github.com/aws-powertools/powertools-lambda-python/issues/4442))
* **deps-dev:** bump pytest from 8.2.1 to 8.2.2 ([#4450](https://github.com/aws-powertools/powertools-lambda-python/issues/4450))
* **deps-dev:** bump aws-cdk-lib from 2.107.0 to 2.108.1 ([#3343](https://github.com/aws-powertools/powertools-lambda-python/issues/3343))
* **deps-dev:** bump mkdocs-material from 7.3.1 to 7.3.2 ([#741](https://github.com/aws-powertools/powertools-lambda-python/issues/741))
* **deps-dev:** bump sentry-sdk from 2.3.1 to 2.4.0 ([#4449](https://github.com/aws-powertools/powertools-lambda-python/issues/4449))
* **deps-dev:** bump aws-cdk-aws-lambda-python-alpha from 2.143.1a0 to 2.144.0a0 ([#4448](https://github.com/aws-powertools/powertools-lambda-python/issues/4448))
* **deps-dev:** bump mypy-boto3-s3 from 1.34.105 to 1.34.120 in the boto-typing group ([#4452](https://github.com/aws-powertools/powertools-lambda-python/issues/4452))
* **deps-dev:** bump aws-cdk from 2.108.0 to 2.108.1 ([#3344](https://github.com/aws-powertools/powertools-lambda-python/issues/3344))
* **deps-dev:** bump pytest-cov from 2.12.1 to 3.0.0 ([#730](https://github.com/aws-powertools/powertools-lambda-python/issues/730))
* **deps-dev:** bump coverage from 5.5 to 6.0 ([#732](https://github.com/aws-powertools/powertools-lambda-python/issues/732))
* **deps-dev:** bump aws-cdk from 2.108.1 to 2.109.0 ([#3354](https://github.com/aws-powertools/powertools-lambda-python/issues/3354))
* **deps-dev:** bump mkdocs-material from 7.3.0 to 7.3.1 ([#731](https://github.com/aws-powertools/powertools-lambda-python/issues/731))
* **deps-dev:** bump flake8-bugbear from 21.9.1 to 21.9.2 ([#712](https://github.com/aws-powertools/powertools-lambda-python/issues/712))
* **deps-dev:** bump aws-cdk from 2.122.0 to 2.123.0 ([#3673](https://github.com/aws-powertools/powertools-lambda-python/issues/3673))
* **deps-dev:** bump the boto-typing group with 11 updates ([#3362](https://github.com/aws-powertools/powertools-lambda-python/issues/3362))
* **deps-dev:** bump aws-cdk from 2.109.0 to 2.110.0 ([#3361](https://github.com/aws-powertools/powertools-lambda-python/issues/3361))
* **deps-dev:** bump ruff from 0.1.5 to 0.1.6 ([#3364](https://github.com/aws-powertools/powertools-lambda-python/issues/3364))
* **deps-dev:** bump mkdocs-material from 7.2.8 to 7.3.0 ([#695](https://github.com/aws-powertools/powertools-lambda-python/issues/695))
* **deps-dev:** bump mkdocs-material from 7.2.6 to 7.2.8 ([#682](https://github.com/aws-powertools/powertools-lambda-python/issues/682))
* **deps-dev:** bump flake8-bugbear from 21.4.3 to 21.9.1 ([#676](https://github.com/aws-powertools/powertools-lambda-python/issues/676))
* **deps-dev:** bump aws-cdk-lib from 2.108.1 to 2.110.0 ([#3365](https://github.com/aws-powertools/powertools-lambda-python/issues/3365))
* **deps-dev:** bump radon from 4.5.2 to 5.1.0 ([#673](https://github.com/aws-powertools/powertools-lambda-python/issues/673))
* **deps-dev:** bump cfn-lint from 0.83.2 to 0.83.3 ([#3363](https://github.com/aws-powertools/powertools-lambda-python/issues/3363))
* **deps-dev:** bump xenon from 0.7.3 to 0.8.0 ([#669](https://github.com/aws-powertools/powertools-lambda-python/issues/669))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.169 to 0.1.173 ([#4459](https://github.com/aws-powertools/powertools-lambda-python/issues/4459))
* **deps-dev:** bump mkdocs-material from 7.2.4 to 7.2.6 ([#665](https://github.com/aws-powertools/powertools-lambda-python/issues/665))
* **deps-dev:** bump the boto-typing group with 2 updates ([#3376](https://github.com/aws-powertools/powertools-lambda-python/issues/3376))
* **deps-dev:** bump pytest from 6.2.4 to 6.2.5 ([#662](https://github.com/aws-powertools/powertools-lambda-python/issues/662))
* **deps-dev:** bump sentry-sdk from 2.7.0 to 2.7.1 ([#4645](https://github.com/aws-powertools/powertools-lambda-python/issues/4645))
* **deps-dev:** bump ruff from 0.4.7 to 0.4.8 ([#4455](https://github.com/aws-powertools/powertools-lambda-python/issues/4455))
* **deps-dev:** bump ruff from 0.1.13 to 0.1.14 ([#3656](https://github.com/aws-powertools/powertools-lambda-python/issues/3656))
* **deps-dev:** bump sentry-sdk from 2.4.0 to 2.5.0 ([#4462](https://github.com/aws-powertools/powertools-lambda-python/issues/4462))
* **deps-dev:** bump sentry-sdk from 1.35.0 to 1.36.0 ([#3388](https://github.com/aws-powertools/powertools-lambda-python/issues/3388))
* **deps-dev:** bump mkdocs-material from 9.5.25 to 9.5.26 ([#4463](https://github.com/aws-powertools/powertools-lambda-python/issues/4463))
* **deps-dev:** bump pytest-xdist from 3.4.0 to 3.5.0 ([#3387](https://github.com/aws-powertools/powertools-lambda-python/issues/3387))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.173 to 0.1.174 ([#4466](https://github.com/aws-powertools/powertools-lambda-python/issues/4466))
* **deps-dev:** bump aws-cdk from 2.121.1 to 2.122.0 ([#3648](https://github.com/aws-powertools/powertools-lambda-python/issues/3648))
* **deps-dev:** bump aws-cdk from 2.110.0 to 2.110.1 ([#3403](https://github.com/aws-powertools/powertools-lambda-python/issues/3403))
* **deps-dev:** bump ijson from 3.2.3 to 3.3.0 ([#4465](https://github.com/aws-powertools/powertools-lambda-python/issues/4465))
* **deps-dev:** bump aws-cdk-lib from 2.110.0 to 2.110.1 ([#3402](https://github.com/aws-powertools/powertools-lambda-python/issues/3402))
* **deps-dev:** bump flake8-comprehensions from 3.6.0 to 3.6.1 ([#615](https://github.com/aws-powertools/powertools-lambda-python/issues/615))
* **deps-dev:** bump the boto-typing group with 1 update ([#3400](https://github.com/aws-powertools/powertools-lambda-python/issues/3400))
* **deps-dev:** bump cfn-lint from 1.3.5 to 1.3.7 ([#4634](https://github.com/aws-powertools/powertools-lambda-python/issues/4634))
* **deps-dev:** bump aws-cdk from 2.120.0 to 2.121.1 ([#3634](https://github.com/aws-powertools/powertools-lambda-python/issues/3634))
* **deps-dev:** bump ruff from 0.1.11 to 0.1.13 ([#3625](https://github.com/aws-powertools/powertools-lambda-python/issues/3625))
* **deps-dev:** bump flake8-comprehensions from 3.5.0 to 3.6.0 ([#609](https://github.com/aws-powertools/powertools-lambda-python/issues/609))
* **deps-dev:** bump ruff from 0.5.5 to 0.5.6 ([#4874](https://github.com/aws-powertools/powertools-lambda-python/issues/4874))
* **deps-dev:** bump mkdocs-material from 7.2.3 to 7.2.4 ([#607](https://github.com/aws-powertools/powertools-lambda-python/issues/607))
* **deps-dev:** bump the boto-typing group with 11 updates ([#3427](https://github.com/aws-powertools/powertools-lambda-python/issues/3427))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.174 to 0.1.175 ([#4472](https://github.com/aws-powertools/powertools-lambda-python/issues/4472))
* **deps-dev:** bump aws-cdk from 2.110.1 to 2.111.0 ([#3418](https://github.com/aws-powertools/powertools-lambda-python/issues/3418))
* **deps-dev:** bump aws-cdk-lib from 2.110.1 to 2.111.0 ([#3428](https://github.com/aws-powertools/powertools-lambda-python/issues/3428))
* **deps-dev:** bump mkdocs-material from 7.2.2 to 7.2.3 ([#596](https://github.com/aws-powertools/powertools-lambda-python/issues/596))
* **deps-dev:** bump aws-cdk from 2.118.0 to 2.120.0 ([#3627](https://github.com/aws-powertools/powertools-lambda-python/issues/3627))
* **deps-dev:** bump aws-cdk from 2.111.0 to 2.112.0 ([#3440](https://github.com/aws-powertools/powertools-lambda-python/issues/3440))
* **deps-dev:** bump mkdocs-material from 7.2.1 to 7.2.2 ([#582](https://github.com/aws-powertools/powertools-lambda-python/issues/582))
* **deps-dev:** bump sentry-sdk from 2.5.0 to 2.5.1 ([#4469](https://github.com/aws-powertools/powertools-lambda-python/issues/4469))
* **deps-dev:** bump sentry-sdk from 1.36.0 to 1.38.0 ([#3435](https://github.com/aws-powertools/powertools-lambda-python/issues/3435))
* **deps-dev:** bump pdoc3 from 0.9.2 to 0.10.0 ([#584](https://github.com/aws-powertools/powertools-lambda-python/issues/584))
* **deps-dev:** bump isort from 5.9.2 to 5.9.3 ([#574](https://github.com/aws-powertools/powertools-lambda-python/issues/574))
* **deps-dev:** bump mkdocs-material from 7.2.0 to 7.2.1 ([#566](https://github.com/aws-powertools/powertools-lambda-python/issues/566))
* **deps-dev:** bump mkdocs-material from 7.1.11 to 7.2.0 ([#551](https://github.com/aws-powertools/powertools-lambda-python/issues/551))
* **deps-dev:** bump flake8-black from 0.2.1 to 0.2.3 ([#541](https://github.com/aws-powertools/powertools-lambda-python/issues/541))
* **deps-dev:** bump cfn-lint from 0.87.4 to 0.87.5 ([#4479](https://github.com/aws-powertools/powertools-lambda-python/issues/4479))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.175 to 0.1.176 ([#4480](https://github.com/aws-powertools/powertools-lambda-python/issues/4480))
* **deps-dev:** bump mkdocs-material from 7.1.10 to 7.1.11 ([#542](https://github.com/aws-powertools/powertools-lambda-python/issues/542))
* **deps-dev:** bump aws-cdk from 2.112.0 to 2.113.0 ([#3448](https://github.com/aws-powertools/powertools-lambda-python/issues/3448))
* **deps-dev:** bump cfn-lint from 0.83.3 to 0.83.4 ([#3450](https://github.com/aws-powertools/powertools-lambda-python/issues/3450))
* **deps-dev:** bump ruff from 0.1.6 to 0.1.7 ([#3458](https://github.com/aws-powertools/powertools-lambda-python/issues/3458))
* **deps-dev:** bump mkdocs-material from 7.1.9 to 7.1.10 ([#522](https://github.com/aws-powertools/powertools-lambda-python/issues/522))
* **deps-dev:** bump the boto-typing group with 1 update ([#3457](https://github.com/aws-powertools/powertools-lambda-python/issues/3457))
* **deps-dev:** bump isort from 5.9.1 to 5.9.2 ([#514](https://github.com/aws-powertools/powertools-lambda-python/issues/514))
* **deps-dev:** bump mypy-boto3-ssm from 1.34.91 to 1.34.132 in the boto-typing group ([#4623](https://github.com/aws-powertools/powertools-lambda-python/issues/4623))
* **deps-dev:** bump aws-cdk from 2.144.0 to 2.145.0 ([#4482](https://github.com/aws-powertools/powertools-lambda-python/issues/4482))
* **deps-dev:** bump jinja2 from 3.1.2 to 3.1.3 ([#3619](https://github.com/aws-powertools/powertools-lambda-python/issues/3619))
* **deps-dev:** bump flake8-eradicate from 1.0.0 to 1.1.0 ([#492](https://github.com/aws-powertools/powertools-lambda-python/issues/492))
* **deps-dev:** bump isort from 5.8.0 to 5.9.1 ([#487](https://github.com/aws-powertools/powertools-lambda-python/issues/487))
* **deps-dev:** bump sentry-sdk from 1.39.1 to 1.39.2 ([#3614](https://github.com/aws-powertools/powertools-lambda-python/issues/3614))
* **deps-dev:** bump aws-cdk from 2.113.0 to 2.114.1 ([#3464](https://github.com/aws-powertools/powertools-lambda-python/issues/3464))
* **deps-dev:** bump mkdocs-material from 7.1.7 to 7.1.9 ([#491](https://github.com/aws-powertools/powertools-lambda-python/issues/491))
* **deps-dev:** bump gitpython from 3.1.40 to 3.1.41 ([#3611](https://github.com/aws-powertools/powertools-lambda-python/issues/3611))
* **deps-dev:** bump aws-cdk-lib from 2.144.0 to 2.145.0 ([#4481](https://github.com/aws-powertools/powertools-lambda-python/issues/4481))
* **deps-dev:** bump the boto-typing group with 1 update ([#3478](https://github.com/aws-powertools/powertools-lambda-python/issues/3478))
* **deps-dev:** bump cfn-lint from 0.83.7 to 0.83.8 ([#3603](https://github.com/aws-powertools/powertools-lambda-python/issues/3603))
* **deps-dev:** bump aws-cdk-aws-lambda-python-alpha from 2.144.0a0 to 2.145.0a0 ([#4487](https://github.com/aws-powertools/powertools-lambda-python/issues/4487))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.176 to 0.1.179 ([#4488](https://github.com/aws-powertools/powertools-lambda-python/issues/4488))
* **deps-dev:** bump cfn-lint from 0.87.5 to 0.87.6 ([#4486](https://github.com/aws-powertools/powertools-lambda-python/issues/4486))
* **deps-dev:** bump aws-cdk from 2.150.0 to 2.151.0 ([#4872](https://github.com/aws-powertools/powertools-lambda-python/issues/4872))
* **deps-dev:** bump cfn-lint from 0.83.4 to 0.83.5 ([#3487](https://github.com/aws-powertools/powertools-lambda-python/issues/3487))
* **deps-dev:** bump mkdocs-material from 7.1.6 to 7.1.7 ([#464](https://github.com/aws-powertools/powertools-lambda-python/issues/464))
* **deps-dev:** bump aws-cdk from 2.117.0 to 2.118.0 ([#3589](https://github.com/aws-powertools/powertools-lambda-python/issues/3589))
* **deps-dev:** bump sentry-sdk from 1.38.0 to 1.39.0 ([#3495](https://github.com/aws-powertools/powertools-lambda-python/issues/3495))
* **deps-dev:** bump ruff from 0.1.10 to 0.1.11 ([#3588](https://github.com/aws-powertools/powertools-lambda-python/issues/3588))
* **deps-dev:** bump pytest-cov from 2.12.0 to 2.12.1 ([#454](https://github.com/aws-powertools/powertools-lambda-python/issues/454))
* **deps-dev:** bump cfn-lint from 1.3.3 to 1.3.5 ([#4628](https://github.com/aws-powertools/powertools-lambda-python/issues/4628))
* **deps-dev:** bump filelock from 3.15.3 to 3.15.4 ([#4626](https://github.com/aws-powertools/powertools-lambda-python/issues/4626))
* **deps-dev:** bump the boto-typing group with 1 update ([#3500](https://github.com/aws-powertools/powertools-lambda-python/issues/3500))
* **deps-dev:** bump mypy-boto3-secretsmanager from 1.34.109 to 1.34.125 in the boto-typing group ([#4509](https://github.com/aws-powertools/powertools-lambda-python/issues/4509))
* **deps-dev:** bump ruff from 0.1.7 to 0.1.8 ([#3501](https://github.com/aws-powertools/powertools-lambda-python/issues/3501))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.179 to 0.1.182 ([#4510](https://github.com/aws-powertools/powertools-lambda-python/issues/4510))
* **deps-dev:** bump filelock from 3.14.0 to 3.15.1 ([#4512](https://github.com/aws-powertools/powertools-lambda-python/issues/4512))
* **deps-dev:** bump cfn-lint from 0.87.6 to 0.87.7 ([#4513](https://github.com/aws-powertools/powertools-lambda-python/issues/4513))
* **deps-dev:** bump bandit from 1.7.8 to 1.7.9 ([#4511](https://github.com/aws-powertools/powertools-lambda-python/issues/4511))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.182 to 0.1.184 ([#4529](https://github.com/aws-powertools/powertools-lambda-python/issues/4529))
* **deps-dev:** bump aws-cdk from 2.145.0 to 2.146.0 ([#4525](https://github.com/aws-powertools/powertools-lambda-python/issues/4525))
* **deps-dev:** bump ruff from 0.1.9 to 0.1.10 ([#3583](https://github.com/aws-powertools/powertools-lambda-python/issues/3583))
* **deps-dev:** bump aws-cdk-lib from 2.145.0 to 2.146.0 ([#4526](https://github.com/aws-powertools/powertools-lambda-python/issues/4526))
* **deps-dev:** bump ruff from 0.4.8 to 0.4.9 ([#4528](https://github.com/aws-powertools/powertools-lambda-python/issues/4528))
* **deps-dev:** bump mypy from 1.10.0 to 1.10.1 ([#4624](https://github.com/aws-powertools/powertools-lambda-python/issues/4624))
* **deps-dev:** bump pytest from 7.4.3 to 7.4.4 ([#3576](https://github.com/aws-powertools/powertools-lambda-python/issues/3576))
* **deps-dev:** bump mypy-boto3-secretsmanager from 1.34.125 to 1.34.128 in the boto-typing group ([#4541](https://github.com/aws-powertools/powertools-lambda-python/issues/4541))
* **deps-dev:** bump sentry-sdk from 1.39.0 to 1.39.1 ([#3512](https://github.com/aws-powertools/powertools-lambda-python/issues/3512))
* **deps-dev:** bump the boto-typing group with 11 updates ([#3509](https://github.com/aws-powertools/powertools-lambda-python/issues/3509))
* **deps-dev:** bump aws-cdk from 2.114.1 to 2.115.0 ([#3508](https://github.com/aws-powertools/powertools-lambda-python/issues/3508))
* **deps-dev:** bump aws-cdk from 2.116.1 to 2.117.0 ([#3565](https://github.com/aws-powertools/powertools-lambda-python/issues/3565))
* **deps-dev:** bump urllib3 from 1.26.18 to 1.26.19 in /layer ([#4547](https://github.com/aws-powertools/powertools-lambda-python/issues/4547))
* **deps-dev:** bump aws-cdk-aws-lambda-python-alpha from 2.145.0a0 to 2.146.0a0 ([#4542](https://github.com/aws-powertools/powertools-lambda-python/issues/4542))
* **deps-dev:** bump mkdocs-material from 9.5.26 to 9.5.27 ([#4544](https://github.com/aws-powertools/powertools-lambda-python/issues/4544))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.184 to 0.1.188 ([#4550](https://github.com/aws-powertools/powertools-lambda-python/issues/4550))
* **deps-dev:** bump cfn-lint from 0.83.6 to 0.83.7 ([#3554](https://github.com/aws-powertools/powertools-lambda-python/issues/3554))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.188 to 0.1.189 ([#4564](https://github.com/aws-powertools/powertools-lambda-python/issues/4564))
* **deps-dev:** bump hvac from 2.2.0 to 2.3.0 ([#4563](https://github.com/aws-powertools/powertools-lambda-python/issues/4563))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.189 to 0.1.192 ([#4578](https://github.com/aws-powertools/powertools-lambda-python/issues/4578))
* **deps-dev:** bump sentry-sdk from 2.5.1 to 2.6.0 ([#4579](https://github.com/aws-powertools/powertools-lambda-python/issues/4579))
* **deps-dev:** bump cfn-lint from 0.87.7 to 1.3.0 ([#4577](https://github.com/aws-powertools/powertools-lambda-python/issues/4577))
* **deps-dev:** bump filelock from 3.15.1 to 3.15.3 ([#4576](https://github.com/aws-powertools/powertools-lambda-python/issues/4576))
* **deps-dev:** bump aws-cdk from 2.115.0 to 2.116.1 ([#3553](https://github.com/aws-powertools/powertools-lambda-python/issues/3553))
* **deps-dev:** bump mypy-boto3-dynamodb from 1.34.114 to 1.34.131 in the boto-typing group ([#4593](https://github.com/aws-powertools/powertools-lambda-python/issues/4593))
* **deps-dev:** bump cfn-lint from 0.83.5 to 0.83.6 ([#3521](https://github.com/aws-powertools/powertools-lambda-python/issues/3521))
* **deps-dev:** bump ruff from 0.1.8 to 0.1.9 ([#3550](https://github.com/aws-powertools/powertools-lambda-python/issues/3550))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.192 to 0.1.193 ([#4596](https://github.com/aws-powertools/powertools-lambda-python/issues/4596))
* **deps-dev:** bump ruff from 0.4.9 to 0.4.10 ([#4594](https://github.com/aws-powertools/powertools-lambda-python/issues/4594))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.193 to 0.1.194 ([#4601](https://github.com/aws-powertools/powertools-lambda-python/issues/4601))
* **deps-dev:** bump aws-cdk from 2.146.0 to 2.147.0 ([#4604](https://github.com/aws-powertools/powertools-lambda-python/issues/4604))
* **deps-dev:** bump aws-cdk-lib from 2.146.0 to 2.147.0 ([#4603](https://github.com/aws-powertools/powertools-lambda-python/issues/4603))
* **deps-dev:** bump cfn-lint from 1.3.0 to 1.3.3 ([#4602](https://github.com/aws-powertools/powertools-lambda-python/issues/4602))
* **deps-dev:** bump aws-cdk-aws-lambda-python-alpha from 2.146.0a0 to 2.147.0a0 ([#4619](https://github.com/aws-powertools/powertools-lambda-python/issues/4619))
* **deps-dev:** bump aws-cdk from 2.147.0 to 2.147.1 ([#4614](https://github.com/aws-powertools/powertools-lambda-python/issues/4614))
* **deps-dev:** bump coverage from 7.5.3 to 7.5.4 ([#4617](https://github.com/aws-powertools/powertools-lambda-python/issues/4617))
* **deps-dev:** bump aws-cdk-lib from 2.147.0 to 2.147.1 ([#4615](https://github.com/aws-powertools/powertools-lambda-python/issues/4615))
* **deps-dev:** bump pdoc3 from 0.10.0 to 0.11.0 ([#4618](https://github.com/aws-powertools/powertools-lambda-python/issues/4618))
* **deps-dev:** bump mike from 2.1.1 to 2.1.2 ([#4616](https://github.com/aws-powertools/powertools-lambda-python/issues/4616))
* **deps-dev:** bump cdklabs-generative-ai-cdk-constructs from 0.1.194 to 0.1.198 ([#4627](https://github.com/aws-powertools/powertools-lambda-python/issues/4627))
* **deps-dev:** bump black from 24.4.2 to 24.8.0 ([#4873](https://github.com/aws-powertools/powertools-lambda-python/issues/4873))
* **docs:** update highlighted lines on the Typing examples ([#4131](https://github.com/aws-powertools/powertools-lambda-python/issues/4131))
* **docs:** include the environment variables section in the utilities documentation ([#2925](https://github.com/aws-powertools/powertools-lambda-python/issues/2925))
* **docs:** bump layer version to 36 (1.29.2)
* **docs:** correct markdown based on markdown lint ([#603](https://github.com/aws-powertools/powertools-lambda-python/issues/603))
* **docs:** add Bedrock Agents to feature list ([#3889](https://github.com/aws-powertools/powertools-lambda-python/issues/3889))
* **docs:** disable line length rule using older syntax ([#2920](https://github.com/aws-powertools/powertools-lambda-python/issues/2920))
* **docs:** remove pause sentence from roadmap ([#1409](https://github.com/aws-powertools/powertools-lambda-python/issues/1409))
* **docs:** update description to trigger changelog generation
* **docs:** Add lambda layer policy to versioning docs ([#4811](https://github.com/aws-powertools/powertools-lambda-python/issues/4811))
* **docs:** update CHANGELOG for v1.26.7
* **docs:** Add some of the missing docstrings
* **docs:** update site name to test ci changelog
* **docs:** remove v2 banner on top of the docs
* **documentation:** updating repository URL and name to the new location ([#2499](https://github.com/aws-powertools/powertools-lambda-python/issues/2499))
* **event-handler:** adjusts exception docstrings to not confuse AppSync customers
* **github:** new tech debt issue form ([#2131](https://github.com/aws-powertools/powertools-lambda-python/issues/2131))
* **governance:** add FastAPI third party license attribution ([#4297](https://github.com/aws-powertools/powertools-lambda-python/issues/4297))
* **governance:** update feat request to a form
* **governance:** update rfc to a form
* **governance:** update static typing to a form
* **governance:** update external non-triage effort disclaimer
* **governance:** refresh pull request template sections
* **governance:** remove markdown rendering from docs issue template
* **governance:** warn message on closed issues
* **governance:** warn message on closed issues
* **governance:** auto-merge mypy-stub dependabot
* **governance:** bug report form typo
* **governance:** auto-merge workflow_dispatch off
* **governance:** auto-merge on all PR events
* **governance:** add release label on pr merge
* **governance:** enforce safe scope on pr merge labelling
* **governance:** limit build workflow to code changes only
* **governance:** check for related issue in new PRs
* **governance:** address gh reusable workflow limitation
* **governance:** fix workflow action requirements & syntax
* **governance:** remove 'area/' from PR labels
* **governance:** update docs report to a form
* **governance:** fix on_merged_pr workflow syntax
* **governance:** remove any step relying on master branch
* **governance:** update bug report to a form
* **governance:** new ask a question
* **governance:** new static typing report
* **governance:** add Lambda Powertools for .NET in issue templates ([#2196](https://github.com/aws-powertools/powertools-lambda-python/issues/2196))
* **governance:** update emeritus affiliation
* **governance:** Fix python version in issue templates ([#2275](https://github.com/aws-powertools/powertools-lambda-python/issues/2275))
* **governance:** update active maintainers list ([#2715](https://github.com/aws-powertools/powertools-lambda-python/issues/2715))
* **governance:** add new maintenance issue template for tech debt ([#1326](https://github.com/aws-powertools/powertools-lambda-python/issues/1326))
* **governance:** update wording tech debt to summary in maintenance template
* **governance:** remove devcontainer in favour of gitpod.io ([#1411](https://github.com/aws-powertools/powertools-lambda-python/issues/1411))
* **governance:** add pre-configured dev environment with GitPod.io to ease contributions ([#1403](https://github.com/aws-powertools/powertools-lambda-python/issues/1403))
* **governance:** fix typo on semantic commit link introduced in [#1](https://github.com/aws-powertools/powertools-lambda-python/issues/1)aef4
* **governance:** auto-merge to use squash
* **governance:** fix errors when creating Gitpod environment ([#4532](https://github.com/aws-powertools/powertools-lambda-python/issues/4532))
* **layer:** bump to latest version 37
* **layer:** change layer-balance script to support new regions
* **layer:** bump to 1.31.1 (v39)
* **layer:** remove unsused GetFunction permission for the canary
* **layers:** bump to 1.26.6 using layer v26
* **layers:** downgrade aws cdk to 2.145.0 ([#4739](https://github.com/aws-powertools/powertools-lambda-python/issues/4739))
* **layers:** expand to all aws commercial regions ([#1324](https://github.com/aws-powertools/powertools-lambda-python/issues/1324))
* **layers:** add release pipeline in GitHub Actions ([#1278](https://github.com/aws-powertools/powertools-lambda-python/issues/1278))
* **layers:** bump to 22 for 1.26.3
* **layers:** Update log retention to 10 years ([#3424](https://github.com/aws-powertools/powertools-lambda-python/issues/3424))
* **layers:** upgrade cdk dep hashes to prevent ci fail
* **layers:** layer canary stack should not hardcode resource name
* **layers:** downgrade aws cdk to 2.145.0 ([#4640](https://github.com/aws-powertools/powertools-lambda-python/issues/4640))
* **layers:** bump to 1.26.5
* **layers:** replace layers account secret ([#1329](https://github.com/aws-powertools/powertools-lambda-python/issues/1329))
* **layers:** bump to 10 for 1.25.0
* **layers:** bump to 21 for 1.26.2
* **layers:** add release pipeline in GitHub Actions ([#1278](https://github.com/aws-powertools/powertools-lambda-python/issues/1278))
* **layers:** bump to 22 for 1.26.3
* **layers:** add dummy v2 layer automation
* **libraries:** add jmespath as a required dependency ([#4422](https://github.com/aws-powertools/powertools-lambda-python/issues/4422))
* **license:** Add THIRD-PARTY-LICENSES ([#641](https://github.com/aws-powertools/powertools-lambda-python/issues/641))
* **license:** add third party license ([#635](https://github.com/aws-powertools/powertools-lambda-python/issues/635))
* **lint:** use new isort black integration
* **logger:** uncaught exception to use exception value as message
* **logger:** use package logger over source logger to reduce noise ([#4793](https://github.com/aws-powertools/powertools-lambda-python/issues/4793))
* **logger:** overload inject_lambda_context with generics ([#1583](https://github.com/aws-powertools/powertools-lambda-python/issues/1583))
* **maintainer:** add Leandro as maintainer ([#1468](https://github.com/aws-powertools/powertools-lambda-python/issues/1468))
* **maintainers:** fix release workflow rename
* **maintainers:** add Ruben as a maintainer ([#1392](https://github.com/aws-powertools/powertools-lambda-python/issues/1392))
* **maintainers:** update release workflow link
* **maintenance:** add discord link to first PR and first issue ([#1493](https://github.com/aws-powertools/powertools-lambda-python/issues/1493))
* **maintenance:** add Banxware customer refernece ([#4841](https://github.com/aws-powertools/powertools-lambda-python/issues/4841))
* **maintenance:** validate acknowledgement section is present ([#2112](https://github.com/aws-powertools/powertools-lambda-python/issues/2112))
* **maintenance:** enables publishing docs and changelog, running e2e tests only in the main repository ([#2924](https://github.com/aws-powertools/powertools-lambda-python/issues/2924))
* **mergify:** disable check for matrix jobs
* **mergify:** use job name to match GH Actions
* **metrics:** fix tests when warnings are disabled ([#994](https://github.com/aws-powertools/powertools-lambda-python/issues/994))
* **metrics:** revert dimensions test before splitting ([#1243](https://github.com/aws-powertools/powertools-lambda-python/issues/1243))
* **multiple:** localize powertools_dev env logic and warning ([#1570](https://github.com/aws-powertools/powertools-lambda-python/issues/1570))
* **package:** correct pyproject version manually
* **parser:** add workaround to make API GW test button work ([#1971](https://github.com/aws-powertools/powertools-lambda-python/issues/1971))
* **pypi:** add new links to Pypi package homepage ([#1912](https://github.com/aws-powertools/powertools-lambda-python/issues/1912))
* **security:** improve debugging for provenance script ([#2784](https://github.com/aws-powertools/powertools-lambda-python/issues/2784))
* **shared:** fix cyclic import & refactor data extraction fn ([#613](https://github.com/aws-powertools/powertools-lambda-python/issues/613))
* **streaming:** replace deprecated Version classes from distutils ([#2752](https://github.com/aws-powertools/powertools-lambda-python/issues/2752))
* **test-perf:** use pytest-benchmark to improve reliability ([#1250](https://github.com/aws-powertools/powertools-lambda-python/issues/1250))
* **tests:** build and deploy Lambda Layer stack once ([#1466](https://github.com/aws-powertools/powertools-lambda-python/issues/1466))
* **tests:** temporarily disable E2E parallelism  ([#3484](https://github.com/aws-powertools/powertools-lambda-python/issues/3484))
* **tests:** refactor E2E logger to ease maintenance, writing tests and parallelization ([#1460](https://github.com/aws-powertools/powertools-lambda-python/issues/1460))
* **tests:** refactor E2E tracer to ease maintenance, writing tests and parallelization ([#1457](https://github.com/aws-powertools/powertools-lambda-python/issues/1457))
* **tests:** enable end-to-end test workflow ([#1470](https://github.com/aws-powertools/powertools-lambda-python/issues/1470))
* **tests:** move shared_functions to unit tests
* **tests:** increase idempotency coverage with nested payload tampering tests ([#3809](https://github.com/aws-powertools/powertools-lambda-python/issues/3809))
* **tests:** refactor E2E test mechanics to ease maintenance, writing tests and parallelization ([#1444](https://github.com/aws-powertools/powertools-lambda-python/issues/1444))
* **typing:** move backwards compat types to shared types ([#3092](https://github.com/aws-powertools/powertools-lambda-python/issues/3092))
* **typing:** add setLevel and addHandler to Logger for mypy/pyright ([#2388](https://github.com/aws-powertools/powertools-lambda-python/issues/2388))
* **user-agent:** support patching botocore session ([#2614](https://github.com/aws-powertools/powertools-lambda-python/issues/2614))

## Regression

* log level docstring as str
* service_name fixture
* order to APP logger/service name due to screenshots
* search input size
* **ci:** new gh-pages beta doesn't work either; reverting as gh-pages is disrupted
* **metrics:** typing regression on log_metrics callable ([#744](https://github.com/aws-powertools/powertools-lambda-python/issues/744))
* **parser:** Add missing fields for SESEvent ([#1027](https://github.com/aws-powertools/powertools-lambda-python/issues/1027)) ([#1190](https://github.com/aws-powertools/powertools-lambda-python/issues/1190))


<a name="v0.2.0"></a>
## [v0.2.0] - 2024-10-16
## Bug Fixes

* remove unused deps ([#6](https://github.com/aws-powertools/powertools-lambda-python/issues/6))
* method expanded guards
* add method as id to expansion panel for deep linking
* add syntax highlighted markdown tests
* use commonjs version of prism styles
* add markdown code syntax highlighting
* add syntax highlighted markdown
* paramStructure examples support
* improve test coverage of Documentation component
* add test for multiple fallback examples
* dont use existing object for example pairings fallback
* ts version
* add coverage for onClick
* add test coverage for schema.examples
* remove guard for method.examples to allow schema.examples fallback
* improve test coverage
* fallback example pairings to schema examples
* jest for npm test
* add linting
* add examples paramStructure by-name support
* use package.json version from semantic-release
* content descriptors should overflow-x scroll
* remove private from package.json
* json schema object render
* true/false display
* add color map for json schema types
* handle recursive json schema
* add defaultExpanded test
* better create-react-app example
* require schema for documentation
* remove unneeded IState
* add transition props + upgrade react
* update examples
* bump meta-schema version
* allow react tree json options as any
* write readme on how to use
* npm audit fix
* upgrade meta schema to 1.3.2
* tags
* add tags
* remove whitespace from .releaserc
* add tagFormat to releaserc
* add server variables
* duplicate method keys
* add links support
* add example result screenshot to readme
* test disableTransitionProps
* create-react-app command
* change package.json version
* **JSON Schema:** nested items/objects and oneOf
* **JSON Schema Objects:** display key names and title separately
* **examplePairing:** add tests for by-name and empty position
* **examplePairing:** add more test coverage
* **exports:** expose more than Documentation component
* **tests:** add disableTransitionProps
* **tests:** jest + root level test

## Features

* add circle config with semantic release
* add onMethodToggle
* per method default expanded uiSchema
* add uiSchema to hide contentDescriptors
* add json schem to react tree to better visualize json schema
* add method plugin + fix dark theme descriptions
* initial commit
* **dependency:** updated react version to 18 ([#30](https://github.com/aws-powertools/powertools-lambda-python/issues/30))

## Maintenance

* **ci:** add ci support for forked PRs

## Pull Requests

* Merge pull request [#4](https://github.com/aws-powertools/powertools-lambda-python/issues/4) from MetaMask/fix/add-metamask-module-template
* Merge pull request [#3](https://github.com/aws-powertools/powertools-lambda-python/issues/3) from MetaMask/fix/general-fixups
* Merge pull request [#2](https://github.com/aws-powertools/powertools-lambda-python/issues/2) from MetaMask/fix/query-string
* Merge pull request [#1](https://github.com/aws-powertools/powertools-lambda-python/issues/1) from MetaMask/fix/add-method-tsx
* Merge pull request [#454](https://github.com/aws-powertools/powertools-lambda-python/issues/454) from open-rpc/feat/add-onMethodToggle
* Merge pull request [#450](https://github.com/aws-powertools/powertools-lambda-python/issues/450) from open-rpc/fix/method-expanded-guardds
* Merge pull request [#449](https://github.com/aws-powertools/powertools-lambda-python/issues/449) from open-rpc/feat/per-method-default-expanded
* Merge pull request [#447](https://github.com/aws-powertools/powertools-lambda-python/issues/447) from open-rpc/feat/add-uischema-contentdesciptors-hidden
* Merge pull request [#404](https://github.com/aws-powertools/powertools-lambda-python/issues/404) from open-rpc/fix/add-syntax-highlighted-markddown
* Merge pull request [#415](https://github.com/aws-powertools/powertools-lambda-python/issues/415) from open-rpc/fix/paramStructure
* Merge pull request [#405](https://github.com/aws-powertools/powertools-lambda-python/issues/405) from open-rpc/fix/object-assign-reuse
* Merge pull request [#403](https://github.com/aws-powertools/powertools-lambda-python/issues/403) from open-rpc/fix/fallback-schema-examples
* Merge pull request [#391](https://github.com/aws-powertools/powertools-lambda-python/issues/391) from open-rpc/fix/fallback-to-schema-examples
* Merge pull request [#322](https://github.com/aws-powertools/powertools-lambda-python/issues/322) from open-rpc/fix/example-pairing-by-name
* Merge pull request [#306](https://github.com/aws-powertools/powertools-lambda-python/issues/306) from open-rpc/feat/json-schema-to-react-tree
* Merge pull request [#257](https://github.com/aws-powertools/powertools-lambda-python/issues/257) from open-rpc/fix/content-descriptors-should-overflow-x-scroll
* Merge pull request [#247](https://github.com/aws-powertools/powertools-lambda-python/issues/247) from open-rpc/fix/json-schema-objects
* Merge pull request [#245](https://github.com/aws-powertools/powertools-lambda-python/issues/245) from open-rpc/fix/json-schema-objects
* Merge pull request [#244](https://github.com/aws-powertools/powertools-lambda-python/issues/244) from open-rpc/fix/json-schema-nested-arrays
* Merge pull request [#217](https://github.com/aws-powertools/powertools-lambda-python/issues/217) from open-rpc/fix/add-transition-props-upgrade-react
* Merge pull request [#149](https://github.com/aws-powertools/powertools-lambda-python/issues/149) from open-rpc/dependabot/npm_and_yarn/typescript-3.6.3
* Merge pull request [#131](https://github.com/aws-powertools/powertools-lambda-python/issues/131) from open-rpc/dependabot/npm_and_yarn/jest-24.9.0
* Merge pull request [#123](https://github.com/aws-powertools/powertools-lambda-python/issues/123) from open-rpc/dependabot/npm_and_yarn/open-rpc/examples-1.3.4
* Merge pull request [#133](https://github.com/aws-powertools/powertools-lambda-python/issues/133) from open-rpc/feat/method-plugin
* Merge pull request [#111](https://github.com/aws-powertools/powertools-lambda-python/issues/111) from open-rpc/dependabot/npm_and_yarn/typescript-3.5.3
* Merge pull request [#120](https://github.com/aws-powertools/powertools-lambda-python/issues/120) from open-rpc/dependabot/npm_and_yarn/open-rpc/meta-schema-1.5.3
* Merge pull request [#114](https://github.com/aws-powertools/powertools-lambda-python/issues/114) from open-rpc/dependabot/npm_and_yarn/lodash-4.17.13
* Merge pull request [#107](https://github.com/aws-powertools/powertools-lambda-python/issues/107) from open-rpc/fix/bump-deps
* Merge pull request [#103](https://github.com/aws-powertools/powertools-lambda-python/issues/103) from open-rpc/dependabot/npm_and_yarn/tslint-5.18.0
* Merge pull request [#105](https://github.com/aws-powertools/powertools-lambda-python/issues/105) from open-rpc/dependabot/npm_and_yarn/react-markdown-4.1.0
* Merge pull request [#106](https://github.com/aws-powertools/powertools-lambda-python/issues/106) from open-rpc/dependabot/npm_and_yarn/[@types](https://github.com/types)/lodash-4.14.135
* Merge pull request [#100](https://github.com/aws-powertools/powertools-lambda-python/issues/100) from open-rpc/dependabot/npm_and_yarn/[@types](https://github.com/types)/jest-24.0.15
* Merge pull request [#97](https://github.com/aws-powertools/powertools-lambda-python/issues/97) from open-rpc/dependabot/npm_and_yarn/json-schema-ref-parser-7.0.1
* Merge pull request [#92](https://github.com/aws-powertools/powertools-lambda-python/issues/92) from open-rpc/dependabot/npm_and_yarn/[@types](https://github.com/types)/lodash-4.14.134
* Merge pull request [#85](https://github.com/aws-powertools/powertools-lambda-python/issues/85) from open-rpc/dependabot/npm_and_yarn/[@open](https://github.com/open)-rpc/examples-1.3.3
* Merge pull request [#89](https://github.com/aws-powertools/powertools-lambda-python/issues/89) from open-rpc/dependabot/npm_and_yarn/tslint-5.17.0
* Merge pull request [#90](https://github.com/aws-powertools/powertools-lambda-python/issues/90) from open-rpc/dependabot/npm_and_yarn/[@types](https://github.com/types)/node-12.0.4
* Merge pull request [#87](https://github.com/aws-powertools/powertools-lambda-python/issues/87) from open-rpc/dependabot/npm_and_yarn/typescript-3.5.1
* Merge pull request [#82](https://github.com/aws-powertools/powertools-lambda-python/issues/82) from open-rpc/dependabot/npm_and_yarn/[@types](https://github.com/types)/lodash-4.14.130
* Merge pull request [#80](https://github.com/aws-powertools/powertools-lambda-python/issues/80) from open-rpc/dependabot/npm_and_yarn/[@types](https://github.com/types)/node-12.0.2
* Merge pull request [#81](https://github.com/aws-powertools/powertools-lambda-python/issues/81) from open-rpc/dependabot/npm_and_yarn/[@types](https://github.com/types)/lodash-4.14.129
* Merge pull request [#79](https://github.com/aws-powertools/powertools-lambda-python/issues/79) from open-rpc/dependabot/npm_and_yarn/[@types](https://github.com/types)/jest-24.0.13
* Merge pull request [#76](https://github.com/aws-powertools/powertools-lambda-python/issues/76) from open-rpc/dependabot/npm_and_yarn/[@types](https://github.com/types)/lodash-4.14.125
* Merge pull request [#70](https://github.com/aws-powertools/powertools-lambda-python/issues/70) from open-rpc/fix/export_more_components
* Merge pull request [#75](https://github.com/aws-powertools/powertools-lambda-python/issues/75) from open-rpc/dependabot/npm_and_yarn/[@types](https://github.com/types)/lodash-4.14.124
* Merge pull request [#74](https://github.com/aws-powertools/powertools-lambda-python/issues/74) from open-rpc/fix/json-schema-nested
* Merge pull request [#68](https://github.com/aws-powertools/powertools-lambda-python/issues/68) from open-rpc/dependabot/npm_and_yarn/jest-24.8.0
* Merge pull request [#67](https://github.com/aws-powertools/powertools-lambda-python/issues/67) from open-rpc/dependabot/npm_and_yarn/[@open](https://github.com/open)-rpc/examples-1.3.1
* Merge pull request [#31](https://github.com/aws-powertools/powertools-lambda-python/issues/31) from open-rpc/dependabot/npm_and_yarn/react-dom-16.8.6
* Merge pull request [#29](https://github.com/aws-powertools/powertools-lambda-python/issues/29) from open-rpc/dependabot/npm_and_yarn/react-16.8.6
* Merge pull request [#32](https://github.com/aws-powertools/powertools-lambda-python/issues/32) from open-rpc/dependabot/npm_and_yarn/[@material](https://github.com/material)-ui/core-3.9.3
* Merge pull request [#55](https://github.com/aws-powertools/powertools-lambda-python/issues/55) from open-rpc/dependabot/npm_and_yarn/[@types](https://github.com/types)/react-dom-16.8.4
* Merge pull request [#48](https://github.com/aws-powertools/powertools-lambda-python/issues/48) from open-rpc/dependabot/npm_and_yarn/ts-jest-24.0.2
* Merge pull request [#59](https://github.com/aws-powertools/powertools-lambda-python/issues/59) from open-rpc/dependabot/npm_and_yarn/react-markdown-4.0.8
* Merge pull request [#60](https://github.com/aws-powertools/powertools-lambda-python/issues/60) from open-rpc/dependabot/npm_and_yarn/tslint-5.16.0
* Merge pull request [#63](https://github.com/aws-powertools/powertools-lambda-python/issues/63) from open-rpc/dependabot/npm_and_yarn/typescript-3.4.5
* Merge pull request [#66](https://github.com/aws-powertools/powertools-lambda-python/issues/66) from open-rpc/dependabot/npm_and_yarn/[@types](https://github.com/types)/jest-24.0.12
* Merge pull request [#65](https://github.com/aws-powertools/powertools-lambda-python/issues/65) from open-rpc/fix/upgrade-meta-schema
* Merge pull request [#62](https://github.com/aws-powertools/powertools-lambda-python/issues/62) from open-rpc/fix/forked_pr
* Merge pull request [#47](https://github.com/aws-powertools/powertools-lambda-python/issues/47) from open-rpc/dependabot/npm_and_yarn/typescript-3.4.2
* Merge pull request [#45](https://github.com/aws-powertools/powertools-lambda-python/issues/45) from open-rpc/dependabot/npm_and_yarn/jest-24.7.1
* Merge pull request [#38](https://github.com/aws-powertools/powertools-lambda-python/issues/38) from open-rpc/fix/add-tags
* Merge pull request [#33](https://github.com/aws-powertools/powertools-lambda-python/issues/33) from open-rpc/dependabot/npm_and_yarn/[@types](https://github.com/types)/node-11.12.1
* Merge pull request [#27](https://github.com/aws-powertools/powertools-lambda-python/issues/27) from open-rpc/dependabot/npm_and_yarn/[@types](https://github.com/types)/node-11.12.0
* Merge pull request [#20](https://github.com/aws-powertools/powertools-lambda-python/issues/20) from open-rpc/dependabot/npm_and_yarn/react-dom-16.8.5
* Merge pull request [#21](https://github.com/aws-powertools/powertools-lambda-python/issues/21) from open-rpc/dependabot/npm_and_yarn/react-16.8.5
* Merge pull request [#22](https://github.com/aws-powertools/powertools-lambda-python/issues/22) from open-rpc/dependabot/npm_and_yarn/[@types](https://github.com/types)/node-11.11.7
* Merge pull request [#23](https://github.com/aws-powertools/powertools-lambda-python/issues/23) from open-rpc/dependabot/npm_and_yarn/[@open](https://github.com/open)-rpc/meta-schema-1.2.1
* Merge pull request [#18](https://github.com/aws-powertools/powertools-lambda-python/issues/18) from open-rpc/fix/add-tagformat
* Merge pull request [#17](https://github.com/aws-powertools/powertools-lambda-python/issues/17) from open-rpc/fix/add-server-variables
* Merge pull request [#15](https://github.com/aws-powertools/powertools-lambda-python/issues/15) from open-rpc/fix/methods-keys
* Merge pull request [#12](https://github.com/aws-powertools/powertools-lambda-python/issues/12) from open-rpc/fix/add-links
* Merge pull request [#10](https://github.com/aws-powertools/powertools-lambda-python/issues/10) from open-rpc/fix/write-readme-on-usage
* Merge pull request [#7](https://github.com/aws-powertools/powertools-lambda-python/issues/7) from open-rpc/fix/react-json-options
* Merge pull request [#5](https://github.com/aws-powertools/powertools-lambda-python/issues/5) from open-rpc/fix/schema-required-documentation
* Merge pull request [#4](https://github.com/aws-powertools/powertools-lambda-python/issues/4) from open-rpc/fix/remove-private
* Merge pull request [#3](https://github.com/aws-powertools/powertools-lambda-python/issues/3) from open-rpc/feat/circle-config


<a name="yace-helm-chart-0.38.0"></a>
## [yace-helm-chart-0.38.0] - 2024-10-16
## Bug Fixes

* **containerPort:** add it as value ([#62](https://github.com/aws-powertools/powertools-lambda-python/issues/62))

## Features

* allow adding labels to the serviceaccount ([#28](https://github.com/aws-powertools/powertools-lambda-python/issues/28))
* allow adding annotations to the Service ([#23](https://github.com/aws-powertools/powertools-lambda-python/issues/23))
* **yace:** allow overriding image registry ([#52](https://github.com/aws-powertools/powertools-lambda-python/issues/52))


<a name="v2.0.4"></a>
## [v2.0.4] - 2024-10-16
## Maintenance

* exclude src/__fixtures__ in tsconfig.build ([#54](https://github.com/aws-powertools/powertools-lambda-python/issues/54))


<a name="v"></a>
## [v] - 2024-10-15
## Bug Fixes

* change bugbounty provider from h1 to bugcrowd
* use aiven-open teams as codeowners
* use kafka-connect-avro-data instead of avro-converter
* add permissions to release workflows
* set avro data dep back to implementation
* change bugbounty provider from h1 to bugcrowd
* prevent npe when extracting key
* set avro-converter as compile-only dependency
* **build:** remove kafka-clients from distribution
* **build:** add integration tests to gh actions
* **ci:** add permissions to create releases
* **ci:** add permissions to create PRs
* **ci:** add contents permissions to create PR
* **workflow:** added write permission to the workflow

## Code Refactoring

* remove key/record validation
* infer types
* use only assertj on tests
* improve error msg when header types differ
* rename params source
* hadoop version var
* **build:** rm maven local from repos

## Documentation

* refactor record grouping and file name format
* refactor initial sections of how it works
* quote note
* add toc
* move multi-part uploads and retry to configuration section
* fix badge
* add a note about installation placement

## Features

* Add Azure Blob Storage sink connector
* Add support for setting object metadata `Content-Encoding`
* Implement user-agent header in Google connection with configurable override
* Add Avro Container File output support
* Add Support for setting SSEA name ([#296](https://github.com/aws-powertools/powertools-lambda-python/issues/296))
* add validator to bucket name config
* Add Avro Container File output support
* add topic-partition-key record grouper
* add key-based grouper and num records validation
* Add support for topic/partition in KeyRecordGrouper ([#167](https://github.com/aws-powertools/powertools-lambda-python/issues/167))
* Avro Container File output support
* **timestamp source:** add event type and tests

## Maintenance

* rm guava dependency
* remove connect-runtime from dependencies to exclude from connector distribution
* bump CodeQL version to 3
* fixed CodeQL GH action
* rm warning on missing javadoc
* reorder test deps
* clean up improvements
* Changed groupId to io.aiven
* fixed distribution names
* changing jar names to correspond published to Maven Central
* adding CODE_OF_CONDUCT, CONTRIBUTING and SECURITY docs
* broken links fixes
* changed root project name to correspond new repo name
* add logback to test runtime
* update references to new org
* update /aiven/ to /aiven-open/ references
* add Gradle Kotlin build file formatting
* add Gradle dependency catalog and align dependency versions
* move .github directory to root, add Gradle wrapper back
* run test and integrationTest target on GH action
* updated README.md
* removed and updated common project files
* migrated build files to Kotlin
* removed checkstyle, PMD and Spotbugs corrections, Spotless formatting
* bump S3 SDK version to 1.12.731
* use distribution for Java setup in GH Action
* rm missing javadoc warnings
* fix Azure Blob sink connector artifacts upload
* update commons to 0.12
* **build:** update to 0.10.1
* **build:** gradle wrapper bump
* **build:** sort deps and remove already inherited
* **build:** upgrade google-cloud-storage:2.26.1
* **build:** upgrade test dep google-cloud-storage:2.26.1
* **build:** upgrade juni5 to 5.10.0
* **build:** nit: suppress deprecation warnings
* **build:** upgrade commons to 0.11.0
* **build:** remove deprecation warnings
* **build:** allow running integration tests without other tests
* **deps:** bump org.assertj:assertj-core from 3.25.1 to 3.25.2
* **deps:** bump com.google.cloud:google-cloud-storage
* **deps:** bump testcontainersVersion from 1.19.3 to 1.19.4
* **deps:** bump org.assertj:assertj-core from 3.24.2 to 3.25.1
* **deps:** bump com.google.guava:guava from 32.1.3-jre to 33.0.0-jre
* **deps:** bump com.github.spotbugs:spotbugs-annotations
* **deps:** bump org.junit.jupiter:junit-jupiter from 5.10.0 to 5.10.1
* **deps:** bump testcontainersVersion from 1.19.1 to 1.19.3
* **deps:** bump com.github.spotbugs from 5.1.3 to 5.2.5
* **deps:** bump com.google.cloud:google-cloud-nio
* **deps:** bump net.jqwik:jqwik from 1.8.0 to 1.8.2
* **deps:** bump net.jqwik:jqwik-engine from 1.8.1 to 1.8.2
* **deps:** bump net.jqwik:jqwik-engine from 1.8.0 to 1.8.1
* **deps:** bump com.google.guava:guava from 32.1.2-jre to 32.1.3-jre
* **deps:** bump testcontainersVersion from 1.19.0 to 1.19.1
* **deps:** bump com.github.spotbugs from 5.2.5 to 6.0.7
* **deps:** bump com.diffplug.spotless from 6.21.0 to 6.22.0
* **deps:** bump com.google.cloud:google-cloud-storage
* **deps:** bump net.jqwik:jqwik from 1.7.4 to 1.8.0
* **deps:** bump net.jqwik:jqwik-engine from 1.7.4 to 1.8.0
* **deps:** bump com.google.cloud:google-cloud-nio
* **deps:** bump com.diffplug.spotless from 6.19.0 to 6.21.0
* **deps:** bump testcontainersVersion from 1.18.3 to 1.19.0
* **deps:** bump com.github.spotbugs from 5.1.0 to 5.1.3
* **deps:** bump net.jqwik:jqwik-engine from 1.8.2 to 1.8.3
* **deps:** bump testcontainersVersion from 1.19.4 to 1.19.6
* **deps:** bump org.assertj:assertj-core from 3.25.2 to 3.25.3
* **deps:** bump com.google.cloud:google-cloud-nio
* **deps:** bump com.google.cloud:google-cloud-storage
* **deps:** bump com.github.spotbugs from 5.0.14 to 5.1.0
* **deps:** bump com.google.guava:guava from 32.0.0-jre to 32.1.2-jre
* **deps:** bump slf4jVersion from 1.7.36 to 2.0.7
* **deps:** bump net.jqwik:jqwik from 1.7.3 to 1.7.4
* **deps:** bump com.google.cloud:google-cloud-nio
* **deps:** bump com.github.spotbugs from 6.0.7 to 6.0.9
* **deps:** bump net.jqwik:jqwik from 1.8.2 to 1.8.4
* **deps:** bump com.github.spotbugs from 6.0.9 to 6.0.13
* **deps:** bump com.github.spotbugs:spotbugs-annotations
* **deps:** bump com.google.cloud:google-cloud-nio
* **deps:** bump com.google.cloud:google-cloud-storage
* **deps:** bump org.junit.jupiter:junit-jupiter from 5.10.1 to 5.10.2
* **deps:** bump com.google.cloud:google-cloud-storage
* **deps:** bump com.google.guava:guava from 33.0.0-jre to 33.3.0-jre
* **deps:** bump com.google.cloud:google-cloud-nio
* **deps:** bump com.google.cloud:google-cloud-storage
* **deps:** bump com.google.guava:guava from 33.3.0-jre to 33.3.1-jre
* **deps:** bump com.google.cloud:google-cloud-nio
* **deps:** bump com.google.cloud:google-cloud-storage

## Reverts
* chore(deps): bump slf4jVersion from 1.7.36 to 2.0.7
* refactoring and commons extraction

## Pull Requests

* Merge pull request [#310](https://github.com/aws-powertools/powertools-lambda-python/issues/310) from Aiven-Open/anatolii/fix-azure-blob-sink-artifacts-upload
* Merge pull request [#309](https://github.com/aws-powertools/powertools-lambda-python/issues/309) from Aiven-Open/release-3.1.0
* Merge pull request [#308](https://github.com/aws-powertools/powertools-lambda-python/issues/308) from Aiven-Open/anatolii/dependencies-fix
* Merge pull request [#307](https://github.com/aws-powertools/powertools-lambda-python/issues/307) from Aiven-Open/Claudenw-patch-1
* Merge pull request [#304](https://github.com/aws-powertools/powertools-lambda-python/issues/304) from Aiven-Open/anatolii/fix-codeql-gh-action
* Merge pull request [#244](https://github.com/aws-powertools/powertools-lambda-python/issues/244) from Aiven-Open/add-azure-blob-storage-connector
* Merge pull request [#303](https://github.com/aws-powertools/powertools-lambda-python/issues/303) from Aiven-Open/dependabot/gradle/com.google.cloud-google-cloud-nio-0.127.23
* Merge pull request [#301](https://github.com/aws-powertools/powertools-lambda-python/issues/301) from Aiven-Open/dependabot/gradle/com.google.cloud-google-cloud-storage-2.43.1
* Merge pull request [#302](https://github.com/aws-powertools/powertools-lambda-python/issues/302) from Aiven-Open/dependabot/gradle/com.google.guava-guava-33.3.1-jre
* Merge pull request [#284](https://github.com/aws-powertools/powertools-lambda-python/issues/284) from Aiven-Open/dependabot/gradle/com.google.cloud-google-cloud-storage-2.42.0
* Merge pull request [#283](https://github.com/aws-powertools/powertools-lambda-python/issues/283) from Aiven-Open/dependabot/gradle/com.google.guava-guava-33.3.0-jre
* Merge pull request [#282](https://github.com/aws-powertools/powertools-lambda-python/issues/282) from Aiven-Open/dependabot/gradle/com.google.cloud-google-cloud-nio-0.127.22
* Merge pull request [#296](https://github.com/aws-powertools/powertools-lambda-python/issues/296) from Aiven-Open/release-3.0.0
* Merge pull request [#295](https://github.com/aws-powertools/powertools-lambda-python/issues/295) from Aiven-Open/anatolii/jar-names
* Merge pull request [#293](https://github.com/aws-powertools/powertools-lambda-python/issues/293) from Aiven-Open/anatolii/missing-docs
* Merge pull request [#292](https://github.com/aws-powertools/powertools-lambda-python/issues/292) from Aiven-Open/anatolii/rename-fixes
* Merge pull request [#287](https://github.com/aws-powertools/powertools-lambda-python/issues/287) from Aiven-Open/eliax1996/fix-release-script-for-new-project-structure
* Merge pull request [#285](https://github.com/aws-powertools/powertools-lambda-python/issues/285) from Aiven-Open/eliax1996/add-META-INF-services-to-enable-service_load-loading
* Merge pull request [#252](https://github.com/aws-powertools/powertools-lambda-python/issues/252) from Aiven-Open/jjaakola-aiven-add-gradle-kotlin-file-formatting
* Merge pull request [#246](https://github.com/aws-powertools/powertools-lambda-python/issues/246) from Aiven-Open/jjaakola-aiven-add-gradle-dependency-catalog
* Merge pull request [#245](https://github.com/aws-powertools/powertools-lambda-python/issues/245) from Aiven-Open/jjaakola-aiven-move-github-directory-to-root
* Merge pull request [#242](https://github.com/aws-powertools/powertools-lambda-python/issues/242) from Aiven-Open/jjaakola-aiven-merge-connector-repositories-2024-06-17
* Merge pull request [#243](https://github.com/aws-powertools/powertools-lambda-python/issues/243) from Aiven-Open/dependabot/gradle/junitVersion-5.10.3
* Merge pull request [#240](https://github.com/aws-powertools/powertools-lambda-python/issues/240) from Aiven-Open/dependabot/gradle/org.mockito-mockito-core-5.12.0
* Merge pull request [#241](https://github.com/aws-powertools/powertools-lambda-python/issues/241) from Aiven-Open/dependabot/gradle/org.assertj-assertj-core-3.26.0
* Merge pull request [#213](https://github.com/aws-powertools/powertools-lambda-python/issues/213) from Aiven-Open/jjaakola-aiven-use-singleton-objectmapper
* Merge pull request [#236](https://github.com/aws-powertools/powertools-lambda-python/issues/236) from Aiven-Open/dependabot/gradle/com.github.luben-zstd-jni-1.5.6-3
* Merge pull request [#237](https://github.com/aws-powertools/powertools-lambda-python/issues/237) from Aiven-Open/dependabot/gradle/org.apache.commons-commons-text-1.12.0
* Merge pull request [#238](https://github.com/aws-powertools/powertools-lambda-python/issues/238) from Aiven-Open/dependabot/gradle/ch.qos.logback-logback-classic-1.5.6
* Merge pull request [#235](https://github.com/aws-powertools/powertools-lambda-python/issues/235) from Aiven-Open/dependabot/gradle/com.fasterxml.jackson.core-jackson-databind-2.17.0
* Merge pull request [#234](https://github.com/aws-powertools/powertools-lambda-python/issues/234) from Aiven-Open/dependabot/gradle/com.github.luben-zstd-jni-1.5.6-1
* Merge pull request [#233](https://github.com/aws-powertools/powertools-lambda-python/issues/233) from Aiven-Open/dependabot/gradle/hadoopVersion-3.4.0
* Merge pull request [#232](https://github.com/aws-powertools/powertools-lambda-python/issues/232) from Aiven-Open/dependabot/gradle/ch.qos.logback-logback-classic-1.5.3
* Merge pull request [#230](https://github.com/aws-powertools/powertools-lambda-python/issues/230) from Aiven-Open/dependabot/gradle/org.assertj-assertj-core-3.25.3
* Merge pull request [#231](https://github.com/aws-powertools/powertools-lambda-python/issues/231) from Aiven-Open/dependabot/gradle/ch.qos.logback-logback-classic-1.5.1
* Merge pull request [#229](https://github.com/aws-powertools/powertools-lambda-python/issues/229) from Aiven-Open/dependabot/gradle/org.mockito-mockito-core-5.11.0
* Merge pull request [#228](https://github.com/aws-powertools/powertools-lambda-python/issues/228) from Aiven-Open/dependabot/gradle/junitVersion-5.10.2
* Merge pull request [#226](https://github.com/aws-powertools/powertools-lambda-python/issues/226) from Aiven-Open/jeqo/test-header-diff-type
* Merge pull request [#225](https://github.com/aws-powertools/powertools-lambda-python/issues/225) from Aiven-Open/gwinter-fix-bugbounty
* Merge pull request [#224](https://github.com/aws-powertools/powertools-lambda-python/issues/224) from Aiven-Open/dependabot/gradle/org.mockito-mockito-core-5.10.0
* Merge pull request [#223](https://github.com/aws-powertools/powertools-lambda-python/issues/223) from Aiven-Open/dependabot/gradle/org.assertj-assertj-core-3.25.2
* Merge pull request [#222](https://github.com/aws-powertools/powertools-lambda-python/issues/222) from Aiven-Open/dependabot/gradle/org.assertj-assertj-core-3.25.0
* Merge pull request [#221](https://github.com/aws-powertools/powertools-lambda-python/issues/221) from Aiven-Open/dependabot/gradle/com.fasterxml.jackson.core-jackson-databind-2.16.1
* Merge pull request [#219](https://github.com/aws-powertools/powertools-lambda-python/issues/219) from Aiven-Open/dependabot/gradle/org.mockito-mockito-core-5.8.0
* Merge pull request [#218](https://github.com/aws-powertools/powertools-lambda-python/issues/218) from Aiven-Open/dependabot/gradle/com.github.luben-zstd-jni-1.5.5-11
* Merge pull request [#217](https://github.com/aws-powertools/powertools-lambda-python/issues/217) from Aiven-Open/dependabot/gradle/com.fasterxml.jackson.core-jackson-databind-2.16.0
* Merge pull request [#216](https://github.com/aws-powertools/powertools-lambda-python/issues/216) from Aiven-Open/dependabot/gradle/ch.qos.logback-logback-classic-1.4.14
* Merge pull request [#215](https://github.com/aws-powertools/powertools-lambda-python/issues/215) from Aiven-Open/dependabot/gradle/junitVersion-5.10.1
* Merge pull request [#212](https://github.com/aws-powertools/powertools-lambda-python/issues/212) from Aiven-Open/ivanyu/gpg-sign
* Merge pull request [#208](https://github.com/aws-powertools/powertools-lambda-python/issues/208) from Aiven-Open/dependabot/gradle/com.github.luben-zstd-jni-1.5.5-10
* Merge pull request [#207](https://github.com/aws-powertools/powertools-lambda-python/issues/207) from Aiven-Open/dependabot/gradle/org.mockito-mockito-core-5.6.0
* Merge pull request [#209](https://github.com/aws-powertools/powertools-lambda-python/issues/209) from Aiven-Open/dependabot/gradle/com.fasterxml.jackson.core-jackson-databind-2.15.3
* Merge pull request [#211](https://github.com/aws-powertools/powertools-lambda-python/issues/211) from Aiven-Open/dependabot/gradle/org.codehaus.woodstox-stax2-api-4.2.2
* Merge pull request [#210](https://github.com/aws-powertools/powertools-lambda-python/issues/210) from Aiven-Open/dependabot/gradle/org.apache.commons-commons-text-1.11.0
* Merge pull request [#206](https://github.com/aws-powertools/powertools-lambda-python/issues/206) from Aiven-Open/release-0.12.0
* Merge pull request [#204](https://github.com/aws-powertools/powertools-lambda-python/issues/204) from Aiven-Open/jeqo/new-org
* Merge pull request [#200](https://github.com/aws-powertools/powertools-lambda-python/issues/200) from Aiven-Open/jeqo/tpk-grouper
* Merge pull request [#203](https://github.com/aws-powertools/powertools-lambda-python/issues/203) from Aiven-Open/dependabot/gradle/com.github.luben-zstd-jni-1.5.5-6
* Merge pull request [#202](https://github.com/aws-powertools/powertools-lambda-python/issues/202) from Aiven-Open/dependabot/gradle/org.xerial.snappy-snappy-java-1.1.10.5
* Merge pull request [#197](https://github.com/aws-powertools/powertools-lambda-python/issues/197) from Aiven-Open/dependabot/gradle/org.mockito-mockito-core-5.5.0
* Merge pull request [#196](https://github.com/aws-powertools/powertools-lambda-python/issues/196) from Aiven-Open/release-0.11.0
* Merge pull request [#195](https://github.com/aws-powertools/powertools-lambda-python/issues/195) from Aiven-Open/jeqo/fix-release-pr
* Merge pull request [#194](https://github.com/aws-powertools/powertools-lambda-python/issues/194) from Aiven-Open/jeqo/fix-release-pr
* Merge pull request [#193](https://github.com/aws-powertools/powertools-lambda-python/issues/193) from Aiven-Open/jeqo/use-key-based-validation
* Merge pull request [#192](https://github.com/aws-powertools/powertools-lambda-python/issues/192) from Aiven-Open/anatolii/enforcing-assertj-assertions
* Merge pull request [#191](https://github.com/aws-powertools/powertools-lambda-python/issues/191) from Aiven-Open/master-rename
* Merge pull request [#189](https://github.com/aws-powertools/powertools-lambda-python/issues/189) from Aiven-Open/etienne-update-codeql
* Merge pull request [#188](https://github.com/aws-powertools/powertools-lambda-python/issues/188) from Aiven-Open/ivanyu/bump-codeql
* Merge pull request [#186](https://github.com/aws-powertools/powertools-lambda-python/issues/186) from Aiven-Open/dependabot/gradle/parquetVersion-1.11.2
* Merge pull request [#185](https://github.com/aws-powertools/powertools-lambda-python/issues/185) from Aiven-Open/dependabot/gradle/com.github.luben-zstd-jni-1.5.5-5
* Merge pull request [#180](https://github.com/aws-powertools/powertools-lambda-python/issues/180) from Aiven-Open/dependabot/gradle/org.xerial.snappy-snappy-java-1.1.10.3
* Merge pull request [#184](https://github.com/aws-powertools/powertools-lambda-python/issues/184) from Aiven-Open/dependabot/gradle/junitVersion-5.10.0
* Merge pull request [#183](https://github.com/aws-powertools/powertools-lambda-python/issues/183) from Aiven-Open/dependabot/gradle/org.mockito-mockito-core-5.4.0
* Merge pull request [#179](https://github.com/aws-powertools/powertools-lambda-python/issues/179) from aiven/dependabot/gradle/hadoopVersion-3.3.6
* Merge pull request [#174](https://github.com/aws-powertools/powertools-lambda-python/issues/174) from aiven/jeqo/build-rm-guava
* Merge pull request [#177](https://github.com/aws-powertools/powertools-lambda-python/issues/177) from aiven/release-0.10.1
* Merge pull request [#176](https://github.com/aws-powertools/powertools-lambda-python/issues/176) from aiven/jeqo/rm-kafka-clients
* Merge pull request [#171](https://github.com/aws-powertools/powertools-lambda-python/issues/171) from aiven/dependabot/gradle/com.github.luben-zstd-jni-1.5.5-4
* Merge pull request [#169](https://github.com/aws-powertools/powertools-lambda-python/issues/169) from aiven/dependabot/gradle/org.xerial.snappy-snappy-java-1.1.10.1
* Merge pull request [#168](https://github.com/aws-powertools/powertools-lambda-python/issues/168) from aiven/release-0.10.0
* Merge pull request [#166](https://github.com/aws-powertools/powertools-lambda-python/issues/166) from aiven/jeqo/fix-avro-data-impl
* Merge pull request [#165](https://github.com/aws-powertools/powertools-lambda-python/issues/165) from aiven/jeqo/fix-avro-converter-compileonly
* Merge pull request [#163](https://github.com/aws-powertools/powertools-lambda-python/issues/163) from aiven/dependabot/gradle/com.fasterxml.jackson.core-jackson-databind-2.15.2
* Merge pull request [#162](https://github.com/aws-powertools/powertools-lambda-python/issues/162) from aiven/dependabot/gradle/org.xerial.snappy-snappy-java-1.1.10.0
* Merge pull request [#164](https://github.com/aws-powertools/powertools-lambda-python/issues/164) from aiven/dependabot/gradle/com.github.luben-zstd-jni-1.5.5-3
* Merge pull request [#161](https://github.com/aws-powertools/powertools-lambda-python/issues/161) from aiven/dependabot/gradle/com.google.guava-guava-32.0.0-jre
* Merge pull request [#160](https://github.com/aws-powertools/powertools-lambda-python/issues/160) from aiven/release-0.9.0
* Merge pull request [#156](https://github.com/aws-powertools/powertools-lambda-python/issues/156) from aiven/jjaakola-aiven-add-avro-output
* Merge pull request [#155](https://github.com/aws-powertools/powertools-lambda-python/issues/155) from aiven/dependabot/gradle/org.mockito-mockito-core-5.3.1
* Merge pull request [#153](https://github.com/aws-powertools/powertools-lambda-python/issues/153) from aiven/dependabot/gradle/junitVersion-5.9.3
* Merge pull request [#154](https://github.com/aws-powertools/powertools-lambda-python/issues/154) from aiven/dependabot/gradle/com.github.luben-zstd-jni-1.5.5-2
* Merge pull request [#152](https://github.com/aws-powertools/powertools-lambda-python/issues/152) from aiven/dependabot/gradle/com.fasterxml.jackson.core-jackson-databind-2.15.0
* Merge pull request [#149](https://github.com/aws-powertools/powertools-lambda-python/issues/149) from aiven/dependabot/gradle/org.apache.hadoop-hadoop-mapreduce-client-core-3.3.5
* Merge pull request [#150](https://github.com/aws-powertools/powertools-lambda-python/issues/150) from aiven/dependabot/gradle/org.apache.hadoop-hadoop-common-3.3.5
* Merge pull request [#151](https://github.com/aws-powertools/powertools-lambda-python/issues/151) from aiven/dependabot/gradle/org.mockito-mockito-core-5.2.0
* Merge pull request [#148](https://github.com/aws-powertools/powertools-lambda-python/issues/148) from aiven/contributing-squash
* Merge pull request [#147](https://github.com/aws-powertools/powertools-lambda-python/issues/147) from aiven/dependabot/gradle/com.github.luben-zstd-jni-1.5.4-2
* Merge pull request [#144](https://github.com/aws-powertools/powertools-lambda-python/issues/144) from aiven/dependabot/gradle/org.xerial.snappy-snappy-java-1.1.9.1
* Merge pull request [#146](https://github.com/aws-powertools/powertools-lambda-python/issues/146) from aiven/dependabot/gradle/com.fasterxml.jackson.core-jackson-databind-2.14.2
* Merge pull request [#145](https://github.com/aws-powertools/powertools-lambda-python/issues/145) from aiven/dependabot/gradle/org.mockito-mockito-core-5.1.1
* Merge pull request [#143](https://github.com/aws-powertools/powertools-lambda-python/issues/143) from aiven/dependabot/gradle/org.assertj-assertj-core-3.24.2
* Merge pull request [#142](https://github.com/aws-powertools/powertools-lambda-python/issues/142) from aiven/dependabot/gradle/junitVersion-5.9.2
* Merge pull request [#141](https://github.com/aws-powertools/powertools-lambda-python/issues/141) from aiven/dependabot/gradle/org.mockito-mockito-core-4.11.0
* Merge pull request [#140](https://github.com/aws-powertools/powertools-lambda-python/issues/140) from aiven/dependabot/gradle/com.fasterxml.jackson.core-jackson-databind-2.14.1
* Merge pull request [#138](https://github.com/aws-powertools/powertools-lambda-python/issues/138) from aiven/dependabot/gradle/org.mockito-mockito-core-4.9.0
* Merge pull request [#136](https://github.com/aws-powertools/powertools-lambda-python/issues/136) from aiven/dependabot/gradle/com.fasterxml.jackson.core-jackson-databind-2.13.4.2
* Merge pull request [#135](https://github.com/aws-powertools/powertools-lambda-python/issues/135) from aiven/dependabot/gradle/com.github.luben-zstd-jni-1.5.2-5
* Merge pull request [#137](https://github.com/aws-powertools/powertools-lambda-python/issues/137) from aiven/dependabot/gradle/org.mockito-mockito-core-4.8.1
* Merge pull request [#130](https://github.com/aws-powertools/powertools-lambda-python/issues/130) from aiven/dependabot/gradle/io.confluent-kafka-connect-avro-converter-7.2.2
* Merge pull request [#131](https://github.com/aws-powertools/powertools-lambda-python/issues/131) from aiven/dependabot/gradle/org.apache.commons-commons-text-1.10.0
* Merge pull request [#129](https://github.com/aws-powertools/powertools-lambda-python/issues/129) from aiven/dependabot/gradle/junitVersion-5.9.1
* Merge pull request [#132](https://github.com/aws-powertools/powertools-lambda-python/issues/132) from aiven/dependabot/gradle/com.fasterxml.jackson.core-jackson-databind-2.13.4
* Merge pull request [#134](https://github.com/aws-powertools/powertools-lambda-python/issues/134) from aiven/dependabot/gradle/com.github.luben-zstd-jni-1.5.2-4
* Merge pull request [#133](https://github.com/aws-powertools/powertools-lambda-python/issues/133) from aiven/dependabot/gradle/org.mockito-mockito-core-4.8.0
* Merge pull request [#124](https://github.com/aws-powertools/powertools-lambda-python/issues/124) from aiven/dependabot/gradle/org.apache.hadoop-hadoop-mapreduce-client-core-3.3.4
* Merge pull request [#126](https://github.com/aws-powertools/powertools-lambda-python/issues/126) from aiven/dependabot/gradle/org.mockito-mockito-core-4.7.0
* Merge pull request [#125](https://github.com/aws-powertools/powertools-lambda-python/issues/125) from aiven/dependabot/gradle/org.apache.hadoop-hadoop-common-3.3.4
* Merge pull request [#122](https://github.com/aws-powertools/powertools-lambda-python/issues/122) from aiven/dependabot/gradle/io.confluent-kafka-connect-avro-converter-7.2.1
* Merge pull request [#121](https://github.com/aws-powertools/powertools-lambda-python/issues/121) from aiven/dependabot/gradle/junitVersion-5.9.0
* Merge pull request [#120](https://github.com/aws-powertools/powertools-lambda-python/issues/120) from aiven/dependabot/gradle/org.apache.hadoop-hadoop-mapreduce-client-core-3.3.3
* Merge pull request [#118](https://github.com/aws-powertools/powertools-lambda-python/issues/118) from aiven/dependabot/gradle/io.confluent-kafka-connect-avro-converter-7.1.2
* Merge pull request [#119](https://github.com/aws-powertools/powertools-lambda-python/issues/119) from aiven/dependabot/gradle/org.mockito-mockito-core-4.6.1
* Merge pull request [#117](https://github.com/aws-powertools/powertools-lambda-python/issues/117) from aiven/dependabot/gradle/com.github.luben-zstd-jni-1.5.2-3
* Merge pull request [#113](https://github.com/aws-powertools/powertools-lambda-python/issues/113) from aiven/dependabot/gradle/org.apache.hadoop-hadoop-common-3.3.3
* Merge pull request [#114](https://github.com/aws-powertools/powertools-lambda-python/issues/114) from aiven/dependabot/gradle/org.mockito-mockito-core-4.6.0
* Merge pull request [#116](https://github.com/aws-powertools/powertools-lambda-python/issues/116) from aiven/dependabot/gradle/com.fasterxml.jackson.core-jackson-databind-2.13.3
* Merge pull request [#115](https://github.com/aws-powertools/powertools-lambda-python/issues/115) from aiven/dependabot/gradle/org.assertj-assertj-core-3.23.1
* Merge pull request [#112](https://github.com/aws-powertools/powertools-lambda-python/issues/112) from aiven/dependabot/gradle/org.mockito-mockito-core-4.5.1
* Merge pull request [#111](https://github.com/aws-powertools/powertools-lambda-python/issues/111) from snuyanzin/gradle742
* Merge pull request [#110](https://github.com/aws-powertools/powertools-lambda-python/issues/110) from snuyanzin/contr
* Merge pull request [#109](https://github.com/aws-powertools/powertools-lambda-python/issues/109) from aiven/add-code-of-conduct-1
* Merge pull request [#108](https://github.com/aws-powertools/powertools-lambda-python/issues/108) from aiven/ivanyu/dependabot-monthly
* Merge pull request [#106](https://github.com/aws-powertools/powertools-lambda-python/issues/106) from aiven/dependabot/gradle/io.confluent-kafka-connect-avro-converter-7.1.1
* Merge pull request [#107](https://github.com/aws-powertools/powertools-lambda-python/issues/107) from aiven/dependabot/gradle/org.mockito-mockito-core-4.5.0
* Merge pull request [#104](https://github.com/aws-powertools/powertools-lambda-python/issues/104) from aiven/dependabot/gradle/io.confluent-kafka-connect-avro-converter-7.1.0
* Merge pull request [#103](https://github.com/aws-powertools/powertools-lambda-python/issues/103) from aiven/dependabot/gradle/io.confluent-kafka-connect-avro-converter-7.0.2
* Merge pull request [#102](https://github.com/aws-powertools/powertools-lambda-python/issues/102) from aiven/dependabot/gradle/com.fasterxml.jackson.core-jackson-databind-2.13.2.2
* Merge pull request [#101](https://github.com/aws-powertools/powertools-lambda-python/issues/101) from aiven/release-0.8.2
* Merge pull request [#100](https://github.com/aws-powertools/powertools-lambda-python/issues/100) from aiven/ivanyu/kafka-client-exclude
* Merge pull request [#99](https://github.com/aws-powertools/powertools-lambda-python/issues/99) from aiven/release-0.8.1
* Merge pull request [#98](https://github.com/aws-powertools/powertools-lambda-python/issues/98) from aiven/ivanyu/connect-json-compile-only
* Merge pull request [#97](https://github.com/aws-powertools/powertools-lambda-python/issues/97) from aiven/release-0.8.0
* Merge pull request [#95](https://github.com/aws-powertools/powertools-lambda-python/issues/95) from aiven/ivanyu/extract-const
* Merge pull request [#96](https://github.com/aws-powertools/powertools-lambda-python/issues/96) from aiven/ivanyu/refactor-eventtimestampsource
* Merge pull request [#92](https://github.com/aws-powertools/powertools-lambda-python/issues/92) from aiven/dependabot/gradle/io.confluent-kafka-connect-avro-converter-7.0.1
* Merge pull request [#91](https://github.com/aws-powertools/powertools-lambda-python/issues/91) from aiven/dependabot/gradle/com.github.luben-zstd-jni-1.5.2-2
* Merge pull request [#84](https://github.com/aws-powertools/powertools-lambda-python/issues/84) from aiven/dependabot/gradle/org.codehaus.woodstox-stax2-api-4.2.1
* Merge pull request [#89](https://github.com/aws-powertools/powertools-lambda-python/issues/89) from aiven/dependabot/gradle/com.google.guava-guava-31.1-jre
* Merge pull request [#90](https://github.com/aws-powertools/powertools-lambda-python/issues/90) from aiven/dependabot/gradle/org.mockito-mockito-core-4.4.0
* Merge pull request [#83](https://github.com/aws-powertools/powertools-lambda-python/issues/83) from aiven/dependabot/gradle/com.fasterxml.jackson.core-jackson-databind-2.13.2
* Merge pull request [#87](https://github.com/aws-powertools/powertools-lambda-python/issues/87) from aiven/dependabot/gradle/org.slf4j-slf4j-api-1.7.36
* Merge pull request [#85](https://github.com/aws-powertools/powertools-lambda-python/issues/85) from aiven/dependabot/gradle/org.apache.hadoop-hadoop-mapreduce-client-core-3.3.2
* Merge pull request [#86](https://github.com/aws-powertools/powertools-lambda-python/issues/86) from aiven/dependabot/gradle/org.mockito-mockito-core-4.3.1
* Merge pull request [#78](https://github.com/aws-powertools/powertools-lambda-python/issues/78) from aiven/dependabot/gradle/org.apache.hadoop-hadoop-common-3.3.2
* Merge pull request [#80](https://github.com/aws-powertools/powertools-lambda-python/issues/80) from aiven/dependabot/gradle/junitVersion-5.8.2
* Merge pull request [#82](https://github.com/aws-powertools/powertools-lambda-python/issues/82) from aiven/dependabot/gradle/org.assertj-assertj-core-3.22.0
* Merge pull request [#77](https://github.com/aws-powertools/powertools-lambda-python/issues/77) from aiven/hacka-configure-dependabot
* Merge pull request [#76](https://github.com/aws-powertools/powertools-lambda-python/issues/76) from aiven/assertj-migration
* Merge pull request [#75](https://github.com/aws-powertools/powertools-lambda-python/issues/75) from snuyanzin/deprecated
* Merge pull request [#74](https://github.com/aws-powertools/powertools-lambda-python/issues/74) from snuyanzin/master
* Merge pull request [#69](https://github.com/aws-powertools/powertools-lambda-python/issues/69) from PedroRossi/feat/timestamp-source/event
* Merge pull request [#73](https://github.com/aws-powertools/powertools-lambda-python/issues/73) from aiven/jlprat-patch-1
* Merge pull request [#72](https://github.com/aws-powertools/powertools-lambda-python/issues/72) from snuyanzin/gradle_checksum
* Merge pull request [#71](https://github.com/aws-powertools/powertools-lambda-python/issues/71) from aiven/open-source-codeowners
* Merge pull request [#68](https://github.com/aws-powertools/powertools-lambda-python/issues/68) from aiven/ivanyu/fix-typo
* Merge pull request [#67](https://github.com/aws-powertools/powertools-lambda-python/issues/67) from aiven/release-0.7.1
* Merge pull request [#66](https://github.com/aws-powertools/powertools-lambda-python/issues/66) from aiven/ivanyu/rename-project
* Merge pull request [#64](https://github.com/aws-powertools/powertools-lambda-python/issues/64) from aiven/release-0.7.0
* Merge pull request [#63](https://github.com/aws-powertools/powertools-lambda-python/issues/63) from aiven/anatolii/partition-zero-padding
* Merge pull request [#62](https://github.com/aws-powertools/powertools-lambda-python/issues/62) from aiven/release-0.6.0
* Merge pull request [#60](https://github.com/aws-powertools/powertools-lambda-python/issues/60) from aiven/anatolii/format-output-envelope-parquet
* Merge pull request [#61](https://github.com/aws-powertools/powertools-lambda-python/issues/61) from aiven/anatolii/checkstyle-fix
* Merge pull request [#59](https://github.com/aws-powertools/powertools-lambda-python/issues/59) from aiven/ivanyu/codeowners
* Merge pull request [#58](https://github.com/aws-powertools/powertools-lambda-python/issues/58) from aiven/backoff-policy
* Merge pull request [#57](https://github.com/aws-powertools/powertools-lambda-python/issues/57) from aiven/anatolii/json-envelope-support
* Merge pull request [#55](https://github.com/aws-powertools/powertools-lambda-python/issues/55) from aiven/remove-build-for-tar-zip-files
* Merge pull request [#54](https://github.com/aws-powertools/powertools-lambda-python/issues/54) from aiven/exclude-tar-zip-for-create-wrkflow
* Merge pull request [#53](https://github.com/aws-powertools/powertools-lambda-python/issues/53) from aiven/release-wrkflow
* Merge pull request [#52](https://github.com/aws-powertools/powertools-lambda-python/issues/52) from aiven/release-0.5.0
* Merge pull request [#48](https://github.com/aws-powertools/powertools-lambda-python/issues/48) from aiven/parquet-support
* Merge pull request [#50](https://github.com/aws-powertools/powertools-lambda-python/issues/50) from aiven/rotator
* Merge pull request [#37](https://github.com/aws-powertools/powertools-lambda-python/issues/37) from aiven/olena/add_common_test
* Merge pull request [#49](https://github.com/aws-powertools/powertools-lambda-python/issues/49) from aiven/ivanyu/maven-central-publishing
* Merge pull request [#47](https://github.com/aws-powertools/powertools-lambda-python/issues/47) from aiven/fix-gradle
* Merge pull request [#46](https://github.com/aws-powertools/powertools-lambda-python/issues/46) from aiven/add-compressors-to-common
* Merge pull request [#44](https://github.com/aws-powertools/powertools-lambda-python/issues/44) from aiven/tapio-codeql-analysis
* Merge pull request [#43](https://github.com/aws-powertools/powertools-lambda-python/issues/43) from aiven/tapio-security.md
* Merge pull request [#42](https://github.com/aws-powertools/powertools-lambda-python/issues/42) from aiven/release-0.4.0
* Merge pull request [#41](https://github.com/aws-powertools/powertools-lambda-python/issues/41) from aiven/ivanyu/yyyy
* Merge pull request [#40](https://github.com/aws-powertools/powertools-lambda-python/issues/40) from aiven/release-0.3.1
* Merge pull request [#39](https://github.com/aws-powertools/powertools-lambda-python/issues/39) from aiven/ivanyu/validate-key-template
* Merge pull request [#38](https://github.com/aws-powertools/powertools-lambda-python/issues/38) from aiven/ivanyu/unnecessary-close
* Merge pull request [#36](https://github.com/aws-powertools/powertools-lambda-python/issues/36) from aiven/release-0.3.0
* Merge pull request [#32](https://github.com/aws-powertools/powertools-lambda-python/issues/32) from aiven/olena/new_json_writer
* Merge pull request [#35](https://github.com/aws-powertools/powertools-lambda-python/issues/35) from aiven/ivanyu/workflows
* Merge pull request [#31](https://github.com/aws-powertools/powertools-lambda-python/issues/31) from aiven/olena_classic_json
* Merge pull request [#34](https://github.com/aws-powertools/powertools-lambda-python/issues/34) from aiven/olena/release_0_2_0
* Merge pull request [#33](https://github.com/aws-powertools/powertools-lambda-python/issues/33) from aiven/release_common
* Merge pull request [#30](https://github.com/aws-powertools/powertools-lambda-python/issues/30) from aiven/olena_add_output_type
* Merge pull request [#29](https://github.com/aws-powertools/powertools-lambda-python/issues/29) from aiven/add_json_writers
* Merge pull request [#28](https://github.com/aws-powertools/powertools-lambda-python/issues/28) from aiven/refactoring
* Merge pull request [#4](https://github.com/aws-powertools/powertools-lambda-python/issues/4) from aiven/config-refactoring
* Merge pull request [#3](https://github.com/aws-powertools/powertools-lambda-python/issues/3) from aiven/change-license
* Merge pull request [#2](https://github.com/aws-powertools/powertools-lambda-python/issues/2) from aiven/connectors-common-code


<a name="v8.1.0"></a>
## [v8.1.0] - 2024-10-15
## Bug Fixes

* export `Caip*` types used in the API ([#325](https://github.com/aws-powertools/powertools-lambda-python/issues/325))
* ensure that errors are JSON-serializable ([#162](https://github.com/aws-powertools/powertools-lambda-python/issues/162))
* don't use internal types in the public API ([#312](https://github.com/aws-powertools/powertools-lambda-python/issues/312))
* keep all ETH methods in the same `enum` ([#313](https://github.com/aws-powertools/powertools-lambda-python/issues/313))
* use internal `object` function instead of the upstream one ([#316](https://github.com/aws-powertools/powertools-lambda-python/issues/316))
* accountType type to string ([#304](https://github.com/aws-powertools/powertools-lambda-python/issues/304))
* remove signTransaction from EthErc4337Account ([#300](https://github.com/aws-powertools/powertools-lambda-python/issues/300))
* bundler type ([#277](https://github.com/aws-powertools/powertools-lambda-python/issues/277))
* bundler URL validation ([#262](https://github.com/aws-powertools/powertools-lambda-python/issues/262))
* allow the request ID to be a string, number or null ([#156](https://github.com/aws-powertools/powertools-lambda-python/issues/156))
* use `UuidStruct` for IDs in the internap API ([#158](https://github.com/aws-powertools/powertools-lambda-python/issues/158))
* add `exactOptional()` superstruct type ([#100](https://github.com/aws-powertools/powertools-lambda-python/issues/100))
* make request `params` optional ([#96](https://github.com/aws-powertools/powertools-lambda-python/issues/96))
* update snap object keys to be mandatory and move name to metadata ([#87](https://github.com/aws-powertools/powertools-lambda-python/issues/87))
* rename `erc4337` -> `eip4337` ([#42](https://github.com/aws-powertools/powertools-lambda-python/issues/42))
* fix `keyring_listAccounts` method literal and assertions ([#13](https://github.com/aws-powertools/powertools-lambda-python/issues/13))
* needed to change prepack for now to unblock myself, may find a better solution later
* remove `snaps-utils` runtime dependency
* use `OnRpcRequestHandler` from `snaps-types`
* use new `Sender` interface
* use enum instead of strings in method names
* fix dispatcher typing
* allow requests to have undefined `params`
* fix handle method signature
* export handlers
* fix typo in the `FilterSupportedChainsRequest` type name
* don't add `params` if undefined
* handle undefined params

## Code Refactoring

* split `api.ts` ([#319](https://github.com/aws-powertools/powertools-lambda-python/issues/319))
* split account types ([#293](https://github.com/aws-powertools/powertools-lambda-python/issues/293))
* use [@metamask](https://github.com/metamask)/providers as a peer dependency ([#282](https://github.com/aws-powertools/powertools-lambda-python/issues/282))
* move internal RPC methods to `rpc.ts` ([#157](https://github.com/aws-powertools/powertools-lambda-python/issues/157))
* make `exportAccount`, `listRequests` and `getRequest` optional ([#73](https://github.com/aws-powertools/powertools-lambda-python/issues/73))
* rename `supportedMethods` to `methods` ([#35](https://github.com/aws-powertools/powertools-lambda-python/issues/35))
* rename files for consistency ([#29](https://github.com/aws-powertools/powertools-lambda-python/issues/29))
* move `JsonRpcRequest` to its own file ([#28](https://github.com/aws-powertools/powertools-lambda-python/issues/28))
* rename RPC handling functions ([#16](https://github.com/aws-powertools/powertools-lambda-python/issues/16))
* replace enum with type union
* set JSON-RPC header in the `send` method

## Documentation

* add `btc_sendmany` method ([#295](https://github.com/aws-powertools/powertools-lambda-python/issues/295))
* add `eth_decodeUserOperationCallData` to documentation ([#254](https://github.com/aws-powertools/powertools-lambda-python/issues/254))
* add note to `eth_prepareUserOperation` method response ([#263](https://github.com/aws-powertools/powertools-lambda-python/issues/263))
* update `eth_prepareUserOperation` argument to not be an array ([#252](https://github.com/aws-powertools/powertools-lambda-python/issues/252))
* add guideline about fetching remote code ([#201](https://github.com/aws-powertools/powertools-lambda-python/issues/201))
* remove admonitions from documentation ([#185](https://github.com/aws-powertools/powertools-lambda-python/issues/185))
* replace "keyring Snap" with "account Snap" ([#182](https://github.com/aws-powertools/powertools-lambda-python/issues/182))
* add components diagram and minor changes ([#179](https://github.com/aws-powertools/powertools-lambda-python/issues/179))
* minor fixes to the docs ([#174](https://github.com/aws-powertools/powertools-lambda-python/issues/174))
* update MetaMask version and remove admonitions ([#172](https://github.com/aws-powertools/powertools-lambda-python/issues/172))
* add guideline to sanitize errors ([#160](https://github.com/aws-powertools/powertools-lambda-python/issues/160))
* update README ([#149](https://github.com/aws-powertools/powertools-lambda-python/issues/149))
* add account snaps security guidelines ([#143](https://github.com/aws-powertools/powertools-lambda-python/issues/143))
* remove some bad code from examples ([#142](https://github.com/aws-powertools/powertools-lambda-python/issues/142))
* document how to migrate from API 0.1.x to 0.2.x ([#124](https://github.com/aws-powertools/powertools-lambda-python/issues/124))
* update events in sequence diagram ([#121](https://github.com/aws-powertools/powertools-lambda-python/issues/121))
* update doc for `eth_signTransaction` ([#111](https://github.com/aws-powertools/powertools-lambda-python/issues/111))
* add architecture and EVM methods docs ([#86](https://github.com/aws-powertools/powertools-lambda-python/issues/86))
* add usage in snap
* add module description

## Features

* add optional `nameLastUpdatedAt` metadata field ([#366](https://github.com/aws-powertools/powertools-lambda-python/issues/366))
* add `getAccountBalances` to `KeyringClient` ([#340](https://github.com/aws-powertools/powertools-lambda-python/issues/340))
* allow multiple address per account ([#315](https://github.com/aws-powertools/powertools-lambda-python/issues/315))
* support [@metamask](https://github.com/metamask)/providers v17 ([#329](https://github.com/aws-powertools/powertools-lambda-python/issues/329))
* add `getAccountBalances` method to `Keyring` ([#320](https://github.com/aws-powertools/powertools-lambda-python/issues/320))
* add CAIP-19 types and split `utils` ([#321](https://github.com/aws-powertools/powertools-lambda-python/issues/321))
* make the `KeyringAccount` type "abstract" ([#311](https://github.com/aws-powertools/powertools-lambda-python/issues/311))
* add `accountNameSuggestion` field to the `AccountCreatedEvent` ([#291](https://github.com/aws-powertools/powertools-lambda-python/issues/291))
* add display confirmation option to AccountCreatedEvent ([#307](https://github.com/aws-powertools/powertools-lambda-python/issues/307))
* add isEVMAccount helper ([#297](https://github.com/aws-powertools/powertools-lambda-python/issues/297))
* add bip122:p2wpkh account support ([#294](https://github.com/aws-powertools/powertools-lambda-python/issues/294))
* update `eth_patchUserOperation` to return optional gas limit values ([#250](https://github.com/aws-powertools/powertools-lambda-python/issues/250))
* remove `KeyringSnapControllerClient` to fix dependency problems ([#241](https://github.com/aws-powertools/powertools-lambda-python/issues/241))
* add support for ERC-4337 accounts ([#213](https://github.com/aws-powertools/powertools-lambda-python/issues/213))
* define `UuidStruct` as a named type ([#159](https://github.com/aws-powertools/powertools-lambda-python/issues/159))
* export events types ([#125](https://github.com/aws-powertools/powertools-lambda-python/issues/125))
* remove `buildHandlersChain` ([#114](https://github.com/aws-powertools/powertools-lambda-python/issues/114))
* remove unversioned `eth_signTypedData` method ([#113](https://github.com/aws-powertools/powertools-lambda-python/issues/113))
* add redirection message to snap async response ([#102](https://github.com/aws-powertools/powertools-lambda-python/issues/102))
* add a SnapController client
* move request ID to outer request ([#94](https://github.com/aws-powertools/powertools-lambda-python/issues/94))
* add `lastSelected` and `lastActive` to metadata ([#92](https://github.com/aws-powertools/powertools-lambda-python/issues/92))
* add keyring events and helper functions ([#74](https://github.com/aws-powertools/powertools-lambda-python/issues/74))
* add a `redirect` field to asynchronous request responses ([#75](https://github.com/aws-powertools/powertools-lambda-python/issues/75))
* add `InternalAccount` type and create submodule `internal` ([#65](https://github.com/aws-powertools/powertools-lambda-python/issues/65))
* move superstruct check to base `KeyringClient` ([#64](https://github.com/aws-powertools/powertools-lambda-python/issues/64))
* make `approveRequest` and `rejectRequest` optional ([#63](https://github.com/aws-powertools/powertools-lambda-python/issues/63))
* export enums with account methods and types ([#66](https://github.com/aws-powertools/powertools-lambda-python/issues/66))
* add `exportAccount` method ([#60](https://github.com/aws-powertools/powertools-lambda-python/issues/60))
* remove versioned `eth_signTypedData` methods ([#61](https://github.com/aws-powertools/powertools-lambda-python/issues/61))
* make `approveRequest` accept a `result` argument ([#59](https://github.com/aws-powertools/powertools-lambda-python/issues/59))
* remove account name from `KeyringAccount` type ([#55](https://github.com/aws-powertools/powertools-lambda-python/issues/55))
* remove `eth_sendTransaction` method ([#50](https://github.com/aws-powertools/powertools-lambda-python/issues/50))
* add `getController` to client ([#43](https://github.com/aws-powertools/powertools-lambda-python/issues/43))
* validate snap response using superstruct ([#15](https://github.com/aws-powertools/powertools-lambda-python/issues/15))
* add unit tests
* define response types
* rename method to `filterAccountChains`
* add handler class and builder function
* add `KeyringRpcDispatcher` class
* remove `exportAccount` method
* replace `chains` field with `filterSupportedChains` method
* make `submitRequest` support sync calls
* add API and snap API client
* **internal:** remove `lastActive` field from internal account model ([#95](https://github.com/aws-powertools/powertools-lambda-python/issues/95))

## Maintenance

* add missing "Keyring" to docs ([#173](https://github.com/aws-powertools/powertools-lambda-python/issues/173))
* improve jsdoc
* fix typo
* sort lines
* rename handler class
* remove unused argument
* make JsonRpcRequest a Json subtype
* replace handler class with dispatcher func
* simplify code
* rename keyring RPC request class
* remove dummy comments
* add doc strings
* cast `snapId` to `ValidatedSnapId`
* migrate to `[@metamask](https://github.com/metamask)/superstruct` and update required dependencies ([#355](https://github.com/aws-powertools/powertools-lambda-python/issues/355))
* remove empty line
* update `package.json` and `yarn.lock`
* rename variable
* small improvements on the documentation
* use enum values instead of literal strings
* sort object fields
* remove some layers of "method names"
* fix Markdown in comment
* add traces
* remove `is-uuid` and move utils to another file
* bump Snap depdencies ([#236](https://github.com/aws-powertools/powertools-lambda-python/issues/236))
* remove unused dependency
* use JSON types from `snaps-types` instead of `utils`
* accept null options on account creation
* remove unused `snaps-utils` dependency
* split clients into different files
* use types from `snaps-utils`
* use `import type` for types
* remove unused dependency
* update `chainHandlers` signature
* fix sonarlint warning
* update `yarn.lock`
* remove template usage section
* update API docs links
* bump dependencies ([#266](https://github.com/aws-powertools/powertools-lambda-python/issues/266))
* rename handler variable to match snaps naming
* trigger CI
* apply linter
* revert version to 0.0.0 in package.json
* allow request response to be typed
* rename `snapId` variable
* update node min version ([#247](https://github.com/aws-powertools/powertools-lambda-python/issues/247))
* make `snapId` optional
* add documentation
* update typing of createAccount request
* update snaps dependencies to 0.38.0-flask.1 ([#56](https://github.com/aws-powertools/powertools-lambda-python/issues/56))
* use `literal(null)` for nullable fields ([#57](https://github.com/aws-powertools/powertools-lambda-python/issues/57))
* rename variables in unit tests ([#58](https://github.com/aws-powertools/powertools-lambda-python/issues/58))
* add type to `snapController` field
* update CODEOWNERS ([#76](https://github.com/aws-powertools/powertools-lambda-python/issues/76))
* change type import ([#93](https://github.com/aws-powertools/powertools-lambda-python/issues/93))
* refactor tests to match superstruct examples ([#104](https://github.com/aws-powertools/powertools-lambda-python/issues/104))
* use `KeyringRpcMethod` enum instead of string ([#105](https://github.com/aws-powertools/powertools-lambda-python/issues/105))
* update `KeyringResponse` comment ([#103](https://github.com/aws-powertools/powertools-lambda-python/issues/103))
* use `Omit` instead of `OmitUnion` ([#106](https://github.com/aws-powertools/powertools-lambda-python/issues/106))
* rename module in package.json and README
* make options mandatory in the account model
* remove unused lavamoat allowed scripts ([#122](https://github.com/aws-powertools/powertools-lambda-python/issues/122))
* remove unused dependency
* rename files and use internal request class
* ignore snaps-controllers errors and update dependencies
* remove traces
* fix more "DApp" vs "Dapp" inconsistencies ([#140](https://github.com/aws-powertools/powertools-lambda-python/issues/140))
* fix typo in the readme ([#138](https://github.com/aws-powertools/powertools-lambda-python/issues/138))
* configure lavamoat
* prettier format
* **deps:** bump postcss from 8.4.24 to 8.4.31 ([#137](https://github.com/aws-powertools/powertools-lambda-python/issues/137))
* **deps:** bump [@metamask](https://github.com/metamask)/snaps-controllers from 3.0.0 to 3.1.0 ([#167](https://github.com/aws-powertools/powertools-lambda-python/issues/167))
* **deps:** bump [@metamask](https://github.com/metamask)/snaps-utils from 3.0.0 to 3.1.0 ([#169](https://github.com/aws-powertools/powertools-lambda-python/issues/169))
* **deps:** bump [@metamask](https://github.com/metamask)/utils from 8.1.0 to 8.2.0 ([#166](https://github.com/aws-powertools/powertools-lambda-python/issues/166))
* **deps:** bump [@metamask](https://github.com/metamask)/rpc-methods from 0.38.1-flask.1 to 2.0.0 ([#120](https://github.com/aws-powertools/powertools-lambda-python/issues/120))
* **deps:** bump [@metamask](https://github.com/metamask)/snaps-ui from 3.0.0 to 3.0.1 ([#171](https://github.com/aws-powertools/powertools-lambda-python/issues/171))
* **deps:** bump [@babel](https://github.com/babel)/traverse from 7.22.5 to 7.23.2 ([#163](https://github.com/aws-powertools/powertools-lambda-python/issues/163))
* **deps:** bump [@metamask](https://github.com/metamask)/object-multiplex from 1.2.0 to 1.3.0 ([#178](https://github.com/aws-powertools/powertools-lambda-python/issues/178))
* **deps:** bump [@metamask](https://github.com/metamask)/json-rpc-engine from 7.1.1 to 7.2.0 ([#164](https://github.com/aws-powertools/powertools-lambda-python/issues/164))
* **deps:** bump [@metamask](https://github.com/metamask)/snaps-registry from 2.0.0 to 2.1.0 ([#155](https://github.com/aws-powertools/powertools-lambda-python/issues/155))
* **deps:** bump [@metamask](https://github.com/metamask)/providers from 13.0.0 to 13.1.0 ([#153](https://github.com/aws-powertools/powertools-lambda-python/issues/153))
* **deps:** bump [@metamask](https://github.com/metamask)/rpc-errors from 6.0.0 to 6.1.0 ([#151](https://github.com/aws-powertools/powertools-lambda-python/issues/151))
* **deps:** bump postcss from 8.4.24 to 8.4.31 ([#150](https://github.com/aws-powertools/powertools-lambda-python/issues/150))
* **deps:** bump [@metamask](https://github.com/metamask)/scure-bip39 from 2.1.0 to 2.1.1 ([#146](https://github.com/aws-powertools/powertools-lambda-python/issues/146))
* **deps:** bump [@metamask](https://github.com/metamask)/base-controller from 3.2.2 to 3.2.3 ([#141](https://github.com/aws-powertools/powertools-lambda-python/issues/141))
* **deps:** bump [@metamask](https://github.com/metamask)/snaps-controllers from 3.1.0 to 3.1.1 ([#181](https://github.com/aws-powertools/powertools-lambda-python/issues/181))
* **deps:** bump [@metamask](https://github.com/metamask)/approval-controller from 4.0.1 to 4.1.0 ([#180](https://github.com/aws-powertools/powertools-lambda-python/issues/180))
* **deps:** bump [@metamask](https://github.com/metamask)/approval-controller from 3.5.1 to 3.5.2 ([#132](https://github.com/aws-powertools/powertools-lambda-python/issues/132))
* **deps:** bump [@metamask](https://github.com/metamask)/snaps-ui from 3.0.1 to 3.1.0 ([#188](https://github.com/aws-powertools/powertools-lambda-python/issues/188))
* **deps:** bump [@metamask](https://github.com/metamask)/scure-bip39 from 2.1.0 to 2.1.1 ([#135](https://github.com/aws-powertools/powertools-lambda-python/issues/135))
* **deps:** bump [@metamask](https://github.com/metamask)/snaps-controllers from 2.0.1 to 2.0.2 ([#134](https://github.com/aws-powertools/powertools-lambda-python/issues/134))
* **deps:** bump [@metamask](https://github.com/metamask)/snaps-utils from 3.1.0 to 3.2.0 ([#186](https://github.com/aws-powertools/powertools-lambda-python/issues/186))
* **deps:** bump [@metamask](https://github.com/metamask)/base-controller from 3.2.1 to 3.2.2 ([#133](https://github.com/aws-powertools/powertools-lambda-python/issues/133))
* **deps:** bump [@metamask](https://github.com/metamask)/snaps-controllers from 2.0.0 to 2.0.1 ([#130](https://github.com/aws-powertools/powertools-lambda-python/issues/130))
* **deps:** bump [@metamask](https://github.com/metamask)/utils from 8.2.0 to 8.2.1 ([#193](https://github.com/aws-powertools/powertools-lambda-python/issues/193))
* **deps:** bump [@metamask](https://github.com/metamask)/snaps-utils from 2.0.0 to 2.0.1 ([#127](https://github.com/aws-powertools/powertools-lambda-python/issues/127))
* **deps:** bump [@metamask](https://github.com/metamask)/snaps-rpc-methods from 3.1.0 to 3.2.1 ([#190](https://github.com/aws-powertools/powertools-lambda-python/issues/190))
* **deps:** update Snap and ESLint dependencies ([#117](https://github.com/aws-powertools/powertools-lambda-python/issues/117))
* **deps:** bump [@metamask](https://github.com/metamask)/json-rpc-engine from 7.2.0 to 7.3.0 ([#194](https://github.com/aws-powertools/powertools-lambda-python/issues/194))
* **deps:** bump [@metamask](https://github.com/metamask)/providers from 12.0.0 to 13.0.0 ([#115](https://github.com/aws-powertools/powertools-lambda-python/issues/115))
* **deps:** bump [@metamask](https://github.com/metamask)/providers from 14.0.1 to 14.0.2 ([#210](https://github.com/aws-powertools/powertools-lambda-python/issues/210))
* **deps:** bump [@metamask](https://github.com/metamask)/snaps-registry from 2.1.0 to 2.1.1 ([#212](https://github.com/aws-powertools/powertools-lambda-python/issues/212))
* **deps:** bump [@metamask](https://github.com/metamask)/snaps-sdk from 1.2.0 to 1.3.0 ([#218](https://github.com/aws-powertools/powertools-lambda-python/issues/218))
* **deps:** bump [@metamask](https://github.com/metamask)/snaps-utils from 5.0.0 to 5.0.1 ([#216](https://github.com/aws-powertools/powertools-lambda-python/issues/216))
* **deps:** bump [@metamask](https://github.com/metamask)/snaps-rpc-methods from 4.0.1 to 4.0.2 ([#217](https://github.com/aws-powertools/powertools-lambda-python/issues/217))
* **deps:** bump [@metamask](https://github.com/metamask)/providers from 11.1.2 to 12.0.0 ([#99](https://github.com/aws-powertools/powertools-lambda-python/issues/99))
* **deps:** bump [@metamask](https://github.com/metamask)/providers from 11.1.1 to 11.1.2 ([#98](https://github.com/aws-powertools/powertools-lambda-python/issues/98))
* **deps:** bump [@metamask](https://github.com/metamask)/utils from 8.0.0 to 8.1.0 ([#91](https://github.com/aws-powertools/powertools-lambda-python/issues/91))
* **deps:** bump [@metamask](https://github.com/metamask)/snaps-controllers from 3.4.1 to 3.5.0 ([#215](https://github.com/aws-powertools/powertools-lambda-python/issues/215))
* **deps:** bump [@metamask](https://github.com/metamask)/post-message-stream from 6.1.2 to 6.2.0 ([#88](https://github.com/aws-powertools/powertools-lambda-python/issues/88))
* **deps:** bump [@metamask](https://github.com/metamask)/approval-controller from 3.5.0 to 3.5.1 ([#78](https://github.com/aws-powertools/powertools-lambda-python/issues/78))
* **deps:** bump [@metamask](https://github.com/metamask)/snaps-registry from 1.2.1 to 1.2.2 ([#79](https://github.com/aws-powertools/powertools-lambda-python/issues/79))
* **deps:** bump [@metamask](https://github.com/metamask)/base-controller from 3.2.0 to 3.2.1 ([#80](https://github.com/aws-powertools/powertools-lambda-python/issues/80))
* **deps:** bump [@metamask](https://github.com/metamask)/utils from 7.1.0 to 8.0.0 ([#81](https://github.com/aws-powertools/powertools-lambda-python/issues/81))
* **deps:** bump [@metamask](https://github.com/metamask)/snaps-sdk from 1.3.0 to 1.3.1 ([#222](https://github.com/aws-powertools/powertools-lambda-python/issues/222))
* **deps:** bump [@metamask](https://github.com/metamask)/providers from 11.1.0 to 11.1.1 ([#67](https://github.com/aws-powertools/powertools-lambda-python/issues/67))
* **deps:** bump ses from 0.18.4 to 0.18.7 ([#68](https://github.com/aws-powertools/powertools-lambda-python/issues/68))
* **deps:** bump [@metamask](https://github.com/metamask)/utils from 7.0.0 to 7.1.0 ([#62](https://github.com/aws-powertools/powertools-lambda-python/issues/62))
* **deps:** bump [@metamask](https://github.com/metamask)/json-rpc-engine from 7.3.0 to 7.3.1 ([#227](https://github.com/aws-powertools/powertools-lambda-python/issues/227))
* **deps:** bump [@metamask](https://github.com/metamask)/base-controller from 4.0.0 to 4.0.1 ([#226](https://github.com/aws-powertools/powertools-lambda-python/issues/226))
* **deps:** bump [@metamask](https://github.com/metamask)/approval-controller from 5.0.0 to 5.1.1 ([#225](https://github.com/aws-powertools/powertools-lambda-python/issues/225))
* **deps:** bump [@metamask](https://github.com/metamask)/utils from 6.2.0 to 7.0.0 ([#54](https://github.com/aws-powertools/powertools-lambda-python/issues/54))
* **deps:** bump [@metamask](https://github.com/metamask)/snaps-sdk from 6.4.0 to 6.5.0 ([#384](https://github.com/aws-powertools/powertools-lambda-python/issues/384))
* **deps:** bump [@metamask](https://github.com/metamask)/utils from 8.2.1 to 8.3.0 ([#238](https://github.com/aws-powertools/powertools-lambda-python/issues/238))
* **deps:** bump [@metamask](https://github.com/metamask)/approval-controller from 3.4.0 to 3.5.0 ([#47](https://github.com/aws-powertools/powertools-lambda-python/issues/47))
* **deps:** bump [@metamask](https://github.com/metamask)/snaps-sdk from 1.3.2 to 1.4.0 ([#243](https://github.com/aws-powertools/powertools-lambda-python/issues/243))
* **deps:** bump [@metamask](https://github.com/metamask)/base-controller from 3.0.0 to 3.2.0 ([#46](https://github.com/aws-powertools/powertools-lambda-python/issues/46))
* **deps:** bump word-wrap from 1.2.3 to 1.2.4 ([#48](https://github.com/aws-powertools/powertools-lambda-python/issues/48))
* **deps:** bump [@metamask](https://github.com/metamask)/json-rpc-engine from 7.3.1 to 7.3.2 ([#246](https://github.com/aws-powertools/powertools-lambda-python/issues/246))
* **deps:** bump [@metamask](https://github.com/metamask)/utils from 6.1.0 to 6.2.0 ([#36](https://github.com/aws-powertools/powertools-lambda-python/issues/36))
* **deps:** bump semver from 6.3.0 to 6.3.1 ([#34](https://github.com/aws-powertools/powertools-lambda-python/issues/34))
* **deps:** bump ip from 2.0.0 to 2.0.1 ([#253](https://github.com/aws-powertools/powertools-lambda-python/issues/253))
* **deps:** bump [@metamask](https://github.com/metamask)/approval-controller from 3.3.0 to 3.4.0 ([#27](https://github.com/aws-powertools/powertools-lambda-python/issues/27))
* **deps:** downgrade snaps dependencies to `0.35.2-flask.1` ([#25](https://github.com/aws-powertools/powertools-lambda-python/issues/25))
* **deps:** bump [@metamask](https://github.com/metamask)/snaps-utils from 0.34.1-flask.1 to 1.0.0-prerelease.1 ([#22](https://github.com/aws-powertools/powertools-lambda-python/issues/22))
* **deps:** bump [@metamask](https://github.com/metamask)/snaps-controllers from 0.34.1-flask.1 to 1.0.0-prerelease.1 ([#23](https://github.com/aws-powertools/powertools-lambda-python/issues/23))
* **deps:** bump [@metamask](https://github.com/metamask)/providers from 11.0.0 to 11.1.0 ([#19](https://github.com/aws-powertools/powertools-lambda-python/issues/19))
* **deps:** update snaps dependencies ([#21](https://github.com/aws-powertools/powertools-lambda-python/issues/21))
* **deps:** bump fast-xml-parser from 4.2.4 to 4.2.5 ([#17](https://github.com/aws-powertools/powertools-lambda-python/issues/17))
* **deps:** bump [@metamask](https://github.com/metamask)/key-tree from 7.0.0 to 7.1.1 ([#12](https://github.com/aws-powertools/powertools-lambda-python/issues/12))
* **deps:** bump [@metamask](https://github.com/metamask)/utils from 6.0.1 to 6.1.0 ([#11](https://github.com/aws-powertools/powertools-lambda-python/issues/11))
* **deps:** bump [@metamask](https://github.com/metamask)/rpc-errors from 6.1.0 to 6.2.1 ([#258](https://github.com/aws-powertools/powertools-lambda-python/issues/258))
* **deps:** bump [@metamask](https://github.com/metamask)/snaps-sdk from 1.4.0 to 3.0.0 ([#259](https://github.com/aws-powertools/powertools-lambda-python/issues/259))
* **deps:** bump [@metamask](https://github.com/metamask)/snaps-sdk from 3.0.0 to 3.0.1 ([#261](https://github.com/aws-powertools/powertools-lambda-python/issues/261))
* **deps:** bump [@metamask](https://github.com/metamask)/json-rpc-engine from 7.3.2 to 7.3.3 ([#264](https://github.com/aws-powertools/powertools-lambda-python/issues/264))
* **deps:** bump [@metamask](https://github.com/metamask)/safe-event-emitter from 3.0.0 to 3.1.0 ([#270](https://github.com/aws-powertools/powertools-lambda-python/issues/270))
* **deps:** bump [@metamask](https://github.com/metamask)/safe-event-emitter from 3.1.0 to 3.1.1 ([#274](https://github.com/aws-powertools/powertools-lambda-python/issues/274))
* **deps:** bump [@metamask](https://github.com/metamask)/providers from 15.0.0 to 16.0.0 ([#276](https://github.com/aws-powertools/powertools-lambda-python/issues/276))
* **deps:** bump [@metamask](https://github.com/metamask)/approval-controller from 3.2.0 to 3.3.0
* **deps:** bump [@metamask](https://github.com/metamask)/utils from 8.3.0 to 8.4.0 ([#280](https://github.com/aws-powertools/powertools-lambda-python/issues/280))
* **deps:** bump [@metamask](https://github.com/metamask)/snaps-sdk from 3.1.1 to 3.2.0 ([#284](https://github.com/aws-powertools/powertools-lambda-python/issues/284))
* **deps:** bump [@metamask](https://github.com/metamask)/snaps-sdk from 3.2.0 to 4.0.0 ([#287](https://github.com/aws-powertools/powertools-lambda-python/issues/287))
* **deps:** bump tar from 6.1.15 to 6.2.1 ([#286](https://github.com/aws-powertools/powertools-lambda-python/issues/286))
* **deps:** bump [@metamask](https://github.com/metamask)/snaps-sdk from 4.0.0 to 4.0.1 ([#292](https://github.com/aws-powertools/powertools-lambda-python/issues/292))
* **deps:** bump snaps-sdk to 4.2.0 ([#305](https://github.com/aws-powertools/powertools-lambda-python/issues/305))
* **deps:** bump [@metamask](https://github.com/metamask)/key-tree from 9.1.0 to 9.1.1 ([#310](https://github.com/aws-powertools/powertools-lambda-python/issues/310))
* **deps:** update various dependencies ([#314](https://github.com/aws-powertools/powertools-lambda-python/issues/314))
* **deps:** bump [@metamask](https://github.com/metamask)/snaps-sdk from 4.4.0 to 4.4.1 ([#334](https://github.com/aws-powertools/powertools-lambda-python/issues/334))
* **deps:** bump [@metamask](https://github.com/metamask)/rpc-errors from 6.2.1 to 6.3.0 ([#337](https://github.com/aws-powertools/powertools-lambda-python/issues/337))
* **deps:** bump [@metamask](https://github.com/metamask)/snaps-sdk from 4.4.1 to 4.4.2 ([#339](https://github.com/aws-powertools/powertools-lambda-python/issues/339))
* **deps:** bump braces from 3.0.2 to 3.0.3 in the npm_and_yarn group across 1 directory ([#345](https://github.com/aws-powertools/powertools-lambda-python/issues/345))
* **deps:** bump [@metamask](https://github.com/metamask)/snaps-sdk from 4.4.2 to 6.0.0 ([#347](https://github.com/aws-powertools/powertools-lambda-python/issues/347))
* **deps:** bump [@metamask](https://github.com/metamask)/rpc-errors from 6.3.0 to 6.3.1 ([#350](https://github.com/aws-powertools/powertools-lambda-python/issues/350))
* **deps:** bump [@metamask](https://github.com/metamask)/key-tree from 9.1.1 to 9.1.2 ([#351](https://github.com/aws-powertools/powertools-lambda-python/issues/351))
* **deps:** bump [@metamask](https://github.com/metamask)/snaps-sdk from 6.0.0 to 6.1.0 ([#357](https://github.com/aws-powertools/powertools-lambda-python/issues/357))
* **deps:** bump [@metamask](https://github.com/metamask)/snaps-sdk from 6.1.0 to 6.2.0 ([#367](https://github.com/aws-powertools/powertools-lambda-python/issues/367))
* **deps:** bump [@metamask](https://github.com/metamask)/utils from 5.0.2 to 6.0.1
* **deps:** bump [@metamask](https://github.com/metamask)/snaps-sdk from 6.2.0 to 6.2.1 ([#372](https://github.com/aws-powertools/powertools-lambda-python/issues/372))
* **deps:** bump [@metamask](https://github.com/metamask)/json-rpc-engine from 9.0.1 to 9.0.2 ([#370](https://github.com/aws-powertools/powertools-lambda-python/issues/370))
* **deps:** bump [@metamask](https://github.com/metamask)/utils from 9.1.0 to 9.2.1 ([#380](https://github.com/aws-powertools/powertools-lambda-python/issues/380))
* **deps:** bump [@metamask](https://github.com/metamask)/snaps-sdk from 6.2.1 to 6.3.0 ([#374](https://github.com/aws-powertools/powertools-lambda-python/issues/374))
* **deps:** bump [@metamask](https://github.com/metamask)/json-rpc-middleware-stream from 8.0.1 to 8.0.2 ([#371](https://github.com/aws-powertools/powertools-lambda-python/issues/371))
* **deps:** bump micromatch from 4.0.5 to 4.0.8 in the npm_and_yarn group ([#373](https://github.com/aws-powertools/powertools-lambda-python/issues/373))
* **deps:** bump '[@metamask](https://github.com/metamask)/*' and peer dependencies ([#382](https://github.com/aws-powertools/powertools-lambda-python/issues/382))
* **deps:** bump [@metamask](https://github.com/metamask)/snaps-sdk from 6.3.0 to 6.4.0 ([#383](https://github.com/aws-powertools/powertools-lambda-python/issues/383))
* **deps:** bump [@metamask](https://github.com/metamask)/json-rpc-middleware-stream from 7.0.1 to 7.0.2 ([#333](https://github.com/aws-powertools/powertools-lambda-python/issues/333))
* **deps:** bump `[@metamask](https://github.com/metamask)/snaps-*` to 0.36.0-flask.1 ([#51](https://github.com/aws-powertools/powertools-lambda-python/issues/51))
* **deps:** bump [@metamask](https://github.com/metamask)/snaps-sdk from 4.2.0 to 4.3.0 ([#323](https://github.com/aws-powertools/powertools-lambda-python/issues/323))
* **deps-dev:** bump [@metamask](https://github.com/metamask)/auto-changelog from 3.1.0 to 3.2.0 ([#44](https://github.com/aws-powertools/powertools-lambda-python/issues/44))
* **deps-dev:** bump [@metamask](https://github.com/metamask)/eslint-config-jest from 12.0.0 to 12.1.0 ([#37](https://github.com/aws-powertools/powertools-lambda-python/issues/37))
* **deps-dev:** bump `[@metamask](https://github.com/metamask)/eslint-*` to 12.1.0 ([#49](https://github.com/aws-powertools/powertools-lambda-python/issues/49))
* **deps-dev:** bump [@metamask](https://github.com/metamask)/auto-changelog from 3.4.0 to 3.4.1 ([#168](https://github.com/aws-powertools/powertools-lambda-python/issues/168))
* **deps-dev:** bump [@metamask](https://github.com/metamask)/eslint-config from 12.1.0 to 12.2.0 ([#110](https://github.com/aws-powertools/powertools-lambda-python/issues/110))
* **deps-dev:** bump [@metamask](https://github.com/metamask)/auto-changelog from 3.2.0 to 3.3.0 ([#128](https://github.com/aws-powertools/powertools-lambda-python/issues/128))
* **deps-dev:** bump [@metamask](https://github.com/metamask)/eslint-config-nodejs from 12.1.0 to 13.0.0 ([#378](https://github.com/aws-powertools/powertools-lambda-python/issues/378))
* **deps-dev:** bump [@metamask](https://github.com/metamask)/auto-changelog from 3.3.0 to 3.4.0 ([#165](https://github.com/aws-powertools/powertools-lambda-python/issues/165))
* **deps-dev:** bump [@metamask](https://github.com/metamask)/auto-changelog from 3.4.1 to 3.4.2 ([#177](https://github.com/aws-powertools/powertools-lambda-python/issues/177))
* **deps-dev:** bump [@metamask](https://github.com/metamask)/auto-changelog from 3.4.2 to 3.4.3 ([#191](https://github.com/aws-powertools/powertools-lambda-python/issues/191))
* **deps-dev:** bump [@metamask](https://github.com/metamask)/auto-changelog from 3.4.3 to 3.4.4 ([#223](https://github.com/aws-powertools/powertools-lambda-python/issues/223))
* **deps-dev:** bump [@metamask](https://github.com/metamask)/providers from 16.0.0 to 16.1.0 ([#298](https://github.com/aws-powertools/powertools-lambda-python/issues/298))
* **deps-dev:** bump [@metamask](https://github.com/metamask)/providers from 17.1.1 to 17.1.2 ([#362](https://github.com/aws-powertools/powertools-lambda-python/issues/362))
* **deps-dev:** bump [@metamask](https://github.com/metamask)/providers from 17.0.0 to 17.1.0 ([#348](https://github.com/aws-powertools/powertools-lambda-python/issues/348))
* **deps-dev:** bump [@metamask](https://github.com/metamask)/providers from 17.1.0 to 17.1.1 ([#354](https://github.com/aws-powertools/powertools-lambda-python/issues/354))
* **deps-dev:** bump [@metamask](https://github.com/metamask)/eslint-config-jest from 11.1.0 to 12.0.0 ([#33](https://github.com/aws-powertools/powertools-lambda-python/issues/33))
* **devdeps:** [@lavamoat](https://github.com/lavamoat)/allow-scripts@^2.3.1->^3.0.4 ([#308](https://github.com/aws-powertools/powertools-lambda-python/issues/308))
* **docs:** fix some typos and consistency problems ([#131](https://github.com/aws-powertools/powertools-lambda-python/issues/131))

## Reverts
* Merge pull request [#6](https://github.com/aws-powertools/powertools-lambda-python/issues/6) from MetaMask/prepack
* chore: use JSON types from `snaps-types` instead of `utils`
* chore: remove unused `snaps-utils` dependency

## Pull Requests

* Merge pull request [#9](https://github.com/aws-powertools/powertools-lambda-python/issues/9) from MetaMask/feat/update-readme
* Merge pull request [#8](https://github.com/aws-powertools/powertools-lambda-python/issues/8) from MetaMask/feat/add-unit-tests
* Merge pull request [#3](https://github.com/aws-powertools/powertools-lambda-python/issues/3) from MetaMask/dependabot/npm_and_yarn/main/metamask/utils-6.0.1
* Merge pull request [#7](https://github.com/aws-powertools/powertools-lambda-python/issues/7) from MetaMask/dependabot/npm_and_yarn/main/metamask/approval-controller-3.3.0
* Merge pull request [#6](https://github.com/aws-powertools/powertools-lambda-python/issues/6) from MetaMask/prepack
* Merge pull request [#4](https://github.com/aws-powertools/powertools-lambda-python/issues/4) from MetaMask/add-superstruct

## BREAKING CHANGE

This commit changes the `KeyringAccount` type and the
`Keyring` interface.

This commit removes the `eth_sendTransaction` from the
allowed methods.

This commit renames a field of the KeyringAccount
class, making it incompatible with previous version.


<a name="main"></a>
## [main] - 2024-10-14

<a name="nightly"></a>
## nightly - 2024-10-14
## Reverts
* add Debian 11, Ubuntu 22.04 and AlmaLinux 8 & 9 builds
* switch to self-hosted downloads as gna.org is shutting down

## Pull Requests

* Merge pull request [#4135](https://github.com/aws-powertools/powertools-lambda-python/issues/4135) from wkhtmltopdf/issue-templates
* Merge pull request [#1949](https://github.com/aws-powertools/powertools-lambda-python/issues/1949) from daigot/master
* Merge pull request [#1989](https://github.com/aws-powertools/powertools-lambda-python/issues/1989) from alito/fixfooterspacing
* Merge pull request [#37](https://github.com/aws-powertools/powertools-lambda-python/issues/37) from ashkulz/master
* Merge pull request [#36](https://github.com/aws-powertools/powertools-lambda-python/issues/36) from ashkulz/master
* Merge pull request [#35](https://github.com/aws-powertools/powertools-lambda-python/issues/35) from ashkulz/update-repository-url
* Merge pull request [#34](https://github.com/aws-powertools/powertools-lambda-python/issues/34) from ashkulz/add-ignores
* Merge pull request [#33](https://github.com/aws-powertools/powertools-lambda-python/issues/33) from ashkulz/header-html-crash
* Merge pull request [#32](https://github.com/aws-powertools/powertools-lambda-python/issues/32) from ashkulz/build-fixes
* Merge pull request [#31](https://github.com/aws-powertools/powertools-lambda-python/issues/31) from rainabba/master
* Merge pull request [#30](https://github.com/aws-powertools/powertools-lambda-python/issues/30) from pruiz/misc-enhacements
* Merge pull request [#29](https://github.com/aws-powertools/powertools-lambda-python/issues/29) from pruiz/issue-1277
* Merge pull request [#26](https://github.com/aws-powertools/powertools-lambda-python/issues/26) from renan/patch-2
* Merge pull request [#23](https://github.com/aws-powertools/powertools-lambda-python/issues/23) from esemi/patch-1
* Merge pull request [#25](https://github.com/aws-powertools/powertools-lambda-python/issues/25) from renan/patch-1
* Merge pull request [#22](https://github.com/aws-powertools/powertools-lambda-python/issues/22) from poizan42/master
* Merge pull request [#21](https://github.com/aws-powertools/powertools-lambda-python/issues/21) from sni/master
* Merge pull request [#19](https://github.com/aws-powertools/powertools-lambda-python/issues/19) from peterrehm/patch-1
* Merge pull request [#17](https://github.com/aws-powertools/powertools-lambda-python/issues/17) from sodabrew/pr13-nowsp
* Merge pull request [#12](https://github.com/aws-powertools/powertools-lambda-python/issues/12) from sodabrew/patch-1
* Merge pull request [#15](https://github.com/aws-powertools/powertools-lambda-python/issues/15) from trvrnrth/fix-margins
* Merge pull request [#16](https://github.com/aws-powertools/powertools-lambda-python/issues/16) from noolan/patch-1
* Merge pull request [#14](https://github.com/aws-powertools/powertools-lambda-python/issues/14) from trvrnrth/fix-margins
* Merge pull request [#11](https://github.com/aws-powertools/powertools-lambda-python/issues/11) from Max-Might/master
* Merge pull request [#10](https://github.com/aws-powertools/powertools-lambda-python/issues/10) from beatle/master
* Merge pull request [#9](https://github.com/aws-powertools/powertools-lambda-python/issues/9) from bkuker/master
* Merge pull request [#8](https://github.com/aws-powertools/powertools-lambda-python/issues/8) from erlingwl/master
* Merge pull request [#7](https://github.com/aws-powertools/powertools-lambda-python/issues/7) from taf2/master
* Merge pull request [#6](https://github.com/aws-powertools/powertools-lambda-python/issues/6) from cub-uanic/master
* Merge pull request [#5](https://github.com/aws-powertools/powertools-lambda-python/issues/5) from shreeve/master
* Merge pull request [#4](https://github.com/aws-powertools/powertools-lambda-python/issues/4) from jangid/master
* Merge pull request [#3](https://github.com/aws-powertools/powertools-lambda-python/issues/3) from trvrnrth/master


[Unreleased]: https://github.com/aws-powertools/powertools-lambda-python/compare/v0.2.0...HEAD
[v0.2.0]: https://github.com/aws-powertools/powertools-lambda-python/compare/yace-helm-chart-0.38.0...v0.2.0
[yace-helm-chart-0.38.0]: https://github.com/aws-powertools/powertools-lambda-python/compare/v2.0.4...yace-helm-chart-0.38.0
[v2.0.4]: https://github.com/aws-powertools/powertools-lambda-python/compare/v...v2.0.4
[v]: https://github.com/aws-powertools/powertools-lambda-python/compare/v8.1.0...v
[v8.1.0]: https://github.com/aws-powertools/powertools-lambda-python/compare/main...v8.1.0
[main]: https://github.com/aws-powertools/powertools-lambda-python/compare/nightly...main
