import { projects } from '@/lib/projects';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { fontVariable, fontSans } from '@/lib/fonts';

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

interface Props {
  params: { id: string };
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((project) => project.id === params.id)!;

  return {
    title: `${project.name} - Bax Mimarlık`,
  };
}

export default function ProjectDetail({ params }: Props) {
  const project = projects.find((project) => project.id === params.id);

  if (!project) notFound();
  return (
    <div className='py-10 px-12'>
      <p className={`${fontVariable.className} my-5 text-6xl font-bold`}>{project.name}</p>
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

      <p className={`${fontSans.className}`}>{project.description}</p>
    </div>
  );
}
