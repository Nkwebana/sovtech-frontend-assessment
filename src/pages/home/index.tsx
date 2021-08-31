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

  //useStoreState
  const peopleData = useStoreState((state: PeopleStore) => state.peopleDetails);
  const count = useStoreState((state: any) => state.count);
  const pageNumber = useStoreState((state: any) => state.activePageNumber);
  const searchedName = useStoreState((state: any) => state.searchedName);

  //useStoreActions
  const savePeople = useStoreActions(
    (actions: Actions<StoreModel<PeopleDetails>>) => actions.add
  );
  const saveCount = useStoreActions(
    (actions: Actions<StoreModel<number>>) => actions.addCount
  );
  const setPageNumbers = useStoreActions(
    (actions: Actions<StoreModel<number>>) => actions.setNewPageNumbers
  );
  const setActivePageName = useStoreActions(
    (actions: Actions<StoreModel<string>>) => actions.setActivePageName
  );
  const setActivePageNumber = useStoreActions(
    (actions: Actions<StoreModel<number>>) => actions.setActivePageNumber
  );
  const setSearchedName = useStoreActions(
    (actions: Actions<StoreModel<string>>) => actions.setSearchedName
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
    setActivePageNumber(1);

    setPageNumbers([]);

    executeSearch();
  }, 400);

  const handleSelectedPageNumber = (pageNumber: number) => {
    setActivePageNumber(pageNumber);

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

  useEffect(() => {
    setActivePageName('home');
  });

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
        activePageNumber={pageNumber}
      />

      {(loading || pageLoading) && <Loader />}
    </StyledHome>
  );
};

export default Home;
