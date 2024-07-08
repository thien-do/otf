import React from "react";

interface Props { id: string; children: React.ReactNode; }

const Label: React.FC<Props> = ({ id, children }) => {
  return (
    <label 
      htmlFor={id} 
      className="text-15 leading-24 uppercase block"
    >
      {children}
    </label>
  );
};

export default Label;
