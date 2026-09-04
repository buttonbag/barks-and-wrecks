import { v4 as uuid } from "uuid";

export const mapFaqs = (faqs) => {
  
  return faqs.map(q=>({
    id: uuid(),
    question: q.question,
    answer: q.answer,
  }))
};