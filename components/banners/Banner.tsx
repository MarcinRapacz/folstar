import BannerHeading from "@/components/typography/BannerHeading";
import Image from "next/image";

interface BannerProps {
  label: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    source?: string;
  };
}

const Banner = ({
  label,
  image: { src, alt, width, height, source },
}: BannerProps) => {
  return (
    <section className="relative flex h-[600px] w-full flex-col justify-center px-4 text-center md:px-20 md:text-left">
      <BannerHeading>{label}</BannerHeading>
      <Image
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(0.4)",
        }}
        className="-z-10"
        src={src}
        alt={alt}
        width={width}
        height={height}
        data-source={source}
        priority
      />
    </section>
  );
};

export default Banner;
