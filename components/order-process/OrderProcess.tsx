import OrderProcessItem from "@/components/order-process/OrderProcessItem";
import type { OrderProcess } from "@/components/order-process/type";
import { MdPhone, MdUpdate, MdLocalShipping } from "react-icons/md";

const orderProcess: OrderProcess[] = [
  {
    title: "Złóż zamówienie",
    description:
      "Zadzwoń lub odwiedź nas, aby złożyć zamówienie i skorzystać z naszych usług!",
    icon: MdPhone,
    link: {
      label: "Zobacz więcej",
      to: "/contact",
    },
  },
  {
    title: "Szybka realizacja",
    description:
      "Dostępne od ręki lub ustalimy termin realizacji. Składaj zamówienie i ciesz się wyborem!",
    icon: MdUpdate,
  },
  {
    title: "Dogodna forma odbioru",
    description:
      "Odbiór osobisty, kurier lub dostawa przez nas. Wybierz dogodną opcję!",
    icon: MdLocalShipping,
  },
];

const OrderProcess = () => {
  return (
    <section className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      {orderProcess.map((process) => (
        <OrderProcessItem key={process.title} {...process} />
      ))}
    </section>
  );
};

export default OrderProcess;
