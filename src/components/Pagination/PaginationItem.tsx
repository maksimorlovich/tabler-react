import React, { forwardRef } from "react";
import cn from "classnames";
import { TablerComponent } from "../../types";
import El from "../El/El";

export interface PaginationItemProps extends TablerComponent {
  as?: React.ElementType;
  linkAs?: React.ElementType;
  href?: string;
  value?: string;
  active?: boolean;
  disabled?: boolean;
}

export const PaginationItem: React.RefForwardingComponent<
  any,
  PaginationItemProps
> = forwardRef(function(
  {
    children,
    className,
    as = El.Li,
    linkAs = El.A,
    href,
    value,
    active,
    disabled,
  }: PaginationItemProps,
  ref: React.Ref<any>
) {
  const classes = cn(
    {
      "page-item": true,
      disabled: disabled,
      active: active,
    },
    className
  );

  const Component = as;
  const LinkComponent = linkAs;

  return (
    <Component className={classes}>
      <LinkComponent className="page-link" href={href}>
        {value || children}
      </LinkComponent>
    </Component>
  );
});

/** @component */
export default PaginationItem;
