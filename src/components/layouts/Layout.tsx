import Head from 'next/head';
import styled from 'styled-components';
import GlobalStyles from '../../styles/GlobalStyles';
import { Medias } from '../../styles/Media';
import TagList from '../home/TagList';
import Container from './Container';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Common_div>
      <Head>
        <title>Blanc</title>
        <link
          rel='icon'
          href='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/whale_1f40b.png'
        />
      </Head>
      <GlobalStyles />
      <Header />
      <Container>{children}</Container>
      <TagList />
      <Footer />
    </Common_div>
  );
}
const Common_div = styled.div`
  margin-top: 8rem;
  ${Medias.sp} {
    margin-top: 11rem;
  }
`;
