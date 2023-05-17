import React from "react";

const Description = ({ children }: React.PropsWithChildren) => {
  return <p className="text-lg leading-normal font-light">{children}</p>;
};

export default Description;
