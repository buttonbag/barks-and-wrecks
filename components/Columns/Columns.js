import Image from "next/image"

export const Columns = ({isStackedOnMobile, children, textColor, backgroundColor}) => {
  const textColorStyle = textColor ? {color: textColor} : {};
  const bgColorStyle = backgroundColor ? {backgroundColor} : {};
  return (
    <section className="max-w-screen-2xl mx-auto md:flex m-h-[946px] w-full overflow-hidden" 
    style={{...textColorStyle, ...bgColorStyle}}>
      <div className="flex my-10 mx-auto">{children}</div>
    </section>
  )
}