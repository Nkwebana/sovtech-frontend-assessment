import React from 'react';

import { StyledPerson, StyledPeople } from './styledComponents';
import { PeopleDetails } from '../../store';

interface Person {
  peopleNames: PeopleDetails[];
}

const DisplayPeople: React.FC<Person> = ({ peopleNames }) => {
  return (
    <StyledPeople>
      {peopleNames.map(({ name }, index) => (
        <StyledPerson key={index}>{name}</StyledPerson>
      ))}
    </StyledPeople>
  );
};

export default DisplayPeople;
