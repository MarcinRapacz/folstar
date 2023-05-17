import React from "react";

const PageContent = ({ children }: React.PropsWithChildren) => {
  return <section className="p-4 md:px-20 md:py-32">{children}</section>;
};

export default PageContent;
