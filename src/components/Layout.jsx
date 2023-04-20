import React from "react";
import Head from "next/head";
import Footer from "./Footer";


const Layout = ({ children }) => {
  return (
    <div className="">
      <Head>
        <title>Surf Store</title>
      </Head>
      <header>
      </header>
      <main className="">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
