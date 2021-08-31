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
  add: Action<StoreModel<PeopleDetails>, PeopleDetails>;
  assignNewPageNumbers: Action<StoreModel<number>, number[]>;
  addCount: Action<StoreModel<number>, number>;
}

export interface PeopleStore {
  peopleDetails: PeopleDetails[];
}

const storeValue: StoreModel<PeopleDetails> = {
  peopleDetails: generic([]),
  pageNumbers: generic([]),
  count: 1,
  add: action((state, newPeople) => {
    state.peopleDetails = newPeople;
  }),
  assignNewPageNumbers: action((state, newPageNumbers) => {
    state.pageNumbers = newPageNumbers;
  }),
  addCount: action((state, newCount) => {
    state.count = newCount;
  }),
};

export const store = createStore(storeValue);
