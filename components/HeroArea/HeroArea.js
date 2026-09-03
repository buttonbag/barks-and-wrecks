import { height } from "@fortawesome/free-regular-svg-icons/faAddressBook";
import Image from "next/image";
import React from "react";

export const HeroArea = ({image_1, image_2, hero_text, children}) => {
  const text = React.createElement(`div`, {
    dangerouslySetInnerHTML: { __html: hero_text }
  })
  
  return (
    <div className="min-w-full bg-black grid md:grid-cols-[3fr,1fr] p-4 gap-4">
      <div className="grid gap-4">
        <div className="h-[400px] relative overflow-hidden">
          <Image alt="" src={image_1} fill 
          sizes={{
            width: "auto",
            height: "auto",
          }}
          className="object-cover object-top hover:scale-105 transition-all ease-in-out duration-300"/>
        </div>
        <div className="bg-white p-40 pl-10">{text}</div>
      </div>

      <div className="relative overflow-hidden sm:hidden md:block">
          <Image alt="" src={image_2} fill 
          sizes={{
            width: "auto",
            height: "auto",
          }}
          className="object-cover object-top hover:scale-105 transition-all ease-in-out duration-300"/>
      </div>
    </div>
  )
}