import gql from "graphql-tag";






export const GET_ALL_COURSES=gql`
{

getAllCourses{
        _id
        link
        image
        description
        technologies
        plataform
        title
        category
}
}
`;/* User Mutations */


