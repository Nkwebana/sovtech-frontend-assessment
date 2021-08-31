import { Action, action, createStore, Generic, generic } from 'easy-peasy';

interface HomeWorld {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
}

export interface PeopleDetails {
  name: string;
  height: string;
  mass: string;
  gender: string;
  homeworld: HomeWorld;
}

export interface StoreModel<PeopleDetails> {
  peopleDetails: Generic<PeopleDetails>;
  pageNumbers: Generic<number[]>;
  count: number;
  activePage: string;
  add: Action<StoreModel<PeopleDetails>, PeopleDetails>;
  setNewPageNumbers: Action<StoreModel<number>, number[]>;
  addCount: Action<StoreModel<number>, number>;
  setActivePage: Action<StoreModel<string>, string>;
}

export interface PeopleStore {
  peopleDetails: PeopleDetails[];
}

const storeValue: StoreModel<PeopleDetails> = {
  peopleDetails: generic([]),
  pageNumbers: generic([]),
  count: 1,
  activePage: '',
  add: action((state, newPeople) => {
    state.peopleDetails = newPeople;
  }),
  setNewPageNumbers: action((state, newPageNumbers) => {
    state.pageNumbers = newPageNumbers;
  }),
  addCount: action((state, newCount) => {
    state.count = newCount;
  }),
  setActivePage: action((state, newActivePage) => {
    state.activePage = newActivePage;
  }),
};

export const store = createStore(storeValue);
