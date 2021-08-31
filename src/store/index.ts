import { Action, action, createStore } from 'easy-peasy';
import { Generic, generic } from 'easy-peasy';

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
  count: number;
  add: Action<StoreModel<PeopleDetails>, PeopleDetails>;
  addCount: Action<StoreModel<number>, number>;
}

export interface PeopleStore {
  peopleDetails: PeopleDetails[];
}

const storeValue: StoreModel<PeopleDetails> = {
  peopleDetails: generic([]),
  count: 1,
  add: action((state, newPeople) => {
    state.peopleDetails = newPeople;
  }),
  addCount: action((state, newCount) => {
    state.count = newCount;
  }),
};

export const store = createStore(storeValue);
