import React, { useContext } from "react";
import cn from "classnames";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";
import { Button } from "../Button";
import ModalContext from "./ModalContext";

export interface ModalFooterProps
  extends ELProps,
    HTMLPropsWithoutRef<HTMLDivElement> {
  closeButton?: boolean;
}

function ModalFooter({
  className,
  children,
  closeButton = true,
  ...rest
}: ModalFooterProps) {
  const classes = cn("modal-footer", className);

  const context = useContext(ModalContext);

  return (
    <El.Div className={classes} {...rest}>
      {!children && closeButton && (
        <Button color="white" className="mr-auto" onClick={context.onDismiss}>
          Close
        </Button>
      )}
      {children}
    </El.Div>
  );
}

export default ModalFooter;
