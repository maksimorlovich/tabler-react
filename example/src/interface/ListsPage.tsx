import * as React from "react";

import {
  Page,
  Card,
  Form,
  El,
  Text,
  Icon,
  Grid,
  Avatar,
  Badge,
  List,
} from "tabler-react";

import SiteWrapper from "../SiteWrapper";

const list1Data = [
  {
    name: "Paweł Kuna",
    avatarUrl: "./demo/faces/female/25.jpg",
    initials: "PK",
    date: "2 days ago",
    badge: "red",
    comment: "Change deprecated html tags to text decoration classes (#29604)",
  },
  {
    name: "Jeffie Lewzey",
    initials: "JL",
    date: "3 days ago",
    badge: "x",
    comment: "justify-content:between ⇒ justify-content:space-between (#29734)",
  },
  {
    name: "Mallory Hulme",
    avatarUrl: "./demo/faces/female/26.jpg",
    initials: "MH",
    date: "today",
    comment: "Update change-version.js (#29736)",
  },
  {
    name: "Dunn Slane",
    avatarUrl: "./demo/faces/male/25.jpg",
    initials: "DS",
    date: "6 days ago",
    badge: "green",
    comment: "Regenerate package-lock.json (#29730)",
  },
  {
    name: "Emmy Levet",
    avatarUrl: "./demo/faces/female/27.jpg",
    initials: "EL",
    date: "3 days ago",
    badge: "red",
    comment: "Some minor text tweaks",
  },
  {
    name: "Maryjo Lebarree",
    avatarUrl: "./demo/faces/female/28.jpg",
    initials: "ML",
    date: "2 days ago",
    badge: "warning",
    comment: "Link to versioned docs",
  },
  {
    name: "Egan Poetz",
    initials: "EP",
    date: "4 days ago",
    badge: "x",
    comment: "Copywriting edits",
  },
  {
    name: "Kellie Skingley",
    avatarUrl: "./demo/faces/female/29.jpg",
    initials: "KS",
    date: "6 days ago",
    badge: "warning",
    comment: "Enable RFS for font resizing",
  },
  {
    name: "Christabel Charlwood",
    avatarUrl: "./demo/faces/female/30.jpg",
    initials: "CC",
    date: "today",
    badge: "x",
  },
  {
    name: "Haskel Shelper",
    initials: "HS",
    date: "yesterday",
    badge: "x",
  },
];

function ListsPage() {
  return (
    <SiteWrapper>
      <Page.Content title="Lists">
        <Grid.Row>
          <Grid.Col md={6}>
            <Card>
              <Card.Header>
                <El.H3 className="card-title">Top users</El.H3>
              </Card.Header>
              <Card.Body>
                <Grid.Row>
                  {list1Data.map((entry, index) => {
                    return (
                      <Grid.Col
                        key={index}
                        width={6}
                        ignoreCol
                        className="row row-sm mb-3 align-items-center"
                      >
                        <El.A href="#" className="col-auto">
                          <Avatar imageURL={entry.avatarUrl}>
                            {entry.badge && <Badge color={entry.badge} />}
                            {entry.initials}
                          </Avatar>
                        </El.A>
                        <Grid.Col className="text-truncate">
                          <Text
                            as="a"
                            href="#"
                            truncate
                            className="d-block text-body"
                          >
                            {entry.name}
                          </Text>
                          <Text as="small" muted truncate className="d-block">
                            {entry.date}
                          </Text>
                        </Grid.Col>
                      </Grid.Col>
                    );
                  })}
                </Grid.Row>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header>
                <El.H3 className="card-title">Contacts</El.H3>
              </Card.Header>
              <List as="div" className="list-row">
                {list1Data
                  .filter(entry => entry.comment)
                  .map((entry, index) => {
                    return (
                      <List.Item key={index}>
                        <El.Div>
                          <Form.Checkbox
                            checked={index === 2 || index === 4 || index === 5}
                          />
                        </El.Div>
                        <El.A href="#" className="col-auto">
                          <Avatar imageURL={entry.avatarUrl}>
                            {entry.initials}
                          </Avatar>
                        </El.A>
                        <El.Div className="text-truncate">
                          <Text
                            as="a"
                            href="#"
                            truncate
                            className="d-block text-body"
                          >
                            {entry.name}
                          </Text>
                          <Text as="small" muted truncate className="d-block">
                            {entry.comment}
                          </Text>
                        </El.Div>
                      </List.Item>
                    );
                  })}
              </List>
            </Card>
          </Grid.Col>

          <Grid.Col md={6}>
            <Card>
              <Card.Header>
                <El.H3 className="card-title">Last commits</El.H3>
              </Card.Header>
              <List hoverable as="div" className="list-row">
                {list1Data
                  .filter(entry => entry.comment)
                  .map((entry, index) => {
                    return (
                      <List.Item key={index}>
                        <El.Div>
                          <Badge color={entry.badge || "x"} />
                        </El.Div>
                        <El.A href="#" className="col-auto">
                          <Avatar imageURL={entry.avatarUrl}>
                            {entry.initials}
                          </Avatar>
                        </El.A>
                        <El.Div className="text-truncate">
                          <Text
                            as="a"
                            href="#"
                            truncate
                            className="d-block text-body"
                          >
                            {entry.name}
                          </Text>
                          <Text as="small" muted truncate className="d-block">
                            {entry.comment}
                          </Text>
                        </El.Div>
                        <El.A
                          href="#"
                          className="list-item-actions text-yellow"
                        >
                          <Icon name="star" color="red" />
                        </El.A>
                      </List.Item>
                    );
                  })}
              </List>
            </Card>
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  );
}

export default ListsPage;
