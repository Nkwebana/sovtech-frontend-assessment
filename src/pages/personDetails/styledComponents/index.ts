import styled from 'styled-components';

const StyledPersonDetails = styled.div`
  padding: 10px;
  h1,
  h2 {
    font-size: 20px;
    margin-bottom: 20px;
    strong {
      font-weight: bold;
    }
  }
`;

const StyledPersonInfo = styled.ul`
  margin-bottom: 30px;
  li {
    font-size: 18px;
    margin-bottom: 10px;
    background-color: lightblue;
    padding: 10px;
    strong {
      font-weight: bold;
    }
  }
`;
export { StyledPersonDetails, StyledPersonInfo };
