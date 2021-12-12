/* eslint-disable @next/next/no-img-element */
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Image from "next/image";
import Layout from "components/Layout";
import CategoryLabel from "components/CategoryLabel";
import { getPosts } from "lib/posts";
import SidePost from "components/SidePost";

const PostPage = ({
  frontMatter: { title, category, date, cover_image, author, author_image },
  content,
  // slug,
  latestPosts,
}) => {
  return (
    <Layout title={title}>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-3/4 mr-10 bg-white rounded-lg shadow-md px-10 py-4 mt-6">
          <img src={cover_image} alt={title} className="w-full rounded" />
          <div className="bg-gray-50 p-3 mt-4 rounded">
            <h1 className="text-4xl my-2">{title}</h1>
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-start py-2">
                <CategoryLabel>{category}</CategoryLabel>
                <div className="mt-1 text-gray-500">{date}</div>
              </div>
              <Image
                src={author_image}
                alt={author}
                width={50}
                height={50}
                className="rounded-full object-cover mr-2"
              />
            </div>
          </div>

          <div className="blog-text mt-6">
            <div
              dangerouslySetInnerHTML={{ __html: marked(content, "gfm") }}
            ></div>
          </div>
        </div>
        <div className="w-full md:w-1/4 mt-6">
          <h3 className="font-bold mt-4 mb-6">Latest Articles</h3>
          <div>
            {latestPosts && latestPosts?.map((post, i) => (
              <SidePost key={i} post={post} />
            ))}
            {!latestPosts && <h3>No posts.</h3>}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdown = fs.readFileSync(path.join("posts", slug + ".md"), "utf-8");
  const { data: frontMatter, content } = matter(markdown);

  const posts = getPosts().slice(0, 3);
  const sidePost = posts.map((post) => {
    return {
      title: post.frontMatter.title,
      image: post.frontMatter.cover_image,
      date: post.frontMatter.date,
      slug: post.slug
    };
  });

  return {
    props: {
      frontMatter,
      content,
      slug,
      latestPosts: sidePost,
    },
  };
}

export default PostPage;
