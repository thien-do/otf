"use client";
import Link, { LinkProps } from "next/link";
import { useParams, usePathname } from "next/navigation";
import { AnchorHTMLAttributes, ReactElement } from "react";

function useIsActive(props: { href: string }): boolean {
  const { href: target } = props;
  const pathname = usePathname();
  const params = useParams();

  switch (target) {
    // Home ("/") is actually the same as code ("/[code]") due to a redirect.
    // Technically there are more cases,
    // such as "/calt" target should match "/[code]" as well.
    // However, we don't have that cases in the header links.
    case "/":
      return "code" in params;
    default:
      return pathname === target;
  }
}

export function MainHeaderLink(props: {
  href: string;
  children: string;
}): ReactElement {
  const { href, children } = props;

  const className = useIsActive({ href }) ? "text-2D3" : "text-A0A";
  type Common = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;
  const common: Common = { href, className };

  // Internal link
  if (href.startsWith("/")) return <Link {...common}>{children}</Link>;

  // External link
  return (
    <a {...common} target="_blank">
      {`${children}\u00a0→`}
    </a>
  );
}
