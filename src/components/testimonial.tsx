import React, {FC, HTMLAttributes, useEffect} from 'react'
import Image from "next/image";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import {twMerge} from "tailwind-merge";
import {usePresence,motion} from "motion/react";
import {useText} from "@/hooks/useText";
type Props = HTMLAttributes<HTMLDivElement> & {
      quote: string;
      image: string | StaticImport;
      imagePositionY: number;
      name: string;
      role: string;
      company: string;
      className?: string;
};
export const  Testimonial:FC<Props>=(props) =>{
      const {quote,image,imagePositionY,name,role,company,className,...rest} = props;
      const {scope:quoteScope ,entranceAnimation:quoteAnimate,exitAnimation:quoteExit} =useText();
      const {scope:citeScope ,entranceAnimation:citeAnimate,exitAnimation:citeExit} =useText();
      const [isPresence,safeToRemove] = usePresence();
      useEffect(() => {
            if(isPresence) {
                  quoteAnimate().then(() => citeAnimate());
            }else {
                  Promise.all([quoteExit(), citeExit()]).then(()=>{
                        safeToRemove();
                  })
            }
      }, [citeAnimate, quoteAnimate, isPresence, quoteExit, citeExit, safeToRemove]);
      return (
          <div {...rest} className={twMerge('grid md:grid-cols-5 md:gap-8 md:items-center lg:gap-16',className)}>
                <div className='aspect-square md:aspect-[9/16] md:col-span-2 relative'>
                      <motion.div className={'absolute h-full bg-stone-900 '} initial={{width:'100%'}} animate={{width:0}} exit={{width:'100%'}} transition={{duration:0.5}}>
                      </motion.div>
                      <Image src={image} alt={name} className='size-full object-cover'
                             style={{objectPosition: `50% ${imagePositionY * 100}%`}}/>
                </div>
                <blockquote className='md:col-span-3'>
                      <div className='text-3xl md:text-5xl mt-8 md:mt-0 lg:text-6xl' ref={quoteScope}>
                            <span>&ldquo;</span>
                            {quote}
                            <span>&rdquo;</span>
                      </div>
                      <cite ref={citeScope}
                          className='mt-4 not-italic block md:mt-8 md:text-lg lg:text-xl'>{name}, {role} at {company}</cite>
                </blockquote>
          </div>
      )
}

