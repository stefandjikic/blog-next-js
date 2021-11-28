import Link from "next/link";

const CategoryLabel = ({ children }) => {
  const colors = {
    JavaScript: "yellow",
    React: "indigo",
    CSS: "blue",
    Testing: "red",
    General: "gray",
  };
  return (
    <div
      className={`py-1 px-1.5 bg-${colors[children]}-400 rounded text-sm text-white`}
    >
      <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  );
};

export default CategoryLabel;
