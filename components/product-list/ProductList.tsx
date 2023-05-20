import { GetCategoryBySlugQuery } from "@/__generated__/graphql";
import ProductListItem from "@/components/product-list/ProductListItem";
import H4 from "@/components/typography/H4";

interface ProductListProps {
  products: NonNullable<GetCategoryBySlugQuery["category"]>["products"];
}

const ProductList = ({ products }: ProductListProps) => {
  if (products.length === 0) {
    return <H4>Nie znaleziono produktów</H4>;
  }

  return (
    <div className="grid gap-x-16 gap-y-4 sm:grid-cols-2 sm:gap-y-12 xl:grid-cols-4">
      {products.map((product) => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
