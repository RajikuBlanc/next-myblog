import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { IoMdMail } from 'react-icons/io';
import { IoLogoTwitter } from 'react-icons/io5';
import styled from 'styled-components';
import Container from './Container';
export default function Footer() {
  return (
    <Fotter>
      <Container>
        <Link href='https://twitter.com/Whale_ELAHW00'>
          <a target='_blank'>
            <IoLogoTwitter color={'#ffffff'} className='snsIcon' />
          </a>
        </Link>
        <Link href='https://github.com/RajikuBlanc'>
          <a target='_blank'>
            <AiFillGithub color={'#ffffff'} className='snsIcon' />
          </a>
        </Link>
        <Link href='mailto:rajiku.blanc@gmail.com'>
          <a target='_blank'>
            <IoMdMail color={'#ffffff'} className='snsIcon' />
          </a>
        </Link>
      </Container>
    </Fotter>
  );
}
const Fotter = styled.footer`
  height: 160px;
  background-color: var(--primary);
  padding-top: 7rem;
  margin-top: 2rem;
  .snsIcon {
    width: 30px;
    height: auto;
  }
  a {
    display: inline-block;
  }
`;
