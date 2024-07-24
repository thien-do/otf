import { CodeBox } from "components/code/box";
import { featureArr, getFeature } from "features";
import { Metadata } from "next";
import { ReactElement } from "react";

type Props = {
  params: { code: string };
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { params } = props;

  const feature = getFeature(params.code);
  const fullName = `${feature.name} (${feature.code})`;
  const description = feature.description.split("\n\n")[0];

  return {
    title: `${fullName} - otf.show`,
    description: `${fullName} ${description}`,
  };
}

export async function generateStaticParams() {
  return featureArr.map((feature) => ({
    code: feature.code,
  }));
}

export default function Page(props: Props): ReactElement {
  const { params } = props;

  const feature = getFeature(params.code);

  return <CodeBox feature={feature} />;
}
