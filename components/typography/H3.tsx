import React from "react";

const H3 = ({ children }: React.PropsWithChildren) => {
  return (
    <h3 className="text-2xl font-thin md:text-4xl md:leading-normal">
      {children}
    </h3>
  );
};

export default H3;
