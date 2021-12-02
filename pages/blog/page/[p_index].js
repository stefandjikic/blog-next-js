import fs from "fs";
import path from "path";
// import Link from "next/link";
import matter from "gray-matter";
import Layout from "components/Layout";
import Post from "components/Post";
import Pagination from "components/Pagination";
import { sortByDate } from "utils";
import { POSTS_PER_PAGE } from "config";

export default function BlogPage({ posts, numberOfPages, currentPage }) {
  return (
    <Layout title="Home Page | Stefan Djikic">
      <h1 className="text-4xl font-bold border-b-2 p-3">Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {posts.map((post, i) => (
          <Post key={i} post={post} />
        ))}
      </div>
      <Pagination currentPage={currentPage} numberOfPages={numberOfPages} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const numberOfPages = Math.ceil(files.length / POSTS_PER_PAGE);
  const paths = [];
  for (let i = 1; i <= numberOfPages; i++) {
    paths.push({
      params: { p_index: i.toString() },
    });
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const currentPage = parseInt((params && params.p_index) || 1);

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

  const numberOfPages = Math.ceil(files.length / POSTS_PER_PAGE);
  const pageIndex = currentPage - 1;

  const sortedPostsPerPage = posts
    .sort(sortByDate)
    .slice(pageIndex * POSTS_PER_PAGE, (pageIndex + 1) * POSTS_PER_PAGE);

  return {
    props: {
      posts: sortedPostsPerPage,
      numberOfPages,
      currentPage,
    },
  };
}
