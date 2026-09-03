export const Columns = ({isStackedOnMobile, children, textColor, backgroundColor}) => {

  console.log("TEXT COLOR: ", backgroundColor);
  const textColorStyle = textColor ? {color: textColor} : {}
  const bgColorStyle = backgroundColor ? {backgroundColor} : {}
  return (
    <section className="my-10 md:p-5" style={{...bgColorStyle, ...textColorStyle}}>
      <div className={`max-w-full mx-auto ${isStackedOnMobile ? "block md:flex" : "flex"}`}>{children}</div>
    </section>
  )
}