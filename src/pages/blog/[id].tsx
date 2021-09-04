/* eslint-disable @next/next/link-passhref */
import cheerio from 'cheerio';
import hljs from 'highlight.js';
import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Moment from 'react-moment';
import styled from 'styled-components';
import BackToButton from '../../components/common/BackToButton';
import Layout from '../../components/layouts/Layout';
import { client } from '../../libs/client';
import { Body_section } from '../../styles/Blogstyles';
import { Contents } from '../../types/index';
import 'highlight.js/styles/night-owl.css';
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

export const getStaticProps: GetStaticProps = async (context: any) => {
  const id = context.params!.id;
  const data: Contents = await client.get({ endpoint: 'blog', contentId: `${id}` });
  const $ = cheerio.load(data.body);
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass('hljs');
  });
  return {
    props: {
      blog: data,
      highlightedBody: $.html(),
    },
  };
};
// --------------- Function ---------------
export default function PostsDetail({
  blog,
  highlightedBody,
}: {
  blog: PropType;
  highlightedBody: any;
}) {
  return (
    <Layout>
      <Title_h2>{blog.title}</Title_h2>
      <PublishDate_p>
        <Moment format='YYYY/MM/DD'>{blog.updatedAt}</Moment>
      </PublishDate_p>
      <Body_section>
        <Image src={blog.thumbnail.url} alt='サムネイル' width={1200} height={600}></Image>
        <div dangerouslySetInnerHTML={{ __html: highlightedBody }}></div>
      </Body_section>
      <BackToButton />
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

const PublishDate_p = styled.p`
  display: flex;
  justify-content: flex-end;
  font-size: 1.6rem;
`;
