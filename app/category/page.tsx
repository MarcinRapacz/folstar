import Banner from "@/components/banners/Banner";
import Container from "@/components/grid/Container";
import { CategoryService } from "@/serevices/CategoryService";

import categoriesBanner from "@/assets/images/categories-banner.jpg";
import H1 from "@/components/typography/H1";
import PageContent from "@/components/grid/PageContent";
import CategoryItem from "@/components/category/CategoryItem";
import Description from "@/components/typography/Description";

export const metadata = {
  title: "Słodycze odpustowe i opakowania foliowe - Folstar Radziszów, Kraków",
  description:
    "Zapraszamy do Folstar - oferujemy sprzedaż słodyczy odpustowych oraz produkcję opakowań foliowych z perforacją. Znajdziesz nas w Radziszowie koło Krakowa.",
};

const Page = async () => {
  const categoryService = new CategoryService();
  const { categories } = await categoryService.getAll();

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
          <Description>
            Sprzedajemy słodycze odpustowe oraz produkujemy opakowania foliowe.
            Zobacz naszą ofertę już dziś!
          </Description>
        </div>
        <div className="mt-16 flex flex-col gap-8 md:mt-24 md:gap-20 lg:flex-row">
          {categories.map((category) => (
            <CategoryItem category={category} key={category.id} />
          ))}
        </div>
      </PageContent>
    </Container>
  );
};

export default Page;
