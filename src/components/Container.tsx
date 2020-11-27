import React from "react";
import cn from "classnames";

import "./Container.css";
import { ELProps } from "../helpers/makeHtmlElement";
import El from "./El/El";
import { HTMLPropsWithoutRef } from "../types";

export interface ContainerProps
  extends ELProps,
    HTMLPropsWithoutRef<HTMLDivElement> {
  expand?: "sm" | "md" | "lg" | "xl" | "fluid";
}

function Container({ children, expand, ...rest }: ContainerProps) {
  const classes = cn({
    [`container`]: !expand,
    [`container-${expand}`]: expand,
  });
  return (
    <El.Div classNames={classes} {...rest}>
      {children}
    </El.Div>
  );
}

export default Container;
