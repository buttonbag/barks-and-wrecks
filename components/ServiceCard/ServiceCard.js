export function ServiceCard({content}) {
  return (
  <div className="h-full bg-[#1f2f52] border border-[#2d3f6b] rounded p-6 hover:border-yellow-500 hover:brightness-120 hover:scale-105 transition-all ease-in-out duration-300">
    <span className="text-3xl block mb-4">{content.icon}</span>
    <h3 className="text-lg font-700 text-[#f5f0e8] mb-2 leading-tight">{content.label}</h3>
    <p className="text-[#8aab60] text-sm leading-relaxed mb-4">{content.description}</p>
    <p className="text-[#c8892a] font-700 text-base">{content.price}</p>
  </div>
  )
}