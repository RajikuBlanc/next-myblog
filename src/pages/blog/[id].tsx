import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import Layout from '../../components/layouts/Layout';
import { client } from '../../libs/client';
import { Contents } from '../../types/index';

export default function PostsDetail({
  blog,
}: {
  blog: {
    id: string;
    title: string;
    body: string;
  };
}) {
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
