"use client";

import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import type { PropsWithChildren, FC, ComponentProps } from "react";
import { useParams } from "next/navigation";

export const checkIsExternalLink = (href?: string): boolean =>
  /^https?:\/\//.test(href ?? "");

export function localizeHref(href: string, locale: string): string {
  if (!href.startsWith("/")) return href;
  if (href === `/${locale}` || href.startsWith(`/${locale}/`)) return href;
  return `/${locale}${href === "/" ? "" : href}`;
}

export const Link: FC<
  PropsWithChildren<NextLinkProps & ComponentProps<"a">>
> = ({ href, children, ...props }) => {
  const params = useParams();
  const locale = (params.lang as string) ?? "en";
  if (href == null || typeof href !== "string") {
    return (
      <NextLink href={href} {...props}>
        {children}
      </NextLink>
    );
  }
  if (checkIsExternalLink(href)) {
    return (
      <NextLink href={href} {...props}>
        {children}
      </NextLink>
    );
  }
  return (
    <NextLink href={localizeHref(href, locale)} {...props}>
      {children}
    </NextLink>
  );
};

export default Link;
