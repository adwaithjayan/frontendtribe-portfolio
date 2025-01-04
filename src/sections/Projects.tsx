import { FC } from "react";
import image1 from "@/assets/images/project-1.jpg";
import image2 from "@/assets/images/project-2.jpg";
import image3 from "@/assets/images/project-3.jpg";
import image4 from "@/assets/images/project-4.jpg";
import image5 from "@/assets/images/project-5.jpg";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    name: "Artisan Brew Co.",
    image: image1,
  },
  {
    name: "Wavelength Studios",
    image: image2,
  },
  {
    name: "Nova Fitness",
    image: image3,
  },
  {
    name: "Urban Plates",
    image: image4,
  },
  {
    name: "Bloom Botanicals",
    image: image5,
  },
];

const Projects: FC = () => {
  return <section id='projects' className='py-24 md:py-32 lg:py-40'>
    <div className='container'>
      <h2 className='text-4xl md:text-7xl lg:text-8xl'>Selected works</h2>
      <div className='mt-10 md:mt-16 lg:mt-20'>
        {projects.map(project=>(
            <Link href='/' key={project.name} className='flex relative group/project flex-col border-t py-6 md:py-8 lg:py-10 border-stone-400 border-dotted last:border-b'>
              <div className='absolute bottom-0 left-0 w-full h-0 group-hover/project:h-full duration-700 transition-all bg-stone-300'/>
              <div className='relative'>
                <div className='aspect-video md:hidden'>
                <Image src={project.image} alt={project.name} className='size-full object-cover'/>
                </div>
                <div
                    className='mt-8 md:mt-0 flex justify-between items-center md:grid md:gap-8 md:[grid-template-columns:1fr_300px_max-content]'>
                  <div className='lg:group-hover/project:pl-8 transition-all duration-700'>
                  <h3 className='text-2xl md:text-3xl lg:text-4xl'>{project.name}</h3>
                  </div>
                  <div className='relative'>
                    <div className='absolute top-1/2 -translate-y-1/2 opacity-0 scale-90 group-hover/project:scale-100 lg:group-hover/project:scale-110 transition-all duration-500 z-10 group-hover/project:opacity-100  aspect-video w-full'>

                    <Image src={project.image} alt={project.name} className='size-full object-cover'/>
                    </div>
                  </div>
                  <div className={'lg:group-hover/project:pr-8 transition-all duration-700'}>
                  <div className='size-6 overflow-hidden'>
                    <div className='h-6 w-12 flex group-hover/project:-translate-x-1/2 transition-all duration-300'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                           stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                           stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"/>
                      </svg>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </Link>
        ))}
      </div>
    </div>
  </section>;
};

export default Projects;
