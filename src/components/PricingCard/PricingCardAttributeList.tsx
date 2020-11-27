import * as React from "react";
import cn from "classnames";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

function PricingCardAttributeList({ className, children }: Props) {
  const classes = cn("list-unstyled", "lh-lg", className);
  return <ul className={classes}>{children}</ul>;
}

export default PricingCardAttributeList;
