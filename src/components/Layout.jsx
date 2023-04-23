import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import Contacts from "./Contacts";
import Discount from "./Discount";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Head>
        <title>Surf Store</title>
      </Head>
      <header></header>
      <main className="">
        {children}
        <Discount />
        <Contacts />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
