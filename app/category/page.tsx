import Banner from "@/components/banners/Banner";
import Container from "@/components/grid/Container";
import { CategoryService } from "@/serevices/CategoryService";

import categoriesBanner from "@/assets/images/categories-banner.jpg";
import H1 from "@/components/typography/H1";
import PageContent from "@/components/grid/PageContent";
import H3 from "@/components/typography/H3";
import CategoryItem from "@/components/CategoryItem";

export const metadata = {
  title: "Cukierki odpustowe i opakowania foliowe - Folstar Radziszów, Kraków",
  description:
    "Zapraszamy do Folstar - oferujemy sprzedaż cukierków odpustowych oraz produkcję opakowań foliowych z perforacją. Znajdziesz nas w Radziszowie koło Krakowa.",
};

const Page = async () => {
  const categoryService = new CategoryService();
  const categories = await categoryService.getAll();

  return (
    <Container>
      <Banner
        label="Nasza oferta"
        image={{
          src: categoriesBanner.src,
          alt: "Banner dla strony z kategoriami",
          width: categoriesBanner.width,
          height: categoriesBanner.height,
        }}
      />
      <PageContent>
        <div className="lg:w-1/2">
          <H1>Odkryj naszą szeroką ofertę produktów i usług</H1>
        </div>
        <div className="mt-8">
          <H3>
            Sprzedajemy cukierki odpustowe oraz produkujemy opakowania foliowe.
            Wybierz naszą ofertę już dziś!
          </H3>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 md:gap-20 mt-16 md:mt-24">
          {categories.map((category) => (
            <CategoryItem category={category} key={category.id} />
          ))}
        </div>
      </PageContent>
    </Container>
  );
};

export default Page;