import { SchemaComposer } from 'graphql-compose';
import { userQuery, userMutation } from './user';
import { dogQuery, dogMutation } from './dog';

const schemaComposer = new SchemaComposer();

schemaComposer.Query.addFields({
    ...userQuery,
    ...dogQuery
});

schemaComposer.Mutation.addFields({
    ...userMutation,
    ...dogMutation
})

const graphqlSchema = schemaComposer.buildSchema()

export default graphqlSchema;