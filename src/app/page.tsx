"use client"
import { featureArr } from "features";
import { useRouter } from 'next/navigation';
import { ReactElement, useEffect } from "react";

export default function Page(): ReactElement | null {
  const router = useRouter();
  useEffect(() => {
    // redirect to random feature
    const feature = featureArr[Math.floor(Math.random() * featureArr.length)];
    router.push(`/${feature.code}`);
  }, []);
  return null;
}
