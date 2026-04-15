"use client";

import { getLocalizedUrl } from "intlayer";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { useLocale } from "next-intlayer";
import type { PropsWithChildren, FC, ComponentProps } from "react";

/**
 * Utility function to check whether a given URL is external.
 * If the URL starts with http:// or https://, it's considered external.
 */
export const checkIsExternalLink = (href?: string): boolean =>
  /^https?:\/\//.test(href ?? "");

/**
 * A custom Link component that adapts the href attribute based on the current locale.
 * For internal links, it uses `getLocalizedUrl` to prefix the URL with the locale (e.g., /fr/about).
 * This ensures that navigation stays within the same locale context.
 */
export const Link: FC<
  PropsWithChildren<NextLinkProps & ComponentProps<"a">>
> = ({ href, children, ...props }) => {
  const { locale } = useLocale();
  const isExternalLink = checkIsExternalLink(href.toString());

  // If the link is internal and a valid href is provided, get the localized URL.
  const hrefI18n: NextLinkProps["href"] =
    href && !isExternalLink ? getLocalizedUrl(href.toString(), locale) : href;

  return (
    <NextLink href={hrefI18n} {...props}>
      {children}
    </NextLink>
  );
};
