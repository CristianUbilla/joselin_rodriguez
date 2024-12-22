"use client";

import IconDumb from "@/ui/components/dumbs/icon";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function FooterDumb() {
  return (
    <footer className="mt-auto w-full bg-gray-800 text-white py-4 flex flex-col items-center">
      <p className="text-sm">© 2024 Joselin Rodríguez</p>
      <nav className="flex gap-4 mt-2">
        <a href="#Inicio" className="hover:underline">
          Sobre mí
        </a>
        <p>
          Todos los derechos reservados
        </p>
      </nav>
      <div className="flex gap-4 mt-2">
        <a href="https://wa.me/+56976776478" target="_blank" rel="noopener noreferrer">
          <IconDumb Icon={FaWhatsapp} />
        </a>
        <a href="https://www.instagram.com/joshi_ure/" target="_blank" rel="noopener noreferrer">
          <IconDumb Icon={FaInstagram} />
        </a>
        <a
          href="https://www.linkedin.com/in/joselin-rodr%C3%ADguez-41983a321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconDumb Icon={FaLinkedin} />
        </a>
      </div>
    </footer>
  );
}
