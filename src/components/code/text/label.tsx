import { ReactElement, ReactNode } from "react";

export const CodeTextLabel = (props: {
  id: string;
  children: ReactNode;
}): ReactElement => {
  const { id, children } = props;

  return (
    <label htmlFor={id} className="text-15 leading-24 uppercase block">
      {children}
    </label>
  );
};
