import { GetCodeSearch } from "components/code/search/base";
import Link from "next/link";
import { ReactElement } from "react";
import { CodeDescList } from "../list";

export const CodeDescFontsBase = (props: {
  fonts: string[];
  getHref: GetCodeSearch;
}): ReactElement => {
  const { fonts, getHref } = props;

  if (fonts.length === 0) throw new Error("fonts.length must be > 0");

  const links = fonts.map((font) => (
    <Link key={font} href={getHref("font", font)} className="underline">
      {font}
    </Link>
  ));

  const prefix =
    fonts.length === 1
      ? "A font that have this feature is"
      : "Fonts that have this feature includes";
  return (
    <span>
      {prefix} <CodeDescList items={links} />.
    </span>
  );
};
