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

const SiteLayoutCombined = ({
  children,
  itemsObjects,
  searchBar,
  logoURL,

  align,
  href,
  alt,
  notificationsTray: notificationsTrayFromProps,
  accountDropdown: accountDropdownFromProps,
  navItems,
  footerProps = {},
  // onMenuToggleClick,
  // searchBar,
  navbarSide = "left",
}: SiteLayoutProps) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const _handleMenuButtonOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowMobileMenu(s => !s);
  };

  return (
    <>
      <SiteNav
        logoURL={logoURL}
        isSide={true}
        side={navbarSide}
        itemsObjects={itemsObjects}
        withSearchForm={false}
        collapse={false}
        rightColumnComponent={searchBar}
        notificationsTray={notificationsTrayFromProps}
        accountDropdown={accountDropdownFromProps}
        // showMobileMenu={showMobileMenu}
      >
        {/* <button className="navbar-toggler" onClick={_handleMenuButtonOnClick}>
              <span className="navbar-toggler-icon" />
            </button>
        <Nav
          isMenu={true}
          className="align-items-center flex-row order-1 order-lg-2 d-lg-none"
        >
          {notificationsTrayFromProps && (
            <Nav.Item link={false} className="d-none d-md-flex mr-3">
              <Notification.Tray {...notificationsTrayFromProps} />
            </Nav.Item>
          )}
          {accountDropdownFromProps && (
            <AccountDropdown {...accountDropdownFromProps} />
          )}
        </Nav> */}
      </SiteNav>

      <Page>
        <Nav.Bar expand="md" as="header" className="d-none d-lg-flex">
          <Container expand="xl" className={align}>
            <React.Fragment>
              <El.Button
                className="navbar-toggler"
                onClick={_handleMenuButtonOnClick}
                aria-expanded={showMobileMenu}
              >
                <span className="navbar-toggler-icon" />
              </El.Button>
              {/* <SiteLogo
                className="text-inherit mr-md-3"
                href={href}
                alt={alt}
                src={logoURL}
              /> */}
              {searchBar}
              <Nav isMenu={true} className="flex-row order-md-last">
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

        {children}

        <SiteFooter {...footerProps} />
      </Page>
    </>
  );
};

export default SiteLayoutCombined;
