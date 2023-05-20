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
      className={`grid gap-4 px-4 py-8 sm:p-12 lg:min-h-[600px] lg:grid-cols-2 lg:gap-20 lg:p-20`}
    >
      <div
        className={`order-last flex flex-col justify-center lg:items-start ${
          reverse ? "lg:order-last" : "lg:order-first"
        }`}
      >
        <H3>{title}</H3>
        <div className="mb-8 mt-4 sm:mb-12 sm:mt-6">
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
