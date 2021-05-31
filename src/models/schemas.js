import { SchemaComposer } from 'graphql-compose';
import { userQuery, userMutation } from './user';
import { orgQuery, orgMutation } from './organization';

const schemaComposer = new SchemaComposer();

schemaComposer.Query.addFields({
    ...userQuery,
    ...orgQuery
});

schemaComposer.Mutation.addFields({
    ...userMutation,
    ...orgMutation
})

const graphqlSchema = schemaComposer.buildSchema()

export default graphqlSchema;
