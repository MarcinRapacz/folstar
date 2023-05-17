import BannerHeading from "@/components/typography/BannerHeading";
import Image from "next/image";

interface BannerProps {
  label: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

const Banner = ({ label, image: { src, alt, width, height } }: BannerProps) => {
  return (
    <section className="px-4 md:px-20 text-center md:text-left w-full h-[600px] relative flex flex-col justify-center">
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
        priority
      />
    </section>
  );
};

export default Banner;
