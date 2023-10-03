import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image} from "@nextui-org/react";


const Component = () => {

  return (
    <Navbar className="bg-white min-h-[110px] text-red-400 shadow-md" position="static">
      <NavbarBrand className="flex">
<Image src="/svgs/airbnb-1.svg" width={60} height={100} alt="The Managers Logo" className="rounded-none flex" />
        <p className="font-bold hidden md:flex text-3xl text-inherit ml-4">Administradores  Airbnb</p>
      </NavbarBrand>
      <NavbarContent className=" gap-6 ml-12  hidden " justify="center"> {/* md:hidden esconde el contenido en pantallas medianas y más pequeñas */}
        <NavbarItem>
          <Link color="foreground" href="#servicios" className="text-xl font-semibold text-white hover:text-gray-400 transition-colors duration-300">
            Servicios
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#"  className="text-lg text-white hover:text-gray-400 transition-colors duration-300">
            Preguntas Frecuentes
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="text-lg text-white hover:text-gray-400 transition-colors duration-300">
            Regularizaciones
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as="a" className="text-xl py-6 px-8 font-semibold  bg-red-400 text-white hover:bg-red-600 duration-300" href="https://api.whatsapp.com/send/?phone=%2B543415883040" variant="light">
            Contactate con nosotros
          </Button>
   </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
export default Component;



