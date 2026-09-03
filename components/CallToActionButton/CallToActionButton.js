import { ButtonLink } from "components/ButtonLink";

export const CallToActionButton = ({align, destination, label, bgColor}) => {
  console.log("CTA: ",  align, destination, label, bgColor);
  const alignMap = {
    left:  "text-left",
    center: "text-center",
    right: "text-right",
  }
  const bgColorMap = {
    primary: "bg-emerald-900",
    secondary: "bg-stone-900"
  }
  
  return (
    <div className={alignMap[align]}>
      <ButtonLink destination={destination} bg={bgColorMap[bgColor]} label={label}/>
    </div>
  )
}