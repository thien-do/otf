import Link from "next/link";
import { ReactElement } from "react";
import { CodeDescList } from "./list";

export const CodeDescRelated = (props: { codes: string[] }): ReactElement => {
  const { codes } = props;

  if (codes.length === 0) throw new Error("codes.length must be > 0");

  const links = codes.map((code) => (
    <Link key={code} href={`/${code}`} className="underline">
      {code}
    </Link>
  ));

  const prefix = "You may also be interested in";
  return (
    <span>
      {prefix} <CodeDescList items={links} />.
    </span>
  );
};
