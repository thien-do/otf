import Link from "next/link";
import { ReactElement } from "react";
import { GetCodeSearch } from "../../search/base";
import { CodeDescList } from "../list";

export const CodeDescTextsBase = (props: {
  texts: string[];
  getHref: GetCodeSearch;
}): ReactElement => {
  const { texts, getHref } = props;

  if (texts.length === 0) throw new Error("texts length must be > 0");

  const links = texts.map((text) => {
    const link = (
      <Link href={getHref("text", text)} className="underline">
        {text}
      </Link>
    );

    return <span key={text}>“{link}”</span>;
  });

  return (
    <span>
      Try them with text like <CodeDescList items={links} />.
    </span>
  );
};
