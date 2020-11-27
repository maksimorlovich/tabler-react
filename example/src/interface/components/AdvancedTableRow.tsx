import * as React from "react";
import { El, Table, Avatar, Text } from "tabler-react";

export interface AdvancedTableRowProps {
  name: string;
  title: string;
  email: string;
  department: string;
  role: string;
  avatarUrl?: string;
  initials?: string;
  editElement?: React.ReactNode;
}

const AdvancedTableRow = ({
  name,
  title,
  email,
  department,
  role,
  avatarUrl,
  initials,
  editElement,
}: AdvancedTableRowProps) => {
  return (
    <Table.Row>
      <Table.Col>
        <El.Div className="d-flex lh-sm py-1 align-items-center">
          <Avatar mr={2} imageURL={avatarUrl}>
            {!avatarUrl && initials}
          </Avatar>
          <El.Div className="flex-fill">
            <Text className="strong">{name}</Text>
            <Text muted className="text-h5">
              {email}
            </Text>
          </El.Div>
        </El.Div>
      </Table.Col>
      <Table.Col>
        <Text>{title}</Text>
        <Text muted className="text-h5">
          {department}
        </Text>
      </Table.Col>
      <Table.Col>
        <Text muted>{role}</Text>
      </Table.Col>
      <Table.Col>{editElement}</Table.Col>
    </Table.Row>
  );
};

export default AdvancedTableRow;
