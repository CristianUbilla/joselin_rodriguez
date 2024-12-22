"use client";

import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { ReactNode, JSX } from "react";

type Props = {
  imageSrc?: string; // Fuente de la imagen
  altText?: string; // Texto alternativo para la imagen
  className?: string; // Clases adicionales para el card
  children?: ReactNode; // Contenido del cuerpo del card
  footer?: ReactNode; // Contenido del footer, opcional
  footerBlurred?: boolean; // Si el footer debe tener desenfoque
  imageProps?: string; // Propiedades adicionales para la imagen
  footerProps?: string; // Propiedades adicionales para el footer
  bodyProps?: ReactNode; // Propiedades adicionales para el body
};

export default function CardDumb({
  className = "",
  children,
  footer,
  footerBlurred = false,
  imageSrc,
  imageProps,
  footerProps,
  altText = "Card background",
  bodyProps,
}: Props): JSX.Element {
  return (
    <Card className={className} isFooterBlurred={footerBlurred}>
      <Image
        removeWrapper
        alt={altText}
        className={imageProps}
        src={imageSrc}
      />
      <CardBody>{bodyProps}</CardBody>
      {children && <div className="p-4">{children}</div>}
      {footer && (
        <CardFooter
          className={`absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 ${footerProps}`}
        >
          {footer}
        </CardFooter>
      )}
    </Card>
  );
}
