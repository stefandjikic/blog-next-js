import Image from "next/image";
import Link from "next/link";

const SidePost = ({ post: { title, image, date, slug } }) => {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <div className="flex items-center mb-1 py-3 cursor-pointer hover:bg-gray-100">
        <Image
          className="w-1/4 rounded"
          src={image}
          alt={title}
          width={120}
          height={80}
        />
        <h3 className="w-3/4 ml-5 text-gray-500 flex flex-col">
          {title} <span className="text-xs mt-1 text-gray-400">{date}</span>{" "}
        </h3>
      </div>
    </Link>
  );
};

export default SidePost;
