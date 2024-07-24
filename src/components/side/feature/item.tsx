"use client";
import { Feature } from "features";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ReactElement } from "react";

function Code(props: { code: string }): ReactElement {
  const { code } = props;

  if (code.length !== 4) throw new Error("code length must be 4");

  return (
    <span className="block font-mono">
      <span className="block">{code.slice(0, 2)}</span>
      <span className="block">{code.slice(2, 4)}</span>
    </span>
  );
}

function Name(props: { feature: Feature }): ReactElement {
  const { feature } = props;

  return (
    <span className="block">
      <span className="block text-18">{feature.name}</span>
      <span className="block text-15 truncate text-A0A">
        {feature.fonts.join(", ")}
      </span>
    </span>
  );
}

export function SideFeatureItem(props: { feature: Feature }): ReactElement {
  const { feature } = props;

  const params = useParams();

  return (
    <Link
      href="/[code]"
      as={`/${feature.code}`}
      className={[
        "flex px-36 py-18 w-320 leading-24",
        feature.code === params.code ? "bg-EDF" : "",
      ].join(" ")}
    >
      <span className="flex-none">
        <Code code={feature.code} />
      </span>
      <span className="ml-18 flex-1 overflow-hidden">
        <Name feature={feature} />
      </span>
    </Link>
  );
}
