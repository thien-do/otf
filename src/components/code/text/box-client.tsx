"use client";

import { Feature } from "features";
import { useRouter, useSearchParams } from "next/navigation";
import { ReactElement, useEffect, useState } from "react";
import { useCodeSearchClient } from "../search/client";
import { CodeTextBoxBase } from "./box-base";

/**
 * This is surprisingly tricky to get right.
 *
 * If we use the URL as the source of truth, then we don't need both state and effect.
 * However, this would cause caret jumping, because it takes steps
 * to go from user event to URL and back to render.
 * These steps decouple React's rendering, so it puts the caret at the end,
 * because it lost track of why the change happened.
 *
 * If we use the state as the source of truth,
 * and passively update the URL,
 * then the text is not updated if the URL is changed from elsewhere,
 * such as the suggestions in the description area.
 *
 * Our current solution is a compromise of both.
 * In practice, the URL is the source of truth, so all states are updated correctly.
 * However, in React's perspective, the URL is actually a side effect of the state.
 * The state is the source of truth for React, so it can maintain the caret position.
 */
function useText(props: { feature: Feature }): {
  text: string;
  setText: (next: string) => void;
} {
  const { feature } = props;

  const param = useSearchParams().get("text") ?? feature.texts[0];
  const { push } = useRouter();
  const getHref = useCodeSearchClient();

  const [state, setState] = useState(param);

  const setText = (next: string): void => {
    setState(next);
    const href = getHref("text", next);
    push(href, { scroll: false });
  };

  useEffect(() => {
    if (state !== param) void setState(param);
  }, [param]);

  return { text: state, setText };
}

export function CodeTextBoxClient(props: { feature: Feature }): ReactElement {
  const { feature } = props;

  const font = useSearchParams().get("font") ?? feature.fonts[0];
  const { text, setText } = useText({ feature });

  return (
    <CodeTextBoxBase
      feature={feature}
      font={font}
      setText={setText}
      text={text}
    />
  );
}
