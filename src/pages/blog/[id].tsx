/* eslint-disable @next/next/link-passhref */
import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Moment from 'react-moment';
import styled from 'styled-components';
import Container from '../../components/layouts/Container';
import Layout from '../../components/layouts/Layout';
import { client } from '../../libs/client';
import { Contents } from '../../types/index';

// --------------- Type ---------------
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
// --------------- SSG ---------------
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
// --------------- Function ---------------
export default function PostsDetail({ blog }: { blog: PropType }) {
  return (
    <Layout>
      <Container>
        <Title_h2>{blog.title}</Title_h2>
        <PublishDate_p>
          <Moment format='YYYY/MM/DD'>{blog.updatedAt}</Moment>
        </PublishDate_p>
        <Body_section>
          <Image src={blog.thumbnail.url} alt='サムネイル' width={1200} height={600}></Image>
          <div
            dangerouslySetInnerHTML={{
              __html: `${blog.body}`,
            }}
          />
        </Body_section>
        <Link href='/'>
          <BackButton_a>Back to List</BackButton_a>
        </Link>
      </Container>
    </Layout>
  );
}
// --------------- Styled ---------------
const Title_h2 = styled.h2`
  font-size: 2.4rem;
  color: var(--primary);
  text-align: center;
  margin-bottom: 1rem;
`;
const Body_section = styled.section`
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: var(--black);
  }
  h2 {
    font-size: 2.4rem;
  }
  h3 {
    font-size: 2rem;
  }
  p {
    font-size: 2rem;
  }
  li {
    list-style: inside;
    font-size: 2rem;
  }
  a {
    color: var(--blue);
    &:hover {
      text-decoration: underline;
    }
  }
`;
const BackButton_a = styled.a`
  width: 200px;
  height: 50px;
  border-radius: 5px;
  font-size: 2rem;
  display: block;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  border: 1px solid var(--primary);
  cursor: pointer;
  color: var(--primary);
  &:hover {
    color: var(--blue);
    border: 1px solid var(--blue);
  }
`;
const PublishDate_p = styled.p`
  display: flex;
  justify-content: flex-end;
`;
