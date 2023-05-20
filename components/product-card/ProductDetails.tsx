import H1 from "@/components/typography/H1";

interface ProductDetailsProps {
  title: string;
  description: string;
}

const ProductDetails = ({ title, description }: ProductDetailsProps) => {
  return (
    <div>
      <H1>{title}</H1>
      <div
        className="inner-html mt-6 flex flex-col gap-6 text-justify"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

export default ProductDetails;
