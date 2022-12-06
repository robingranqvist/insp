import Link from "next/link";

export default function Pagination({ currentPage, numPages, category }) {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;

  let prevPage;
  let nextPage;

  if (category) {
    prevPage = `/category/${category}/${currentPage - 1}`;
    nextPage = `/category/${category}/${currentPage + 1}`;
  } else {
    prevPage = `/page/${currentPage - 1}`;
    nextPage = `/page/${currentPage + 1}`;
  }

  if (numPages === 1) return <></>;

  return (
    <div className="container">
      <div className="pagination">
        {!isFirst && (
          <Link href={prevPage} legacyBehavior>
            <a className="nav__link">Previous page</a>
          </Link>
        )}

        {!isLast && (
          <Link href={nextPage} legacyBehavior>
            <a className="nav__link">Next page</a>
          </Link>
        )}
      </div>
    </div>
  );
}
