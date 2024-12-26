import { useEffect, useState } from "react";

const Pagination = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const pages = Math.ceil(5 / 4);
    setPageCount(pages);
  }, [page]);

  return (
    <section className="overflow-x-hidden">
      <div className="w-full mx-10 flex flex-row justify-center pb-10">
        {
          [...Array(pageCount).keys()].map(number => (
            <span
              key={number}
              className={`px-2 py-1 cursor-pointer ${page === number ? "bg-blue-500 text-white" : ""}`}
              onClick={() => setPage(number)}
            >
              {number + 1}
            </span>
          ))
        }
      </div>
    </section>
  );
};

export default Pagination;
