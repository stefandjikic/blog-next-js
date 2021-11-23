import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../components/Layout";

export default function HomePage({ posts }) {
  console.log(posts);
  return (
    <Layout>
      <h1>My Blog</h1>
    </Layout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdown = fs.readFileSync(path.join("posts", filename), "utf-8");
    const { data: frontMatter } = matter(markdown);
    return {
      slug,
      frontMatter,
    };
  });
  console.log(posts);
  return {
    props: {
      posts,
    },
  };
}
