import * as React from "react";
import cn from "classnames";
import { TablerComponent } from "../../types";
import Text from "../Text";

interface Props extends TablerComponent {}

function PricingCardCategory({ className, children }: Props) {
  // const classes = cn("text-uppercase text-muted", className);
  return (
    <Text muted uppercase className={className}>
      {children}
    </Text>
  );
  // return <div className={classes}>{children}</div>;
}

export default PricingCardCategory;
