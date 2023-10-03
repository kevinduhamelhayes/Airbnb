import React from 'react';
import { Card, CardHeader, CardBody, Image, CardFooter } from "@nextui-org/react";

const NewContent1 = () => {
    return (
        <Card id='Nosotros' className='flex flex-col lg:flex-row w-full lg:w-[1300px] min-h-[485px] lg:h-[400px] p-0 bg-white mt-20 rounded-xl shadow-2xl shadow-slate-600 mx-auto overflow-hidden'>
            <CardFooter className='w-full lg:w-[50%] h-full flex justify-center p-0 m-0'>
                <Image src="/deptos/WhatsApp Image 2023-09-30 at 11.58.26 PM.jpeg"  alt='pileta' className='border-2 bg-cover object-fill rounded-lg p-0 m-0 h-[900px]' />
            </CardFooter>
            <CardBody className='p-6 w-full lg:w-[50%]'>
                <ul>
                    <li className='mb-6'>
                        <h4 className='text-xl font-semibold'>Calificación Superior:</h4>
                        <p className='text-lg'>Nos enorgullece tener una calificación de casi 5 estrellas, reflejando nuestra dedicación y compromiso hacia la calidad del servicio.</p>
                    </li>
                    <li className='mb-6'>
                        <h4 className='text-xl font-semibold'>Índice de Respuesta del 100%:</h4>
                        <p className='text-lg'>Nuestro compromiso con nuestros clientes es inquebrantable. Siempre estamos disponibles para responder a tus inquietudes, reflejado en nuestro índice de respuesta del 100%.</p>
                    </li>
                    <li className='mb-6'>
                        <h4 className='text-xl font-semibold'>0% Tasa de Cancelación:</h4>
                        <p className='text-lg'>Nuestra fiabilidad es innegable. Con una tasa de cancelación del 0%, puedes confiar en nosotros para cumplir con nuestros compromisos.</p>
                    </li>
                </ul>
            </CardBody>
        </Card>
    )
}

export default NewContent1;

