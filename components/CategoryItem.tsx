import { GetCategoryListQuery } from "@/__generated__/graphql";
import Description from "@/components/typography/Description";
import H6 from "@/components/typography/H6";
import Image from "next/image";
import Link from "next/link";

interface CategoryItemProps {
  category: NonNullable<GetCategoryListQuery["categories"]>[0];
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="w-full transition-shadow cursor-pointer hover:shadow-lg rounded-md overflow-hidden"
    >
      <div className="relative h-[400px]">
        <Image
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src={category.image.url}
          alt={`Zdjęcie dla kategorii - ${category.name}`}
          width={category.image.width || 16}
          height={category.image.height || 9}
        />
      </div>
      <div className="px-4 py-6 md:p-16 border rounded-b-md">
        <H6>{category.name}</H6>
        <div className="mt-6">
          <Description>{category.description}</Description>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItem;
