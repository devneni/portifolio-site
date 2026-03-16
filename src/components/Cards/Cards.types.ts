import type { IconType } from "react-icons";

export interface CardsProps {
  logo: IconType
  title:string;
  description?:string
  color:string
  url?: string;
  onClick?: () => void;
}