import React from "react";

export const Heading = ({content}) => {
  console.log("CONTENT: ", content);

  const tag = React.createElement(`h1`, {
    dangerouslySetInnerHTML: {__html: content}
  });
  
  return tag
}