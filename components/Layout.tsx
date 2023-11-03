import { useStyle } from "@/hooks/StyleProvider";
import Head from "next/head";
import Nav from "./Nav";

export default function Layout({
  title,
  children,
}: {
  title: string;
  children: any;
}) {
  const { fonts } = useStyle();

  return (
    <div className={fonts.lorenza} style={{fontWeight:'bold',fontSize:'20px'}}>
      <Head>
        <title>{title}</title>
      </Head>
      <Nav />
      {children}
    </div>
  );
}
