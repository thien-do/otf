"use client"
import { ReactElement } from "react";
import fonts from "fonts";
import Dropdown, { Option } from "components/dropdown";
import { Feature } from "features";
import { useRouter, useSearchParams } from "next/navigation";

const toOption = (font: string): Option => ({ value: font, label: font });

export default function Font(props: { feature: Feature }): ReactElement {
  const { feature } = props

  const router = useRouter()
  const searchParams = useSearchParams()

  const font = searchParams.get('font') ?? feature.fonts[0]

  const supported = feature.fonts;
  const options: Option[] = [
    { label: "supported typefaces", value: "0", isHeading: true },
    ...supported.map (toOption),
    { label: "other typefaces", value: "1", isHeading: true },
    ...fonts.filter(f => !supported.includes(f)).map(toOption),
  ];

  return (
    <Dropdown
      value={font}
      setValue={(value) => {
        const params = new URLSearchParams(searchParams)
        params.set('font', value)
        router.push(`/${feature.code}?${params.toString()}`)
      }}
      options={options}
    />
  );
}
