import * as React from "react";
import cn from "classnames";
import El from "../El/El";
import { ELProps } from "../../helpers/makeHtmlElement";

interface PageTitleProps extends ELProps {}

function PageTitle({ className, children, ...rest }: PageTitleProps) {
  const classes = cn("page-title-box", className);
  return (
    <El.Div className={classes} {...rest}>
      <El.H2 className="page-title">{children}</El.H2>
    </El.Div>
  );
}

export default PageTitle;
