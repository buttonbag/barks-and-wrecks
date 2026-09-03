import { getTextAlign } from "utils/fonts"
import { relativeToAbsoluteUrls } from "utils/relativeToAbsoluteUrls"

export const Paragraph = ({ textAlign, content, textColor, annotation, fontSize }) => {  
  const fontSizeMap = {
    "small" : "sm",
    "medium" : "lg",
    "large" : "xl",
    "x-large" : "3xl",
    "xx-large" : "5xl"
  }
  const annotationMap = {
    "true" : "is-style-text-annotation",
    "false" : ""
  }

  return (
    <p
    className={`
      my-5 
      max-w-8xl 
      mx-auto 
      ${getTextAlign(textAlign)} 
      ${annotationMap[annotation]}
      text-${fontSizeMap[fontSize]}
      `}
    style={{ color: textColor }}
    dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }}
    />
  )
}