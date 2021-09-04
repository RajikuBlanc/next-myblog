export interface Article {
  id: string;
  title: string;
  body: string;
}

export interface Contents {
  contents: Article[];
  body: string;
}
export interface Tag {
  id: string;
  name: string;
  tagimage: {
    url: string;
  };
}
export interface TagList {
  contents: Tag[];
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
