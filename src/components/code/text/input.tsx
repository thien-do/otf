import { ReactElement } from "react";

export function CodeTextInput(props: {
  id: string;
  font: string;
  text: string;
  setText: null | ((next: string) => void);
}): ReactElement {
  const { id, text, setText, font } = props;

  return (
    <input
      id={id}
      type="text"
      //
      style={{ fontFamily: font }}
      className="text-72 leading-96 w-full overflow-hidden"
      //
      value={text}
      onChange={
        setText === null
          ? undefined
          : (event) => void setText(event.target.value)
      }
    />
  );
}
