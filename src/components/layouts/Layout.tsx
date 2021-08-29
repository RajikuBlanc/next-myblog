import Head from 'next/head';
import GlobalStyles from '../../styles/GlobalStyles';
import Container from './Container';
import Header from './Header';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
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
    </>
  );
}
