import { NextResponse } from "next/server";

export async function POST(request) {

  try {
    const filters = await request.json();

    let petFriendlyFilter = ``;
    let parkingFilter = ``;
    let minPriceFilter = ``;
    let maxPriceFilter = ``;

    if (filters.parking) {
      parkingFilter = `{
        key:"parking"
        compare: EQUAL_TO
        value: "1"
      }`
    }
    if (filters.petFriendly) {
      petFriendlyFilter = `{
        key:"pet_friendly"
        compare: EQUAL_TO
        value: "1"
      }`
    }
    if (filters.minPrice) {
      minPriceFilter = `{
        key:"price"
        compare: GREATER_THAN_OR_EQUAL_TO
        value: "${filters.minPrice}}"
        type: NUMERIC
      }`
    }
    if (filters.maxPrice) {
      maxPriceFilter = `{
        key:"price"
        compare: LESS_THAN_OR_EQUAL_TO
        value: "${filters.maxPrice}}"
        type: NUMERIC
      }`
    }

    const response = await fetch(process.env.WP_GRAPHQL_URL, {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        query: `
        query AllProductsQuery {
          products(where: {offsetPagination: {size: 3, offset: ${((filters.page || 1) -1) * 3}},
          metaQuery: {
            relation: AND
            metaArray: [
              ${price}
            ]
          }
          }) {
            pageInfo {
              offsetPagination {
                total
              }
            }
            nodes {
              databaseId
              title
              uri
              featuredImage {
                node {
                  uri
                  altText
                  sourceUrl
                }
              }
              productProperties {
                price
              }
            }
          }
        }`
      })
    });

    const {data} = await response.json();
    return NextResponse.json({
      total: data.products.pageInfo.offsetPagination.total,
      products: data.products.nodes,
    })

  } catch (error) {
    console.log("ERROR: ", error);
    
  }
};