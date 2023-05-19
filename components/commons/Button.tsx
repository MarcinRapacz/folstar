import React from "react";

const Button = ({ children }: React.PropsWithChildren) => {
  return (
    <button className="py-4 px-12 rounded-lg bg-primary text-white">
      {children}
    </button>
  );
};

export default Button;
