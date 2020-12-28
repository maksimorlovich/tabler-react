import React from "react";
import ReactDOM from "react-dom";
import cn from "classnames";
import ModalContext from "./ModalContext";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";
import { colors } from "../../colors";
import { Button } from "../Button";
import scrollBarSize from "../../helpers/scrollbarSize";

export interface ModalProps
  extends ELProps,
    HTMLPropsWithoutRef<HTMLDivElement> {
  /**
   * Show/hide the modal
   */
  show?: boolean;
  /**
   * Modal dismiss handler
   */
  onDismiss: () => void;
  /**
   * Size of the modal: small, large, full-width, automatic
   */
  modalSize?: "sm" | "lg" | "full-width" | "default";
  /**
   * Scrollable content
   */
  scrollable?: boolean;
  /**
   * Should there be a close button, when modal header is not present
   */
  closeButton?: boolean;
  /**
   * Color of the status bar, if any
   */
  statusBarColor?: colors;
}

interface State {
  originalPaddingRight: number;
  newPaddingRight: number;
}

class Modal extends React.Component<ModalProps, State> {
  constructor(props: ModalProps) {
    super(props);

    const container = document.body;
    const originalPadding =
      parseInt((container.style.paddingRight || "").replace(/\D/g, "")) || 0;

    this.state = {
      originalPaddingRight: originalPadding,
      newPaddingRight: originalPadding + scrollBarSize(),
    };
  }

  handleDismiss = () => {
    const container = document.body;
    container.classList.remove("modal-open");
    container.style.paddingRight = `${this.state.originalPaddingRight}px`;
    this.props.onDismiss();
  };

  componentWillUnmount() {
    this.handleDismiss();
  }

  // shouldComponentUpdate(nextProps: ModalProps, nextState: State) {
  //   return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  // }

  render() {
    if (!this.props.show) {
      return null;
    }

    const {
      className,
      children,
      show,
      onDismiss,
      modalSize = "default",
      scrollable,
      closeButton = false,
      statusBarColor,
      ...props
    } = this.props;

    const classes = cn(
      {
        modal: true,
        "modal-blur": true,
        fade: true,
        show: show,
        "d-none": !show,
        "d-block": show,
      },
      className
    );

    const dialogClasses = cn({
      "modal-dialog": true,
      "modal-dialog-centered": true,
      "modal-dialog-scrollable": scrollable,
      [`modal-${modalSize}`]: modalSize !== "default",
    });

    const container = document.body;
    container.style.paddingRight = `${this.state.newPaddingRight}px`;
    container.classList.add("modal-open");

    const modalContext = {
      onDismiss: this.handleDismiss,
    };

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      // Must click outside the modal to dismiss
      if (e.target !== e.currentTarget) {
        return;
      }

      this.handleDismiss();
    };

    const statusBarStyle = {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "2px",
      background: "#656d77",
      borderRadius: "3px 3px 0 0",
    };

    const backdropElement: JSX.Element = (
      <div className="modal-backdrop fade show" />
    );
    const dialogElement: JSX.Element = (
      <El.Div
        className={classes}
        style={{ paddingRight: `${this.state.newPaddingRight}px` }}
        aria-modal="true"
        role="dialog"
        onClick={handleClick}
      >
        <El.Div className={dialogClasses} role="document">
          <El.Div className="modal-content">
            {closeButton && (
              <Button
                ignoreBtn
                icon="x"
                className="close"
                onClick={this.handleDismiss}
              />
            )}
            {statusBarColor && (
              <El.Div
                style={statusBarStyle}
                className={`modal-status bg-${statusBarColor}`}
              />
            )}
            {children}
          </El.Div>
        </El.Div>
      </El.Div>
    );

    return (
      <ModalContext.Provider value={modalContext}>
        {ReactDOM.createPortal(
          <React.Fragment>
            {backdropElement}
            {dialogElement}
          </React.Fragment>,
          container
        )}
      </ModalContext.Provider>
    );
  }
}

/** @component */
export default Modal;
