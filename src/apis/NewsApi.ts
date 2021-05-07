import axios from "axios";

interface NewsResponse{
    status: string
    totalResults: number
    articles: Models.Article[]
}
export async function callNewsApi(){
  const response = await axios.get<NewsResponse>("https://newsapi.org/v2/everything?q=tesla&from=2021-04-15&sortBy=publishedAt&apiKey=c18a3f4e977c46519d1090244b4e0bc1")

  return response.data
}