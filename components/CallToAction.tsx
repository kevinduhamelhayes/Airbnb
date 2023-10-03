import { FaBalanceScale } from 'react-icons/fa';
import Image from 'next/image';


export default function CallToAction() {
  return (
    <div className="relative py-12 md:py-24 bg-red-400 text-white font-bold w-full h-[400px]">
      <Image src="/deptos/image1.jpeg" alt="Fondo de redes sociales" width={1600} height={600} className="absolute top-0 left-0 w-full h-full object-cover opacity-50 z-0" />
      <div className="relative z-10 p-8">
        <div className='flex flex-col items-center justify-center'>
        <h2 className="text-4xl md:text-5xl mb-6">¿Listo para olvidate de los problemas?</h2>
        <p className="text-xl md:text-2xl mb-8">Deja la gestión en nuestras manos y enfócate en recibir ganancias.</p>
        <button className="transition duration-300 ease-in-out transform hover:scale-105 bg-white text-red-500 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-red-900 hover:text-white">
          Comienza Ahora
        </button>
        </div>
      </div>
    </div>
  );
}
