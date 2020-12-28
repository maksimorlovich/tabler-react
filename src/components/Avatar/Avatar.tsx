import * as React from "react";
import Icon from "../Icon";
import cn from "classnames";
import AvatarList from "./AvatarList";

import { HTMLPropsWithoutRef } from "../../types";
import { colors } from "../../colors";
import Badge from "../Badge";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El";

export interface Props
  extends ELProps,
    Omit<HTMLPropsWithoutRef<HTMLSpanElement>, "placeholder" | "size"> {
  /**
   * The URL of the image to be displayed
   */
  imageURL?: string;
  /**
   * Size
   */
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
  /**
   * Display a colored status dot with the avatar
   */
  status?: colors;
  /**
   * Displays the user icon as a placeholder
   */
  placeholder?: boolean;
  /**
   * Render an icon instead of an imageURL
   */
  icon?: string;
  /**
   * The background and font color of the circle
   */
  color?: colors;
  /**
   * Show upload border
   */
  upload?: boolean;
  /**
   * Avatar is fully round
   */
  rounded?: boolean;
}

/**
 * Renders a single circular avatar
 */
export function Avatar({
  className,
  children,
  imageURL,
  style,
  size,
  status,
  placeholder,
  icon,
  color,
  upload,
  rounded,
  ...rest
}: Props) {
  const classes = cn(
    {
      avatar: true,
      rounded: rounded,
      "avatar-upload": upload,
      [`avatar-${size}`]: !!size && !upload,
      [`bg-${color}`]: !!color && !upload,
    },
    className
  );
  const _icon = icon || (placeholder ? "home" : null);

  return (
    <El.Span
      className={classes}
      style={
        imageURL
          ? Object.assign(
              {
                backgroundImage: `url(${imageURL})`,
              },
              style
            )
          : style
      }
      {...rest}
    >
      {_icon && <Icon name={_icon} />}
      {status && <Badge color={status} />}
      {children}
    </El.Span>
  );
}

Avatar.List = AvatarList;

export default Avatar;
