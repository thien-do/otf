import { ReactElement } from "react";
import { Feature } from "features";

import Fonts from "./fonts";
import Texts from "./texts";
import Related from "./related";
import Usage from "./usage";

export default function Description(props: { feature: Feature }): ReactElement {
  const { feature } = props

  return (
    <div className="text-18 leading-30">
      <Usage feature={feature} />
      <p className="mt-24">
        <Fonts fonts={feature.fonts} /><span> </span>
        <Texts texts={feature.texts} />
      </p>
      {feature.related.length > 0 &&
        <p className="mt-24"><Related codes={feature.related} /></p>}
    </div >
  )
}
