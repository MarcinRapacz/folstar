import React from "react";

const BannerHeading = ({ children }: React.PropsWithChildren) => {
  return <h2 className="text-5xl font-thin text-white">{children}</h2>;
};

export default BannerHeading;
