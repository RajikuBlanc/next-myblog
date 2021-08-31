/* eslint-disable @next/next/link-passhref */
import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Moment from 'react-moment';
import styled from 'styled-components';
import Layout from '../../components/layouts/Layout';
import { client } from '../../libs/client';
import { TagList, Tag, blogType } from '../../types/index';

export const getStaticPaths: GetStaticPaths = async () => {
  const data: TagList = await client.get({ endpoint: 'tags' });
  const paths = data.contents.map((content) => `/tags/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params!.id;

  const data: TagList = await client.get({
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

export default function TagPost({ blog }: { blog: blogType }) {
  return (
    <Layout>
      <PostList_ul>
        {blog.map((blog) => {
          return (
            <PostItem_li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                <a>
                  <Image src={blog.thumbnail.url} alt='サムネイル' width={400} height={250}></Image>
                </a>
              </Link>

              <BlogInfo_div>
                <Link href={`/blog/${blog.id}`}>
                  <Tittle_a>{blog.title}</Tittle_a>
                </Link>
                <TagList_div>
                  {blog.tags.map((tag) => {
                    return (
                      <ul key={tag.id}>
                        <Link href={`/tags/${tag.id}`}>
                          <a>
                            <Image
                              src={tag.tagimage.url}
                              alt='タグ画像'
                              width={20}
                              height={20}
                            ></Image>
                          </a>
                        </Link>
                      </ul>
                    );
                  })}
                  <Moment format='YYYY/MM/DD'>{blog.updatedAt}</Moment>
                </TagList_div>
              </BlogInfo_div>
            </PostItem_li>
          );
        })}
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
const PostItem_li = styled.li`
  width: 30%;
  border: 1px solid #000;
`;
const Tittle_a = styled.a`
  font-size: 1.4rem;
`;

const BlogInfo_div = styled.div`
  padding: 1rem;
`;

const TagList_div = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
