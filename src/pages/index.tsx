/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layouts/Layout';
import { client } from '../libs/client';
import { Contents, blogType } from '../types/index';
export default function Home({ blog }: blogType): JSX.Element {
  console.log(blog[0].tags[0].name);

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
              {blog.tags.map((tag) => {
                return (
                  <>
                    <p key={tag.id}>{tag.name}</p>
                    {/* <img src={tag.tagimage.url} alt='' /> */}
                    <Image src={tag.tagimage.url} alt='タグ画像' width={20} height={20}></Image>
                    <p>{tag.tagimage.url}</p>
                  </>
                );
              })}
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
