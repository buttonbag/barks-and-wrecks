
import { Column } from "components/Column"
import { Columns } from "components/Columns"
import { CTAButton } from "components/CTAButton"
import { Heading } from "components/Heading"
import { HeroArea } from "components/HeroArea"
import { Paragraph } from "components/Paragraph"
import Image from "next/image"
import { theme } from "theme";

export const BlockRenderer = ({blocks}) => {
  return blocks.map((block) => {
    switch (block.name) {
      case "acf/ctabutton": {
        return <CTAButton 
        key={block.id} 
        align={block.attributes.data.align} 
        destination={block.attributes.data.destination}
        label={block.attributes.data.label} />
      }
      case "acf/heroarea": {
        return <HeroArea 
        key={block.id} 
        image_1={block.attributes.data.image_1}
        image_2={block.attributes.data.image_2}
        eyebrow={block.attributes.data.eyebrow}
        main_title={block.attributes.data.main_title}
        subtitle={block.attributes.data.subtitle}
        />
      }
      case "core/paragraph": {
        return <Paragraph key={block.id} content={block.attributes.content} />
      }
      case 'core/columns': {        
        return <Columns 
        key={block.id} 
        isStackedOnMobile={block.attributes.isStackedOnMobile}
        textColor={theme[block.attributes.textColor] || block.attributes.style?.color?.text}
        backgroundColor={theme[block.attributes.backgroundColor] || block.attributes.style?.color?.background}>
          <BlockRenderer blocks={block.innerBlocks} />
        </Columns>
      }
      case 'core/column': {
        console.log(block);
        
        return <Column 
        key={block.id}
        width={block.attributes?.width || ""}
        // textColor={theme[block.attributes.textColor] || block.attributes.style?.color?.text}
        // backgroundColor={theme[block.attributes.backgroundColor] || block.attributes.style?.color?.background}
        >
          <BlockRenderer blocks={block.innerBlocks} />
        </Column>
      }
      case "core/heading": {
        return <Heading key={block.id} content={block.attributes.content} />
      }
      case "core/image": {
        return (<Image 
        key={block.id} 
        src={block.attributes.url}
        height={block.attributes.height}
        width={block.attributes.width}
        alt={block.attributes.alt || ""}
      />);
      }
      default: {
        console.log("UNKNOWN: ", blocks);
        return null;
      }
    }
  })
}