import React, { useState } from "react";
import cn from "classnames";
import { Manager, Reference, Popper } from "react-popper";
import { PopperChildrenProps, ReferenceChildrenProps } from "react-popper";
import "./Tooltip.css";

export interface TooltipProps {
  /**
   * The reference element which the Tooltip will be based on.
   */
  children?: React.ReactElement<any>;
  /**
   * Any additional classNames for the Tooltip.
   */
  className?: string;
  /**
   * This is the text content of the Tooltip.
   */
  content: string | React.ReactNode;
  /**
   * This is the placement of the Tooltip (top, bottom, left, right).
   */
  placement?: any;
  type?: "link";
  arrow?: boolean;
  clickable?: boolean;
}

const Tooltip = function({
  className,
  children,
  placement,
  content,
  arrow = true,
  clickable = false,
}: TooltipProps) {
  const [isShown, setIsShown] = useState(false);

  const _handleTriggerOnMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsShown(true);
  };

  const _handleTriggerOnMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsShown(false);
  };

  const _handleTriggerOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsShown(s => !s);
  };

  const classes = cn(
    "popover",
    placement && "bs-popover-" + placement,
    "show",
    // "bg-red",
    // "fade",
    className
  );

  const arrowClasses = cn(
    "arrow",
    placement === "top" || placement === "bottom"
      ? "tbr-arrow-vertical"
      : "tbr-arrow-horizontal"
  );

  return (
    <Manager>
      <Reference>
        {({ ref }: ReferenceChildrenProps) => {
          const referenceProps = {
            ref: ref,
            onClick: clickable ? _handleTriggerOnClick : null,
            onMouseEnter: !clickable ? _handleTriggerOnMouseEnter : null,
            onMouseLeave: !clickable ? _handleTriggerOnMouseLeave : null,
          };
          return (
            typeof children !== "undefined" &&
            React.cloneElement(children, referenceProps)
          );
        }}
      </Reference>
      {isShown && (
        <Popper
          placement={placement}
          eventsEnabled={true}
          positionFixed={false}
        >
          {({
            ref,
            style, //: { opacity, ...style },
            placement,
            arrowProps,
          }: PopperChildrenProps) => {
            return (
              <div
                className={classes}
                data-placement={placement}
                style={style}
                ref={ref}
              >
                {arrow && (
                  <div
                    className="popover-arrow"
                    ref={arrowProps.ref}
                    data-placement={placement}
                    style={arrowProps.style}
                  />
                )}
                <div className="popover-body">{content}</div>
              </div>
            );
          }}
        </Popper>
      )}
    </Manager>
  );
};

export default Tooltip;
