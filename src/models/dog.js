import mongoose, { Schema } from 'mongoose';
import { composeMongoose } from 'graphql-compose-mongoose';

const DogSchema = new mongoose.Schema({
    name: String,
    id: String
});

const customizationOptions = {};

export const Dog = mongoose.model('Dog', DogSchema);

export const DogTC = composeMongoose(Dog, customizationOptions);

export const dogQuery = {
    dogById: DogTC.mongooseResolvers.findById(),
    // dogByMany: DogTC.mongooseResolver.findMany()
};

export const dogMutation = {
    createDog: DogTC.mongooseResolvers.createOne()
};