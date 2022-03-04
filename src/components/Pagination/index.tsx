import React from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import ReactPaginate from 'react-paginate';

type PaginationProps = {
  pageCount: number;
  onPageChange: (count: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ pageCount, onPageChange }): JSX.Element => {
  const handlePageChange = ({ selected }: { selected: number}): void => onPageChange(selected);

  return (
    <ReactPaginate
      pageCount={pageCount}
      breakLabel="..."
      onPageChange={handlePageChange}
      nextLabel={<AiOutlineRight />}
      previousLabel={<AiOutlineLeft />}
      pageRangeDisplayed={2}
      marginPagesDisplayed={1}
      containerClassName="pagination"
      pageClassName="item"
      previousClassName="item-buttons"
      nextClassName="item-buttons"
      activeClassName="item-active"
    />
  );
};

export { Pagination };
