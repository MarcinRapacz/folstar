import Link from "next/link";
import { MdGridView, MdHome, MdPhone } from "react-icons/md";

const MobileNavigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 z-20 grid h-16 w-full grid-cols-3 border bg-white text-primary opacity-90 shadow-lg sm:hidden">
      <Link href="/" className="flex items-center justify-center">
        <MdHome size={32} />
      </Link>
      <Link
        href="/category"
        className="flex items-center justify-center border-x"
      >
        <MdGridView size={32} />
      </Link>
      <Link href="/contact" className="flex items-center justify-center">
        <MdPhone size={32} />
      </Link>
    </nav>
  );
};

export default MobileNavigation;
