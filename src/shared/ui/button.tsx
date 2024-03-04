import React, { DetailedHTMLProps } from "react";

export const Button = (props: DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
  return <button
    {...props}
  />;
};
