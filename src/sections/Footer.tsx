"use client"
import {FC, MouseEvent, useEffect} from "react";
import Link from "next/link";
import Button from "@/components/button";
import {useText} from "@/hooks/useText";
import {useInView} from "framer-motion";

const navItems = [
  {
    label: "About",
    href: "#intro",
  },{
    href:'#projects',
    label:'Projects',
  },{
    href:'#testimonials',
    label:'Testimonials',
  },{
    href:'#faqs',
    label:'Faqs',
  },{
    href:'#contact',
    label:'Contact',
  },

]

const Footer: FC = () => {

  const {scope,entranceAnimation} = useText();
  const inView = useInView(scope);
  useEffect(() => {
    if(inView){
      entranceAnimation()
    }
  }, [entranceAnimation, inView]);
  const handleClick = (e:MouseEvent<HTMLAnchorElement>)=>{
    e.preventDefault();
    const url = new URL(e.currentTarget.href);
    const hash = url.hash;
    const target = document.querySelector(hash);
    if(!target) return;
    target.scrollIntoView({behavior:'smooth'});
  }
  return <footer id='contact' className='bg-stone-900 text-white'>
    <div className='container'>
      <div className='py-24 md:py-32 lg:py-40'>
      <div className='flex items-center gap-3'><div className='size-3 rounded-full bg-green-400 animate-pulse'/>
        <span className='uppercase'>One spot available for next month</span></div>
        <div className='grid md:grid-cols-3'>
          <div className='md:col-span-2'>
      <h2 ref={scope} className='text-4xl mt-8 font-extralight md:text-7xl lg:text-8xl'>Enough talk.
        Let&apos;s make
        something great
        together.</h2 >
      <Button variant='secondary' className='mt-8' iconAfter={
        <div className='overflow-hidden size-6'>
          <div className='h-6 w-12 flex group-hover/button:-translate-x-1/2 transition-transform duration-500'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                 stroke="currentColor"
                 className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                 stroke="currentColor"
                 className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"/>
            </svg>
          </div>
        </div>

      }>nfo@alextaylor.com</Button>
          </div>
          <div className='md:col-span-3'>
            <nav className='flex flex-col md:items-end gap-8 mt-16 md:mt-0'>
              {navItems.map(item => (
                  <Link onClick={handleClick} href={item.href} key={item.label}>
                <Button variant='text' className='text-lg'>
                {item.label}
                </Button>
              </Link>
          ))}
        </nav>
          </div>

        </div>
      </div>

      <p className={'py-16 text-white/30 text-sm'}>Copyright &copy; Alex Taylor &bull; All rights reserved</p>
    </div>
  </footer>;
};

export default Footer;
