import * as React from "react";
import cn from "classnames";

import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El";
import PaginationItem, { PaginationItemProps } from "./PaginationItem";

export interface PaginationProps extends ELProps {
  itemsObjects?: Array<PaginationItemProps>;
}

export function Pagination({
  className,
  as = El.Ul,
  children,
  itemsObjects,
  ...rest
}: PaginationProps) {
  const classes = cn(
    {
      pagination: true,
    },
    className
  );

  const Component = as;

  return (
    <Component className={classes} {...rest}>
      {children}
      {itemsObjects &&
        itemsObjects.map((item, index) => {
          return (
            <PaginationItem
              key={index}
              href={item.href}
              value={item.value}
              active={item.active}
              disabled={item.disabled}
            />
          );
        })}
    </Component>
  );
}

Pagination.Item = PaginationItem;

export default Pagination;
