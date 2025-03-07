"use client"
import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Body from '@/components/Body';
import Section from '@/components/Section';
import Transparency from '@/components/Transparencia';
import CallToAction from '@/components/CallToAction';
import PaymentMethods from '@/components/PaymentMethods';
import CardsPrices from '@/components/CardsPrices';
import NewContent from '@/components/NewContent';
import NewContent1 from '@/components/NewContent1';
import NewContent2 from '@/components/NewContent2';
import NewContent3 from '@/components/NewContent3';
import NewContent5 from '@/components/NewContent5';

export default function Home() {
  return (
    <main className="max-w-full relative flex flex-col items-center h-full bg-white">
      <Navbar />
      <div className='ml-4 mr-8'>
        <div className='w-full mt-20 md:m-20 text-4xl font-bold text-red-400 flex justify-center items-center'>
          <h1>Porque nosotros?</h1>
        </div>
        <NewContent5 />
        <div className='w-full mt-20 md:m-20 text-4xl font-bold text-red-400 flex justify-center items-center'>
          <h1>Nuestras Estadisticas</h1>
        </div>
        <NewContent1 />
        <div className='w-full mt-20 md:m-20 text-4xl font-bold text-red-400 flex justify-center items-center'>
          <h1>Nuestras reseñas</h1>
        </div>
        <NewContent2 />
        <div className='w-full mt-20 md:m-20 text-4xl font-bold text-red-400 flex justify-center items-center'>
          <h1>Nosotros invertimos en vos</h1>
        </div>
        <NewContent3 />
      </div>
      <NewContent />
      <PaymentMethods />
      <CardsPrices />
      <CallToAction />
      <Footer />
    </main>
  )
}
