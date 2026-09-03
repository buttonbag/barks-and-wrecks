import { mapServiceItems } from "./mapServiceItems";

export const getServiceItems = async () => {
  const params = {
    query: `
    query ServiceItemsQuery {
      acfOptionsServices {
        servicesDetails {
          service {
            description
            icon
            label
            price
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
      serviceItems: mapServiceItems(data?.acfOptionsServices.servicesDetails.service),
      // callToActionLabel: data.acfOptionsMainMenu.mainMenu.callToActionButton.label,
      // callToActionDestination: data.acfOptionsMainMenu.mainMenu.callToActionButton.destination.uri,
  }
}