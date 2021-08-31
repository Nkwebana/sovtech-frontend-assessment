import React, { useState, useEffect } from 'react';
import { useStoreActions, useStoreState, Actions } from 'easy-peasy';
import { useHistory } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';
import { debounce } from 'ts-debounce';

import { StyledHome, StyledSearchBarWrapper } from './styledComponents';
import { DisplayPeople, Pagination, Loader } from '../../components';
import { StoreModel, PeopleDetails, PeopleStore } from '../../store';
import { SEARCH_BY_NAME_QUERY, GET_PEOPLE_QUERY } from '../../queries';

const Home: React.FC = () => {
  const history = useHistory();
  const [searchedName, setSearchedName] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const savePeople = useStoreActions(
    (actions: Actions<StoreModel<PeopleDetails>>) => actions.add
  );
  const saveCount = useStoreActions(
    (actions: Actions<StoreModel<number>>) => actions.addCount
  );
  const peopleData = useStoreState((state: PeopleStore) => state.peopleDetails);
  const count = useStoreState((state: any) => state.count);
  const setPageNumbers = useStoreActions(
    (actions: Actions<StoreModel<number>>) => actions.assignNewPageNumbers
  );

  const handleSelectedPerson = (selectedPerson: PeopleDetails) => {
    history.push('/details', selectedPerson);
  };

  const [executeSearch, { loading, error, data }] = useLazyQuery(
    SEARCH_BY_NAME_QUERY,
    { variables: { searchedName, pageNumber } }
  );

  const [
    getPeoplePerPage,
    { error: pageError, data: pageData, loading: pageLoading },
  ] = useLazyQuery(GET_PEOPLE_QUERY, {
    variables: { page: 1 },
  });

  const handleChange = debounce((searchEvent: string) => {
    setSearchedName(searchEvent);
    setPageNumber(1);

    setPageNumbers([]);

    executeSearch();
  }, 400);

  const handleSelectedPageNumber = (pageNumber: number) => {
    setPageNumber(pageNumber);

    if (searchedName.length === 0) {
      return getPeoplePerPage({ variables: { page: pageNumber } });
    }

    executeSearch({ variables: { searchedName, pageNumber } });
  };

  useEffect(() => {
    if (!error && !loading && data) {
      savePeople(data.searchPerson.results);
      saveCount(data.searchPerson.count);
    }
  }, [data]);

  useEffect(() => {
    if (!pageError && !pageLoading && pageData) {
      savePeople(pageData.getPeople.results);
      saveCount(pageData.getPeople.count);
    }
  }, [pageData]);

  return (
    <StyledHome>
      <StyledSearchBarWrapper>
        <input
          type="search"
          value={searchedName}
          placeholder="Search by name . . ."
          onChange={(e) => handleChange(e.target.value)}
        />
      </StyledSearchBarWrapper>

      <DisplayPeople
        peopleNames={peopleData}
        handleSelectedPerson={handleSelectedPerson}
      />

      <Pagination
        handleSelectedPageNumber={handleSelectedPageNumber}
        resultLength={peopleData.length}
        count={count}
      />

      {(loading || pageLoading) && <Loader />}
    </StyledHome>
  );
};

export default Home;
