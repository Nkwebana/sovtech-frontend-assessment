import React from 'react';

import { StyledPagination, StyledPageNumberWrapper } from './styledComponents';

interface CountResults {
  resultLength: number;
  count: number;
  handleSelectedPageNumber: (pageNumber: number) => void;
}

const Pagination: React.FC<CountResults> = ({
  handleSelectedPageNumber,
  resultLength,
  count,
}) => {
  const generatePaginationItemNumbers = (): Array<number> => {
    const pageNumbers: Array<number> = [];

    let totalPageNumber = count / resultLength;

    if (totalPageNumber % 1 != 0) {
      totalPageNumber = parseInt(totalPageNumber.toFixed()) + 1;
    }

    for (let i = 1; i <= totalPageNumber; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers || [];
  };

  return (
    <StyledPagination>
      <StyledPageNumberWrapper>
        {generatePaginationItemNumbers().map(
          (pageNumber: number, index: number) => (
            <a key={index} onClick={() => handleSelectedPageNumber(pageNumber)}>
              {pageNumber}
            </a>
          )
        )}
      </StyledPageNumberWrapper>
    </StyledPagination>
  );
};

export default Pagination;
