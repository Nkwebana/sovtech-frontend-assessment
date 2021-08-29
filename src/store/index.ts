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
  add: Action<StoreModel<PeopleDetails>, PeopleDetails>;
}

export interface PeopleStore {
  peopleDetails: PeopleDetails[];
}

const storeValue: StoreModel<PeopleDetails> = {
  peopleDetails: generic([]),
  add: action((state, newPeople) => {
    state.peopleDetails = newPeople;
  }),
};

export const store = createStore(storeValue);
