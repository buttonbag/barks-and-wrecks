import { gql } from "@apollo/client";
import client from "client";
import { BlockRenderer } from "components/BlockRenderer/BlockRenderer";
import { MainMenu } from "components/MainMenu";
import { cleanAndTransformBlocks } from "utils/cleanAndTransformBlocks";
import { mapMenuItems } from "utils/mapMenuItems";

export default function Home(props) {
  console.log("HOME: ", props);
  
  return (
    <div>
      <MainMenu items={props.mainMenuItems} />
      <BlockRenderer blocks={props.blocks}/>
    </div>
  );
}

export const getStaticProps = async () => {
  const {data} = await client.query({
    query: gql`
    query NewQuery {
      nodeByUri(uri: "/") {
        ... on Page {
          id
          blocks(postTemplate: false)
        }
      }
      acfOptionsMainMenu {
        mainMenu {
          menuItems {
            menuItem {
              label
              destination {
                ... on Page {
                  uri
                }
              }
            }
            items {
              label
              destination {
                ... on Page {
                  uri
                }
              }
            }
          }
        }
      }
    }`
  });
  
  return {
    props: {
      mainMenuItems: mapMenuItems(data.acfOptionsMainMenu.mainMenu.menuItems),
      blocks: cleanAndTransformBlocks(data.nodeByUri.blocks)
    }
  }
}