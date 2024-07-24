"use client";

import { GetCodeSearch } from "components/code/search/base";
import { DropdownBox, DropdownOption } from "components/dropdown/box";
import { Feature } from "features";
import fonts from "fonts";
import { useRouter } from "next/navigation";
import { ReactElement } from "react";

const toOption = (font: string): DropdownOption => ({
  value: font,
  label: font,
});

export function CodeOverviewFontBase(props: {
  feature: Feature;
  getHref: GetCodeSearch;
  fontParams: null | string;
}): ReactElement {
  const { feature, getHref, fontParams } = props;

  const router = useRouter();

  const font = fontParams ?? feature.fonts[0];

  const supported = feature.fonts;
  const options: DropdownOption[] = [
    { label: "supported typefaces", value: "0", isHeading: true },
    ...supported.map(toOption),
    { label: "other typefaces", value: "1", isHeading: true },
    ...fonts.filter((f) => !supported.includes(f)).map(toOption),
  ];

  return (
    <DropdownBox
      value={font}
      setValue={(value) => {
        const href = getHref("font", value);
        router.push(href);
      }}
      options={options}
    />
  );
}
