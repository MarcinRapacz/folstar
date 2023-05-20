import Link from "next/link";
import React from "react";

interface ButtonProps {
  to: string;
  border?: boolean;
}

const Button = ({
  children,
  to,
  border,
}: React.PropsWithChildren<ButtonProps>) => {
  return (
    <Link
      href={to}
      className={`rounded-lg bg-primary px-12 py-4 text-center text-white ${
        border ? "border" : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default Button;
