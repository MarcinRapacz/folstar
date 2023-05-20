import Description from "@/components/typography/Description";
import H6 from "@/components/typography/H6";
import { MdAccountCircle, MdFormatQuote } from "react-icons/md";

const TestimonialItem = () => {
  return (
    <section>
      <figure className="mx-auto max-w-screen-md text-center">
        <MdFormatQuote className="mx-auto text-primary" size={64} />
        <H6>
          <blockquote>
            &quot;Jestem klientem od wielu lat i zawsze otrzymuję doskonałą
            obsługę. Wasza firma niezmiennie przekracza moje oczekiwania.
            Niezawodność, profesjonalizm i wyjątkowa atmosfera sprawiają, że
            wracam tu zawsze z przyjemnością!&quot;
          </blockquote>
        </H6>
        <figcaption className="mt-6 flex items-center justify-center space-x-3">
          <MdAccountCircle size={24} />
          <Description>Andrzej</Description>
        </figcaption>
      </figure>
    </section>
  );
};

export default TestimonialItem;
