import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useStoreActions, Actions } from 'easy-peasy';

import { getPeoplePerPage } from '../src/queries';
import { Head } from './components';
import { Home } from './pages';
import { StoreModel, PeopleDetails } from '../src/store';

const App: React.FC = () => {
  const { error, loading, data } = useQuery(getPeoplePerPage(1));
  const savePeople = useStoreActions(
    (actions: Actions<StoreModel<PeopleDetails>>) => actions.add
  );

  useEffect(() => {
    if (!error && !loading && data) {
      savePeople(data.getPeople);
    }
  }, [data]);

  return (
    <>
      <Head />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
};

export default App;
