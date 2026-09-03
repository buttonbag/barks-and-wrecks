import { BlockRenderer } from "components/BlockRenderer";
import { getPage } from "utils/getPage";
import { notFound } from "next/navigation";
import { getSeo } from "utils/getSeo";

export default async function Page({params}) {
  const {slug} = await params;
  const path = Array.isArray(slug) ? slug.join("/") : "";
  const data = await getPage(path);
    if (!data) {
      notFound();
    }
  
  return <BlockRenderer blocks={data} />;
}

export async function generateMetadata({params}) {
  const {slug} = await params;
  const path = Array.isArray(slug) ? slug.join("/") : "";
  const seo = await getSeo(path);
  return {
    title: seo?.title || "",
    description: seo?.metaDesc || "",
  }
}