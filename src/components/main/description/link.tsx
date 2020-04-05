import React from "react";
import NextLink from "next/link";
import { Query } from "state";
import { useRouter } from "next/router";
import { Tw } from "styles";

interface Props {
  type: string;
  value: string;
  label: string;
}

const Link: React.FC<Props> = ({ type, value, label }) => {
  const router = useRouter();
  const query: Query = { ...router.query, [type]: value };
  delete query.code;

  const href = { pathname: "/[code]", query };
  const as = { pathname: `/${router.query.code}`, query };
  const link = <a className={Tw().underline().$()}>{label}</a>;
  return <NextLink href={href} as={as} shallow>{link}</NextLink>;
};

export default Link;
