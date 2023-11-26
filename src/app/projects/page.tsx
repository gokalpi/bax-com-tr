import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/config/data/categories';

export default function Projects() {
  return (
    <div className='py-10 px-12'>
      <ul role='list' className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {categories.map((category, index) => (
          <li key={`category_${index}`} className='mb-6 duration-300 hover:-translate-y-1'>
            <Link key={`category_link_${index}`} href={`/projects/${category.id}`}>
              {category.image && (
                <div className='overflow-hidden'>
                  <Image
                    src={category.image}
                    alt={category.name}
                    className='inset-0 -z-10 m-0 w-full object-cover md:h-96'
                    height={400}
                    width={400}
                  />
                </div>
              )}

              <p className='my-2 text-lg font-medium uppercase'>{category.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
