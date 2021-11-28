import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import Layout from "../../components/Layout";
import Post from "../../components/Post";
import { sortByDate } from '../../utils'

export default function BlogPage({ posts }) {

  return (
    <Layout title="Home Page | Stefan Djikic">
      <h1 className="text-4xl font-bold border-b-2 p-3">Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {posts.map((post, i) => (
          <Post key={i} post={post} />
        ))}
      </div>
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
      posts: posts.sort(sortByDate),
    },
  };
}
