import React, { forwardRef } from "react";
import cn from "classnames";
import Icon from "../Icon";
import { TablerComponent } from "../../types";
import El from "../El/El";
import NavLinkTitle from "./NavLinkTitle";

export interface NavLinkProps extends TablerComponent {
  as?: React.ElementType;
  /**
   * @deprecated use 'as'
   */
  RootComponent?: React.ElementType;
  active?: boolean;
  iconPrefix?: string;
  icon?: string;
  to?: string;
  hasSubNav?: boolean;
  rootRef?: any;
  useExact?: boolean;
  title?: React.ReactNode;
  collapsed?: boolean;
  isToggle?: boolean;
  subitem?: boolean;
  [key: string]: any;
}

export const NavLink = forwardRef(function(
  {
    children,
    className,
    RootComponent,
    as = El.A,
    iconPrefix = "fe",
    icon,
    active = false,
    hasSubNav,
    rootRef,
    title,
    collapsed,
    isToggle,
    subitem = false,
    ...props
  }: NavLinkProps,
  ref: React.Ref<any>
) {
  const classes = cn(
    {
      "nav-link": !subitem,
      "dropdown-toggle": isToggle,
      "dropdown-item": subitem,
      active: active,
      collapse: isToggle && collapsed,
      show: isToggle && collapsed,
    },
    className
  );

  const Component = RootComponent || as;

  return (
    <Component
      className={classes}
      ref={rootRef || ref}
      data-toggle={isToggle ? "collapse" : undefined}
      aria-expanded={isToggle ? !collapsed : undefined}
      {...props}
    >
      {icon && (
        <React.Fragment>
          <Icon prefix={iconPrefix} name={icon} />{" "}
        </React.Fragment>
      )}
      {title && <NavLinkTitle>{title}</NavLinkTitle>}
      {children}
    </Component>
  );
});

export default NavLink;
