import React from 'react';
import { Card, CardHeader, CardBody, Image, CardFooter } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

const NewContent3 = () => {
    return (
        <Card className='flex flex-col-reverse p-0 lg:flex-row w-full lg:w-[1300px] min-h-[488px] lg:h-[400px] bg-white mt-20 rounded-xl shadow-2xl shadow-slate-600 mx-auto overflow-hidden'>
            <CardBody className='p-6 w-full lg:w-[50%]'>
                <ul>
                    <li className='mb-6'>
                        <h4 className='text-xl font-semibold'>Reactiva un inmueble en desuso</h4>
                        <p className='text-lg'>¿Tienes un inmueble que no está siendo utilizado? Podemos ayudarte a invertir y transformarlo para alquiler temporario.</p>
                    </li>
                    <li className='mb-6'>
                        <h4 className='text-xl font-semibold'>Una inversión rentable</h4>
                        <p className='text-lg'>Equipamos y preparamos tu propiedad para que genere ingresos en poco tiempo, maximizando su valor y rentabilidad.</p>
                    </li>
                    <li className='mb-6'>
                        <h4 className='text-xl font-semibold'>Alivio económico para ti</h4>
                        <p className='text-lg'>No más cargas financieras por una propiedad sin uso. Convierte ese peso económico en una fuente de ingresos.</p>
                    </li>
                </ul>
                <div className='flex w-full flex-row justify-center'>
                    <Button
                        as="a"
                        color="danger"
                        className="text-xl text-white font-semibold px-8 py-6 bg-red-400 "
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://api.whatsapp.com/send/?phone=%2B543415883040"
                        variant="shadow"
                    >
                        WhatsApp
                    </Button>
                </div>
            </CardBody>
            <CardFooter className='w-full p-0 m-0 lg:w-[50%] relative h-full'>
                <Image src="/deptos/pexels-max-rahubovskiy-7511695.jpg"  alt='depto1' className='bg-cover object-fill h-full m-0 p-0 rounded-lg ' />
            </CardFooter>
        </Card>
    )
}

export default NewContent3;
