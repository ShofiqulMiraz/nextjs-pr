import Head from "next/head";
import Header from "../components/header/header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
      </main>
    </div>
  );
}
