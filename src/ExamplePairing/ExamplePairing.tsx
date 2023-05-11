import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import { ExampleObject, ExamplePairingObject, MethodObjectParamStructure, ExamplePairingObjectResult } from "@open-rpc/meta-schema";
import _ from "lodash";
import MarkdownDescription from "../MarkdownDescription/MarkdownDescription";

interface IProps {
  examplePairing?: ExamplePairingObject;
  paramStructure?: MethodObjectParamStructure;
  components?: {
    CodeBlock: React.FC<{children: string, className?: string}>;
  }
  methodName?: string;
  uiSchema?: any;
  reactJsonOptions?: any;
}

class ExamplePairing extends Component<IProps, {}> {
  public render() {
    const { examplePairing, paramStructure, methodName, uiSchema, components} = this.props;
    if (_.isUndefined(examplePairing)) {
      return null;
    }
    if (_.isUndefined(methodName)) {
      return null;
    }
    const params = paramStructure === "by-name"
      ? (examplePairing.params as ExampleObject[]).reduce(((memo, p) => {
        memo[p.name] = p.value;
        return memo;
      }), {} as any)
      : (examplePairing.params as ExampleObject[]).map(((p) => p.value));

    const methodCall = {
      method: methodName,
      params,
    }
    const jsCode = `await window.ethereum.request(${JSON.stringify(methodCall, null, "  ")});`;
    return (
      <div>
        <div>
          <MarkdownDescription
            uiSchema={uiSchema}
            source={examplePairing.description || ""}
            className="example-pairing-description"
          />
        </div>
        <div>
          <div>
            <h3>Request</h3>
            <div>
              {components && components.CodeBlock && <components.CodeBlock className="language-js">{jsCode}</components.CodeBlock>}
              {!components?.CodeBlock &&
                <pre>
                  <code>
                    {jsCode}
                  </code>
                </pre>
              }
            </div>
          </div>
        </div>
        <div>
          <div>
            <h3>Result</h3>
            <div>
            {components && components.CodeBlock && <components.CodeBlock className="language-js">{JSON.stringify((examplePairing.result as ExampleObject).value, null, '  ')}</components.CodeBlock>}
            {!components?.CodeBlock &&
              <pre>
                  <code>
                  {JSON.stringify((examplePairing.result as ExampleObject).value)}
                </code>
              </pre>
            }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ExamplePairing;
