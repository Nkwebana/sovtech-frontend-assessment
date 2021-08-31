import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useStoreActions, Actions } from 'easy-peasy';

import { StyledPersonDetails, StyledPersonInfo } from './styledComponents';
import { DisplayPersonHomeWorld } from '../../components';
import { convertObjectIntoArray } from '../../utils/helpers';
import { StoreModel } from '../../store';

const PersonDetails: React.FC = () => {
  const setActivePage = useStoreActions(
    (actions: Actions<StoreModel<string>>) => actions.setActivePage
  );

  const location = useLocation();
  const selectedPerson = location && location.state ? location.state : {};
  const { name, height, mass, homeworld } = selectedPerson;

  //Converting an object into an array
  const personHomeWorld = convertObjectIntoArray(homeworld);

  useEffect(() => {
    setActivePage('details');
  });

  return (
    <StyledPersonDetails>
      <h1>
        Here are <strong>{name}</strong>'s details:
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
