import { featureArr, getFeature } from "features";
import Code from "components/code";
import { Metadata } from "next";
import { ReactElement, Suspense } from "react";

type Props = {
  params: { code: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ft = getFeature(params.code)
  const fullName = `${ft.name} (${ft.code})`;
  const description = ft.description.split("\n\n")[0];
  return {
    title: `${fullName} - otf.show`,
    description: `${fullName} ${description} - otf.show`
  }
}

export async function generateStaticParams() {
  return featureArr.map(({ code }) => ({ code }))
}

export default function Page(): ReactElement {
  return (
    <Suspense>
      <Code />
    </Suspense>
  );
};
