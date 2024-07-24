"use client";

import { DropdownBox, DropdownOption } from "components/dropdown/box";
import { Feature, featureArr, featureGroups } from "features";
import { useRouter } from "next/navigation";
import { ReactElement } from "react";

const toOption = (ft: Feature): DropdownOption => ({
  value: ft.code,
  label: `${ft.name} (${ft.code})`,
});

export function CodeOverviewCode(props: { feature: Feature }): ReactElement {
  const { feature } = props;

  const router = useRouter();

  const options: DropdownOption[] = [];
  featureGroups.forEach(({ label, type }) => {
    options.push({ label, value: label, isHeading: true });
    options.push(...featureArr.filter((f) => f.type === type).map(toOption));
  });

  return (
    <DropdownBox
      value={feature.code}
      setValue={(value) => void router.push(`/${value}`)}
      options={options}
    />
  );
}
