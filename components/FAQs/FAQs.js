import { getFAQs } from "utils/getFAQs";

export const FAQs = async () => {
  const data = await getFAQs();
  console.log("FAQ: ", data);

  return <div className="max-w-6xl mx-auto flex flex-col p-4 my-10 gap-6">
    {data.faqs.map(f=>(
      <div key={f.id} className="text-lg">
        <p className="font-bold">{f.question}</p>
        <p>{f.answer}</p>
      </div>
    ))}
  </div>
}