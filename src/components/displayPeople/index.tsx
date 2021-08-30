import React from 'react';

import { StyledPerson, StyledPeople } from './styledComponents';
import { PeopleDetails } from '../../store';

interface Person {
  handleSelectedPerson: (selectedPerson: PeopleDetails) => void;
  peopleNames: PeopleDetails[];
}

const DisplayPeople: React.FC<Person> = ({
  peopleNames,
  handleSelectedPerson,
}) => {
  return (
    <StyledPeople>
      {peopleNames.map((personDetails, index) => (
        <StyledPerson
          key={index}
          onClick={() => handleSelectedPerson(personDetails)}
        >
          {personDetails.name}
        </StyledPerson>
      ))}
    </StyledPeople>
  );
};

export default DisplayPeople;
