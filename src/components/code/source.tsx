import { Feature } from "features";
import { ReactElement } from "react";

export function CodeSource(props: { feature: Feature }): ReactElement {
  const { feature } = props;

  const { property, value } = feature.css;

  return (
    <div>
      <div className="text-15 leading-24 uppercase font-semibold text-718">
        To enable in css:
      </div>
      <div className="p-24 mt-18 bg-F7F">
        <code>
          <span className="text-718">{property}: </span>
          <span className="text-2D3">{value};</span>
        </code>
      </div>
    </div>
  );
}
