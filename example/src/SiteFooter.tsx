import React from "react";

import { Site, List, Button } from "tabler-react";

const SiteFooter = function() {
  return (
    <Site.Footer
      copyright={
        <React.Fragment>
          Copyright © 2019
          <a href="."> Tabler-react</a>. Theme by
          <a
            href="https://codecalm.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            codecalm.net
          </a>{" "}
          All rights reserved.
        </React.Fragment>
      }
      nav={
        <React.Fragment>
          <List inline className="list-inline-dots mb-0">
            <List.Item inline>
              <a href="./docs/index.html">Documentation</a>
            </List.Item>
            <List.Item inline>
              <a href="./faq.html">FAQ</a>
            </List.Item>
            <List.Item inline>
              <Button
                href="https://github.com/tabler/tabler-react"
                size="sm"
                outline
                color="primary"
                RootComponent="a"
              >
                Source code
              </Button>
            </List.Item>
          </List>
        </React.Fragment>
      }
      transparent={true}
    />
  );
};

export default SiteFooter;
