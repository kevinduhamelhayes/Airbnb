import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FAQs from './constants/FaqConstants'

const Body = () => {
    return (
        <section className="w-full flex flex-col items-center  text-white py-8">
            <h3 className="text-3xl mt-14 font-bold">
                Preguntas Frecuentes
            </h3>
            <div className="max-w-[1100px] w-full mt-12 px-4">
                <Accordion type="single" collapsible className="bg-white/90 dark:bg-slate-800 shadow-xl rounded-lg overflow-hidden">
                    {FAQs.map((faq) => (
                        <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                            <AccordionTrigger className="px-4 text-black dark:text-white font-medium">
                                {faq.title}
                            </AccordionTrigger>
                            <AccordionContent className="px-4 text-gray-700 dark:text-gray-300">
                                {faq.content}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}

export default Body;
