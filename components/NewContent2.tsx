"use client";

import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Image } from "@/components/ui/image";

const NewContent2 = () => {
    return (
        <Card className='flex flex-col lg:flex-row w-full max-w-7xl min-h-[500px] lg:h-[400px] bg-card mt-20 rounded-xl shadow-lg mx-auto overflow-hidden animate-fade-in'>
            <CardContent className='p-6 w-full lg:w-1/2 flex items-center'>
                <ul className="space-y-6">
                    <li className='transition-all duration-300 hover:translate-x-1'>
                        <h4 className='text-xl font-semibold text-primary'>Reseñas Auténticas</h4>
                        <p className='text-lg text-muted-foreground'>Nuestros clientes nos aman y no es por casualidad. Lea nuestras reseñas y descubra por qué somos la mejor opción.</p>
                    </li>
                    <li className='transition-all duration-300 hover:translate-x-1'>
                        <h4 className='text-xl font-semibold text-primary'>Experiencias Reales</h4>
                        <p className='text-lg text-muted-foreground'>Nada habla mejor que las experiencias de nuestros clientes. Las reseñas reflejan nuestra dedicación y compromiso hacia la calidad del servicio.</p>
                    </li>
                    <li className='transition-all duration-300 hover:translate-x-1'>
                        <h4 className='text-xl font-semibold text-primary'>Compromiso Comprobado</h4>
                        <p className='text-lg text-muted-foreground'>Cada reseña es un testimonio de nuestro compromiso con la excelencia. Nos esforzamos por superar las expectativas en cada proyecto.</p>
                    </li>
                </ul>
            </CardContent>
            <CardFooter className='w-full lg:w-1/2 p-0 m-0'>
                <div className="relative w-full h-full overflow-hidden">
                    <Image 
                        src="/deptos/WhatsApp Image 2023-10-02 at 1.58.20 PM.jpeg" 
                        alt='Apartamento moderno' 
                        width={650} 
                        height={950}
                        className='object-cover w-full h-full transition-transform duration-700 hover:scale-105' 
                    />
                </div>
            </CardFooter>
        </Card>
    )
}

export default NewContent2;


