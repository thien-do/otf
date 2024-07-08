import React from "react";
import NextLink from "next/link";
import { Query } from "state";
import { useRouter } from "next/router";

interface QueryProps {
  type: "font" | "text";
  value: string;
  label: string;
}

// For fonts and texts
export const QueryLink: React.FC<QueryProps> = ({ type, value, label }) => {
  const router = useRouter();
  const query: Query = { ...router.query, [type]: value };
  delete query.code;

  const href = { pathname: "/[code]", query };
  const as = { pathname: `/${router.query.code}`, query };
  return (
    <NextLink
      href={href}
      as={as}
      scroll={false}
      shallow
      className="underline"
    >
      {label}
    </NextLink>
  );
};

interface CodeProps {
  value: string;
  label: string;
}

export const CodeLink: React.FC<CodeProps> = ({ value, label }) => (
  <NextLink
    href="/[code]"
    as={`/${value}`}
    scroll={false}
    shallow
    className="underline"
  >
    {label}
  </NextLink>
);
