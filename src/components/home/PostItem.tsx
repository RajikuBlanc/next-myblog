import Image from 'next/image';
import Link from 'next/link';
import Moment from 'react-moment';
import styled from 'styled-components';
import { blogType } from '../../types/index';
// --------------- Function ---------------
export default function PostItem({ blog }: blogType) {
  return (
    <>
      {blog.map((blog) => {
        return (
          <PostItem_li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>
                <Image src={blog.thumbnail.url} alt='サムネイル' width={400} height={250}></Image>
              </a>
            </Link>

            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
            <div>
              {blog.tags.map((tag) => {
                return (
                  <ul key={tag.id}>
                    <Image src={tag.tagimage.url} alt='タグ画像' width={20} height={20}></Image>
                  </ul>
                );
              })}
              <Moment format='YYYY/MM/DD'>{blog.updatedAt}</Moment>
            </div>
          </PostItem_li>
        );
      })}
    </>
  );
}

// --------------- Style ---------------
const PostItem_li = styled.li`
  width: 30%;
  border: 1px solid #000;
`;
