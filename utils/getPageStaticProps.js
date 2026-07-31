import client from "client";
import { mapMenuItems } from "./mapMenuItems";
import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks";
import { gql } from "@apollo/client";

export const getPageStaticProps = async (context) => {
  const uri = context.params?.slug ? `/${context.params.slug.join("/")}/` : "/";
  const {data} = await client.query({
    query: gql`
    query PageQuery($uri: String!) {
      nodeByUri(uri: $uri) {
        ... on Page {
          id
          title
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
    }`,
    variables: {
      uri
    }
  });
  
  return {
    props: {
      title: data.nodeByUri.title,
      mainMenuItems: mapMenuItems(data.acfOptionsMainMenu.mainMenu.menuItems),
      blocks: cleanAndTransformBlocks(data.nodeByUri.blocks)
    }
  }
}