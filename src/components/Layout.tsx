import Head from 'next/head';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Nexjs Blog</title>
        <link
          rel='icon'
          href='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/see-no-evil-monkey_1f648.png'
        />
      </Head>
      <main>{children}</main>
    </>
  );
}
