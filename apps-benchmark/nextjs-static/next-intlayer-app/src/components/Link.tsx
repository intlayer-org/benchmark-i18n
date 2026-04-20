"use client";

import { getLocalizedUrl } from "intlayer";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { useLocale } from "next-intlayer";
import type { PropsWithChildren, FC, ComponentProps } from "react";

export const checkIsExternalLink = (href?: string): boolean =>
  /^https?:\/\//.test(href ?? "");

export function localizeHref(href: string, locale: string): string {
  if (!href.startsWith("/")) return href;
  return getLocalizedUrl(href, locale);
}

export const Link: FC<
  PropsWithChildren<NextLinkProps & ComponentProps<"a">>
> = ({ href, children, ...props }) => {
  const { locale } = useLocale();
  const isExternalLink = checkIsExternalLink(href.toString());

  const hrefI18n: NextLinkProps["href"] =
    href && !isExternalLink ? getLocalizedUrl(href.toString(), locale) : href;

  return (
    <NextLink href={hrefI18n} prefetch={false} {...props}>
      {children}
    </NextLink>
  );
};

export default Link;
