import {
  Navbar,
  NavbarBrand
} from "@nextui-org/react";
import TextDumb from "../text";
import DrawerDumb from "./drawer";

export default function NavBarDumbMobile() {
  return (
    <Navbar className="shadow-md h-15 px fixed">
      <NavbarBrand>
        <DrawerDumb />
        <TextDumb text="Joselin Rodriguez" size={30} color="#ff6f61" isBold />
      </NavbarBrand>
    </Navbar>
  );
}
