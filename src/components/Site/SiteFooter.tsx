import * as React from "react";
import cn from "classnames";

import Container from "../Container";
import Grid from "../Grid";
import List from "../List";

export interface SiteFooterProps {
  /**
   * An array of the 8 links displayed in the first footer bar
   */
  links?: Array<React.ReactNode>;
  /**
   * The text block displayed next to the links
   */
  note?: string;
  /**
   * The content of the very bottom copyright notice space
   */
  copyright?: React.ReactNode;
  /**
   * The content of the very bottom nav space
   */
  nav?: React.ReactNode;
  /**
   * Should the nav space be transparent?
   */
  transparent?: boolean;
}

/**
 * The footer of your website
 */
const SiteFooter = ({
  links,
  note,
  copyright,
  nav,
  transparent,
}: SiteFooterProps) => {
  const classes = cn({
    footer: true,
    "footer-transparent": transparent,
  });
  return (
    <React.Fragment>
      {(links || note) && (
        <div className={classes}>
          <Container>
            <Grid.Row>
              <Grid.Col lg={8}>
                <Grid.Row>
                  {links && (
                    <React.Fragment>
                      <Grid.Col width={6} md={3}>
                        <List unstyled={true} className="mb-0">
                          <List.Item>{links[0]}</List.Item>
                          <List.Item>{links[1]}</List.Item>
                        </List>
                      </Grid.Col>
                      <Grid.Col width={6} md={3}>
                        <List unstyled={true} className="mb-0">
                          <List.Item>{links[2]}</List.Item>
                          <List.Item>{links[3]}</List.Item>
                        </List>
                      </Grid.Col>
                      <Grid.Col width={6} md={3}>
                        <List unstyled={true} className="mb-0">
                          <List.Item>{links[4]}</List.Item>
                          <List.Item>{links[5]}</List.Item>
                        </List>
                      </Grid.Col>
                      <Grid.Col width={6} md={3}>
                        <List unstyled={true} className="mb-0">
                          <List.Item>{links[6]}</List.Item>
                          <List.Item>{links[7]}</List.Item>
                        </List>
                      </Grid.Col>
                    </React.Fragment>
                  )}
                </Grid.Row>
              </Grid.Col>
              <Grid.Col lg={4} className="mt-4 mt-lg-0">
                {note}
              </Grid.Col>
            </Grid.Row>
          </Container>
        </div>
      )}
      {(nav || copyright) && (
        <footer className={classes}>
          <Container>
            <Grid.Row className="text-center align-items-center flex-row-reverse">
              <Grid.Col className="col-lg-auto ml-lg-auto">{nav}</Grid.Col>
              <Grid.Col width={12} lgAuto className="mt-3 mt-lg-0 text-center">
                {copyright}
              </Grid.Col>
            </Grid.Row>
          </Container>
        </footer>
      )}
    </React.Fragment>
  );
};

export default SiteFooter;
