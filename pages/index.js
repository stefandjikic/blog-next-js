import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import Layout from "components/Layout";
import Post from "components/Post";
import { sortByDate } from 'utils'

export default function HomePage({ posts }) {

  return (
    <Layout title="Home Page | Stefan Djikic">
      <h1 className="text-4xl font-bold border-b-2 p-3">Latest Posts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {posts.map((post, i) => (
          <Post key={i} post={post} />
        ))}
      </div>

      <Link href="/blog">
        <a className="block text-center border py-4 mt-10 border-gray-500
          rounded-md text-gray-800 hover:text-gray-50 hover:bg-gray-900 
          transition duration-300 ease select-none">
          All Posts
        </a>
      </Link>
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

  return {
    props: {
      posts: posts.sort(sortByDate).slice(0, 3),
    },
  };
}
