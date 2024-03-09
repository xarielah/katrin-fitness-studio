import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Assistant } from "next/font/google";
import Head from "next/head";

const assistant = Assistant({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={assistant.className}>
      <Head>
        <link rel="icon" href="/logo.svg" sizes="any" />
      </Head>
      <Analytics />
      <SpeedInsights />
      <LoadingScreen />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
