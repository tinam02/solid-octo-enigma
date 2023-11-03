import localFont from 'next/font/local'
import Head from "next/head";
import Link from "next/link";

const myFont = localFont({ src: '../pages/divine_imperium.woff2' })

export default function Layout({
  title,
  children,
}: {
  title: string;
  children: any;
}) {
  return (
    <div className={myFont.className}>
      <Head>
        <title>{title}</title>
      </Head>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
      {children}
    </div>
  );
}
