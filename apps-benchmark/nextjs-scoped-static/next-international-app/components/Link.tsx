"use client";

import { useParams } from "next/navigation";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import type { PropsWithChildren, FC, ComponentProps } from "react";

export const checkIsExternalLink = (href?: string): boolean =>
  /^https?:\/\//.test(href ?? "");

export const Link: FC<
  PropsWithChildren<NextLinkProps & ComponentProps<"a">>
> = ({ href, children, ...props }) => {
  const params = useParams();
  const currentLocale = (params.locale as string) ?? "en";
  const isExternalLink = checkIsExternalLink(href.toString());

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
