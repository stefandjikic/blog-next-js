import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Navbar />
      <main className='container mx-auto my-8 md: px-3'>{children}</main>
    </div>
  );
};

Layout.defaultProps = {
  title: "Stefan's Blog",
  keywords: "development, programming, coding, javascript, react, frontend",
  description: "Tutorials, guides and tips about web development",
  // Everything you want to know about web development (but you are to afraid to ask on stackoverflow)
};

export default Layout;
