import Navbar from "./Navbar";
import ContactSidebar from "./ContactSidebar";
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
        <Navbar />
        <ContactSidebar />
        <main className="container">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
