import Link from "next/link";
import Image from "next/image";
import CategoryLabel from "./CategoryLabel";

const Post = ({ post, searchPost }) => {
  const {
    frontMatter: {
      cover_image,
      date,
      category,
      title,
      description,
      author,
      author_image,
    },
    slug,
  } = post;
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6">
      {!searchPost && (
        <Image
          src={cover_image}
          alt="post image"
          height={320}
          width={500}
          className="rounded mb-4"
        />
      )}
      <div className="flex justify-between items-center mt-3">
        <span className="font-light text-gray-600">{date}</span>
        <CategoryLabel>{category}</CategoryLabel>
      </div>
      <div className="mt-2">
        <Link href={`/blog/${slug}`}>
          <a className="post-card-title font-bold text-gray-700 hover:text-yellow-500">
            {title}
          </a>
        </Link>
        <p className="post-card-description mt-2 text-gray-600 h-20">{description}</p>
      </div>
      {!searchPost && (
        <div className="flex justify-between items-center mt-5">
          <Link href={`/blog/${slug}`}>
            <a className="text-gray-900 text-sm hover:underline">Read More</a>
          </Link>
          <Image
            src={author_image}
            alt="author"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default Post;
