import Image from "next/image"

export const HeroArea = ({
  image_1,
  image_2,
  eyebrow,
  main_title,
  subtitle
}) => {
  return (
  <div className="max-w-screen-2xl mx-auto md:flex m-h-[946px] w-full outline outline-8 overflow-hidden" 
  >
    
    <div className="m-h-[500px] flex flex-col flex-auto">
      <img className="object-cover max-h-[300px] min-w-[700px] object-top;" src={image_1} />
      <div className="flex flex-col justify-center max-h-[800px] min-h-[400px] p-20 lg:p-60 outline outline-8">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="text-6xl font-display">{main_title}</h1>
        <p className="subtitle">{subtitle}</p>
      </div>
    </div>
    
    <div className="flex flex-col h-[300px] md:h-auto md:w-[300px] flex-auto outline outline-8">
      <img className="min-w-[300px] object-cover md:object-center flex-auto" src={image_2} />
    </div>

  </div>
  )
}