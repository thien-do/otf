import React from "react";
import Link from "next/link";
import { Tw } from "styles";
import { useRouter, NextRouter } from "next/router";

interface Props {
  href: string;
  children: string;
}

interface AnchorProps {
  href?: string;
  className: string;
  rel?: string;
  target?: string;
  children?: string;
}

const isActive = (router: NextRouter, href: string) => {
  if (router.pathname === "/[code]" && href === "/") return true;
  return router.pathname === href;
};

const HeaderLink: React.FC<Props> = ({ href, children }) => {
  const router = useRouter();
  const props: AnchorProps = { className: "" };
  const isExternal = href.startsWith("https://");

  const color = isActive(router, href) ? Tw().text2D3().$() : Tw().textA0A().$();
  props.className += ` ${color}`;

  props.children = isExternal ? `${children}\u00a0→` : children;

  if (isExternal) {
    props.href = href;
    props.target = "_blank";
    props.rel = "noopener";
  }

  return isExternal ? <a {...props} /> : <Link href={href} {...props} />;
};

export default HeaderLink;
