import React, { useEffect } from 'react';
import { useStoreActions, useStoreState, Actions } from 'easy-peasy';

import {
  StyledPagination,
  StyledPageNumberWrapper,
  StyledPageNumber,
} from './styledComponents';
import { StoreModel } from '../../store';

interface CountResults {
  resultLength: number;
  count: number;
  activePageNumber: number;
  handleSelectedPageNumber: (pageNumber: number) => void;
}

const Pagination: React.FC<CountResults> = ({
  resultLength,
  count,
  activePageNumber,
  handleSelectedPageNumber,
}) => {
  const setPageNumbers = useStoreActions(
    (actions: Actions<StoreModel<number>>) => actions.setNewPageNumbers
  );
  const pageNumbers = useStoreState((state: any) => state.pageNumbers);

  const generatePaginationItemNumbers = () => {
    const generatedPageNumbers: Array<number> = [];

    let totalPageNumber = count / resultLength;

    /*
    Checking if the number of pages has decimal values, and then
    if there are then adding one more page to accomodate the decimal.
    */
    if (totalPageNumber % 1 != 0) {
      totalPageNumber = parseInt(totalPageNumber.toFixed()) + 1;
    }

    for (let page = 1; page <= totalPageNumber; page++) {
      generatedPageNumbers.push(page);
    }

    if (pageNumbers.length === 0) {
      setPageNumbers(generatedPageNumbers);
    }
  };

  useEffect(() => {
    generatePaginationItemNumbers();
  }, [count, resultLength]);

  return (
    <StyledPagination>
      <StyledPageNumberWrapper>
        {pageNumbers.length > 0 && <h1>Pages:</h1>}
        {pageNumbers.map((pageNumber: number, index: number) => (
          <StyledPageNumber
            key={index}
            onClick={() => handleSelectedPageNumber(pageNumber)}
            activePageNumber={activePageNumber}
            pageNumber={pageNumber}
          >
            {pageNumber}
          </StyledPageNumber>
        ))}
      </StyledPageNumberWrapper>
    </StyledPagination>
  );
};

export default Pagination;
