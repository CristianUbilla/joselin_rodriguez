import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import TextDumb from "./text";

export default function NavBarDumb() {
  return (
    <Navbar className="shadow-md h-20 px">
      <NavbarBrand >
        <TextDumb text="Joselin Rodriguez" size={30} color="#ff6f61" isBold/>
      </NavbarBrand>
      <NavbarContent className="flex gap-3" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#Inicio">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#Educacion">
            Educación
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#Servicio">
            Servicios
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
