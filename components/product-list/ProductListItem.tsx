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
      className="transition-shadow rounded-2xl hover:shadow-lg cursor-pointer"
    >
      {product.images.length && (
        <div className="relative h-[400px] rounded-2xl overflow-hidden">
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
      <div className="px-4 pt-8 pb-12">
        <Description>{product.name}</Description>
      </div>
    </Link>
  );
};

export default ProductListItem;
