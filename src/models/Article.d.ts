// ušao u link: https://newsapi.org/ i izgradio Article interface po podatcima, i svakom od njih
// dodijelio tip podataka
declare namespace Models {
  interface Article {
    source: {
      id?: string;
      name: string;
    };
    author?: string;
    title: string;
    description?: string;
    url: string;
    urlToImage?: string;
    publishedAt: string;
    content?: string;
  }
}
