import Banner from "@/components/banners/Banner";
import ContactDetails from "@/components/contact/ContactDetails";
import Container from "@/components/grid/Container";
import PageContent from "@/components/grid/PageContent";

import contactUsBanner from "@/assets/images/contact-us-banner.jpg";
import contactUsSubbanner from "@/assets/images/contact-us-subbanner.jpg";

import Image from "next/image";
import H3 from "@/components/typography/H3";
import Description from "@/components/typography/Description";

const Page = () => {
  return (
    <Container>
      <Banner
        label="Skontatkuj się z nami"
        image={{
          src: contactUsBanner.src,
          alt: "Banner - kobieta używająca telefonu",
          width: contactUsBanner.width || 16,
          height: contactUsBanner.height || 9,
          source: "https://unsplash.com/photos/BjhUu6BpUZA",
        }}
      />
      <PageContent>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center gap-8">
            <H3>Zapraszamy do kontaktu</H3>
            <div className="flex flex-col gap-4 lg:ml-8">
              <div className="flex flex-col">
                <Description>Jaśminowa 7</Description>
                <Description>32-052 - Radziszów</Description>
              </div>
              <ContactDetails />
            </div>
          </div>
          <div className="relative">
            <Image
              className="h-full w-full object-cover"
              src={contactUsSubbanner.src}
              width={contactUsSubbanner.width}
              height={contactUsSubbanner.height}
              alt="Osoba używająca map google"
            />
          </div>
        </div>
      </PageContent>
    </Container>
  );
};

export default Page;
