import HeroImage from "@/components/banners/HeroImage";
import Container from "@/components/grid/Container";
import TwoColTextImage from "@/components/grid/TwoColTextImage";

import candiesBanner from "@/assets/images/home-candies-banner.jpg";
import foilBanner from "@/assets/images/home-foil-banner.jpg";
import aboutUsBanner from "@/assets/images/home-about-us-banner.jpg";
import contactUsBanner from "@/assets/images/contact-us-banner.jpg";

import PageContent from "@/components/grid/PageContent";
import OrderProcess from "@/components/order-process/OrderProcess";
import Description from "@/components/typography/Description";
import ContactDetails from "@/components/contact/ContactDetails";

export default function Home() {
  return (
    <Container>
      <HeroImage />
      <PageContent>
        <div className="flex flex-col gap-16 lg:gap-24 xl:gap-40">
          <TwoColTextImage
            image={{
              url: candiesBanner.src,
              alt: "Banner z cukierkami",
              source:
                "https://pixabay.com/pl/photos/cukierki-%c5%82akocie-s%c5%82oik-pojemnik-1961536/",
            }}
            title="Sprzedaż cukierków"
            button={{
              label: "Zobacz więcej",
              to: "/category/sprzedaz-cukierkow",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </TwoColTextImage>
          <TwoColTextImage
            reverse
            image={{
              url: foilBanner.src,
              alt: "Banner z cukierkami",
              source:
                "https://pixabay.com/pl/photos/folia-spakowany-opakowane-967256/",
            }}
            title="Produkcja opakowań foliowych"
            button={{
              label: "Zobacz więcej",
              to: "/category/produkcja-opakowan-foliowych",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </TwoColTextImage>
          <OrderProcess />
          <TwoColTextImage
            title="O nas"
            image={{
              url: aboutUsBanner.src,
              alt: "O nas - banner",
              source:
                "https://pixabay.com/pl/photos/odcisk-o-nas-mapa-r%c4%99ka-palec-418594/",
            }}
          >
            <Description>
              Jesteśmy firmą rodzinna z ponad 20-letnim doświadczeniem w branży.
              Dzięki naszemu profesjonalizmowi i pasji tworzymy wyjątkowe
              produkty, spełniające oczekiwania naszych klientów. Możesz nam
              zaufać. Zapraszamy do współpracy już dziś.
            </Description>
          </TwoColTextImage>
          <TwoColTextImage
            reverse
            title="Zapraszamy do kontaktu"
            image={{
              url: contactUsBanner.src,
              alt: "Zapraszamy do kontaktu - banner",
              source:
                "https://pixabay.com/pl/photos/e-mail-poczta-r%c4%99ka-smartfon-pisa%c4%87-6370595/",
            }}
          >
            <ContactDetails />
          </TwoColTextImage>
        </div>
      </PageContent>
    </Container>
  );
}
