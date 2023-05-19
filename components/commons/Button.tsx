import Link from "next/link";
import React from "react";

interface ButtonProps {
  to: string;
}

const Button = ({ children, to }: React.PropsWithChildren<ButtonProps>) => {
  return (
    <Link
      href={to}
      className="py-4 px-12 rounded-lg bg-primary text-white text-center"
    >
      {children}
    </Link>
  );
};

export default Button;
