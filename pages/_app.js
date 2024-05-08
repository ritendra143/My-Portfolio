import "../styles/globals.css";
import Layout from "../components/Layout";
import Transition from "../components/Transition";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
    <Head>
      <title>Ritendra Bhadauriya</title>
    </Head>
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
    </>
  );
}

export default MyApp;
