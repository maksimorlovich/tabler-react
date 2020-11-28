import * as React from "react";
import cn from "classnames";
import { TablerComponent } from "../../types";
import { string } from "prop-types";

export interface SiteLogoProps extends TablerComponent {
  href?: string;
  src?: string;
  srcSmall?: string;
  alt?: string;
  title?: string;
}

const SiteLogo = ({ className, ...props }: SiteLogoProps) => {
  const _className = cn("navbar-brand", className);
  return (
    <a className={_className} href={props.href} {...props}>
      {props.src && (
        <img src={props.src} className="navbar-brand-image" alt={props.alt} />
      )}
      {props.srcSmall && (
        <img
          src={props.srcSmall}
          className="navbar-brand-image"
          alt={props.alt}
        />
      )}
      {props.title}
    </a>
  );
};

export default SiteLogo;
