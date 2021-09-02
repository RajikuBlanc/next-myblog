import Image from 'next/image';
import styled from 'styled-components';
// --------------- function ---------------
export default function TagList() {
  return (
    <TagList_ul>
      <Image src='/images/nextjs.svg' alt='' width={50} height={50}></Image>
    </TagList_ul>
  );
}
const TagList_ul = styled.ul`
  .tagImg {
    width: 100px;
    height: 100px;
  }
`;
