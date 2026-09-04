import { mapFaqs } from "./mapFAQs";

export const getFAQs = async () => {
  const params = {
    query: `
      query FAQQuery {
        acfOptionsFaqs {
          faqs {
            faq {
              question
              answer
            }
          }
        }
      }`,
  };

  const response = await fetch(process.env.WP_GRAPHQL_URL, {
    method: "POST",
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify(params)
  });
  const {data} = await response.json();

  return {
      faqs: mapFaqs(data?.acfOptionsFaqs.faqs.faq)
  }
}