import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "components/Layout";
import Post from "components/Post";
import CategorySidebar from "components/CategorySidebar";
import { getPosts } from "lib/posts";

export default function BlogCategoryPage({ posts, categoryName, categories }) {
  return (
    <Layout hasSearch title="Home Page | Stefan Djikic">
      <h1 className="text-4xl font-bold border-b-2 p-3">
        {categoryName.toUpperCase()}
      </h1>
      <div className="flex">
        <div className="w-4/5 mr-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {posts.map((post, i) => (
              <Post key={i} post={post} />
            ))}
          </div>
        </div>
        <div className="w-1/5">
          <CategorySidebar categoryName={categoryName} categories={categories} />
        </div>
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
  const posts = getPosts();

  const filteredPostsByCategory = posts.filter(
    (post) => post.frontMatter.category.toLowerCase() === category_name
  );

  const categoriesFromPosts = posts.map((post) => post.frontMatter.category);
  const uniqueCategories = [...new Set(categoriesFromPosts)];

  return {
    props: {
      posts: filteredPostsByCategory,
      categoryName: category_name,
      categories: uniqueCategories,
    },
  };
}
