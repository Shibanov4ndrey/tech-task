import React, { DetailedHTMLProps } from "react";

export const Input = (props: DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
  return <input
    {...props}
  />;
};
