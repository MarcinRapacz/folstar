import Link from "next/link";
import React from "react";

interface ButtonProps {
  to: string;
}

const Button = ({ children, to }: React.PropsWithChildren<ButtonProps>) => {
  return (
    <Link
      href={to}
      className="rounded-lg bg-primary px-12 py-4 text-center text-white"
    >
      {children}
    </Link>
  );
};

export default Button;
