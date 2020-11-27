import * as React from "react";
import cn from "classnames";

import ListItem from "./ListItem";
import ListGroup from "./ListGroup";
import ListGroupItem from "./ListGroupItem";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";

export interface ListProps
  extends ELProps,
    HTMLPropsWithoutRef<HTMLUListElement> {
  unstyled?: boolean;
  seperated?: boolean;
  inline?: boolean;
  hoverable?: boolean;
}

function List({
  className,
  as,
  children,
  unstyled,
  seperated,
  inline,
  hoverable,
  ...rest
}: ListProps) {
  const classes = cn(
    {
      list: !unstyled,
      "list-unstyled": unstyled,
      "list-seperated": seperated,
      "list-inline": inline,
      "list-hoverable": hoverable,
    },
    className
  );
  const Component = as || El.Ul;
  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
}

List.Item = ListItem;
List.Group = ListGroup;
List.GroupItem = ListGroupItem;

export default List;
