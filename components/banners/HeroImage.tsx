import Button from "@/components/commons/Button";
import H1 from "@/components/typography/H1";

import Image from "next/image";
import heroImage from "@/assets/images/hero-image.svg";
import Description from "@/components/typography/Description";

const HeroImage = () => {
  return (
    <header className="relative flex h-screen flex-col items-center justify-center gap-10 px-4 md:h-[864px] md:items-start md:px-20">
      <div className="flex max-w-xl flex-col gap-4 text-center md:text-left">
        <H1>Twój partner w biznesie</H1>
        <div className="block">
          <Description>
            Wyjątkowe opakowania foliowe, które chronią i zachwycają. Odkryj
            nasz świat słodkich uniesień!
          </Description>
        </div>
      </div>
      <div className="mb-20 lg:mb-0">
        <Button to="/category">Zobacz szczegóły</Button>
      </div>
      <Image
        className="absolute inset-0 -z-50 h-full w-full object-cover"
        src={heroImage.src}
        alt="Hero image - fale"
        width={heroImage.width}
        height={heroImage.height}
      />
    </header>
  );
};

export default HeroImage;
