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
    updatedAt: string;
    tags: [
      {
        id: string;
        name: string;
        tagimage: {
          url: string;
        };
      },
    ];
    thumbnail: {
      url: string;
    };
  }[];
};
