import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    type User {
        _id: String
        firstName: String!
        lastName: String!
        isProvider: Boolean!
        googleId: String!
        facebookId: String!
        linkedOrganizations: [String]
        linkedProviderOrganizations: [String]
        age: Int
        email: String
    }

    type Organization {
        id: ID!
        name: String!
        address: [Address]!
        type: String!
        linkedProviders: [Provider]!
        candidateProviders: [CandidateProvider]
        linkedUsers: [Client]
    }

    type Address {
        address1: String!
        address2: String!
        city: String!
        zip: String!
    }

    type Provider {
        id: ID!
        isHead: Boolean!
        firstName: String!
        lastName: String!
    }

    type CandidateProvider {
        id: ID!
        firstName: String!
        lastName: String!
    }

    type Client {
        id: ID!
        firstName: String!
        lastName: String!
        stamps: Int!
        visits: Int!
        lastVisit: Date
    }

    type Query {
        helloWorld: String!
        dogs: [Dog!]!
        users: [User!]!
    }

    type Dog {
        id: ID!
        name: String!
    }

    type Mutation {
        createDog(name: String): Dog!
        createUser(
            firstName: String!
            lastName: String!
            isProvider: Boolean!
            googleId: String!
            facebookId: String!
            linkedOrganizations: [String]
            linkedProviderOrganizations: [String]
            age: Int
            email: String!
        ): User
        deleteUser(
            id: String!
        ): User
    }

    scalar Date
`;
