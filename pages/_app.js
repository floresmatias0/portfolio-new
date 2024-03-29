import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import Navbar from "../components/navbar/Navbar";
import Language from "../components/changeLang/Language";

import "../styles/globals.css";
import "../styles/navbar.scss";
import "../styles/projects.scss";
import "../styles/certificate.scss";
import "../styles/contact.scss";
import "../styles/skills.scss";
import "../styles/index.scss";
import "../components/i18n/i18n";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [logged, setLogged] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("name")) {
      setLogged(localStorage.getItem("name"));
    }
    router && router.pathname === "/" && logged ? router.push("/home") : "";
    router && router.pathname !== "/" && !logged ? router.push("/") : "";
  }, [logged, router]);

  return (
    <div>
      <Head>
        <title>Matias Flores</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx>
        {`
          div {
            width: 100%;
            display: flex;
            flex-direction: row;
          }
        `}
      </style>
      {router && router.pathname !== "/" && logged ? (
        <>
          <Language/>
          <Navbar />
          <Component {...pageProps} />
        </>
      ) : router && router.pathname === "/" && !logged ? (
        <Component {...pageProps} />
      ) : (
        <></>
      )}
    </div>
  );
}

export default MyApp;
