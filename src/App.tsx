import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useStoreActions, Actions } from 'easy-peasy';
import { useLazyQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import { GET_PEOPLE_QUERY } from '../src/queries';
import { Head, Loader, AppWrapper } from './components';
import { Home, PersonDetails } from './pages';
import { StoreModel, PeopleDetails } from '../src/store';

const App: React.FC = () => {
  const history = useHistory();
  const [getAllPeople, { loading, error, data }] = useLazyQuery(
    GET_PEOPLE_QUERY,
    {
      variables: { page: 1 },
    }
  );

  const savePeople = useStoreActions(
    (actions: Actions<StoreModel<PeopleDetails>>) => actions.add
  );
  const saveCount = useStoreActions(
    (actions: Actions<StoreModel<number>>) => actions.addCount
  );

  const handleGoBack = () => {
    history.push('/');
  };

  useEffect(() => {
    getAllPeople();
  }, []);

  useEffect(() => {
    if (!error && !loading && data) {
      savePeople(data.getPeople.results);
      saveCount(data.getPeople.count);
    }
  }, [data]);

  return (
    <>
      <Head handleGoBack={handleGoBack} />
      <AppWrapper>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/details" component={PersonDetails} />
        </Switch>
      </AppWrapper>

      {loading && <Loader />}
    </>
  );
};

export default App;
