import * as React from "react";
import { El, Table, Form, Text } from "tabler-react";

export interface InvoiceTableRowProps {
  num: string;
  subject: string;
  client: string;
  vatNum: string;
  dateCreated: string;
  status: string;
  price: number;
  editElement?: React.ReactNode;
}

const InvoiceTableRow = ({
  num,
  subject,
  client,
  vatNum,
  dateCreated,
  status,
  price,
  editElement,
}: InvoiceTableRowProps) => {
  return (
    <Table.Row>
      <Table.Col>
        <Form.Checkbox
          name="example-inline-checkboxes"
          m={0}
          className="align-middle"
        />
      </Table.Col>
      <Table.Col>
        <Text as="span" muted>
          {num}
        </Text>
      </Table.Col>
      <Table.Col>
        <El.A href="/invoice" className="text-reset">
          {subject}
        </El.A>
      </Table.Col>
      <Table.Col>{client}</Table.Col>
      <Table.Col>{vatNum}</Table.Col>
      <Table.Col>
        {/* <El.A href="#">{linkTitle}</El.A> */}
        {dateCreated}
      </Table.Col>
      <Table.Col>{status}</Table.Col>
      <Table.Col>{`$${price}`}</Table.Col>
      <Table.Col className="text-right">{editElement}</Table.Col>
    </Table.Row>
  );
};

export default InvoiceTableRow;
