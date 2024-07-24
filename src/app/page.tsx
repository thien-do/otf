"use client";
import { featureArr } from "features";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Page() {
  // Cannot use `redirect` as it will be cached,
  // meaning repeatedly clicking on the home link will show the same feature,
  // while we want to show a different feature each time.
  const { replace } = useRouter();

  useEffect(() => {
    const index = Math.floor(Math.random() * featureArr.length);
    const feature = featureArr.at(index);
    if (feature === undefined) throw new Error("Feature not found"); // Coding error
    replace(`/${feature.code}`);
  }, []);
}

export default Page;
