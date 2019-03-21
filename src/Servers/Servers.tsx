import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Typography } from "@material-ui/core";
import { types } from "@open-rpc/meta-schema";

interface IProps {
  schema?: types.OpenRPC;
}

class Servers extends Component<IProps> {
  public render() {
    const { schema } = this.props;
    if (!schema || !schema.servers || schema.servers.length === 0) {
      return null;
    }
    return (
      <>
        <Typography variant="h2">Servers</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Url</TableCell>
              <TableCell align="right">Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {schema.servers.map((row) => (
              <TableRow key={row.url}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right"><Link href={row.url}>{row.url}</Link></TableCell>
                <TableCell align="right">{row.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </>
    );
  }
}

export default Servers;
