import React, { useState } from "react";
import { NavLink as ReactRouterNavLink } from "react-router-dom";
import {
  SiteLayoutHorizontal,
  Nav,
  Button,
  Form,
  SiteLayoutVertical,
  SiteLayoutCombined,
  SiteLayoutCondensed,
} from "tabler-react";
import SiteFooter from "./SiteFooter";

const defaultNotificationsObjects = [
  {
    unread: true,
    avatarURL: "demo/faces/male/41.jpg",
    message: (
      <React.Fragment>
        <strong>Nathan</strong> pushed new commit: Fix page load performance
        issue.
      </React.Fragment>
    ),
    time: "10 minutes ago",
  },
  {
    unread: true,
    avatarURL: "demo/faces/female/1.jpg",
    message: (
      <React.Fragment>
        <strong>Alice</strong> started new task: Tabler UI design.
      </React.Fragment>
    ),
    time: "1 hour ago",
  },
  {
    unread: false,
    avatarURL: "demo/faces/female/18.jpg",
    message: (
      <React.Fragment>
        <strong>Rose</strong> deployed new version of NodeJS REST Api // V3
      </React.Fragment>
    ),
    time: "2 hours ago",
  },
];

const accountDropdownProps = {
  avatarURL: "./demo/faces/female/25.jpg",
  name: "Paweł Kuna",
  description: "UI Designer",
  options: [
    { icon: "user", value: "Profile" },
    { icon: "settings", value: "Settings" },
    { icon: "mail", value: "Inbox", badge: "6" },
    { icon: "send", value: "Message" },
    { isDivider: true },
    { icon: "help-circle", value: "Need help?" },
    { icon: "log-out", value: "Sign out" },
  ],
};

const navBarItems = [
  {
    value: "Home",
    to: "/",
    icon: "home",
    linkAs: ReactRouterNavLink,
    linkProps: { exact: true },
  },
  {
    value: "User Interface",
    icon: "box",
    href: "#interface",
    subItemsObjects: [
      {
        value: "Empty Page",
        to: "/empty",
        linkAs: ReactRouterNavLink,
      },
      {
        value: "Buttons",
        to: "/buttons",
        linkAs: ReactRouterNavLink,
      },
      {
        value: "Tables",
        to: "/tables",
        linkAs: ReactRouterNavLink,
      },
      {
        value: "Dropdowns",
        to: "/dropdowns",
        linkAs: ReactRouterNavLink,
      },
      {
        value: "Lists",
        to: "/lists",
        linkAs: ReactRouterNavLink,
      },
      {
        value: "Cards Design",
        to: "/cards",
        linkAs: ReactRouterNavLink,
      },
      {
        value: "Charts",
        to: "/charts",
        linkAs: ReactRouterNavLink,
      },
      {
        value: "Pricing Cards",
        to: "/pricing-cards",
        linkAs: ReactRouterNavLink,
      },
    ],
  },
  {
    value: "Components",
    icon: "calendar",
    href: "#components",
    subItemsObjects: [
      {
        value: "Maps",
        to: "/maps",
        linkAs: ReactRouterNavLink,
      },
      {
        value: "Icons",
        to: "/icons",
        linkAs: ReactRouterNavLink,
      },
      {
        value: "Store",
        to: "/store",
        linkAs: ReactRouterNavLink,
      },
      {
        value: "Blog",
        to: "/blog",
        linkAs: ReactRouterNavLink,
      },
    ],
  },
  {
    value: "Pages",
    icon: "file",
    href: "#pages",
    subItemsObjects: [
      {
        value: "Profile",
        to: "/profile",
        linkAs: ReactRouterNavLink,
      },
      {
        value: "Login",
        to: "/login",
        linkAs: ReactRouterNavLink,
      },
      {
        value: "Register",
        to: "/register",
        linkAs: ReactRouterNavLink,
      },
      {
        value: "Forgot password",
        to: "/forgot-password",
        linkAs: ReactRouterNavLink,
      },
      {
        value: "400 error",
        to: "/400",
        linkAs: ReactRouterNavLink,
      },
      {
        value: "401 error",
        to: "/401",
        linkAs: ReactRouterNavLink,
      },
      {
        value: "403 error",
        to: "/403",
        linkAs: ReactRouterNavLink,
      },
      {
        value: "404 error",
        to: "/404",
        linkAs: ReactRouterNavLink,
      },
      {
        value: "500 error",
        to: "/500",
        linkAs: ReactRouterNavLink,
      },
      {
        value: "503 error",
        to: "/503",
        linkAs: ReactRouterNavLink,
      },
      {
        value: "Email",
        to: "/email",
        linkAs: ReactRouterNavLink,
      },
      {
        value: "Empty page",
        to: "/empty-page",
        linkAs: ReactRouterNavLink,
      },
      { value: "RTL", to: "/rtl", linkAs: ReactRouterNavLink },
    ],
  },
  {
    value: "Forms",
    to: "/form-elements",
    icon: "check-square",
    linkAs: ReactRouterNavLink,
  },
  {
    value: "Gallery",
    to: "/gallery",
    icon: "image",
    linkAs: ReactRouterNavLink,
  },
  {
    icon: "file-text",
    value: "Documentation",
    to:
      process.env.NODE_ENV === "production"
        ? "https://tabler.github.io/tabler-react/documentation"
        : "/documentation",
  },
];

interface Props {
  children: React.ReactNode;
  layout?: "horizontal" | "vertical" | "condensed" | "combined";
  navbarSide?: "left" | "right";
}

const SiteWrapper = function({
  children,
  layout = "horizontal",
  navbarSide = "left",
}: Props) {
  const [notificationsObjects, setNotificationsObjects] = useState<
    { unread: boolean; message: any; [key: string]: any }[]
  >(defaultNotificationsObjects);

  const unreadCount = notificationsObjects.reduce(
    (a, v) => a || v.unread,
    false
  );

  if (layout === "horizontal") {
    return (
      <SiteLayoutHorizontal
        href="/"
        alt="Tabler React"
        logoURL="./demo/brand/tabler.svg"
        navItems={
          <Nav.Item link={false} className="d-none d-md-flex">
            <Button
              href="https://github.com/tabler/tabler-react"
              target="_blank"
              outline
              size="sm"
              RootComponent="a"
              color="primary"
            >
              Source code
            </Button>
          </Nav.Item>
        }
        notificationsTray={{
          notificationsObjects,
          markAllAsRead: () => {
            const unread = notificationsObjects.map(v => ({
              ...v,
              unread: false,
            }));
            setNotificationsObjects(unread);
          },
          unread: unreadCount,
        }}
        accountDropdown={accountDropdownProps}
        itemsObjects={navBarItems}
        searchBar={
          <Form.Input
            icon="search"
            position="prepend"
            placeholder="Search..."
            tabIndex={-1}
          />
        }
      >
        {children}
        <SiteFooter />
      </SiteLayoutHorizontal>
    );
  } else if (layout === "vertical") {
    return (
      <SiteLayoutVertical
        href="/"
        alt="Tabler React"
        logoURL="./demo/brand/tabler.svg"
        navItems={
          <Nav.Item link={false} className="d-none d-md-flex">
            <Button
              href="https://github.com/tabler/tabler-react"
              target="_blank"
              outline
              size="sm"
              RootComponent="a"
              color="primary"
            >
              Source code
            </Button>
          </Nav.Item>
        }
        notificationsTray={{
          notificationsObjects,
          markAllAsRead: () => {
            const unread = notificationsObjects.map(v => ({
              ...v,
              unread: false,
            }));
            setNotificationsObjects(unread);
          },
          unread: unreadCount,
        }}
        accountDropdown={accountDropdownProps}
        itemsObjects={navBarItems}
        searchBar={
          <Form.Input
            icon="search"
            position="prepend"
            placeholder="Search..."
            tabIndex={-1}
          />
        }
        navbarSide={navbarSide}
      >
        {children}
        <SiteFooter />
      </SiteLayoutVertical>
    );
  } else if (layout === "combined") {
    return (
      <SiteLayoutCombined
        href="/"
        alt="Tabler React"
        logoURL="./demo/brand/tabler.svg"
        navItems={
          <Nav.Item link={false} className="d-none d-md-flex">
            <Button
              href="https://github.com/tabler/tabler-react"
              target="_blank"
              outline
              size="sm"
              RootComponent="a"
              color="primary"
            >
              Source code
            </Button>
          </Nav.Item>
        }
        notificationsTray={{
          notificationsObjects,
          markAllAsRead: () => {
            const unread = notificationsObjects.map(v => ({
              ...v,
              unread: false,
            }));
            setNotificationsObjects(unread);
          },
          unread: unreadCount,
        }}
        accountDropdown={accountDropdownProps}
        itemsObjects={navBarItems}
        searchBar={
          <Form.Input
            icon="search"
            position="prepend"
            placeholder="Search..."
            tabIndex={-1}
          />
        }
        navbarSide={navbarSide}
      >
        {children}
        <SiteFooter />
      </SiteLayoutCombined>
    );
  } else if (layout === "condensed") {
    return (
      <SiteLayoutCondensed
        href="/"
        alt="Tabler React"
        logoURL="./demo/brand/tabler.svg"
        navItems={
          <Nav.Item link={false} className="d-none d-md-flex">
            <Button
              href="https://github.com/tabler/tabler-react"
              target="_blank"
              outline
              size="sm"
              RootComponent="a"
              color="primary"
            >
              Source code
            </Button>
          </Nav.Item>
        }
        notificationsTray={{
          notificationsObjects,
          markAllAsRead: () => {
            const unread = notificationsObjects.map(v => ({
              ...v,
              unread: false,
            }));
            setNotificationsObjects(unread);
          },
          unread: unreadCount,
        }}
        accountDropdown={accountDropdownProps}
        itemsObjects={navBarItems}
        searchBar={
          <Form.Input
            icon="search"
            position="prepend"
            placeholder="Search..."
            tabIndex={-1}
          />
        }
        navbarSide={navbarSide}
      >
        {children}
        <SiteFooter />
      </SiteLayoutCondensed>
    );
  }

  return <div>nothing</div>;
};

export default SiteWrapper;
