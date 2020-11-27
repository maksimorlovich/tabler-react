import * as React from "react";

import { Page } from "tabler-react";

import SiteWrapper from "../SiteWrapper";

function EmptyPage() {
  return (
    <SiteWrapper>
      <Page.Content title="Empty page" />
    </SiteWrapper>
  );
}

export default EmptyPage;
