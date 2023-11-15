import React from "react";
import { Link } from "react-router-dom";

import "./pagination.scss";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  pageSize: number;
}
/*  */
const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  pageSize,
}) => {
  const generatePageLinks = () => {
    const links = [];
    const threshold = 3; // Adjust this threshold based on your preference

    const addLink = (page: number) => {
      links.push(
        <Link
          key={page}
          to={`/felvetelek/${page}/${pageSize}`}
          className={currentPage === page ? "active" : ""}
        >
          {page}
        </Link>
      );
    };

    // Show all links if total pages are less than or equal to the threshold
    if (totalPages <= threshold * 2 + 1) {
      for (let i = 1; i <= totalPages; i++) {
        addLink(i);
      }
    } else {
      // Show links around the current page with ellipsis
      if (currentPage <= threshold + 2) {
        for (let i = 1; i <= threshold * 2 + 1; i++) {
          addLink(i);
        }
        links.push(<span key="ellipsis-start">...</span>);
        addLink(totalPages);
      } else if (currentPage >= totalPages - threshold - 1) {
        addLink(1);
        links.push(<span key="ellipsis-end">...</span>);
        for (let i = totalPages - threshold * 2; i <= totalPages; i++) {
          addLink(i);
        }
      } else {
        addLink(1);
        links.push(<span key="ellipsis-start">...</span>);
        for (
          let i = currentPage - threshold;
          i <= currentPage + threshold;
          i++
        ) {
          addLink(i);
        }
        links.push(<span key="ellipsis-end">...</span>);
        addLink(totalPages);
      }
    }

    return links;
  };

  return <div className="pagination">{generatePageLinks()}</div>;
};

export default Pagination;
