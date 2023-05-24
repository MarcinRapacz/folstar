import Banner from "@/components/banners/Banner";
import Container from "@/components/grid/Container";
import PageContent from "@/components/grid/PageContent";
import ProductList from "@/components/product-list/ProductList";
import { CategoryService } from "@/serevices/CategoryService";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const categoryService = new CategoryService();
  const { category } = await categoryService.getBySlug(params.slug);

  if (!category) {
    return {};
  }

  return {
    title: category.seo.metaTitle,
    description: category.seo.metaDescription,
  };
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const categoryService = new CategoryService();
  const { category } = await categoryService.getBySlug(params.slug);

  if (!category) {
    notFound();
  }

  return (
    <Container>
      <Banner
        label={category.name}
        image={{
          src: category.image.url,
          alt: "Banner dla strony z kategoriami",
          width: category.image.width || 16,
          height: category.image.height || 9,
        }}
      />
      <PageContent>
        <ProductList products={category.products} />
      </PageContent>
    </Container>
  );
};

export default Page;
