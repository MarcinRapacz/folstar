import Link from "next/link";
import Image from "next/image";

import logo from "@/assets/images/folstar.png";

const Logo = () => {
  return (
    <Link href="/" className="relative z-10 h-10 w-40">
      <Image
        className="absolute inset-0 -z-50 h-full w-full object-contain object-left"
        src={logo.src}
        alt="Logo firmy Folstar"
        width={logo.width}
        height={logo.height}
        priority
      />
    </Link>
  );
};

export default Logo;
