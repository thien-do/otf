import { ReactElement } from "react";

import { featureArr, featureGroups } from "features";
import { SideFeatureList } from "./feature/list";

const Group = (props: {
  type: string;
  label: string;
  index: number;
}): ReactElement => {
  const { type, label, index } = props;

  return (
    <div className={index === 0 ? "" : "mt-18"}>
      <p className="py-18 px-36 text-24 leading-36 text-718">{label}</p>
      <SideFeatureList features={featureArr.filter((f) => f.type === type)} />
    </div>
  );
};

export const SideBox = (): ReactElement => {
  return (
    <aside className="py-18 px-36 lt1280:px-0">
      {featureGroups.map((group, index) => {
        const { type, label } = group;
        return <Group key={type} type={type} label={label} index={index} />;
      })}
    </aside>
  );
};
