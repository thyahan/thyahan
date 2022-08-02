import type { NextPage } from "next";
import Head from "next/head";
import LandingContainer from "containers/Landing";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{"ytth <dev & design/>"}</title>
        <meta name="description" content="Yutthana Yahan a Web Developer \& Designer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full flex justify-center items-center">
        <LandingContainer />
      </main>
    </div>
  );
};

export default Home;
