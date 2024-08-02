import { Feature } from "features";
import { ReactElement, Suspense } from "react";
import { CodeDescBox } from "./desc/box";
import { CodeOverviewBox } from "./overview/box";
import { CodeTextBoxClient } from "./text/box-client";
import { CodeTextBoxServer } from "./text/box-server";

const column = "flex-1 lt960:w-full lt960:flex-none";
const desc = "pl-72 lt1280:pl-36 lt960:pl-0 lt960:pt-36";

export function CodeBox(props: { feature: Feature }): ReactElement {
  const { feature } = props;

  return (
    <div className="flex flex-wrap">
      <div className={column}>
        <CodeOverviewBox feature={feature} />
        <div className="mt-36" />
        <Suspense fallback={<CodeTextBoxServer feature={feature} />}>
          <CodeTextBoxClient feature={feature} />
        </Suspense>
      </div>
      <div className={`${column} ${desc}`}>
        <CodeDescBox feature={feature} />
      </div>
    </div>
  );
}
