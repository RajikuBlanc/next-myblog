import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { Medias } from '../../styles/Media';

// --------------- function ---------------
export default function TagItem({ name, href }: { name: string; href: string }) {
  return (
    <TagItem_li>
      <Link href={`/tags/${name}`}>
        <a>
          <Image src={href} alt='タグ画像' width={30} height={30}></Image>
        </a>
      </Link>
    </TagItem_li>
  );
}
const TagItem_li = styled.li`
  display: flex;
  justify-content: center;
  a {
    display: block;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ${Medias.sp} {
    align-items: center;
    height: 100%;
  }
`;
