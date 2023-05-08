import React, { Component } from "react";
import { TagObject } from "@open-rpc/meta-schema";
const hashColor = require("hash-color-material");

interface IProps {
  tags?: TagObject[];
}

export default class Tags extends Component<IProps> {
  public render() {
    const { tags }: { tags?: any} = this.props;
    if (!tags || tags.length === 0) {
      return null;
    }
    return (
      <>
        {
          tags.map((tag: any, k: number) => {
            return (
              <span
                key={tag.name}
                className="badge"
                style={{ backgroundColor: hashColor.getColorFromString(tag.name, false) }}
              >
                {tag.name}
              </span>
            );
          })
        }
      </>
    );
  }
}
