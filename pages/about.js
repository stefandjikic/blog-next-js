import Layout from "components/Layout";
import Image from "next/image";
// import myImage from '/images/stefan.jpg'
import myImage from "../public/images/stefan.jpg";

const AboutPage = () => {
  return (
    <Layout title="About author | Stefan Djikic">
      <h1 className="text-3xl border-b-2 pb-4">About Me</h1>
      <div className="bg-white shadow border-rounded p-4 mt-10 flex">
        <Image
          src={myImage}
          alt="stefan"
          width={300}
          height={300}
          className="rounded object-cover"
        />
        <div className="ml-8">
          <h2 className="text-xl mb-4">Stefan&apos;s Blog</h2>
          <p className="mb-2">
            Hi! My name is Stefan Đikić and I am frontend developer.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
