import React, { MouseEventHandler, useContext } from "react";
import { HTMLPropsWithoutRef } from "../../types";
import Button, { ButtonProps } from "../Button/Button";
import ModalContext from "./ModalContext";

interface Props<T> {
  /**
   * Default button click handler, dismisses the modal immediately.
   */
  onClick?: MouseEventHandler<T>;
  /**
   * Custom click handler expects a promise true/false whether to dismiss the modal. Useful for async validation, etc.
   */
  onClickDismiss?: () => Promise<boolean>;
}

export interface ModalButtonProps<AS extends HTMLElement = HTMLButtonElement>
  extends Props<AS>,
    ButtonProps<AS>,
    Omit<HTMLPropsWithoutRef<AS>, "as" | "color" | "size"> {}

function ModalButton<AS extends HTMLElement = HTMLButtonElement>({
  onClick,
  onClickDismiss,
  ...rest
}: ModalButtonProps<AS>) {
  const context = useContext(ModalContext);

  const clickHandler = async (event: React.MouseEvent<AS, MouseEvent>) => {
    let dismiss = true;
    if (onClick) {
      onClick(event);
    } else if (onClickDismiss) {
      dismiss = await onClickDismiss();
    }

    if (dismiss) {
      context.onDismiss();
    }
  };

  return <Button onClick={clickHandler} {...rest} />;
}

export default ModalButton;
