import React from "react";

import { Tw } from "styles";

interface Props { id: string; children: React.ReactNode; }

const Label: React.FC<Props> = ({ id, children }) => {
  const tw = Tw().text15().leading24().uppercase().block().$();
  return <label htmlFor={id} className={tw}>{children}</label>;
};

export default Label;
