import Button from "@/components/commons/Button";
import H3 from "@/components/typography/H3";

const CallToAction = () => {
  return (
    <div className="flex flex-col justify-between gap-4 bg-primary px-16 py-20 text-center text-white xl:flex-row">
      <H3>Zapraszamy do kontaktu juz dziś</H3>
      <Button border to="/contact">
        Zobacz więcej
      </Button>
    </div>
  );
};

export default CallToAction;
