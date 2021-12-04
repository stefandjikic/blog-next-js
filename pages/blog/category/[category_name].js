import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import Layout from "components/Layout";
import Post from "components/Post";
import { sortByDate } from "utils";

export default function BlogCategoryPage({ posts, categoryName }) {
  return (
    <Layout title="Home Page | Stefan Djikic">
      <h1 className="text-4xl font-bold border-b-2 p-3">{categoryName.toUpperCase()}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {posts.map((post, i) => (
          <Post key={i} post={post} />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const categories = files.map((filename) => {
    const markdown = fs.readFileSync(path.join("posts", filename), "utf-8");

    const {
      data: { category },
    } = matter(markdown);
    return category.toLowerCase();
  });

  const paths = categories.map((category) => ({
    params: { category_name: category },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { category_name } }) {
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

  const filteredPostsByCategory = posts.filter(
    (post) => post.frontMatter.category.toLowerCase() === category_name
  );

  return {
    props: {
      posts: filteredPostsByCategory.sort(sortByDate),
      categoryName: category_name,
    },
  };
}
