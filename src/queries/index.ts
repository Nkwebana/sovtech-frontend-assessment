import { gql } from '@apollo/client';

export const getPeoplePerPage = (page = 1) => {
  return gql`
    query {
      getPeople(pageNumber: ${page}) {
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
    }
  `;
};
