import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { fontSans } from '@/config/fonts';
import { categories } from '@/config/data/categories';
import { projects } from '@/config/data/projects';

export function generateStaticParams() {
  return projects.map((project) => ({ category: project.category }));
}

interface Props {
  params: { category: string };
}

export function generateMetadata({ params }: Props): Metadata {
  const category = categories.find((category) => category.id === params.category)!;

  return {
    title: `${category.name} Projeleri - Bax Mimarlık`,
  };
}

export default function ProjectsByCategory({ params }: Props) {
  const projectsByCategory = projects.filter((project) => project.category === params.category);

  if (!projectsByCategory) notFound();

  return (
    <div className='py-10 px-12'>
      <ul role='list' className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
        {projectsByCategory.map((project, index) => (
          <li key={`category_${index}`} className='mb-8 duration-300 hover:-translate-y-1'>
            <Link key={`category_link_${index}`} href={`/projects/${project.category}/${project.id}`}>
              {project.images && project.images[0] && (
                <div className='overflow-hidden'>
                  <Image
                    src={project.images[0]}
                    alt={project.name}
                    className='inset-0 -z-10 m-0 w-full object-cover md:h-96'
                    height={400}
                    width={800}
                  />
                </div>
              )}

              <p className={`${fontSans.className} my-3 text-3xl`}>{project.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
