import Button from "@/components/commons/Button";
import H3 from "@/components/typography/H3";
import Image from "next/image";

interface TwoColTextImageProps {
  title: string;
  button?: {
    label: string;
    to: string;
  };
  image: {
    url: string;
    alt: string;
    source?: string;
  };
  reverse?: boolean;
}

const TwoColTextImage = ({
  title,
  button,
  image,
  reverse,
  children,
}: React.PropsWithChildren<TwoColTextImageProps>) => {
  return (
    <section className={`grid gap-4 lg:min-h-[440px] lg:grid-cols-2 lg:gap-20`}>
      <div
        className={`order-last flex flex-col justify-center lg:items-start ${
          reverse ? "lg:order-last" : "lg:order-first"
        }`}
      >
        <H3>{title}</H3>
        <div className="mb-8 mt-4 sm:mb-12 sm:mt-6">{children}</div>
        {button && <Button to={button.to}>{button.label}</Button>}
      </div>
      <div className="relative">
        <Image
          className="h-full w-full object-cover"
          src={image.url}
          alt={image.alt}
          width={750}
          height={440}
          data-source={image.source}
        />
      </div>
    </section>
  );
};

export default TwoColTextImage;
