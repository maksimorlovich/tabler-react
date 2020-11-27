import * as React from "react";
import cn from "classnames";

import Container from "../Container";
import Nav from "../Nav";
import { NavItemProps } from "../Nav/NavItem";
import El from "../El";
import { NavBarProps } from "../Nav/NavBar";
import SiteLogo from "../Site/SiteLogo";
import { string } from "prop-types";
import { Props as NotificationTrayProps } from "../Notification/NotificationTray";
import { Props as AccountDropdownProps } from "../AccountDropdown/AccountDropdown";
import AccountDropdown from "../AccountDropdown";
import Notification from "../Notification";

export interface SiteNavProps extends NavBarProps {
  children?: React.ReactNode;
  items?: React.ReactNode;
  itemsObjects?: NavItemProps[];
  /**
   * Display a search form to the right of the nav items
   */
  withSearchForm?: boolean;
  /**
   * Provide your own component to replace the search form
   */
  rightColumnComponent?: React.ReactNode;
  /**
   * Toggle the collapsed state of the nav
   */
  collapse?: boolean;
  routerContextComponentType?: React.ElementType;
  logoURL?: string;

  /**
   * Show mobile menu?
   */
  showMobileMenu?: boolean;

  /**
   * Side navbar?
   */
  isSide?: boolean;

  /**
   * Condensed navbar?
   */
  isCondensed?: boolean;

  notificationsTray?: NotificationTrayProps;
  accountDropdown?: AccountDropdownProps;
}

const SiteNav = ({
  children,
  items,
  itemsObjects,
  withSearchForm = true,
  rightColumnComponent,
  collapse = false,
  routerContextComponentType,
  logoURL,
  showMobileMenu: showMobileMenuParam = false,
  isSide = false,
  isCondensed = false,
  notificationsTray: notificationsTrayFromProps,
  accountDropdown: accountDropdownFromProps,
  ...rest
}: SiteNavProps) => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // console.log('redraw ' + showMobileMenu + ' ' + showMobileMenuParam);

  const _handleMenuButtonOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowMobileMenu(s => !s);
  };

  // const classes = cn({ collapse: collapse });
  const classes = cn({
    collapse: true,
    "navbar-collapse": true,
    show: showMobileMenuParam,
  });

  const _innerNav = (
    <Nav
      className="navbar-nav"
      items={items}
      itemsObjects={itemsObjects}
      routerContextComponentType={routerContextComponentType}
    />
  );

  const _children = (
    <React.Fragment>
      {(items || itemsObjects) &&
        (isSide ? <El.Div className={classes}>{_innerNav}</El.Div> : _innerNav)}
      {children}
      {!isSide && (
        <El.Div className="my-2 my-md-0 flex-grow-1 flex-md-grow-0 order-first order-md-last">
          {rightColumnComponent}
        </El.Div>
      )}
    </React.Fragment>
  );

  if (isSide) {
    return (
      <Nav.Bar expand="lg" isSide={true} side={rest.side} {...rest}>
        <Container>
          <El.Button
            className="navbar-toggler"
            onClick={_handleMenuButtonOnClick}
            aria-expanded={showMobileMenu}
          >
            <span className="navbar-toggler-icon" />
          </El.Button>
          {logoURL && <SiteLogo src={logoURL} />}
          <Nav isMenu={true} className="navbar-nav flex-row d-lg-none">
            {notificationsTrayFromProps && (
              <Nav.Item link={false} className="d-none d-md-flex mr-3">
                <Notification.Tray {...notificationsTrayFromProps} />
              </Nav.Item>
            )}
            {accountDropdownFromProps && (
              <AccountDropdown {...accountDropdownFromProps} />
            )}
          </Nav>
          {_children}
        </Container>
      </Nav.Bar>
    );
  }
  return (
    // <Nav.Bar expand="md" className={classes} as="div" {...rest}>
    <El.Div className="navbar-expand-md">
      <El.Div className={classes}>
        <Nav.Bar as="div" isSide={false}>
          <Container expand="xl">
            {logoURL && <SiteLogo src={logoURL} />}
            {_children}
          </Container>
        </Nav.Bar>
      </El.Div>
    </El.Div>
    // </Nav.Bar>
  );
};

export default SiteNav;
