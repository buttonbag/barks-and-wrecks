import { Cover } from "components/Cover"
import { CTAButton } from "components/CTAButton"
import { Heading } from "components/Heading"
import { Paragraph } from "components/Paragraph"

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
      case "core/paragraph": {
        return <Paragraph key={block.id} content={block.attributes.content} />
      }
      case "core/heading": {
        return <Heading key={block.id} content={block.attributes.content} />
      }
      case "core/cover": {
        return (
        <Cover key={block.id} background={block.attributes.url}>
          <BlockRenderer blocks={block.innerBlocks} />
        </Cover>
        )
      }
      default:
        return null;
    }
  })
}