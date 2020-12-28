import React from "react";
import cn from "classnames";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";

export interface ModalBodyProps
  extends ELProps,
    HTMLPropsWithoutRef<HTMLDivElement> {}

function ModalBody({ className, children, ...props }: ModalBodyProps) {
  const classes = cn("modal-body", className);
  return (
    <El.Div className={classes} {...props}>
      {children}
    </El.Div>
  );
}

export default ModalBody;
