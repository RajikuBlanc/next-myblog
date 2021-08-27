import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { client } from '../../libs/client';
import { Contents } from '../types/index';

export default function Home({
  blog,
}: {
  blog: {
    id: string;
    title: string;
    body: string;
  }[];
}): JSX.Element {
  return (
    <div>
      <Head>
        <title>Create Next Blog</title>
      </Head>
      <h1>Hello Next Blog</h1>
      <ul>
        {blog.map((blog) => {
          return (
            <li key={blog.id}>
              <Link href={`/blog/${blog.title}`}>
                <a>{blog.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data: Contents = await client.get({ endpoint: 'blog' });

  return {
    props: {
      blog: data.contents,
    },
  };
};
