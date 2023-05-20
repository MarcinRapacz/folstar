import Logo from "@/components/commons/Logo";
import Container from "@/components/grid/Container";
import Link from "next/link";

const Navbar = () => {
  return (
    <Container>
      <section className="flex flex-row items-center justify-center px-4 sm:justify-between md:px-20">
        <Logo />
        <nav className="hidden sm:block">
          <ul className="flex flex-row items-center gap-4 hover:text-primary">
            <li className="p-4">
              <Link href="/">Strona główna</Link>
            </li>
            <li className="p-4">
              <Link href="/category">Nasza oferta</Link>
            </li>
            <li className="p-4">
              <Link href="/contact">Kontakt</Link>
            </li>
          </ul>
        </nav>
      </section>
    </Container>
  );
};

export default Navbar;
