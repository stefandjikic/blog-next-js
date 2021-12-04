import { useState } from "react";
import Link from "next/dist/client/link";

const CategorySidebar = ({ categories, categoryName }) => {
  const [activeCategory, setActiveCategory] = useState(categoryName || "");

  return (
    <div className="p-3 mt-6 bg-white rounded shadow">
      <h3 className="bg-gray-900 text-gray-50 p-3 rounded">Categories</h3>
      <ul className="divide-y divide-gray-300">
        {categories.map((category, i) => (
          <Link
            key={i}
            href={`/blog/category/${category.toLowerCase()}`}
            passHref
          >
            <li
              onClick={(e) => setActiveCategory(e.target.innerText)}
              className={`${
                category.toLowerCase() === activeCategory.toLocaleLowerCase()
                  ? "bg-gray-100"
                  : ""
              } py-4 px-1 cursor-pointer text-sm hover:bg-gray-50`}
            >
              {category}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default CategorySidebar;
