import styled from 'styled-components';

const StyledHome = styled.div``;

const StyledSearchBarWrapper = styled.div`
  height: 50px;
  margin: 10px;

  input {
    width: 100%;
    height: 100%;
    font-size: 20px;
    padding-left: 10px;
    background: rgba(0, 0, 0, 0.003);
    border: solid 2px #3daad4;
    border-radius: 5px;

    ::placeholder {
      font-size: 20px;
    }

    ::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }
  }
`;

export { StyledHome, StyledSearchBarWrapper };
