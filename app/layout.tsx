import MobileNavigation from "@/components/navigation/MobileNavigation";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/navigation/Navbar";

const font = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Firma Folstar - Sprzedaż Słodyczy i Produkcja Opakowań Foliowych",
  description:
    "Folstar to renomowana firma specjalizująca się w sprzedaży słodyczy oraz produkcji opakowań foliowych. Oferujemy szeroki wybór pysznych słodyczy, które dostarczą radość i słodkie doznania. Dodatkowo, zajmujemy się produkcją wysokiej jakości opakowań foliowych, które zapewniają optymalną ochronę i estetyczne prezentowanie produktów. Skorzystaj z naszej bogatej oferty słodyczy i profesjonalnych usług w zakresie produkcji opakowań foliowych. Jesteśmy Twoim zaufanym partnerem w branży słodyczy i opakowań foliowych.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={font.className}>
        <Navbar />

        {children}

        <MobileNavigation />
        <Footer />
      </body>
    </html>
  );
}
