import Navbar from "./Navbar";
import ContactSidebar from "./ContactSidebar";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Whole-tel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <ContactSidebar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
