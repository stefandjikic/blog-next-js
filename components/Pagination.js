import { useState } from "react";
import Link from "next/link";

const Pagination = ({ currentPage, numberOfPages }) => {
  const [activeLink, setActiveLink] = useState(currentPage);
  const firstPage = currentPage === 1;
  const lastPatge = currentPage === numberOfPages;
  const prevPage = `/blog/page/${currentPage - 1}`;
  const nextPage = `/blog/page/${currentPage + 1}`;

  if (numberOfPages === 1) return <></>;

  return (
    <div className="mt-5">
      <div className="flex my-2">
        {!firstPage && (
          <Link href={prevPage}>
            <a
              onClick={() => setActiveLink(currentPage - 1)}
              className="bg-gray-100 py-1 px-3 cursor-pointer 
              border text-gray-600 font-medium text-xs mr-1 
              hover:bg-gray-200 rounded "
            >
              Prev
            </a>
          </Link>
        )}

        {Array.from({length: numberOfPages}, (_, i) => (
          <Link href={`/blog/page/${i + 1}`}>
             <a 
              onClick={() => setActiveLink(i+1)}
              className={`bg-gray-100 py-1 px-2 cursor-pointer 
              border text-gray-600 font-medium text-xs mr-1 
              hover:bg-gray-200 rounded ${activeLink === i + 1 ? "bg-gray-200" : ''}`}
            >
              {i+1}
            </a>
          </Link>
        ))}

        {!lastPatge && (
          <Link href={nextPage}>
            <a
              onClick={() => setActiveLink(currentPage + 1)}
              className="bg-gray-100 py-1 px-3 cursor-pointer 
              border text-gray-700 font-medium text-xs 
              hover:bg-gray-200 rounded "
            >
              Next
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Pagination;
