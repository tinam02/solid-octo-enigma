import Head from "next/head";
import Link from "next/link";

export default function Layout({
  title,
  children,
}: {
  title: string;
  children: any;
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
      {children}
    </>
  );
}
