import { gql } from '@apollo/client';

export const SEARCH_BY_NAME_QUERY = gql`
  query getPerson($searchedName: String, $pageNumber: Int) {
    searchPerson(name: $searchedName, pageNumber: $pageNumber) {
      results {
        name
        mass
        height
        homeworld {
          name
          rotation_period
          orbital_period
          diameter
          climate
          gravity
          terrain
          surface_water
          population
        }
      }
      count
    }
  }
`;

export const GET_PEOPLE_QUERY = gql`
  query getAllPeople($page: Int) {
    getPeople(pageNumber: $page) {
      results {
        name
        mass
        height
        homeworld {
          name
          rotation_period
          orbital_period
          diameter
          climate
          gravity
          terrain
          surface_water
          population
        }
      }
      count
    }
  }
`;
