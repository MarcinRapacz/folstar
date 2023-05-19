import Button from "@/components/commons/Button";
import H1 from "@/components/typography/H1";

import Image from "next/image";
import heroImage from "@/assets/images/hero-image.svg";
import Description from "@/components/typography/Description";

const HeroImage = () => {
  return (
    <header className="relative h-screen md:h-[864px] flex flex-col justify-center items-center md:items-start gap-10 px-4 md:px-8 lg:px-20">
      <div className="max-w-xl text-center md:text-left flex flex-col gap-4">
        <H1>Twój partner w biznesie</H1>
        <div className="block">
          <Description>
            Wyjątkowe opakowania foliowe, które chronią i zachwycają. Odkryj
            nasz świat słodkich uniesień!
          </Description>
        </div>
      </div>
      <div className="mb-6 sm:mb-0">
        <Button to="/category">Zobacz szczegóły</Button>
      </div>
      <Image
        className="absolute inset-0 w-full h-full object-cover -z-50"
        src={heroImage.src}
        alt="Hero image - fale"
        width={heroImage.width}
        height={heroImage.height}
      />
    </header>
  );
};

export default HeroImage;
