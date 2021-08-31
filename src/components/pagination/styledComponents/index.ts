import styled from 'styled-components';

interface PageNumbers {
  activePageNumber: number;
  pageNumber: number;
}

const StyledPagination = styled.div`
  margin: 10px;
`;

const StyledPageNumberWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledPageNumber = styled.a`
  padding: 5px;
  ${({ activePageNumber, pageNumber }: PageNumbers) =>
    activePageNumber === pageNumber &&
    `background-color: green; 
    border-radius: 50%;
    color: white;
    `};
`;

export { StyledPagination, StyledPageNumberWrapper, StyledPageNumber };
