import React from 'react';

import {
  StyledDisplayPersonHomeWorld,
  StyledHomeWorldItem,
} from './styledComponents';

interface HomeWorld {
  homeworld: {
    name: string;
    value: string;
  }[];
}

const DisplayPersonHomeWorld: React.FC<HomeWorld> = ({ homeworld }) => {
  //Capitilizing the first latter of name.
  const capitalizingFirstLetter = (name: string) =>
    name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <StyledDisplayPersonHomeWorld>
      {homeworld.map(
        ({ name, value }) =>
          name !== '__typename' && (
            <StyledHomeWorldItem>
              <li>{capitalizingFirstLetter(name)}</li>

              <li>
                <strong>{value}</strong>
              </li>
            </StyledHomeWorldItem>
          )
      )}
    </StyledDisplayPersonHomeWorld>
  );
};

export default DisplayPersonHomeWorld;
