import React from "react";

const Container = ({ children }: React.PropsWithChildren) => {
  return <main className="container mx-auto">{children}</main>;
};

export default Container;
