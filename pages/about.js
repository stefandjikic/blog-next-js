import Layout from "components/Layout";
import Image from "next/image";
import myImage from "../public/images/stefan.jpg";

const AboutPage = () => {
  return (
    <Layout title="About author | Stefan Djikic">
      <h1 className="text-3xl border-b-2 pb-4">About Me</h1>
      <div className="bg-white shadow border-rounded p-4 mt-10 mb-12 flex flex-col sm:flex-row">
        <Image
          src={myImage}
          alt="stefan"
          width={300}
          height={300}
          className="rounded object-cover"
        />
        <div className="mt-4 w-full sm:w-3/4 sm:ml-8 sm:mt-0">
          <h2 className="text-xl mb-4">Stefan&apos;s Blog</h2>
          <p className="mb-4">
            I am a passionate Frontend Developer with a focus on creating
            engaging and intuitive web applications. With a solid background in
            web development, I bring mock-ups to life using cutting-edge
            technologies such as React, React Native and Next.js.
          </p>
          <p className="pb-4">
            For the past three years, I have been dedicated to honing my skills
            and contributing to the success of{" "}
            <a
              className="underline"
              href="https://k7tech.agency/"
              target="_blank"
              rel="noreferrer"
            >
              K7 Tech
            </a>
            . As a Full-time Frontend Developer, I have played a key role in
            building stable and scalable web apps. My expertise in JavaScript,
            React.js, Next.js, and React Native has allowed me to seamlessly
            implement design and development principles, resulting in
            exceptional user experiences.
          </p>
          <p className="pb-4">
            In addition to my work at K7 Tech, I am currently serving as a
            Frontend Development Course Lecturer at{" "}
            <a
              className="underline"
              href="https://code.edu.rs/"
              target="_blank"
              rel="noreferrer"
            >
              Code by Comtrade
            </a>
            . In this role, I have the privilege of sharing my knowledge and
            expertise with aspiring developers, helping them acquire the skills
            necessary for a successful career in web development.
          </p>
          <p>
            I am constantly seeking opportunities to expand my knowledge and
            stay up-to-date with the latest industry trends. I thrive in
            collaborative environments, where I can leverage my strong
            communication and problem-solving skills to deliver exceptional
            results.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
