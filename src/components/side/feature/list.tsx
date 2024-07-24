import { Feature } from "features";
import { ReactElement } from "react";
import { SideFeatureItem } from "./item";

export const SideFeatureList = (props: {
  features: Feature[];
}): ReactElement => {
  const { features } = props;

  return (
    <div className="flex flex-wrap">
      {features.map((feature) => (
        <SideFeatureItem key={feature.code} feature={feature} />
      ))}
    </div>
  );
};
