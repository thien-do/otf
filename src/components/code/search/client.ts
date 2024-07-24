"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { GetCodeSearch } from "./base";

export const useCodeSearchClient = (): GetCodeSearch => {
  const prev = useSearchParams();
  const code = usePathname();

  const get: GetCodeSearch = (name, value) => {
    const next = new URLSearchParams(prev.toString());
    next.set(name, value);
    const href = `${code}?${next.toString()}`;
    return href;
  };

  return get;
};
