import React from "react";

const Description = ({ children }: React.PropsWithChildren) => {
  return <p className="text-lg font-light leading-normal">{children}</p>;
};

export default Description;
