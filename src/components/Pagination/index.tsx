import React from 'react';
import ReactPaginate from 'react-paginate';
import { useRepositores } from '../../hooks/useRepositories';

const Pagination = (): JSX.Element => {
  const { userProfile } = useRepositores();
  const pageCount = Math.ceil(userProfile.public_repos / 10);

  return (
    <ReactPaginate pageCount={pageCount} breakLabel="..." pageRangeDisplayed={2} marginPagesDisplayed={1} containerClassName="pagination" pageClassName="item" previousClassName="item-buttons" nextClassName="item-buttons" activeClassName="item-active" />
  );
};

export { Pagination };
