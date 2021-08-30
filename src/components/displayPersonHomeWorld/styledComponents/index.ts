import styled from 'styled-components';

const StyledDisplayPersonHomeWorld = styled.ul`
  li {
    margin-bottom: 5px;
    strong {
      font-weight: bold;
    }
  }
`;

const StyledHomeWorldItem = styled.div`
  background-color: lightgreen;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export { StyledDisplayPersonHomeWorld, StyledHomeWorldItem };
