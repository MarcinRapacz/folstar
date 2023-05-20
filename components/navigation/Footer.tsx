import Logo from "@/components/commons/Logo";
import Container from "@/components/grid/Container";
import Link from "next/link";

const Footer = () => {
  return (
    <Container>
      <footer className="mb-16 flex flex-col items-center gap-2 bg-white lg:flex-row lg:justify-between">
        <Logo />
        <ul className="order-last flex flex-wrap items-center text-primary sm:order-none sm:gap-4">
          <li>
            <Link href="/" className="hidden hover:underline sm:block">
              Strona główna
            </Link>
          </li>
          <li>
            <Link href="/category" className="hidden hover:underline sm:block ">
              Oferta
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hidden hover:underline sm:block">
              Kontakt
            </Link>
          </li>
          <li>
            <Link
              href="/privacy-policy"
              className="text-sm hover:underline sm:text-base"
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
