"use client"
import { Feature } from "features";
import { useRouter, useSearchParams } from "next/navigation";
import { ReactElement } from "react";

interface Props {
  id: string
  feature: Feature
}

export default function Input(props: Props): ReactElement {
  const { id, feature } = props

  const router = useRouter()
  const searchParams = useSearchParams()

  const font = searchParams.get('font') ?? feature.fonts[0]
  const text = searchParams.get('text') ?? feature.texts[0]

  return (
    <input
      id={id}
      type="text"
      style={{ fontFamily: font }}
      className="text-72 leading-96 w-full overflow-hidden"
      defaultValue={text}
      onChange={e => {
        const params = new URLSearchParams(searchParams)
        params.set('text', e.target.value)
        router.push(`/${feature.code}?${params.toString()}`)
      }}
    />
  )
}
