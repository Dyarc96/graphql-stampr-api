import express from 'express';
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server-express';

import graphQlSchema from './models/schemas';
import keys from './keys/dev';

const server = (async () => {
    const app = express();

    const server = new ApolloServer({
        schema: graphQlSchema
    });

    server.applyMiddleware({ app });

    try {
        await mongoose.connect(keys.mongoURI, {
            useNewUrlParser: true,
        })
    } catch (err) {
        console.error(err);
    }

    app.listen('4000', () => console.log('connected'));
})();