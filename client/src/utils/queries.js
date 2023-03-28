import { gql } from '@apollo/client';

export const GET_ME = gql`
    query listing {
        me {
            _id
            username
            email
            bookCount
            saveBooks {
                bookId
                authors
                description
                title
                image
                link
            }
        } 
    }
`;