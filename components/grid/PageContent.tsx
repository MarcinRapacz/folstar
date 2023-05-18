import React from "react";

const PageContent = ({ children }: React.PropsWithChildren) => {
  return <section className="px-4 py-20 md:px-20 md:py-32">{children}</section>;
};

export default PageContent;
