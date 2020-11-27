import * as React from "react";
import { El, Table } from "tabler-react";

export interface BasicTableRowProps {
  name: string;
  title: string;
  email: string;
  role: string;
  linkTitle?: string;
}

const BasicTableRow = ({
  name,
  title,
  email,
  role,
  linkTitle = "Edit",
}: BasicTableRowProps) => {
  return (
    <Table.Row>
      <Table.Col>{name}</Table.Col>
      <Table.Col className="text-muted">{title}</Table.Col>
      <Table.Col className="text-muted">{email}</Table.Col>
      <Table.Col className="text-muted">{role}</Table.Col>
      <Table.Col>
        <El.A href="#">{linkTitle}</El.A>
      </Table.Col>
    </Table.Row>
  );
};

export default BasicTableRow;
