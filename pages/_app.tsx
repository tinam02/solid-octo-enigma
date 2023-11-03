import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence, motion, Spring } from "framer-motion";
import Layout from "@/components/Layout";
import Nav from "@/components/Nav";
import { StyleProvider } from "@/hooks/StyleProvider";

export default function App({ Component, pageProps, router }: AppProps) {
  const transitionSpringPhysics: Spring = {
    type: "spring",
    mass: 0.2,
    stiffness: 24,
    damping: 10,
  };
  return (
    <StyleProvider>
      <Layout title="T">
        <AnimatePresence mode="wait">
          <motion.div key={router.route}>
            <motion.div
              className="blur"
              transition={transitionSpringPhysics}
              animate={{ opacity: 0 }}
            />
            <Nav />
            <Component {...pageProps} />{" "}
          </motion.div>
        </AnimatePresence>
      </Layout>
    </StyleProvider>
  );
}
