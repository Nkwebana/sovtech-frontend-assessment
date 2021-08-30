import React from 'react';
import { useStoreState } from 'easy-peasy';
import { useHistory } from 'react-router-dom';

import { StyledHome } from './styledComponents';
import { DisplayPeople } from '../../components';
import { PeopleStore, PeopleDetails } from '../../store';

const Home: React.FC = () => {
  const history = useHistory();
  const data = useStoreState((state: PeopleStore) => state.peopleDetails);

  const handleSelectedPerson = (selectedPerson: PeopleDetails) => {
    history.push('/details', selectedPerson);
  };

  return (
    <StyledHome>
      <DisplayPeople
        peopleNames={data}
        handleSelectedPerson={handleSelectedPerson}
      />
    </StyledHome>
  );
};

export default Home;
