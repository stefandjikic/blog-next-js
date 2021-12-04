import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from 'utils'

const files = fs.readdirSync(path.join("posts"));

export const getPosts = () => {
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdown = fs.readFileSync(path.join("posts", filename), "utf-8");
    const { data: frontMatter } = matter(markdown);
    return {
      slug,
      frontMatter,
    };
  });

  return posts.sort(sortByDate)
}
