import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function handler(req, res) {
  let posts;
  if (process.env.NODE_ENV === "production") {
    posts = require("../../cache/data").posts;
  } else {
    const files = fs.readdirSync(path.join("posts"));
    posts = files.map((filename) => {
      const slug = filename.replace(".md", "");
      const markdown = fs.readFileSync(path.join("posts", filename), "utf-8");
      const { data: frontMatter } = matter(markdown);

      return {
        slug,
        frontMatter,
      };
    });
  }
  const results = posts.filter(
    ({ frontMatter: { title, description, category } }) =>
      title.toLowerCase().indexOf(req.query.value) !== -1 ||
      description.toLowerCase().indexOf(req.query.value) !== -1 ||
      category.toLowerCase().indexOf(req.query.value) !== -1
  );

  res.status(200).json(JSON.stringify({ results }));
}
