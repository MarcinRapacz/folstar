import Button from "@/components/commons/Button";
import Description from "@/components/typography/Description";
import H3 from "@/components/typography/H3";
import Image from "next/image";

interface TwoColTextImageProps {
  title: string;
  description: string;
  button: {
    label: string;
    to: string;
  };
  image: {
    url: string;
    alt: string;
  };
  reverse?: boolean;
}

const TwoColTextImage = ({
  title,
  button,
  description,
  image,
  reverse,
}: TwoColTextImageProps) => {
  return (
    <section
      className={`grid lg:grid-cols-2 gap-4 lg:gap-20 px-4 py-8 sm:p-12 lg:p-20 lg:min-h-[600px]`}
    >
      <div
        className={`flex flex-col lg:items-start justify-center order-last ${
          reverse ? "lg:order-last" : "lg:order-first"
        }`}
      >
        <H3>{title}</H3>
        <div className="mt-4 mb-8 sm:mt-6 sm:mb-12">
          <Description>{description}</Description>
        </div>
        <Button to={button.to}>{button.label}</Button>
      </div>
      <div className="relative">
        <Image
          className="h-full w-full object-cover"
          src={image.url}
          alt={image.alt}
          width={750}
          height={440}
        />
      </div>
    </section>
  );
};

export default TwoColTextImage;
