import Image from "next/image"

export const Cover = ({children, background}) => {
  return <div className="h-screen text-white bg-slate-800 relative min-h-[400px] flex justify-center items-center">
    <Image
    alt="Cover"
    fill
    className="object-cover"
    src={background}
    />
    <div className="z-10">
      {children}
    </div>
  </div>
}