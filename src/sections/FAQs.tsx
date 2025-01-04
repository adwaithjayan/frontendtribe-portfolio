"use client"
import {FC, useState} from "react";
import {AnimatePresence,motion} from "motion/react";
import {twMerge} from "tailwind-merge";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "It depends on the complexity of the website and the scope of the project.",
  },
  {
    question: "What is your development process like?",
    answer:
      "I follow a hands-on approach starting with project planning, building out the core features, and regular check-ins to make sure everything matches your needs.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, I work with clients globally and can accommodate different time zones for meetings and communication.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "I have experience across various industries including technology, retail, hospitality, and professional services, bringing fresh perspectives to each project.",
  },
];

const FAQs: FC = () => {
  const [index, setIndex] = useState<number | null>(null);
    return <section id='faqs' className='py-24 md:py-32 lg:py-40'>
    <div className='container'>
      <h2 className={'text-4xl md:text-7xl lg:text-8xl'}>FAQs</h2>
      <div className='mt-10 md:mt-16 lg:mt-20'>
        {faqs.map((faq,i)=>(
            <div onClick={()=> {
              if(i===index){
                setIndex(null)
              }else {
                setIndex(i)
              }
            }} key={faq.question} className={'border-t py-6 md:py-8 lg:py-10 border-dotted border-stone-400 last:border-b group/faq relative isolate transition-all duration-700'}>
              <div className={twMerge('absolute h-0 w-full bg-stone-300 -z-10 group-hover/faq:h-full bottom-0 left-0',index===i&& "h-full")}/>
              <div className={twMerge('flex items-center justify-between gap-4 transition-all duration-700 group-hover/faq:lg:px-8',i===index && "lg:px-8")}>
                <div className='text-2xl md:text-3xl lg:text-4xl'>{faq.question}</div>
                <div className={twMerge('inline-flex items-center justify-center size-11 border border-stone-400 rounded-full shrink-0 transition-all duration-300 bg-stone-200',i===index && 'rotate-45')}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                </svg>
                </div>
              </div>
              <AnimatePresence>
              {i === index &&
              <motion.div className='overflow-hidden lg:px-8' initial={{height:0}} animate={{height:'auto'}} exit={{height:0}} transition={{duration:0.7,ease:'easeOut'}}>
                <p className='text-xl my-4'>{faq.answer}</p>
              </motion.div>
                  }
              </AnimatePresence>
            </div>
        ))}
      </div>
    </div>
  </section>;
};

export default FAQs;
