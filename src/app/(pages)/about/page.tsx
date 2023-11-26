import { fontSans, fontVariable } from '@/config/fonts';
import Image from 'next/image';

export default function About() {
  return (
    <div className='full-container'>
      <div className='mt-6 sm:mt-20 mb-12 mx-6 sm:mx-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16'>
          <p className={`${fontSans.className} text-2xl sm:text-4xl font-medium`}>
            Akılcı, estetik ve kolay uygulanabilir detay çözümleri sunuyoruz
          </p>
          <p>
            Arzu Başal, Gamze Gökalp Geçer ve Mine Kayalar Gölükçü ortak paydaları olan Mimar Sinan Güzel Sanatlar
            Üniversitesi Mimarlık Fakültesi’nden mezun olmalarının ardından uzun yıllar mimari, iç mimari tasarım, proje
            ve uygulama alanlarında ayrı ayrı tecrübe kazanıp deneyimlerini BAX Mimarlık çatısı altında birleştirdiler.
            Ele aldıkları projelerde Mimar Sinan Üniversitesi ekolünden gelen, akılcı ve uygulanabilir detay çözümleri
            sunuyorlar.
          </p>
        </div>
        <div className='flex flex-wrap gap-6 mb-12'>
          <div className='p-4 flex-none w-48 h-48 rounded-xl flex items-center justify-center relative overflow-hidden'>
            <Image src='/images/little-fashion-girl-with-bag.jpg' alt='ARZU BAŞAL' fill={true} />
          </div>
          <div className='flex-auto w-64'>
            <p className={`${fontSans.className} text-xl sm:text-2xl font-medium mb-5`}>ARZU BAŞAL | Kurucu Ortak</p>
            <p>TBD</p>
          </div>
        </div>
        <div className='flex flex-wrap gap-6 mb-12'>
          <div className='p-4 flex-none w-48 h-48 rounded-xl flex items-center justify-center relative overflow-hidden'>
            <Image src='/images/cartoon-character-with-fashion-bag.jpg' alt='GAMZE GÖKALP GEÇER' fill={true} />
          </div>
          <div className='flex-auto w-64'>
            <p className={`${fontSans.className} text-xl sm:text-2xl font-medium mb-5`}>
              GAMZE GÖKALP GEÇER | Yönetici Ortak
            </p>
            <p>
              1978 Antalya doğumlu. Antalya Anadolu Lisesi’nin ardından Mimar Sinan Güzel Sanatlar Üniversitesi Mimarlık
              Fakültesi Mimarlık Bölümü’nden mezun oldu. Kariyeri boyunca perakende mağazacılık, otel, konut, konferans
              salonu gibi çeşitli konuların tasarım ve uygulamasında uzmanlaştı. Kendo, Muay Thai gibi dövüş sanatları
              yanında sanat tarihi, karakalem eskiz yapmaya ilgi duyuyor. Mimarlık haricinde Grina rock cover band
              solistliğini yapıyor.
            </p>
          </div>
        </div>
        <div className='flex flex-wrap gap-6'>
          <div className='p-4 flex-none w-48 h-48 rounded-xl flex items-center justify-center relative overflow-hidden'>
            <Image src='/images/doll-with-fashion-bag.jpg' alt='MİNE KAYALAR GÖLÜKÇÜ' fill={true} />
          </div>
          <div className='flex-auto w-64'>
            <p className={`${fontSans.className} text-xl sm:text-2xl font-medium mb-5`}>
              MİNE KAYALAR GÖLÜKÇÜ | Yönetici Ortak
            </p>
            <p>
              1985 yılında Yalova’da doğdu. Liseyi İstanbul Kabataş Erkek Lisesi’nde okudu. Mimar Sinan Güzel Sanatlar
              Üniversitesi Mimarlık Bölümü’nden mezun oldu. Ardından tez araştırmasını Viyana Teknik Üniversitesi’nde
              gerçekleştirerek Yıldız Teknik Üniversitesi Mimarlık Fakültesi Yapı Fiziği Bölümü’nde yüksek lisansını
              tamamladı. 10 yılı aşkın iç mimarlık kariyeri boyunca perakende mağazacılık, otel, konut, ofis gibi
              çeşitli konuların tasarım ve projelendirilmesinde uzmanlaştı. İç mimarlığın yanı sıra, sanat ve doğa ile
              iç içe olmayı, seyahat etmeyi seviyor; kişinin kendisiyle ilişkisini geliştiren çalışmalara ilgi duyuyor.
              Yin Yoga ve Mandala eğitmeni olarak somatik pratikler de içeren online/yüz yüze Yin Yoga dersleri vermekte
              ve Mandala atölyeleri düzenlemekte.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
