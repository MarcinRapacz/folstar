import type { IconType } from "react-icons";

export interface OrderProcess {
  icon: IconType;
  title: string;
  description: string;
  link?: {
    to: string;
    label: string;
  };
}
