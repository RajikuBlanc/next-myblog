import { GetStaticProps } from 'next';
import Link from 'next/link';
import Layout from '../components/layouts/Layout';
import { client } from '../libs/client';
import { Contents, blogType } from '../types/index';

export default function Home({ blog }: blogType): JSX.Element {
  return (
    <Layout>
      <h1>Hello Next Blog</h1>
      <ul>
        {blog.map((blog) => {
          return (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}
export const getStaticProps: GetStaticProps = async (context) => {
  const data: Contents = await client.get({ endpoint: 'blog' });
  return {
    props: {
      blog: data.contents,
    },
  };
};
