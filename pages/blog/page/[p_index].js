import fs from "fs";
import path from "path";
import Layout from "components/Layout";
import Post from "components/Post";
import Pagination from "components/Pagination";
import CategorySidebar from "components/CategorySidebar";
import { getPosts } from "lib/posts";
import { POSTS_PER_PAGE } from "config";

export default function BlogPage({
  posts,
  numberOfPages,
  currentPage,
  categories,
}) {
  return (
    <Layout hasSearch title="Home Page | Stefan Djikic">
      <h1 className="text-4xl font-bold border-b-2 p-3">Blog</h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-4/5 order-2 md:order-1 mr-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {posts.map((post, i) => (
              <Post key={i} post={post} />
            ))}
          </div>
          <Pagination currentPage={currentPage} numberOfPages={numberOfPages} />
        </div>
        <div className="w-full order-1 md:order-2 md:w-1/5">
          <CategorySidebar categories={categories} />
        </div>
      </div>
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

  const posts = getPosts();

  const categoriesFromPosts = posts.map((post) => post.frontMatter.category);
  const uniqueCategories = [...new Set(categoriesFromPosts)];

  const numberOfPages = Math.ceil(files.length / POSTS_PER_PAGE);
  const pageIndex = currentPage - 1;

  const sortedPostsPerPage = posts.slice(
    pageIndex * POSTS_PER_PAGE,
    (pageIndex + 1) * POSTS_PER_PAGE
  );

  return {
    props: {
      posts: sortedPostsPerPage,
      numberOfPages,
      currentPage,
      categories: uniqueCategories,
    },
  };
}
