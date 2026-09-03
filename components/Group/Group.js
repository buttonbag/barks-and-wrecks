export const Group = ({children, backgroundColor}) => {
    const bgColorStyle = backgroundColor ? {backgroundColor} : {}
  // console.log("GROUP: ",children);
  console.log("BGCOLOR: ",backgroundColor);
  
  return <div className={`my-10 md:p-5 text-center`} style={{...bgColorStyle}}>
    {children}
    Group
  </div>
}