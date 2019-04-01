import gql from "graphql-tag";


export const GET_RECIPE = gql`
  query($_id: ID!) {
    getRecipe(_id: $_id) {
    _id
    name
    category
    description
    instructions
    createdDate
    likes
  }
  }
`;




export const GET_ALL_COURSES=gql`
{

getAllCourses{
        _id
        title
        category
}
}
`;/* User Mutations */


