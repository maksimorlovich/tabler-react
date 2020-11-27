import * as React from "react";

import {
  Page,
  Card,
  Button,
  Form,
  El,
  Table,
  Dropdown,
  Text,
  Pagination,
  Icon,
} from "tabler-react";

import SiteWrapper from "../SiteWrapper";
import BasicTableRow, { BasicTableRowProps } from "./components/BasicTableRow";
import AdvancedTableRow, {
  AdvancedTableRowProps,
} from "./components/AdvancedTableRow";
import InvoiceTableRow, {
  InvoiceTableRowProps,
} from "./components/InvoiceTableRow";

const table1Data: BasicTableRowProps[] = [
  {
    name: "Paweł Kuna",
    title: "UI Designer, Training",
    email: "paweluna@howstuffworks.com",
    role: "User",
  },
  {
    name: "Jeffie Lewzey",
    title: "Chemical Engineer, Support",
    email: "jlewzey1@seesaa.net",
    role: "Admin",
  },
  {
    name: "Mallory Hulme",
    title: "Geologist IV, Support",
    email: "mhulme2@domainmarket.com",
    role: "User",
  },
  {
    name: "Dunn Slane",
    title: "Research Nurse, Sales",
    email: "dslane3@epa.gov",
    role: "Owner",
  },
  {
    name: "Emmy Levet",
    title: "VP Product Management, Accounting",
    email: "elevet4@senate.gov",
    role: "Admin",
  },
];

const table2Data: BasicTableRowProps[] = [
  {
    name: "Maryjo Lebarree",
    title: "Civil Engineer, Product Management",
    email: "mlebarree5@unc.edu",
    role: "User",
  },
  {
    name: "Egan Poetz",
    title: "Research Nurse, Engineering",
    email: "	epoetz6@free.fr",
    role: "Admin",
  },
  {
    name: "Kellie Skingley",
    title: "Teacher, Services",
    email: "kskingley7@columbia.edu",
    role: "User",
  },
  {
    name: "Christabel Charlwood",
    title: "Tax Accountant, Engineering",
    email: "ccharlwood8@nifty.com",
    role: "Owner",
  },
  {
    name: "Haskel Shelper",
    title: "Staff Scientist, Legal",
    email: "hshelper9@woothemes.com",
    role: "Admin",
  },
];

const table3Data: AdvancedTableRowProps[] = [
  {
    name: "Lorry Mion",
    title: "Automation Specialist IV",
    email: "lmiona@livejournal.com",
    department: "Accounting",
    role: "User",
    avatarUrl: "./demo/faces/female/25.jpg",
    initials: "LM",
  },
  {
    name: "Leesa Beaty",
    title: "Editor",
    email: "lbeatyb@alibaba.com",
    department: "Services",
    role: "Admin",
    avatarUrl: "./demo/faces/female/26.jpg",
    initials: "LB",
  },
  {
    name: "Perren Keemar",
    title: "Analog Circuit Design manager",
    email: "pkeemarc@yahoo.com",
    department: "Services",
    role: "User",
    avatarUrl: "./demo/faces/female/27.jpg",
    initials: "PK",
  },
  {
    name: "Sunny Airey",
    title: "Nuclear Power Engineer",
    email: "saireyd@prlog.org",
    department: "Engineering",
    role: "Owner",
    initials: "SA",
  },
  {
    name: "Geoffry Flaunders",
    title: "Software Test Engineer II",
    email: "gflaunderse@loc.gov",
    department: "Accounting",
    role: "Admin",
    avatarUrl: "./demo/faces/female/28.jpg",
    initials: "GF",
  },
  // {
  //   name: "",
  //   title: "",
  //   email: "",
  //   department: "",
  //   role: "",
  //   initials: "",
  // },
];

const invoiceData: InvoiceTableRowProps[] = [
  {
    num: "001401",
    subject: "Design Works",
    client: "Carlson Limited",
    vatNum: "87956621",
    dateCreated: "15 Dec 2017",
    status: "Paid",
    price: 887,
  },
  {
    num: "001402",
    subject: "UX Wireframes",
    client: "Adobe",
    vatNum: "87956421",
    dateCreated: "12 Apr 2017",
    status: "Pending",
    price: 1200,
  },
  {
    num: "001403",
    subject: "New Dashboard",
    client: "Bluewolf",
    vatNum: "87952621",
    dateCreated: "23 Oct 2017",
    status: "Pending",
    price: 534,
  },
  {
    num: "001404",
    subject: "Landing Page",
    client: "Salesforce",
    vatNum: "87953421",
    dateCreated: "2 Sep 2017",
    status: "Due in 2 Weeks",
    price: 1500,
  },
  {
    num: "001405",
    subject: "Marketing Templates",
    client: "Printic",
    vatNum: "87956621",
    dateCreated: "29 Jan 2018",
    status: "Paid Today",
    price: 648,
  },
  // {
  //   num: "",
  //   subject: "",
  //   client: "",
  //   vatNum: "",
  //   dateCreated: "",
  //   status: "",
  //   price: ,
  // },
];
//001401	Design Works	Carlson Limited	87956621	15 Dec 2017	Paid	$887

function TablesPage() {
  return (
    <SiteWrapper>
      <Page.Content title="Tables">
        <El.Div className="box">
          <Card>
            <Table verticalAlign="center" responsive cards>
              <Table.Header>
                <Table.Row>
                  <Table.ColHeader>Name</Table.ColHeader>
                  <Table.ColHeader>Title</Table.ColHeader>
                  <Table.ColHeader>Email</Table.ColHeader>
                  <Table.ColHeader>Role</Table.ColHeader>
                  <Table.ColHeader className="w-1" />
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {table1Data.map((entry, index) => {
                  return (
                    <BasicTableRow
                      key={index}
                      name={entry.name}
                      title={entry.title}
                      email={entry.email}
                      role={entry.role}
                    />
                  );
                })}
              </Table.Body>
            </Table>
          </Card>
        </El.Div>

        <El.Div className="box">
          <Card>
            <Table verticalAlign="center" responsive cards striped>
              <Table.Header>
                <Table.Row>
                  <Table.ColHeader>Name</Table.ColHeader>
                  <Table.ColHeader>Title</Table.ColHeader>
                  <Table.ColHeader>Email</Table.ColHeader>
                  <Table.ColHeader>Role</Table.ColHeader>
                  <Table.ColHeader className="w-1" />
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {table2Data.map((entry, index) => {
                  return (
                    <BasicTableRow
                      key={index}
                      name={entry.name}
                      title={entry.title}
                      email={entry.email}
                      role={entry.role}
                    />
                  );
                })}
              </Table.Body>
            </Table>
          </Card>
        </El.Div>

        <El.Div className="box">
          <Card>
            <Table verticalAlign="center" responsive cards>
              <Table.Header>
                <Table.Row>
                  <Table.ColHeader>Name</Table.ColHeader>
                  <Table.ColHeader>Title</Table.ColHeader>
                  <Table.ColHeader>Role</Table.ColHeader>
                  <Table.ColHeader className="w-1" />
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {table3Data.map((entry, index) => {
                  return (
                    <AdvancedTableRow
                      key={index}
                      name={entry.name}
                      title={entry.title}
                      email={entry.email}
                      department={entry.department}
                      role={entry.role}
                      avatarUrl={entry.avatarUrl}
                      initials={entry.initials}
                      editElement={<El.A href="#">Edit</El.A>}
                    />
                  );
                })}
              </Table.Body>
            </Table>
          </Card>
        </El.Div>

        <El.Div className="box">
          <Card>
            <Table verticalAlign="center" responsive cards>
              <Table.Header>
                <Table.Row>
                  <Table.ColHeader>Name</Table.ColHeader>
                  <Table.ColHeader>Title</Table.ColHeader>
                  <Table.ColHeader>Role</Table.ColHeader>
                  <Table.ColHeader className="w-1" />
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {table3Data.map((entry, index) => {
                  const dropdownItems = [
                    { value: "Action", href: "#" },
                    { value: "Another action", href: "#" },
                  ];

                  const editElement = (
                    <Button.List className="flex-nowrap">
                      <Button as="a" href="#" color="white">
                        Edit
                      </Button>
                      <Dropdown
                        as="div"
                        toggle={false}
                        triggerAs={Button}
                        triggerContent="Actions"
                        color="white"
                        triggerProps={{
                          color: "white",
                          isDropdownToggle: true,
                        }}
                        itemsObject={dropdownItems}
                        position="bottom-end"
                      />
                    </Button.List>
                  );

                  return (
                    <AdvancedTableRow
                      key={index}
                      name={entry.name}
                      title={entry.title}
                      email={entry.email}
                      department={entry.department}
                      role={entry.role}
                      avatarUrl={entry.avatarUrl}
                      initials={entry.initials}
                      editElement={editElement}
                    />
                  );
                })}
              </Table.Body>
            </Table>
          </Card>
        </El.Div>

        <El.Div className="box">
          <Card>
            <Card.Header>
              <El.H3 className="card-title">Invoices</El.H3>
            </Card.Header>
            {/* <Card.Body> */}
            <Table verticalAlign="center" responsive cards>
              <Table.Header>
                <Table.Row>
                  <Table.ColHeader className="w-1">
                    <Form.Checkbox name="example-inline-checkboxes" />
                  </Table.ColHeader>
                  <Table.ColHeader className="w-1">No.</Table.ColHeader>
                  <Table.ColHeader>Invoice Subject</Table.ColHeader>
                  <Table.ColHeader>Client</Table.ColHeader>
                  <Table.ColHeader>Vat No.</Table.ColHeader>
                  <Table.ColHeader>Created</Table.ColHeader>
                  <Table.ColHeader>Status</Table.ColHeader>
                  <Table.ColHeader>Price</Table.ColHeader>
                  <Table.ColHeader className="w-1" />
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {invoiceData.map((entry, index) => {
                  const dropdownItems = [
                    { value: "Action", href: "#" },
                    { value: "Another action", href: "#" },
                  ];

                  const editElement = (
                    <Dropdown
                      as="span"
                      toggle={false}
                      triggerAs={Button}
                      triggerContent="Actions"
                      color="white"
                      triggerProps={{
                        color: "white",
                        size: "sm",
                        isDropdownToggle: true,
                      }}
                      itemsObject={dropdownItems}
                      position="bottom-end"
                    />
                  );

                  return (
                    <InvoiceTableRow
                      key={index}
                      num={entry.num}
                      subject={entry.subject}
                      client={entry.client}
                      vatNum={entry.vatNum}
                      dateCreated={entry.dateCreated}
                      status={entry.status}
                      price={entry.price}
                      editElement={editElement}
                    />
                  );
                })}
              </Table.Body>
            </Table>
            {/* </Card.Body> */}
            <Card.Footer className="d-flex align-items-center">
              <Text muted m={0}>
                Showing 1 to 8 of 16 entries
              </Text>
              <Pagination m={0} className="ml-auto">
                <Pagination.Item href="#" disabled>
                  <Icon name="chevron-left" />
                  prev
                </Pagination.Item>
                <Pagination.Item href="#" value="1" />
                <Pagination.Item href="#" value="2" active />
                <Pagination.Item href="#" value="3" />
                <Pagination.Item href="#" value="4" />
                <Pagination.Item href="#" value="5" />
                <Pagination.Item href="#">
                  next
                  <Icon name="chevron-right" />
                </Pagination.Item>
              </Pagination>
            </Card.Footer>
          </Card>
        </El.Div>
      </Page.Content>
    </SiteWrapper>
  );
}

export default TablesPage;
