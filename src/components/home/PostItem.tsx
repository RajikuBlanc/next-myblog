/* eslint-disable @next/next/link-passhref */
import Image from 'next/image';
import Link from 'next/link';
import Moment from 'react-moment';
import styled from 'styled-components';
import { Medias } from '../../styles/Media';
import { blogType } from '../../types/index';
// --------------- Function ---------------
export default function PostItem({ blog }: blogType): JSX.Element {
  return (
    <>
      {blog.map((blog) => {
        return (
          <PostItem_li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>
                <Image
                  className='tumbnail'
                  src={blog.thumbnail.url}
                  alt='サムネイル'
                  width={400}
                  height={250}
                ></Image>
              </a>
            </Link>

            <BlogInfo_div>
              <Link href={`/blog/${blog.id}`}>
                <Tittle_a>{blog.title}</Tittle_a>
              </Link>
              <InfoBox_div>
                <TagList_ul>
                  {blog.tags.map((tag) => {
                    return (
                      <TagItem_li key={tag.id}>
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
                      </TagItem_li>
                    );
                  })}
                </TagList_ul>
                <Moment format='YYYY/MM/DD'>{blog.updatedAt}</Moment>
              </InfoBox_div>
            </BlogInfo_div>
          </PostItem_li>
        );
      })}
    </>
  );
}

// --------------- Style ---------------
const PostItem_li = styled.li`
  width: 300px;
  border: 1px solid var(--primary);
  .tumbnail {
    object-fit: contain;
  }
  ${Medias.sp} {
    width: 100%;
  }
`;
const Tittle_a = styled.a`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--primary);
  cursor: pointer;
  &:hover {
    color: var(--blue);
  }
`;
const BlogInfo_div = styled.div`
  padding: 1rem;
`;
const InfoBox_div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
`;
const TagList_ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const TagItem_li = styled.li`
  a {
    display: inline-block;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
