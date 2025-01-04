import React, {ButtonHTMLAttributes, ReactNode} from 'react'
import {twMerge} from "tailwind-merge";



export default function Button(props:{variant:"primary"|"secondary"|"text";iconAfter?:ReactNode}&ButtonHTMLAttributes<HTMLButtonElement>) {
      const {variant,iconAfter,className,children,...other} = props;
      return (
          <button className={twMerge("px-6 h-11 group/button rounded-xl relative inline-flex items-center gap-2 uppercase border border-red-orange-500 transition-all duration-500",variant ==='text'&& "h-auto px-0 border-transparent after:h-px after:w-0 after:absolute after:top-full after:bg-red-orange-500 hover:after:w-full after:transition-all after:duration-500",variant ==='secondary'&& "hover:bg-red-orange-500 hover:text-white", variant ==='primary'&& "bg-red-orange-500 text-white",className)} {...other}>
                <span>{children}</span>
                {iconAfter && <span>{iconAfter}</span>}
          </button>
      )
}
