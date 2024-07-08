"use client"
import { ReactElement } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface QueryProps {
  type: "font" | "text";
  value: string;
  label: string;
}

// For fonts and texts
export function QueryLink({ type, value, label }: QueryProps): ReactElement {
  const code = usePathname()
  const params = new URLSearchParams({ [type]: value })

  return (
    <Link href={`${code}?${params.toString()}`} className="underline">
      {label}
    </Link>
  );
};

interface CodeProps {
  value: string;
  label: string;
}

export function CodeLink({ value, label }: CodeProps): ReactElement {
  return (
    <Link
      href="/[code]"
      as={`/${value}`}
      scroll={false}
      shallow
      className="underline"
    >
      {label}
    </Link>
  )
};
