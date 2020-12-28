import React, { useContext } from "react";
import cn from "classnames";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";
import { Button } from "../Button";

import ModalContext from "./ModalContext";

export interface ModalHeaderProps
  extends ELProps,
    HTMLPropsWithoutRef<HTMLDivElement> {
  title?: string;
  closeButton?: boolean;
}

function ModalHeader({
  className,
  children,
  title = "",
  closeButton = false,
  ...rest
}: ModalHeaderProps) {
  const classes = cn("modal-header", className);

  const context = useContext(ModalContext);

  return (
    <El.Div className={classes} {...rest}>
      {!children && title && <El.H5 className="modal-title">{title}</El.H5>}
      {!children && closeButton && (
        <Button
          ignoreBtn
          icon="x"
          className="close"
          onClick={context.onDismiss}
        />
      )}
      {children}
    </El.Div>
  );
}

export default ModalHeader;
