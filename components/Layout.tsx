import { useStyle } from "@/hooks/StyleProvider";
import Head from "next/head";
import Nav from "./Nav";
import classNames from "classnames";

export default function Layout({
  title,
  children,
}: {
  title: string;
  children: any;
}) {
  const { fonts } = useStyle();

  return (
    <div className={classNames(fonts.helvetica, )}>
      <Head>
        <title>{title}</title>
      </Head>
      <Nav />
      {children}
    </div>
  );
}
