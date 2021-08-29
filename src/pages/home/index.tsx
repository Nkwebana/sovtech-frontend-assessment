import React from 'react';
import { useStoreState } from 'easy-peasy';

import { StyledHome } from './styledComponents';
import { DisplayPeople } from '../../components';
import { PeopleStore } from '../../store';

const Home: React.FC = () => {
  const data = useStoreState((state: PeopleStore) => state.peopleDetails);

  return (
    <StyledHome>
      <DisplayPeople peopleNames={data} />
    </StyledHome>
  );
};

export default Home;
