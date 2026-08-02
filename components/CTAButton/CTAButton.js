import Link from "next/link"

export const CTAButton = ({align, destination, label}) => {
  const alignMap = {
    left:  "text-left",
    center: "text-center",
    right: "text-right",
  }
  return <div className={alignMap[align]}>
    <Link href={destination} className="btn">{label}</Link>
  </div>
}