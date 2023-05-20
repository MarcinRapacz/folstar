import React from "react";

const H1 = ({ children }: React.PropsWithChildren) => {
  return (
    <h1 className="text-4xl font-light md:text-5xl md:leading-normal">
      {children}
    </h1>
  );
};

export default H1;
