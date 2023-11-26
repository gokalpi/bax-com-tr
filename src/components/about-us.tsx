import { fontSans } from '@/config/fonts';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <section id='about-us' className='h-screen flex'>
      <div className='flex-1 flex flex-col justify-center min-h-full py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
        <div className='mx-auto w-full max-w-sm lg:w-96'>
          <div>
            <p className={`${fontSans.className} my-12 text-4xl sm:text-6xl font-medium`}>
              Fonksiyonel ve İyi Tasarlanmış Alanlar
            </p>

            <p className='text-lg'>
              Mağazacılık, otel, restoran, konut vb. projelerde; iç mimari tasarım, proje, uygulama aşamalarında akılcı,
              estetik ve kolay uygulanabilir detay çözümleri sunuyoruz.
            </p>

            <div className='py-6'>
              <Link
                href='/about'
                className='inline-flex items-center px-8 py-3 border border-transparent font-medium tracking-widest text-white bg-stone-600'
              >
                HAKKIMIZDA
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center items-center'>
        <Image src='/images/hero-image.jpg' alt='' width={400} height={400} />
      </div>
    </section>
  );
}
