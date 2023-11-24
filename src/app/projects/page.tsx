import { projects } from '@/lib/projects';
import Link from 'next/link';
import Image from 'next/image';
import { fontVariable } from '@/lib/fonts';

export default function Projects() {
  return (
    <div className='py-10 px-12'>
      <ul role='list' className='grid grid-cols-2 gap-10'>
        {projects.map((project, index) => (
          <li key={`project_${index}`} className='mb-8 rounded duration-300 hover:-translate-y-1'>
            <Link key={`project_link_${index}`} href={`/projects/${project.id}`}>
              {project.images && project.images[0] && (
                <div className='rounded-md overflow-hidden'>
                  <Image
                    src={project.images[0]}
                    alt={project.name}
                    className='inset-0 -z-10 m-0 w-full rounded-t-xl object-cover md:h-96'
                    height={400}
                    width={800}
                  />
                </div>
              )}

              <p className={`${fontVariable.className} my-5 text-3xl font-medium`}>{project.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
