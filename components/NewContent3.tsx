"use client";

import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";

const NewContent3 = () => {
    return (
        <Card className='flex flex-col-reverse lg:flex-row w-full max-w-7xl min-h-[488px] lg:h-[400px] bg-card mt-20 rounded-xl shadow-lg mx-auto overflow-hidden animate-fade-in'>
            <CardContent className='p-6 w-full lg:w-1/2 flex flex-col justify-between'>
                <ul className="space-y-6">
                    <li className='transition-all duration-300 hover:translate-x-1'>
                        <h4 className='text-xl font-semibold text-primary'>Reactiva un inmueble en desuso</h4>
                        <p className='text-lg text-muted-foreground'>¿Tienes un inmueble que no está siendo utilizado? Podemos ayudarte a invertir y transformarlo para alquiler temporario.</p>
                    </li>
                    <li className='transition-all duration-300 hover:translate-x-1'>
                        <h4 className='text-xl font-semibold text-primary'>Una inversión rentable</h4>
                        <p className='text-lg text-muted-foreground'>Equipamos y preparamos tu propiedad para que genere ingresos en poco tiempo, maximizando su valor y rentabilidad.</p>
                    </li>
                    <li className='transition-all duration-300 hover:translate-x-1'>
                        <h4 className='text-xl font-semibold text-primary'>Alivio económico para ti</h4>
                        <p className='text-lg text-muted-foreground'>No más cargas financieras por una propiedad sin uso. Convierte ese peso económico en una fuente de ingresos.</p>
                    </li>
                </ul>
                <div className='flex w-full flex-row justify-center mt-6'>
                    <Button
                        asChild
                        variant="default"
                        className="text-xl text-white font-semibold px-8 py-6 bg-red-500 hover:bg-red-600 transition-all duration-300 hover:shadow-lg"
                    >
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://api.whatsapp.com/send/?phone=%2B543415883040"
                        >
                            WhatsApp
                        </a>
                    </Button>
                </div>
            </CardContent>
            <CardFooter className='w-full lg:w-1/2 p-0 m-0 relative h-full'>
                <div className="relative w-full h-full overflow-hidden">
                    <Image 
                        src="/deptos/pexels-max-rahubovskiy-7511695.jpg" 
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

export default NewContent3;
