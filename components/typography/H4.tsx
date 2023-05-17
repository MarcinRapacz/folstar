import React from "react";

const H4 = ({ children }: React.PropsWithChildren) => {
  return (
    <h4 className="text-xl md:text-4xl md:leading-normal font-thin">
      {children}
    </h4>
  );
};

export default H4;
