import type { OrderProcess } from "@/components/order-process/type";
import Description from "@/components/typography/Description";
import H6 from "@/components/typography/H6";
import Link from "next/link";

interface OrderProcessItemProps extends OrderProcess {}

const OrderProcessItem = ({
  description,
  icon: Icon,
  title,
  link,
}: OrderProcessItemProps) => {
  return (
    <div className="flex flex-col gap-4">
      <Icon size={64} className="text-primary" />
      <H6>{title}</H6>
      <Description>{description}</Description>
      {link && (
        <Link className="text-sm text-primary" href={link.to}>
          {link.label}
        </Link>
      )}
    </div>
  );
};

export default OrderProcessItem;
