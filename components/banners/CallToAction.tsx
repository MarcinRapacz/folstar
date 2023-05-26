import Button from "@/components/commons/Button";
import H3 from "@/components/typography/H3";

const CallToAction = () => {
  return (
    <div className="flex flex-col justify-between gap-4 bg-primary px-4 py-20 text-center text-white sm:px-16 xl:flex-row xl:items-start xl:gap-16">
      <H3>Skorzystaj z naszej niepowtarzalnej oferty już teraz!</H3>
      <Button border to="/contact">
        Zobacz więcej
      </Button>
    </div>
  );
};

export default CallToAction;
