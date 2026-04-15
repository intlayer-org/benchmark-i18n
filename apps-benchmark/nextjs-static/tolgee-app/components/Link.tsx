"use client";

import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import type { PropsWithChildren, FC, ComponentProps } from "react";

/**
 * A custom Link component for Tolgee.
 * Since Tolgee uses cookie/header-based locale detection (not URL prefixes),
 * this is a simple pass-through to next/link.
 */
export const Link: FC<
  PropsWithChildren<NextLinkProps & ComponentProps<"a">>
> = ({ children, ...props }) => {
  return <NextLink {...props}>{children}</NextLink>;
};

export default Link;
