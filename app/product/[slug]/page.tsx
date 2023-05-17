import Banner from "@/components/banners/Banner";
import Container from "@/components/grid/Container";
import PageContent from "@/components/grid/PageContent";
import ProductDetails from "@/components/product-card/ProductDetails";
import ProductGalery from "@/components/product-card/ProductGalery";
import { ProductService } from "@/serevices/ProductService";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const productService = new ProductService();
  const product = await productService.getBySlug(params.slug);

  if (!product) {
    return {};
  }

  return {
    title: product.seo.metaTitle,
    description: product.seo.metaDescription,
  };
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const productService = new ProductService();
  const product = await productService.getBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <Container>
      <Banner
        label={product.name}
        image={{
          src: product.images[0].url,
          alt: "Banner dla strony z kategoriami",
          width: product.images[0].width || 16,
          height: product.images[0].height || 9,
        }}
      />
      <PageContent>
        <div className="flex flex-col-reverse xl:grid xl:grid-cols-3 gap-6 md:gap-16">
          <div className="xl:col-span-2">
            <ProductGalery images={product.images} />
          </div>
          <div>
            <ProductDetails
              title={product.name}
              description={product.description.html}
            />
          </div>
        </div>
      </PageContent>
    </Container>
  );
};

export default Page;
