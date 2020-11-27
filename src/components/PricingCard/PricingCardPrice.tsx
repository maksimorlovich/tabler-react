import * as React from "react";
import cn from "classnames";
import Header from "../Header";
// import { Header } from "../El";
// TODO:Add size options
type Props = {
  children?: React.ReactNode;
  className?: string;
};

function PricingCardPrice({ className, children }: Props) {
  const classes = cn("my-3", className);
  return <Header.H1 className={classes}>{children}</Header.H1>;
}

export default PricingCardPrice;
