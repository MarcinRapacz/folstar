import { GetCategoryBySlugQuery, Product } from "@/__generated__/graphql";
import Description from "@/components/typography/Description";
import Image from "next/image";
import Link from "next/link";

interface ProductListItemProps {
  product: NonNullable<GetCategoryBySlugQuery["category"]>["products"][0];
}

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="cursor-pointer rounded-2xl shadow-lg transition-shadow hover:shadow-lg xl:shadow-none"
    >
      {product.images.length && (
        <div className="relative h-[400px] overflow-hidden rounded-2xl">
          <Image
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src={product.images[0].url}
            alt={`Zdjęcie dla produktu - ${product.name}`}
            width={product.images[0].width || 300}
            height={product.images[0].height || 400}
          />
        </div>
      )}
      <div className="px-4 pb-12 pt-8">
        <Description>{product.name}</Description>
      </div>
    </Link>
  );
};

export default ProductListItem;
