import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import Layout from '../../components/layouts/Layout';
import { client } from '../../libs/client';
import { Contents } from '../../types/index';
type PropType = {
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
};
export default function PostsDetail({ blog }: { blog: PropType }) {
  return (
    <Layout>
      <div>
        <p>{blog.title}</p>
        <p>{blog.body}</p>
        <Link href='/'>
          <a>Back to List</a>
        </Link>
      </div>
    </Layout>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  const data: Contents = await client.get({ endpoint: 'blog' });
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params!.id;
  const data: Contents = await client.get({ endpoint: 'blog', contentId: `${id}` });
  return {
    props: {
      blog: data,
    },
  };
};
