"use client"
import { ReactElement } from "react";
import { featureArr, Feature, featureGroups } from "features";
import Dropdown, { Option } from "components/dropdown";
import { useRouter } from "next/navigation";

const toOption = (ft: Feature): Option =>
  ({ value: ft.code, label: `${ft.name} (${ft.code})` });

export default function Code(props: { feature: Feature }): ReactElement {
  const { feature } = props
  const router = useRouter()

  const options: Option[] = [];
  featureGroups.forEach(({ label, type }) => {
    options.push({ label, value: label, isHeading: true });
    options.push(...featureArr.filter(f => f.type === type).map(toOption));
  });

  return (
    <Dropdown
      value={feature.code}
      setValue={(value) => router.push(`/${value}`)}
      options={options}
    />
  );
};
