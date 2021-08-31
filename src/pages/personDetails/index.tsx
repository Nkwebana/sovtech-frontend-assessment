import React from 'react';
import { useLocation } from 'react-router-dom';

import { StyledPersonDetails, StyledPersonInfo } from './styledComponents';
import { DisplayPersonHomeWorld } from '../../components';
import { convertObjectIntoArray } from '../../utils/helpers';

const PersonDetails: React.FC = () => {
  const location = useLocation();
  const selectedPerson = location && location.state ? location.state : {};
  const { name, height, mass, homeworld } = selectedPerson;

  //Converting an object into an array
  const personHomeWorld = convertObjectIntoArray(homeworld);

  return (
    <StyledPersonDetails>
      <h1>
        Here are <strong>{name}</strong>'s details:{' '}
      </h1>

      <StyledPersonInfo>
        <li>
          Height: <strong>{height}</strong>
        </li>

        <li>
          Mass: <strong>{mass}</strong>
        </li>
      </StyledPersonInfo>

      <h2>Here is Home World Info:</h2>

      <DisplayPersonHomeWorld homeworld={personHomeWorld} />
    </StyledPersonDetails>
  );
};

export default PersonDetails;