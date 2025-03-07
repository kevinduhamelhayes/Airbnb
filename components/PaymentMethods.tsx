import { Image } from "@/components/ui/image";

export default function PaymentMethods() {
  return (
    <div className="py-12 bg-background text-foreground w-full px-4">
      <div className='pb-8'>
        <h2 className="text-4xl font-bold text-center">Gestionamos tus métodos de pago</h2>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
        <div className="flex flex-col items-center group">
          <Image 
            src="/svgs/visa-5.svg"
            alt="Visa"
            width={120}
            height={96}
            className="transform transition-all duration-300 group-hover:scale-110" 
          />
          <p className="text-lg font-semibold sr-only">Visa</p>
        </div>
        <div className="flex flex-col items-center group">
          <Image 
            src="/svgs/mastercard.svg" 
            alt="Mastercard" 
            width={120} 
            height={96} 
            className="transform transition-all duration-300 group-hover:scale-110" 
          />
          <p className="text-lg font-semibold sr-only">Mastercard</p>
        </div>
        <div className="flex flex-col items-center group">
          <Image 
            src="/svgs/paypal-3.svg" 
            alt="PayPal" 
            width={224} 
            height={96} 
            className="transform transition-all duration-300 group-hover:scale-110" 
          />
          <p className="text-lg font-semibold sr-only">PayPal</p>
        </div>
        <div className="flex flex-col items-center group">
          <Image 
            src="/svgs/bitcoin-logo.svg" 
            alt="Bitcoin" 
            width={224} 
            height={96} 
            className="transform transition-all duration-300 group-hover:scale-110" 
          />
          <p className="text-lg font-semibold sr-only">Bitcoin</p>
        </div>
        <div className="flex flex-col items-center group">
          <Image 
            src="/svgs/apple-pay-2.svg" 
            alt="Apple Pay" 
            width={260} 
            height={120} 
            className="transform transition-all duration-300 group-hover:scale-110" 
          />
          <p className="text-lg font-semibold sr-only">Apple Pay</p>
        </div>
      </div>
    </div>
  );
}
