import { gql } from "@apollo/client";
import client from "client";
import { Page } from "components/Page";
import { getPageStaticProps } from "utils/getPageStaticProps";

export default Page;

// get static props must be added when using getStaticPaths in [...slug]
export const getStaticProps = getPageStaticProps;

// get static paths is a built-in NextJS function
  // query page path via uri to get the data associated
export const getStaticPaths = async() => {
  const {data} = await client.query({
    query : gql`
      query AllPagesQuery {
        pages {
          nodes {
            uri
          }
        }
      }    
    `
  })
  
  // pass uri as param to slug
  return {
    paths: data.pages.nodes.filter(page => {page.uri !="/"}).map(page => ({ // mapping all not including the homepage
      params: {
        slug: page.uri.substring(1, page.uri.length - 1).split("/"),
      }
    })),
    fallback: "blocking" // last 10 not included pages will be rendered server side
  }
}