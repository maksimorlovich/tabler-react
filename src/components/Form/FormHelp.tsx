import React, { useState, useRef } from "react";
import cn from "classnames";
import { TablerComponent, HTMLPropsWithoutRef } from "../../types";
import El from "../El/El";
import Tooltip from "../Tooltip";
import { Tag } from "../Tag";
import { Popper, PopperChildrenProps, Manager } from "react-popper";

export interface FormHelpProps
  extends TablerComponent,
    HTMLPropsWithoutRef<HTMLSpanElement> {
  position?: "top" | "bottom";
  message?: React.ReactNode;
}

function FormHelp({
  className,
  children,
  position = "top",
  message,
  ...rest
}: FormHelpProps) {
  const [isOpen, setIsOpen] = useState(false);
  const targetRef = useRef(null);

  const _handleButtonOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(s => !s);
  };

  const classes = cn("form-help", className);
  return (
    // <Tooltip content="Tooltip" placement="top">
    //   <Tag>Hover Me!</Tag>
    // </Tooltip>
    <Tooltip content={message} placement="auto" clickable arrow={true}>
      <El.Span
        ref={targetRef}
        className={classes}
        // dataContent={message}
        // dataToggle="popover"
        // dataPlacement={position}
        {...rest}
      >
        {children || "?"}
      </El.Span>
    </Tooltip>
  );

  return (
    <>
      <El.Span
        ref={targetRef}
        className={classes}
        // dataContent={message}
        // dataToggle="popover"
        // dataPlacement={position}
        {...rest}
      >
        {children || "?"}
      </El.Span>
    </>
  );

  // return (
  //   <Manager>
  //     {/* <Target /> */}
  //   </Manager>
  // )

  // return (
  //   <Popper placement={position}>
  //     {({ ref, style, placement }: PopperChildrenProps) => {
  //       return (
  //         isOpen && (
  //           <El.Div
  //             className={classes}
  //             data-placement={placement}
  //             style={{ ...style }}
  //             ref={ref}
  //             {...rest}
  //           >
  //             {children}
  //           </El.Div>
  //         )
  //       );
  //     }}
  //   </Popper>
  // );
}

export default FormHelp;
