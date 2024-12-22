"use client";

import { Button } from "@nextui-org/react";
import { ReactNode } from "react";

type props = {
  label: string; // Texto del botón
  onPress?: () => void; // Acción al hacer clic
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"; // Color opcional
  variant?:
    | "solid"
    | "bordered"
    | "light"
    | "flat"
    | "ghost"
    | "shadow"
    | "faded"; // Variante opcional
  children?: ReactNode; // Para admitir íconos o contenido adicional
};

export default function ButtonDumb({
  label,
  onPress,
  color = "primary",
  variant = "solid",
  children,
}: props) {
  return (
    <Button color={color} variant={variant} onPress={onPress}>
      <div className="flex items-center gap-2 w-[300px] justify-center">
        {children}
        {label}
      </div>
    </Button>
  );
}
