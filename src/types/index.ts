export interface Article {
  id: string;
  title: string;
  body: string;
}

export interface Contents {
  contents: Article[];
}

export type blogType = {
  blog: {
    id: string;
    title: string;
    body: string;
  }[];
};
