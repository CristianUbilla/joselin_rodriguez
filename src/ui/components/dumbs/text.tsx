type Props = {
  text: string; // El texto que se mostrará
  size?: number; // Tamaño del texto en píxeles (opcional)
  color?: string; // Color del texto (opcional)
  isBold?: boolean; // Si el texto debe ser negrita (opcional)
};

export default function TextDumb({
  text,
  size = 16, // Tamaño por defecto en píxeles
  color = "black",
  isBold = false,
}: Props) {
  return (
    <p
      style={{
        fontSize: `${size}px`, // Usa directamente el tamaño en píxeles
        color,
        fontWeight: isBold ? "bold" : "normal",
      }}
    >
      {text}
    </p>
  );
}
