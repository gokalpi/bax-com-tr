import { fontSans } from '@/lib/fonts';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id='hero' className='h-screen flex'>
      <div className='flex-1 flex flex-col justify-center min-h-full py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-[#231F20]'>
        <div className='mx-auto w-full max-w-sm lg:w-96'>
          <div>
            <p className={`${fontSans.className} my-5 text-4xl text-white font-medium`}>
              İÇ MEKANDA AKILCI VE ESTETİK ÇÖZÜMLER
            </p>

            <p className='text-lg text-white'>
              Mağazacılık, otel, restoran, konut vb. projelerde; iç mimari tasarım, proje, uygulama aşamalarında akılcı,
              estetik ve kolay uygulanabilir detay çözümleri sunuyoruz.
            </p>
          </div>
        </div>
      </div>
      <div className='hidden lg:block relative w-0 flex-1'>
        <Image src='/images/hero-image.jpg' alt='' fill={true} />
      </div>
    </section>
  );
}
