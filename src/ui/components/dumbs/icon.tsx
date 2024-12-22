import { IconType } from "react-icons";

type props = {
  Icon: IconType; // Tipo para aceptar cualquier ícono de react-icons
  size?: number;  // Tamaño opcional
  color?: string; // Color opcional
};

export default function IconDumb({ Icon, size = 40, color = "white" }: props) {
  return <Icon size={size} color={color} />;
}
