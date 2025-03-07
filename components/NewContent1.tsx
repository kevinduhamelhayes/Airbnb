"use client";

import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Image } from "@/components/ui/image";

const NewContent1 = () => {
    return (
        <Card id='Nosotros' className='flex flex-col lg:flex-row w-full max-w-7xl min-h-[485px] lg:h-[400px] bg-card mt-20 rounded-xl shadow-lg mx-auto overflow-hidden animate-fade-in'>
            <CardFooter className='w-full lg:w-1/2 h-full flex justify-center p-0 m-0'>
                <div className="relative w-full h-full overflow-hidden">
                    <Image 
                        src="/deptos/WhatsApp Image 2023-09-30 at 11.58.26 PM.jpeg" 
                        alt='Piscina de propiedad' 
                        width={650} 
                        height={900}
                        className='object-cover w-full h-full transition-transform duration-700 hover:scale-105' 
                    />
                </div>
            </CardFooter>
            <CardContent className='p-6 w-full lg:w-1/2 flex items-center'>
                <ul className="space-y-6">
                    <li className='transition-all duration-300 hover:translate-x-1'>
                        <h4 className='text-xl font-semibold text-primary'>Calificación Superior:</h4>
                        <p className='text-lg text-muted-foreground'>Nos enorgullece tener una calificación de casi 5 estrellas, reflejando nuestra dedicación y compromiso hacia la calidad del servicio.</p>
                    </li>
                    <li className='transition-all duration-300 hover:translate-x-1'>
                        <h4 className='text-xl font-semibold text-primary'>Índice de Respuesta del 100%:</h4>
                        <p className='text-lg text-muted-foreground'>Nuestro compromiso con nuestros clientes es inquebrantable. Siempre estamos disponibles para responder a tus inquietudes, reflejado en nuestro índice de respuesta del 100%.</p>
                    </li>
                    <li className='transition-all duration-300 hover:translate-x-1'>
                        <h4 className='text-xl font-semibold text-primary'>0% Tasa de Cancelación:</h4>
                        <p className='text-lg text-muted-foreground'>Nuestra fiabilidad es innegable. Con una tasa de cancelación del 0%, puedes confiar en nosotros para cumplir con nuestros compromisos.</p>
                    </li>
                </ul>
            </CardContent>
        </Card>
    )
}

export default NewContent1;

