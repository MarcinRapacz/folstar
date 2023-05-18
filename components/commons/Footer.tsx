import Logo from "@/components/Logo";
import Container from "@/components/grid/Container";
import Link from "next/link";

const Footer = () => {
  return (
    <Container>
      <footer className="bg-white mb-16 flex flex-col lg:flex-row gap-2 items-center lg:justify-between">
        <Logo />
        <ul className="flex flex-wrap sm:gap-4 items-center text-primary order-last sm:order-none">
          <li>
            <Link href="/" className="hidden sm:block hover:underline">
              Strona główna
            </Link>
          </li>
          <li>
            <Link href="/category" className="hidden sm:block hover:underline ">
              Oferta
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hidden sm:block hover:underline">
              Kontakt
            </Link>
          </li>
          <li>
            <Link
              href="/privacy-policy"
              className="text-sm sm:text-base hover:underline"
            >
              Polityka prywatności
            </Link>
          </li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center">
          © {new Date().getFullYear()} developed by Marcin Rapacz
        </span>
      </footer>
    </Container>
  );
};

export default Footer;
