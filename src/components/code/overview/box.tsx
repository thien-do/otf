import { Feature } from "features";
import { ReactElement, Suspense } from "react";
import { CodeOverviewCode } from "./code";
import { CodeOverviewFontClient } from "./font/clien";
import { CodeOverviewFontServer } from "./font/server";

export function CodeOverviewBox(props: { feature: Feature }): ReactElement {
  const { feature } = props;

  return (
    <div className="whitespace-pre-wrap text-24 leading-36">
      <span>This is how </span>
      <span>
        <CodeOverviewCode feature={feature} />{" "}
      </span>
      <span>in </span>
      <span>
        <Suspense fallback={<CodeOverviewFontServer feature={feature} />}>
          <CodeOverviewFontClient feature={feature} />
        </Suspense>{" "}
      </span>
      <span>brings better typography:</span>
    </div>
  );
}
