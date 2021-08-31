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
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const StyledPageNumber = styled.a`
  padding: 5px;
  margin: 5px;
  ${({ activePageNumber, pageNumber }: PageNumbers) =>
    activePageNumber === pageNumber &&
    `background-color: green; 
    border-radius: 50%;
    color: white;
    `};
`;

export { StyledPagination, StyledPageNumberWrapper, StyledPageNumber };
