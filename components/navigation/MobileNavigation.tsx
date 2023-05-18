import Link from "next/link";
import { MdGridView, MdHome, MdPhone } from "react-icons/md";

const MobileNavigation = () => {
  return (
    <nav className="sm:hidden fixed bottom-0 left-0 w-full grid grid-cols-3 h-16 border shadow-lg text-primary bg-white opacity-90">
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
