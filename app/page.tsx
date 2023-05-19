import HeroImage from "@/components/banners/HeroImage";
import Container from "@/components/grid/Container";
import TwoColTextImage from "@/components/grid/TwoColTextImage";

import candiesBanner from "@/assets/images/home-candies-banner.jpg";
import foilBanner from "@/assets/images/home-foil-banner.jpg";

export default function Home() {
  return (
    <Container>
      <HeroImage />
      <TwoColTextImage
        image={{ url: candiesBanner.src, alt: "Banner z cukierkami" }}
        title="Sprzedaż cukierków"
        button={{ label: "Zobacz więcej", to: "/category/sprzedaz-cukierkow" }}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
      />
      <TwoColTextImage
        reverse
        image={{ url: foilBanner.src, alt: "Banner z cukierkami" }}
        title="Produkcja opakowań foliowych"
        button={{
          label: "Zobacz więcej",
          to: "/category/produkcja-opakowan-foliowych",
        }}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
      />
    </Container>
  );
}
