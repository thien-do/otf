"use client"
import { ReactElement } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface AnchorProps {
  href?: string;
  className: string;
  rel?: string;
  target?: string;
  children?: string;
}

const isActive = (pathname: string, href: string) => {
  if (pathname === "/[code]" && href === "/") return true;
  return pathname === href;
};

interface Props {
  href: string;
  children: string;
}

export default function HeaderLink({ href, children }: Props): ReactElement {
  const pathname = usePathname();
  const props: AnchorProps = { className: "" };
  const isExternal = href.startsWith("https://");

  const color = pathname && isActive(pathname, href) ? "text-2D3" : "text-A0A";
  props.className += ` ${color}`;

  props.children = isExternal ? `${children}\u00a0→` : children;

  if (isExternal) {
    props.href = href;
    props.target = "_blank";
    props.rel = "noopener";
  }

  return isExternal ? <a {...props} /> : <Link href={href} {...props} />;
}
