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
        <SnsButton_ul>
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
        </SnsButton_ul>
        <Copy_p>
          <small>&copy; 2021 Blanc</small>
        </Copy_p>
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
const SnsButton_ul = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

const Copy_p = styled.p`
  font-size: 1rem;
  color: var(--white);
  text-align: center;
  margin-top: 2rem;
`;
