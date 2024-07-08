import { ReactElement } from "react";
import { Feature } from "features";

import Code from "./code";
import Font from "./font";

export default function Overview(props: { feature: Feature }): ReactElement {
  const { feature } = props
  return (
    <div className="whitespace-pre-wrap text-24 leading-36">
      <span>This is how </span>
      <span><Code feature={feature} /> </span>
      <span>in </span>
      <span><Font feature={feature} /> </span>
      <span>brings better typography:</span>
    </div>
  )
}
