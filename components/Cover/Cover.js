import Image from "next/image"

export const Cover = ({children, background}) => {
  return <div className="min-h-[300px] text-white bg-slate-800 relative flex">
    <Image
    alt=""
    fill
    className="object-cover object-top"
    src={background}
    />
  </div>
}