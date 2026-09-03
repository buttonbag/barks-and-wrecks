import Image from "next/image";

export function StaffCard({tag,image,name,role,description}) {
  return (
    <div className="group relative h-full flex">
      <div className="absolute -top-2 -right-2 z-10">
        <span className="stamp text-[#8b2a1a] border-[#8b2a1a] bg-[#f5f0e8]">
          {tag}
        </span>
      </div>
      <div className="w-full bg-white border border-[#c4a882] rounded overflow-hidden hover:shadow-lg transition-shadow duration-200">
        <div className="aspect-square bg-[#c4a882] overflow-hidden">
          <Image alt="" src={image} 
          width={300}
          height={300}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="p-5 border-t-2 border-[#c8892a]">
          <h3 className="text-xl font-700 text-[#2a4a18]">{name}</h3>
          <p className="text-[#8b2a1a] text-xs tracking-widest uppercase font-700 mt-0.5 mb-3">{role}</p>
          <p className="text-[#3a4a30] text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}