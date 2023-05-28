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
import TestimonialItem from "@/components/testimonial/TestimonialItem";
import CallToAction from "@/components/banners/CallToAction";

export default function Home() {
  return (
    <Container>
      <HeroImage />
      <PageContent>
        <div className="flex flex-col gap-16 lg:gap-24 xl:gap-40">
          <TwoColTextImage
            image={{
              url: candiesBanner.src,
              alt: "Banner ze słodyczami",
              source:
                "https://pixabay.com/pl/photos/cukierki-%c5%82akocie-s%c5%82oik-pojemnik-1961536/",
            }}
            title="Sprzedaż słodyczy"
            button={{
              label: "Zobacz więcej",
              to: "/category/sprzedaz-slodyczy",
            }}
          >
            Zapraszamy do naszej firmy, specjalizujemy się w handlu słodyczami
            odpustowymi. Oferujemy szeroki wybór pyszności, które z pewnością
            zachwycą podniebienie Twoje i Twoich klientów . Nasza bogata oferta
            zaspokoi nawet najbardziej wyrafinowane gusta.
          </TwoColTextImage>
          <TwoColTextImage
            reverse
            image={{
              url: foilBanner.src,
              alt: "Banner ze słodyczami",
            }}
            title="Produkcja opakowań foliowych"
            button={{
              label: "Zobacz więcej",
              to: "/category/produkcja-opakowan-foliowych",
            }}
          >
            Specjalizujemy się w produkcji ozdobnych opakowań foliowych.
            Oferujemy także usługi perforacji i cięcia folii, aby dostosować
            nasze produkty do Twoich indywidualnych potrzeb. Dzięki naszej
            wiedzy i doświadczeniu w branży, jesteśmy w stanie dostarczyć Ci
            wysokiej jakości opakowania, które dodadzą elegancji i atrakcyjności
            Twoim produktom.
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
              source: "https://unsplash.com/photos/BjhUu6BpUZA",
            }}
          >
            <ContactDetails />
          </TwoColTextImage>
          <TestimonialItem />
          <CallToAction />
        </div>
      </PageContent>
    </Container>
  );
}
