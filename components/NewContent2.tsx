import React from 'react';
import { Card, CardHeader, CardBody, Image, CardFooter } from "@nextui-org/react";

const NewContent2 = () => {
    return (
        <Card className='flex flex-col lg:flex-row w-full lg:w-[1300px] min-h-[500px] max-h-[1050px] overflow-hidden lg:h-[400px] bg-white mt-20 rounded-xl shadow-2xl shadow-slate-600 mx-auto '>
            <CardBody className='p-6 w-full lg:w-[50%]'>
                <ul>
                    <li className='mb-6'>
                        <h4 className='text-xl font-semibold'>Reseñas Auténticas</h4>
                        <p className='text-lg'>Nuestros clientes nos aman y no es por casualidad. Lea nuestras reseñas y descubra por qué somos la mejor opción.</p>
                    </li>
                    <li className='mb-6'>
                        <h4 className='text-xl font-semibold'>Experiencias Reales</h4>
                        <p className='text-lg'>Nada habla mejor que las experiencias de nuestros clientes. Las reseñas reflejan nuestra dedicación y compromiso hacia la calidad del servicio.</p>
                    </li>
                    <li className='mb-6'>
                        <h4 className='text-xl font-semibold'>Compromiso Comprobado</h4>
                        <p className='text-lg'>Cada reseña es un testimonio de nuestro compromiso con la excelencia. Nos esforzamos por superar las expectativas en cada proyecto.</p>
                    </li>
                </ul>
            </CardBody>
            <CardFooter className='w-full max-h-[500px] object-contain lg:w-[50%] relative m-2 border-2'>
                <Image src="/deptos/WhatsApp Image 2023-10-02 at 1.58.20 PM.jpeg" alt='depto1' className=' rounded-lg object-fill h-[950px]' />
            </CardFooter>
        </Card>
    )
}

export default NewContent2;


