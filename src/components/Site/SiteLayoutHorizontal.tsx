import React, { useState, Component } from "react";
import cn from "classnames";

import Container from "../Container";
import Nav from "../Nav";
import { NavItemProps } from "../Nav/NavItem";
import El from "../El";
import { NavBarProps } from "../Nav/NavBar";
import SiteLogo from "../Site/SiteLogo";
import SiteNav from "./SiteNav";
import { string } from "prop-types";
import AccountDropdown from "../AccountDropdown";
import Notification from "../Notification";
import { Props as NotificationTrayProps } from "../Notification/NotificationTray";
import { Props as AccountDropdownProps } from "../AccountDropdown/AccountDropdown";
import SiteLayoutProps from "./SiteLayout";
import Page from "../Page";
import SiteFooter from "./SiteFooter";

const SiteLayoutHorizontal = ({
  children,
  itemsObjects,
  searchBar,
  logoURL,
  title,

  align,
  href,
  alt,
  notificationsTray: notificationsTrayFromProps,
  accountDropdown: accountDropdownFromProps,
  navItems,
  footerProps = {},
}: // onMenuToggleClick,
// searchBar,
SiteLayoutProps) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const _handleMenuButtonOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowMobileMenu(s => {
      console.log("state changed: " + !s);
      return !s;
    });
  };

  return (
    <Page>
      <Nav.Bar expand="md" as="header">
        <Container expand="xl" className={align}>
          <React.Fragment>
            <El.Button
              className="navbar-toggler"
              onClick={_handleMenuButtonOnClick}
              aria-expanded={showMobileMenu}
            >
              <span className="navbar-toggler-icon" />
            </El.Button>
            <SiteLogo
              className="text-inherit mr-md-3"
              href={href}
              alt={alt}
              src={logoURL}
              title={title}
            />
            <Nav
              isMenu={true}
              className="align-items-center flex-row order-1 order-lg-2"
            >
              {navItems}
              {notificationsTrayFromProps && (
                <Nav.Item link={false} className="d-none d-md-flex mr-3">
                  <Notification.Tray {...notificationsTrayFromProps} />
                </Nav.Item>
              )}
              {accountDropdownFromProps && (
                <AccountDropdown {...accountDropdownFromProps} />
              )}
            </Nav>
          </React.Fragment>
        </Container>
      </Nav.Bar>

      <SiteNav
        // logoURL={logoURL}
        isSide={false}
        side="left"
        itemsObjects={itemsObjects}
        withSearchForm={false}
        collapse={false}
        rightColumnComponent={searchBar}
        showMobileMenu={showMobileMenu}
      />

      {children}

      <SiteFooter {...footerProps} />
    </Page>
  );
};

export default SiteLayoutHorizontal;
