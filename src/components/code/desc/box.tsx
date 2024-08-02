import { Feature } from "features";
import { ReactElement, Suspense } from "react";
import { CodeDescFontsClient } from "./fonts/client";
import { CodeDescFontsServer } from "./fonts/server";
import { CodeDescRelated } from "./related";
import { CodeDescTextsClient } from "./texts/client";
import { CodeDescTextsServer } from "./texts/server";
import { CodeDescUsage } from "./usage";

export function CodeDescBox(props: { feature: Feature }): ReactElement {
  const { feature } = props;

  return (
    <div className="text-18 leading-30">
      <CodeDescUsage feature={feature} />
      <p className="mt-24">
        <Suspense fallback={<CodeDescFontsServer feature={feature} />}>
          <CodeDescFontsClient feature={feature} />
        </Suspense>
        <span> </span>
        <Suspense fallback={<CodeDescTextsServer feature={feature} />}>
          <CodeDescTextsClient feature={feature} />
        </Suspense>
      </p>
      {feature.related.length > 0 && (
        <p className="mt-24">
          <CodeDescRelated codes={feature.related} />
        </p>
      )}
    </div>
  );
}
