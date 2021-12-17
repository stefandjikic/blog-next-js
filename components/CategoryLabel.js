import Link from "next/link";

const CategoryLabel = ({ children }) => {
  const colors = {
    JavaScript: "js",
    React: "react",
    CSS: "css",
    Testing: "testing",
    General: "general",
  };
  return (
    <div
      className={`py-1 px-1.5 bg-${colors[children]}_custom rounded text-sm text-white`}
    >
      <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  );
};

export default CategoryLabel;
