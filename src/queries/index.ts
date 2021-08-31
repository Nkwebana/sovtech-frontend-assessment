import { gql } from '@apollo/client';

export const SEARCH_BY_NAME_QUERY = gql`
  query getPerson($searchedName: String) {
    searchPerson(name: $searchedName) {
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

// export const GET_PEOPLE_URL = gql`
//   query getAllPeople($page: Int) {
//     getPeople(pageNumber: $page) {
//       name
//       mass
//       height
//       homeworld {
//         name
//         rotation_period
//         orbital_period
//         diameter
//         climate
//         gravity
//         terrain
//         surface_water
//         population
//       }
//     }
//   }
// `;
