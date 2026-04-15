"use client";

import { useParams } from "next/navigation";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import type { PropsWithChildren, FC, ComponentProps } from "react";

/**
 * Utility function to check whether a given URL is external.
 * If the URL starts with http:// or https://, it's considered external.
 */
export const checkIsExternalLink = (href?: string): boolean =>
  /^https?:\/\//.test(href ?? "");

/**
 * A custom Link component that adapts the href attribute based on the current locale.
 * For internal links, it adds the locale prefix (e.g., /en/about).
 * This ensures that navigation stays within the same locale context.
 */
export const Link: FC<
  PropsWithChildren<NextLinkProps & ComponentProps<"a">>
> = ({ href, children, ...props }) => {
  const params = useParams();
  const currentLocale = (params.locale as string) ?? "en";
  const isExternalLink = checkIsExternalLink(href.toString());

  // If the link is internal and a valid href is provided, add the locale prefix.
  const hrefI18n: NextLinkProps["href"] =
    href && !isExternalLink && !href.toString().startsWith(`/${currentLocale}`)
      ? `/${currentLocale}${href}`
      : href;

  return (
    <NextLink href={hrefI18n} {...props}>
      {children}
    </NextLink>
  );
};

export default Link;
