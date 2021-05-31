import { SchemaComposer } from 'graphql-compose';
import { userQuery, userMutation } from './user';
import { orgQuery, localQuery, localMutation, orgMutation } from './organization';

const schemaComposer = new SchemaComposer();

schemaComposer.Query.addFields({
    ...userQuery,
    ...orgQuery,
    ...localQuery
});

schemaComposer.Mutation.addFields({
    ...userMutation,
    ...orgMutation,
    ...localMutation
})

const graphqlSchema = schemaComposer.buildSchema()

export default graphqlSchema;
