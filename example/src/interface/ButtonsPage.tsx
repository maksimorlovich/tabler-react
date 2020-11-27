import * as React from "react";

import { Page, Grid, Card, Button } from "tabler-react";

import SiteWrapper from "../SiteWrapper";

const buttonColors: string[] = [
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
  "info",
  "light",
  "dark",
];

const extraButtonColors: string[] = [
  "blue",
  "azure",
  "indigo",
  "purple",
  "pink",
  "red",
  "orange",
  "yellow",
  "lime",
  "green",
  "teal",
  "cyan",
  "gray",
];

const capitalize = (s: string) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};

function ButtonsPage() {
  return (
    <SiteWrapper>
      <Page.Content title="Buttons">
        <Grid.Row>
          <Grid.Col width={12}>
            <Card title="Standard Buttons">
              <Card.Body>
                <Grid.Row alignItems="center" className="row-sm">
                  <Grid.Col
                    width={12}
                    xl={2}
                    mb={3}
                    className="font-weight-semibold"
                  >
                    Normal
                  </Grid.Col>
                  {buttonColors.map((color, index) => {
                    return (
                      <Grid.Col
                        key={index}
                        width={6}
                        sm={4}
                        md={2}
                        className="col-xl"
                        mb={3}
                      >
                        <Button as="a" href="#" color={color} block>
                          {capitalize(color)}
                        </Button>
                      </Grid.Col>
                    );
                  })}
                  <Grid.Col width={6} sm={4} md={2} className="col-xl" mb={3}>
                    <Button as="a" href="#" block link>
                      Link
                    </Button>
                  </Grid.Col>
                </Grid.Row>
                <Grid.Row alignItems="center" className="row-sm" mt={3}>
                  <Grid.Col
                    width={12}
                    xl={2}
                    mb={3}
                    className="font-weight-semibold"
                  >
                    Active state
                  </Grid.Col>
                  {buttonColors.map((color, index) => {
                    return (
                      <Grid.Col
                        key={index}
                        width={6}
                        sm={4}
                        md={2}
                        className="col-xl"
                        mb={3}
                      >
                        <Button as="a" href="#" color={color} block active>
                          {capitalize(color)}
                        </Button>
                      </Grid.Col>
                    );
                  })}
                  <Grid.Col width={6} sm={4} md={2} className="col-xl" mb={3}>
                    <Button as="a" href="#" block link active>
                      Link
                    </Button>
                  </Grid.Col>
                </Grid.Row>
                <Grid.Row alignItems="center" className="row-sm" mt={3}>
                  <Grid.Col
                    width={12}
                    xl={2}
                    mb={3}
                    className="font-weight-semibold"
                  >
                    Disabled
                  </Grid.Col>
                  {buttonColors.map((color, index) => {
                    return (
                      <Grid.Col
                        key={index}
                        width={6}
                        sm={4}
                        md={2}
                        className="col-xl"
                        mb={3}
                      >
                        <Button as="a" href="#" color={color} block disabled>
                          {capitalize(color)}
                        </Button>
                      </Grid.Col>
                    );
                  })}
                  <Grid.Col width={6} sm={4} md={2} className="col-xl" mb={3}>
                    <Button as="a" href="#" block link disabled>
                      Link
                    </Button>
                  </Grid.Col>
                </Grid.Row>
              </Card.Body>
            </Card>

            <Card title="Outline Buttons">
              <Card.Body>
                <Grid.Row alignItems="center" className="row-sm">
                  <Grid.Col
                    width={12}
                    xl={2}
                    mb={3}
                    className="font-weight-semibold"
                  >
                    Normal
                  </Grid.Col>
                  {buttonColors.map((color, index) => {
                    return (
                      <Grid.Col
                        key={index}
                        width={6}
                        sm={4}
                        md={2}
                        className="col-xl"
                        mb={3}
                      >
                        <Button as="a" href="#" color={color} block outline>
                          {capitalize(color)}
                        </Button>
                      </Grid.Col>
                    );
                  })}
                </Grid.Row>
                <Grid.Row alignItems="center" className="row-sm" mt={3}>
                  <Grid.Col
                    width={12}
                    xl={2}
                    mb={3}
                    className="font-weight-semibold"
                  >
                    Active state
                  </Grid.Col>
                  {buttonColors.map((color, index) => {
                    return (
                      <Grid.Col
                        key={index}
                        width={6}
                        sm={4}
                        md={2}
                        className="col-xl"
                        mb={3}
                      >
                        <Button
                          as="a"
                          href="#"
                          color={color}
                          block
                          outline
                          active
                        >
                          {capitalize(color)}
                        </Button>
                      </Grid.Col>
                    );
                  })}
                </Grid.Row>
                <Grid.Row alignItems="center" className="row-sm" mt={3}>
                  <Grid.Col
                    width={12}
                    xl={2}
                    mb={3}
                    className="font-weight-semibold"
                  >
                    Disabled
                  </Grid.Col>
                  {buttonColors.map((color, index) => {
                    return (
                      <Grid.Col
                        key={index}
                        width={6}
                        sm={4}
                        md={2}
                        className="col-xl"
                        mb={3}
                      >
                        <Button
                          as="a"
                          href="#"
                          color={color}
                          block
                          outline
                          disabled
                        >
                          {capitalize(color)}
                        </Button>
                      </Grid.Col>
                    );
                  })}
                </Grid.Row>
              </Card.Body>
            </Card>

            <Card title="Ghost Buttons">
              <Card.Body>
                <Grid.Row alignItems="center" className="row-sm">
                  <Grid.Col
                    width={12}
                    xl={2}
                    mb={3}
                    className="font-weight-semibold"
                  >
                    Normal
                  </Grid.Col>
                  {buttonColors.map((color, index) => {
                    return (
                      <Grid.Col
                        key={index}
                        width={6}
                        sm={4}
                        md={2}
                        className="col-xl"
                        mb={3}
                      >
                        <Button as="a" href="#" color={color} block ghost>
                          {capitalize(color)}
                        </Button>
                      </Grid.Col>
                    );
                  })}
                </Grid.Row>
                <Grid.Row alignItems="center" className="row-sm" mt={3}>
                  <Grid.Col
                    width={12}
                    xl={2}
                    mb={3}
                    className="font-weight-semibold"
                  >
                    Active state
                  </Grid.Col>
                  {buttonColors.map((color, index) => {
                    return (
                      <Grid.Col
                        key={index}
                        width={6}
                        sm={4}
                        md={2}
                        className="col-xl"
                        mb={3}
                      >
                        <Button
                          as="a"
                          href="#"
                          color={color}
                          block
                          ghost
                          active
                        >
                          {capitalize(color)}
                        </Button>
                      </Grid.Col>
                    );
                  })}
                </Grid.Row>
                <Grid.Row alignItems="center" className="row-sm" mt={3}>
                  <Grid.Col
                    width={12}
                    xl={2}
                    mb={3}
                    className="font-weight-semibold"
                  >
                    Disabled
                  </Grid.Col>
                  {buttonColors.map((color, index) => {
                    return (
                      <Grid.Col
                        key={index}
                        width={6}
                        sm={4}
                        md={2}
                        className="col-xl"
                        mb={3}
                      >
                        <Button
                          as="a"
                          href="#"
                          color={color}
                          block
                          ghost
                          disabled
                        >
                          {capitalize(color)}
                        </Button>
                      </Grid.Col>
                    );
                  })}
                </Grid.Row>
              </Card.Body>
            </Card>

            <Card title="Square Buttons">
              <Card.Body>
                <Grid.Row alignItems="center" className="row-sm">
                  <Grid.Col
                    width={12}
                    xl={2}
                    mb={3}
                    className="font-weight-semibold"
                  >
                    Normal
                  </Grid.Col>
                  {buttonColors.map((color, index) => {
                    return (
                      <Grid.Col
                        key={index}
                        width={6}
                        sm={4}
                        md={2}
                        className="col-xl"
                        mb={3}
                      >
                        <Button as="a" href="#" color={color} block square>
                          {capitalize(color)}
                        </Button>
                      </Grid.Col>
                    );
                  })}
                </Grid.Row>
              </Card.Body>
            </Card>

            <Card title="Pill Buttons">
              <Card.Body>
                <Grid.Row alignItems="center" className="row-sm">
                  <Grid.Col
                    width={12}
                    xl={2}
                    mb={3}
                    className="font-weight-semibold"
                  >
                    Normal
                  </Grid.Col>
                  {buttonColors.map((color, index) => {
                    return (
                      <Grid.Col
                        key={index}
                        width={6}
                        sm={4}
                        md={2}
                        className="col-xl"
                        mb={3}
                      >
                        <Button as="a" href="#" color={color} block pill>
                          {capitalize(color)}
                        </Button>
                      </Grid.Col>
                    );
                  })}
                </Grid.Row>
              </Card.Body>
            </Card>

            <Card title="Extra colors">
              <Card.Body>
                <Grid.Row alignItems="center" className="row-sm">
                  {extraButtonColors.map((color, index) => {
                    return (
                      <Grid.Col
                        key={index}
                        width={6}
                        sm={4}
                        md={2}
                        xlAuto
                        mb={3}
                      >
                        <Button as="a" href="#" color={color} block>
                          {capitalize(color)}
                        </Button>
                      </Grid.Col>
                    );
                  })}
                </Grid.Row>
              </Card.Body>
            </Card>
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  );
}

export default ButtonsPage;
