import Head from "next/head";
import Navbar from "./Navbar";
import Search from "./Search";
import Footer from "./Footer";

const Layout = ({ title, keywords, description, children, hasSearch }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Navbar />
      {hasSearch && <Search />}
      <main className={`container mx-auto ${hasSearch ? 'mt-1 mb-8' : 'my-8'} md: px-3`}>{children}</main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Blog Posts | Stefan Djikic",
  keywords: "development, programming, coding, javascript, react, frontend",
  description: "Tutorials, guides and tips about web development",
  // Everything you want to know about web development (but you are to afraid to ask on stackoverflow)
};

export default Layout;
