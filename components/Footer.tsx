import Link from "next/link";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Image } from '@/components/ui/image';

const Footer1 = () => {
  return (
    <footer className="flex flex-col min-h-[250px] w-full md:flex-col items-center space-y-10 bg-white px-20 py-10 font-medium text-red-500">
      <div className="flex w-full flex-col md:flex-row md:justify-between space-y-5 md:space-y-0">
        <figure className="flex flex-col items-center ">
          <Image src="/svgs/airbnb-1.svg" width={200} height={200} alt="The Managers Logo" className="rounded-none" />
        </figure>
        <div>
          <h2 className="flex items-center space-x-2 text-2xl">
            <span>Administradores Airbnb</span>
            
          </h2>
          <div className="mt-8 flex flex-col gap-8 justify-around">
            <span className="flex items-center space-x-4">
              <FaPhoneAlt />
              <span>+5493415883040</span>
            </span>
            <span className="flex items-center space-x-4">
              <FaEnvelope />
              <a
                className="hover:text-blue-400 transition-colors duration-200 font-semibold text-lg"
                href="mailto:contact@administradoresairbnb.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                contact@administradoresairbnb.com
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="my-4 w-full border-t border-slate-500" />
      <div className="flex flex-col mt-4 w-full md:flex-row items-center justify-between">
        <ul className="flex flex-row gap-8">
          <li className="cursor-pointer hover:underline">Nuestros Servicios</li>
          <li className="cursor-pointer hover:underline">Testimonios</li>
          <li className="cursor-pointer hover:underline">Portafolio</li>
          <li className="cursor-pointer hover:underline">Contacto</li>
        </ul>
        <span className="mt-8 md:mt-0">
          &copy; {new Date().getFullYear()} This website is made with{" "}
          <Link
            className="hover:text-cyan-400 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500 animate-gradient-x"
            href="https://www.devink.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            devink.dev
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer1;
