import Link from "next/link"

export const ButtonLink = ({destination, label, bg}) => {
  return <Link
    href={destination}
    className={`
    btn 
    ${bg} 
    hover:brightness-110
    `}>
    {label}
  </Link>
}