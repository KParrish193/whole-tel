// Note: Page Layout styles controlled globally

import ControlBar from "./ControlBar";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Whole-tel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="body-wrapper">
        <ControlBar />
        <div className="scroll-content">
          <main className="container">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
