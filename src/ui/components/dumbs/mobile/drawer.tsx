"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { CiMenuBurger } from "react-icons/ci";
import IconDumb from "../icon";

export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      {/* Botón para abrir el Drawer */}
      <Button
        className="bg-transparent text-[#ff6f61] hover:bg-[#ff6f61] hover:text-white p-2 rounded-lg shadow-md transition-all duration-300"
        onPress={onOpen}
      >
        <IconDumb Icon={CiMenuBurger} size={24} color="#ff6f61" />
      </Button>

      {/* Drawer con animación personalizada */}
      <Drawer
        isOpen={isOpen}
        motionProps={{
          variants: {
            enter: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.5 },
            },
            exit: {
              x: 100,
              opacity: 0,
              transition: { duration: 0.5 },
            },
          },
        }}
        onOpenChange={onOpenChange}
        className="bg-[#fefefe] shadow-lg rounded-lg"
      >
        <DrawerContent>
          {(onClose) => (
            <>
              {/* Header del Drawer */}
              <DrawerHeader className="flex flex-col gap-2 text-center bg-[#ff6f61] text-white p-4 rounded-t-lg">
                <h2 className="text-3xl font-bold">Menú</h2>
                <p className="text-sm">Explora las secciones disponibles</p>
              </DrawerHeader>

              {/* Cuerpo del Drawer */}
              <DrawerBody className="flex flex-col gap-4 p-4">
                <a
                  href="#Inicio"
                  onClick={onClose}
                  className="text-2xl text-[#ff6f61] hover:underline hover:text-[#e2544b] transition-all duration-300"
                >
                  Inicio
                </a>
                <a
                  href="#Educacion"
                  onClick={onClose}
                  className="text-2xl text-[#ff6f61] hover:underline hover:text-[#e2544b] transition-all duration-300"
                >
                  Educación
                </a>
                <a
                  href="#Servicio"
                  onClick={onClose}
                  className="text-2xl text-[#ff6f61] hover:underline hover:text-[#e2544b] transition-all duration-300"
                >
                  Servicios
                </a>
              </DrawerBody>

              {/* Footer del Drawer */}
              <DrawerFooter className="flex justify-between items-center p-4 border-t border-gray-200">
                <Button
                  className="bg-[#ff6f61] text-white px-4 py-2 rounded-lg hover:bg-[#e2544b] transition-all duration-300"
                  onPress={onClose}
                >
                  Cerrar
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
