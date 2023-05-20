import { MdPhone, MdEmail } from "react-icons/md";

const ContactDetails = () => {
  return (
    <div className="flex flex-col gap-4 text-primary">
      <div className="flex flex-row items-center gap-4">
        <MdPhone className="text-primary" size={24} /> 123 456 798
      </div>
      <div className="flex flex-row items-center gap-4">
        <MdPhone className="text-primary" size={24} /> 123 456 798
      </div>
      <div className="flex flex-row items-center gap-4">
        <MdEmail className="text-primary" size={24} /> test@test.pl
      </div>
    </div>
  );
};

export default ContactDetails;
