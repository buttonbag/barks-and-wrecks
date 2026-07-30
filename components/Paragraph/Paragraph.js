import { relativeToAbsoluteUrls } from "utils/relativeToAbsoluteUrls";

export const Paragraph = ({content}) => {  
  console.log("CONTENT: ", content);
  
  return <p dangerouslySetInnerHTML={{__html: relativeToAbsoluteUrls(content)}}/>
}