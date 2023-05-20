"use client";

import { GetProductBySlugQuery } from "@/__generated__/graphql";
import Image from "next/image";
import { useState } from "react";

type Images = NonNullable<GetProductBySlugQuery["product"]>["images"];

interface ProductGaleryProps {
  images: Images;
}

const ProductGalery = ({ images }: ProductGaleryProps) => {
  const [selectedImage, setImage] = useState<Images[0]>(images[0]);
  const [hoverImage, onHover] = useState<Images[0] | null>(null);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative h-60 overflow-hidden rounded-2xl md:h-[540px]">
        <Image
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src={hoverImage?.url || selectedImage.url}
          alt={hoverImage?.fileName || selectedImage.fileName}
          width={hoverImage?.width || selectedImage.width || 16}
          height={hoverImage?.height || selectedImage.height || 9}
        />
      </div>
      {images.length > 1 && (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
          {images.map((image) => (
            <div
              onClick={() => setImage(image)}
              onMouseOver={() => onHover(image)}
              onMouseLeave={() => onHover(null)}
              key={image.id}
              className="relative cursor-pointer overflow-hidden rounded-2xl md:h-28"
            >
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                src={image.url}
                alt={image.fileName}
                width={160}
                height={160}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGalery;
