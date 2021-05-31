import { SchemaComposer } from 'graphql-compose';
import { userQuery, userMutation } from './user';
import { dogQuery, dogMutation } from './dog';
import { orgQuery, orgMutation } from './organization';

const schemaComposer = new SchemaComposer();

schemaComposer.Query.addFields({
    ...userQuery,
    ...dogQuery,
    ...orgQuery
});

schemaComposer.Mutation.addFields({
    ...userMutation,
    ...dogMutation,
    ...orgMutation
})

const graphqlSchema = schemaComposer.buildSchema()

export default graphqlSchema;