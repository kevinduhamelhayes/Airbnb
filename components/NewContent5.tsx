"use client";

import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Image } from "@/components/ui/image";

const NewContent5 = () => {
    return (
        <Card className='flex flex-col lg:flex-row w-full max-w-7xl min-h-[500px] lg:h-[400px] bg-card mt-20 rounded-xl shadow-lg mx-auto overflow-hidden animate-fade-in'>
            <CardContent className='p-6 w-full lg:w-1/2 flex items-center'>
                <ul className="space-y-6">
                    <li className='transition-all duration-300 hover:translate-x-1'>
                        <h4 className='text-xl font-semibold text-primary'>Seguridad en tu elección</h4>
                        <p className='text-lg text-muted-foreground'>Con años de experiencia en el mercado, garantizamos una gestión confiable y eficiente de tus propiedades.</p>
                    </li>
                    <li className='transition-all duration-300 hover:translate-x-1'>
                        <h4 className='text-xl font-semibold text-primary'>Renta asegurada en dólares</h4>
                        <p className='text-lg text-muted-foreground'>Aseguramos tu renta en dólares, brindando estabilidad y previsibilidad a tu inversión.</p>
                    </li>
                    <li className='transition-all duration-300 hover:translate-x-1'>
                        <h4 className='text-xl font-semibold text-primary'>Tranquilidad y Confiabilidad</h4>
                        <p className='text-lg text-muted-foreground'>Nuestro equipo de profesionales se encarga de todo, desde la gestión de reservas hasta el mantenimiento, para que puedas descansar tranquilo.</p>
                    </li>
                </ul>
            </CardContent>
            <CardFooter className='w-full lg:w-1/2 p-0 m-0'>
                <div className="relative w-full h-full overflow-hidden">
                    <Image 
                        src="/deptos/WhatsApp Image 2023-10-01 at 12.07.49 PM.jpeg" 
                        alt='Apartamento moderno' 
                        width={650} 
                        height={750}
                        className='object-cover w-full h-full transition-transform duration-700 hover:scale-105' 
                    />
                </div>
            </CardFooter>
        </Card>
    )
}

export default NewContent5;

