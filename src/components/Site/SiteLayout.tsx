import React from "react";
import { NavItemProps } from "../Nav/NavItem";
import { Props as NotificationTrayProps } from "../Notification/NotificationTray";
import { Props as AccountDropdownProps } from "../AccountDropdown/AccountDropdown";
import { SiteFooterProps } from "./SiteFooter";

export default interface SiteLayoutProps {
  children?: React.ReactNode;
  // navigation items
  itemsObjects?: NavItemProps[];
  /**
   * Provide your own component to replace the search form
   */
  searchBar?: React.ReactNode;
  /**
   * Toggle the collapsed state of the nav
   */
  // collapse?: boolean;
  // routerContextComponentType?: React.ElementType;
  /**
   * Logo image URL
   */
  logoURL?: string;

  // header items
  /**
   * header alignment
   */
  align?: string;
  /**
   * href attribute for the logo
   */
  href?: string;
  /**
   * The logo alt attribute
   */
  alt?: string;
  /**
   * Include a notifications tray
   */
  notificationsTray?: NotificationTrayProps;
  accountDropdown?: AccountDropdownProps;
  navItems?: React.ReactNode;
  /**
   * Handle toggling/collapsing of the mobile menu when the collapse icon is clicked
   */
  // onMenuToggleClick?: () => void;
  // searchBar?: React.ReactNode;
  footerProps?: SiteFooterProps;

  navbarSide?: "left" | "right";
}
