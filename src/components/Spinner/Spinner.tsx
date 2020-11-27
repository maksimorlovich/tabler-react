import * as React from "react";
import cn from "classnames";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";

export interface SpinnerProps
  extends ELProps,
    HTMLPropsWithoutRef<HTMLDivElement> {
  small?: boolean;
  grow?: boolean;
}

function Spinner({ className, children, small, grow, ...rest }: SpinnerProps) {
  const classes = cn(
    {
      "spinner-grow": grow,
      "spinner-border": !grow,
      "spinner-border-sm": !grow && small,
    },
    className
  );
  return (
    <El.Div className={classes} {...rest}>
      {children}
    </El.Div>
  );
}

export default Spinner;
