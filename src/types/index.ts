export interface Article {
  id: string;
  title: string;
  body: string;
}

export interface Contents {
  contents: Article[];
}
