import type { AppProps } from "next/app";
import Head from "next/head";
import PageLayout from "../components/layout/PageLayout";
import "../styles/globals.scss";
import { jost } from "../utils/fonts";
export default function App({ Component, pageProps }: AppProps) {
  const Main = () => {
    return (
      <main
        className={`${jost.variable} font-sans overflow-hidden md:overflow-visible relative z-10 bg-white mb-[750px] md:mb-[500px] lg:mb-[430px]`}
      >
        <Component {...pageProps} />
      </main>
    );
  };
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <meta property="og:type" content="website" />
      </Head>
      <PageLayout>{Main()}</PageLayout>
    </>
  );
}
