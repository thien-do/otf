"use client"
import Overview from "./overview";
import Texts from "./texts";
import Description from "./description";
import { usePathname } from "next/navigation";
import { getFeature } from "features";

const column = "flex-none w-full lt960:flex-1";
const desc = "pl-0 pt-36 lt960:pl-36 lt960:pt-0 ";

export default function Code() {
  const code = usePathname().replace("/", "")
  const feature = getFeature(code)

  return (
    <div className="flex flex-wrap">
      <div className={column}>
        <Overview feature={feature} />
        <div className="mt-36" />
        <Texts feature={feature} />
      </div>
      <div className={`${column} ${desc}`}>
        <Description feature={feature} />
      </div>
    </div>
  )
};
