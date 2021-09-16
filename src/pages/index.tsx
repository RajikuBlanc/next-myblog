/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from 'next';
import styled from 'styled-components';
import PostItem from '../components/home/PostItem';
import Layout from '../components/layouts/Layout';
import { client } from '../libs/client';
import { Medias } from '../styles/Media';
import { Contents, blogType } from '../types/index';
// --------------- SSG ---------------
export const getStaticProps: GetStaticProps = async (context) => {
  const data: Contents = await client.get({ endpoint: 'blog' });
  return {
    props: {
      blog: data.contents,
    },
  };
};

// --------------- Function ---------------
export default function Home({ blog }: blogType): JSX.Element {
  return (
    <Layout>
      <PostList_ul>
        <PostItem blog={blog} />
      </PostList_ul>
    </Layout>
  );
}

// --------------- Style ---------------
const PostList_ul = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  &::after {
    content: '';
    display: block;
    width: 300px;
    height: 0;
    ${Medias.sp} {
      width: 100%;
    }
  }
  ${Medias.custom(1024)} {
    gap: 3rem;
    justify-content: center;
  }
  ${Medias.sp} {
    gap: 3rem;
  }
`;
