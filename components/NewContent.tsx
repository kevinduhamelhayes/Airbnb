"use client";

import React from 'react';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const NewContent = () => {
  return (
    <Card className='w-full max-w-7xl mx-auto bg-card rounded-lg shadow-lg overflow-hidden mt-20 animate-fade-in'>
      <div className='flex flex-col md:flex-row w-full'>
        <div className='w-full md:w-1/2 p-6 space-y-6'>
          <ul className="space-y-6">
            <li className='transition-all duration-300 hover:translate-x-1'>
              <h3 className='text-2xl font-semibold text-primary'>Tranquilidad y Seguridad</h3>
              <p className='text-lg text-muted-foreground'>Gestionamos tu inmueble de inicio a fin, asegurando la calidad y la integridad de tu propiedad. Tú descansas, mientras nosotros trabajamos.</p>
            </li>
            <li className='transition-all duration-300 hover:translate-x-1'>
              <h3 className='text-2xl font-semibold text-primary'>Inversión Inteligente</h3>
              <p className='text-lg text-muted-foreground'>Transformamos inmuebles en desuso en activos rentables. Optimizamos los precios y la ocupación para maximizar tus retornos.</p>
            </li>
            <li className='transition-all duration-300 hover:translate-x-1'>
              <h3 className='text-2xl font-semibold text-primary'>Soporte Continuo</h3>
              <p className='text-lg text-muted-foreground'>Nuestro equipo está disponible las 24 horas, los 7 días de la semana. Ante cualquier eventualidad, estamos a un llamado de distancia.</p>
            </li>
            <li className='transition-all duration-300 hover:translate-x-1'>
              <h3 className='text-2xl font-semibold text-primary'>Excelencia Comprobada</h3>
              <p className='text-lg text-muted-foreground'>Nuestras estadísticas de Superhost y reseñas de usuarios respaldan la calidad y dedicación de nuestro servicio.</p>
            </li>
          </ul>

          <Button className='px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg'>
            Conoce Más
          </Button>
          
          <div className="relative">
            <Accordion type="single" collapsible className='w-full'>
              <AccordionItem value="item-1">
                <AccordionTrigger className='text-xl font-bold'>Conveniencia</AccordionTrigger>
                <AccordionContent className='text-lg'>
                  Ofrecemos un servicio integral que incluye desde la limpieza hasta la gestión de precios, para que no tengas que lidiar con los aspectos operativos del alquiler temporario.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className='text-xl font-bold'>Profesionalismo</AccordionTrigger>
                <AccordionContent className='text-lg'>
                  Contamos con un equipo de profesionales experimentados en la gestión de propiedades, garantizando un servicio de alta calidad.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className='text-xl font-bold'>Transparencia</AccordionTrigger>
                <AccordionContent className='text-lg'>
                  Mantenemos una comunicación clara y transparente. Recibirás informes regulares sobre el rendimiento de tu propiedad.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className='text-xl font-bold'>Flexibilidad</AccordionTrigger>
                <AccordionContent className='text-lg'>
                  Nos adaptamos a tus necesidades y preferencias, ofreciendo un servicio personalizado.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className='text-xl font-bold'>Rentabilidad</AccordionTrigger>
                <AccordionContent className='text-lg'>
                  Maximizamos la ocupación y los ingresos de tu propiedad a través de estrategias de pricing dinámico.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="absolute inset-0 pointer-events-none opacity-10 bg-no-repeat bg-center bg-contain" style={{ backgroundImage: "url(/svgs/airbnb-1.svg)" }}></div>
          </div>
        </div>

        <div className='hidden md:block w-1/2 p-6'>
          <div className="relative h-full w-full overflow-hidden rounded-lg">
            <Image 
              src="/deptos/pexels-jean-van-der-meulen-1454805.jpg" 
              alt='Apartamento moderno' 
              width={700} 
              height={600} 
              className='rounded-lg object-cover w-full h-full transition-transform duration-700 hover:scale-105' 
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default NewContent;
