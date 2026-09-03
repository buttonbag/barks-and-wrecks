import { CallToActionButton } from "components/CallToActionButton";
import { Column } from "components/Column";
import { Columns } from "components/Columns";
import { Cover } from "components/Cover";
import { Heading } from "components/Heading";
import { Paragraph } from "components/Paragraph";
import { ProductSearch } from "components/ProductSearch";
import { FormspreeForm } from "components/FormspreeForm";
import Image from "next/image";
import { theme } from "theme";
import { ProductProperties } from "components/ProductProperties";
import { Gallery } from "components/Gallery";
import { TickItem } from "components/TickItem";
import { Calendar } from "components/Calendar";
import { Product, ServiceCard } from "components/ServiceCard";
import { Group } from "components/Group";
import { HeroArea } from "components/HeroArea";
import { StaffCard } from "components/StaffCard";
import { ServiceItems } from "components/ServiceItems";

export const BlockRenderer = ({blocks}) => {
  return blocks.map((block) => {
    switch (block.name) {
      case 'core/gallery': {
        return <Gallery 
        key={block.id} 
        columns={block.attributes.columns || 3}
        cropImages={block.attributes.imageCrop}
        items={block.innerBlocks}
        />
      }
      case 'acf/heroarea': {
        return <HeroArea 
        key={block.id}
        image_1={block.attributes.data.image_1}
        image_2={block.attributes.data.image_2}
        hero_text={block.attributes.data.hero_text}
        >
        </HeroArea>
      }
      case 'acf/tickitem': {
        return <TickItem key={block.id}>
          <BlockRenderer blocks={block.innerBlocks} />
        </TickItem>
      }
      case 'acf/staffcard': {
        return <StaffCard 
        key={block.id}
        tag={block.attributes.data.tag}
        image={block.attributes.data.image}
        name={block.attributes.data.name}
        role={block.attributes.data.role}
        description={block.attributes.data.description}
        />
      }
      // case 'acf/servicedetails': {
      //   console.log("SERVICE: ",block);
      //     return <div 
      //     key={block.id} 
      //     />
          // <ServiceCard 
          //   key={block.id} 
          //   icon={block.attributes.data.icon}
          //   title={block.attributes.data.title}
          //   content={block.attributes.data.content}
          //   price={block.attributes.data.price}
          // />
      // }
      case 'acf/serviceitems': {
        return <ServiceItems key={block.id} />
      }
      case 'acf/servicecard': {  
        
        return <ServiceCard 
          key={block.id} 
          icon={block.attributes.data.icon}
          title={block.attributes.data.title}
          content={block.attributes.data.content}
          price={block.attributes.data.price}
        />
      }
      case 'acf/productsearch': {
        return <ProductSearch key={block.id} />
      }
      case 'acf/propertyfeatures': {
        return <ProductProperties 
        key={block.id} 
        price={block.attributes.price}
        description={block.attributes.description}
        />
      }
      case 'acf/formspreeform': {
        return <FormspreeForm 
        key={block.id} 
        formId={block.attributes.data.form_id} />
      }
      case 'acf/ctabutton': {
        return <CallToActionButton 
        key={block.id}
        align={block.attributes.data.align}
        destination={block.attributes.data.destination}
        label={block.attributes.data.label}
        bgColor={block.attributes?.data.bg_color}
        />
      }
      case 'core/paragraph': {
        return <Paragraph 
        key={block.id} 
        textAlign={block.attributes.style?.typography.textAlign}
        content={block.attributes.content}
        textColor={theme[block.attributes.textColor] || block.attributes.style?.color?.text}
        annotation={block.attributes.className === "is-style-text-annotation" ? true : false}
        fontSize={block.attributes.fontSize}
        />
      }
      case 'core/post-title':
      case 'core/heading': {
        return <Heading 
        key={block.id} 
        level={block.attributes.level}
        textColor={theme[block.attributes.textColor]}
        textAlign={block.attributes.style?.typography?.textAlign}
        content={block.attributes.content}
        />
      }
      case 'core/cover': {
        return (
          <Cover key={block.id} background={block.attributes.url}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Cover>
        );
      }
      case 'core/columns': {
        return <Columns 
        key={block.id} 
        isStackedOnMobile={block.attributes.isStackedOnMobile}
        textColor={theme[block.attributes?.textColor] || block.attributes?.style?.color?.text}
        backgroundColor={theme[block.attributes?.backgroundColor] || block.attributes?.style?.color?.background}>
          <BlockRenderer blocks={block.innerBlocks} />
        </Columns>
      }
      case 'core/column': {
        return <Column 
        key={block.id}
        width={block.attributes?.width || ""}
        textColor={theme[block.attributes?.textColor] || block.attributes?.style?.color?.text}
        backgroundColor={theme[block.attributes?.backgroundColor] || block.attributes?.style?.color?.background}
        >
          <BlockRenderer blocks={block.innerBlocks} />
        </Column>
      }
      case 'core/block': {
        return <BlockRenderer key={block.id} blocks={block.innerBlocks} />
      }
      case 'acf/calendar': {
        return <Calendar key={block.id} dataUrl={block.attributes.data.data_url} />
      }
      case 'core/image': {
        return <Image 
        key={block.id} 
        src={block.attributes.url}
        height={block.attributes.height}
        width={block.attributes.width}
        alt={block.attributes.alt || ""}
      />
      }
      
      default:
        console.log("UNKNOWN: ", block);
        return null;
    }
  })
}