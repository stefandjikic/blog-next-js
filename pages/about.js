import Layout from "components/Layout";
import Image from "next/image";
import myImage from "../public/images/stefan.jpg";

const AboutPage = () => {
  return (
    <Layout title="About author | Stefan Djikic">
      <h1 className="text-3xl border-b-2 pb-4">About Me</h1>
      <div className="bg-white shadow border-rounded p-4 mt-10 flex flex-col sm:flex-row">
        <Image
          src={myImage}
          alt="stefan"
          width={300}
          height={300}
          className="rounded object-cover"
        />
        <div className="mt-4 w-full sm:w-3/4 sm:ml-8 sm:mt-0">
          <h2 className="text-xl mb-4">Stefan&apos;s Blog</h2>
          <p className="mb-2">
            Hi! My name is Stefan Đikić and I am a frontend developer experienced
            in building various websites and web applications.
          </p>
          <p>
            In this blog, I&apos;ll be writing mostly about JavaScript and
            popular frontend frameworks and libraries such as React or Next, but
            also about some basics that every developer should know about HTML
            and CSS. My main goal is progressing to a full-stack developer, so
            I&apos;ll try to include some articles about Node.js and backend, as
            I learn and progress, and other programming-related topics as well.
          </p>
          <p>
            The idea behind the blog, among sharing knowledge with others, is to
            help me sharpen my written communication skills and stay up to date
            with the industry standards.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
