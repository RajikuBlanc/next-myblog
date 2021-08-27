import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { client } from '../../../libs/client';
import { Contents } from '../../types/index';
export default function PostsDetail() {
  const router = useRouter();
  return (
    <div>
      <p>{router.query.title}</p>
      <Link href='/'>
        <a>Back to List</a>
      </Link>
    </div>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  const data: Contents = await client.get({ endpoint: 'blog' });
  const paths = data.contents.map((content) => `/blog/${content.title}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async () => {
  const data: Contents = await client.get({ endpoint: 'blog' });

  return {
    props: {
      blog: data.contents,
    },
  };
};
