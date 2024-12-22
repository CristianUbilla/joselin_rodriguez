"use client";

import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { ReactNode, JSX } from "react";

type props = {
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  title: string;
  content: string;
  children: ReactNode; // Contenido que activará el Popover
};

export default function PopoverDumb({
  color = "default",
  title,
  content,
  children,
}: props): JSX.Element {
  return (
    <Popover placement="top">
      {/* Componente que activa el Popover */}
      <PopoverTrigger>
        <div className={`popover-trigger-${color}`}>{children}</div>
      </PopoverTrigger>

      {/* Contenido del Popover */}
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small font-bold">{title}</div>
          <div className="text-tiny">{content}</div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
