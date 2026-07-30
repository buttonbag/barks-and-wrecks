export const relativeToAbsoluteUrls = (htmlSting = "") => {
  return htmlSting.split(process.env.NEXT_PUBLIC_WP_URL).join("") //replace first element of url with "" to make it relative
}