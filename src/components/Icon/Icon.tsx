import React, { HTMLAttributes } from "react";
import cn from "classnames";

export interface IconProps extends HTMLAttributes<HTMLElement> {
  /**
   * Should this icon be rendered within an <a> tag
   */
  link?: boolean;
  /**
   * The icon prefix
   */
  prefix?: string;
  /**
   * The icon name
   */
  name: string;
  isAriaHidden?: boolean;
  /**
   * Use the built-in payment icon set
   */
  payment?: boolean;
  /**
   * Use the built-in flag icon set
   */
  flag?: boolean;
  /**
   * A thinner version of the icon
   */
  thin?: boolean;
}

/**
 * Display an icon.
 * Uses the included feathers icon set by default but you can add your own
 */
function Icon({
  prefix: prefixFromProps = "fe",
  name,
  className,
  link,
  isAriaHidden,
  payment,
  flag,
  thin,
  ...rest
}: IconProps) {
  const isFE = prefixFromProps === "fe";
  const prefix = (payment && "payment") || (flag && "flag") || prefixFromProps;
  const classes = cn(
    {
      icon: isFE,
      [prefix]: true,
      [`${prefix}-${name}`]: true,
      "icon-thin": thin,
    },
    className
  );
  const extraProps = isAriaHidden
    ? {
        "aria-hidden": true,
      }
    : null;

  return !link ? (
    <i className={classes} {...rest} />
  ) : (
    <a className="icon" {...extraProps} {...rest}>
      <i className={classes} />
    </a>
  );
}

/** @component */
export default Icon;
