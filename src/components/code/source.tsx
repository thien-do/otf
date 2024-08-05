import { Feature } from "features";

interface Props {
  feature: Feature;
}

export function CodeSource({ feature }: Props) {
  const [attribute, value] = feature.css.split(": ");

  if (!attribute || !value)
    throw new Error(`unexpected syntax: ${feature.css}`);

  const label = `${feature.name} (${feature.code})`;

  return (
    <>
      <div className="mb-18">
        To use <strong className="font-semibold">{label}</strong> in CSS:
      </div>
      <div className="p-24 lt960:p-18 bg-EDF relative shadow-E2E rounded">
        <code>
          <span className="text-718">{attribute}: </span>
          <span className="text-2D3">{value}</span>
        </code>
      </div>
    </>
  );
}
