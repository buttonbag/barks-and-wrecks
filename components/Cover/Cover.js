import Image from "next/image";

export const Cover = ({children, background}) => {  
  return <section className="text-white bg-slate-800 relative h-screen min-h-[600px] flex justify-center items-center">
    <Image 
      alt="" 
      aria-hidden="true"
      fill 
      priority
      className="object-cover mix-blend-soft-light" 
      src={background}/>
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent-[80%]"></div>
      <div className="w-10/12 max-w-8xl mx-auto z-10">
        {children}
      </div>
    </section>;
};