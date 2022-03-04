import React from 'react';
import ReactPaginate from 'react-paginate';
import { useRepositores } from '../../hooks/useRepositories';

const Pagination = (): JSX.Element => {
  const { userProfile } = useRepositores();
  const pageCount = Math.ceil(userProfile.public_repos / 10);

  const onPageChange = ({ selected }: { selected: number }): void => console.log(selected);

  return (
    <ReactPaginate pageCount={100} breakLabel="..." pageRangeDisplayed={2} onPageChange={onPageChange} className="pagination" />
  );
};

export { Pagination };
