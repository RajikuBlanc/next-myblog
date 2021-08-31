/* eslint-disable @next/next/link-passhref */
import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Moment from 'react-moment';
import styled from 'styled-components';
import PostItem from '../../components/home/PostItem';
import Layout from '../../components/layouts/Layout';
import { client } from '../../libs/client';
import { TagList, blogType, Contents } from '../../types/index';

// --------------- SSG ---------------
export const getStaticPaths: GetStaticPaths = async () => {
  const data: Contents = await client.get({ endpoint: 'tags' });
  const paths = data.contents.map((content: { id: string }) => `/tags/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params!.id;
  const data: Contents = await client.get({
    endpoint: 'blog',
    queries: {
      filters: `tags[contains]${id}`,
    },
  });
  const tag: TagList = await client.get({
    endpoint: 'tags',
    queries: {
      filters: `id[equals]${id}`,
    },
  });

  return {
    props: {
      tag: tag.contents,
      blog: data.contents,
    },
  };
};

export default function TagPost({ blog }: blogType): JSX.Element {
  return (
    <Layout>
      <PostList_ul>
        <PostItem blog={blog} />
      </PostList_ul>
    </Layout>
  );
}

const PostList_ul = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;
