import mongoose, { Schema } from 'mongoose';
import { composeMongoose } from 'graphql-compose-mongoose';

const LocalSchema = new Schema({
    _id: String,
    address: {
        address1: String,
        address2: String,
        city: String,
        zip: String
    },
    linkedProviders: [{
        id: String,
        isHead: String,
        firstName: String,
        lastName: String,
        email: String
    }],
    candidateProviders: [{
        id: String,
        firstName: String,
        lastName: String,
        email: String
    }],
    linkedUsers: [{
        id: String,
        stamps: Number,
        firstName: String,
        lastName: String,
        visits: Number,
        lastVisit: Date
    }]
});

const OrgSchema = new Schema({
    id: String,
    name: String,
    locals: [LocalSchema],
    type: String,
    numOfStamps: Number,
    head: String
});

const customizationOptions = {};

export const Org = mongoose.model('Org', OrgSchema);

export const Local = mongoose.model('Local', LocalSchema);

export const OrgTC = composeMongoose(Org, customizationOptions);

export const LocalTC = composeMongoose(Local, customizationOptions);

export const orgQuery = {
    orgById: OrgTC.mongooseResolvers.findById(),
    orgByIds: OrgTC.mongooseResolvers.findByIds(),
    orgOne: OrgTC.mongooseResolvers.findOne(),
    orgMany: OrgTC.mongooseResolvers.findMany(),
    orgCount: OrgTC.mongooseResolvers.count(),
    orgConnection: OrgTC.mongooseResolvers.connection(),
    orgPagination: OrgTC.mongooseResolvers.pagination(),
}

export const localQuery = {
    localbyId: LocalTC.mongooseResolvers.findById(),
    localCount: LocalTC.mongooseResolvers.count(),
}

export const localMutation = {
    localCreateOne: LocalTC.mongooseResolvers.createOne()
}

export const orgMutation = {
    orgCreateOne: OrgTC.mongooseResolvers.createOne(),
    orgUpdateById: OrgTC.mongooseResolvers.updateById(),
    orgUpdateOne: OrgTC.mongooseResolvers.updateOne(),
    orgUpdateMany: OrgTC.mongooseResolvers.updateMany(),
    orgRemoveById: OrgTC.mongooseResolvers.removeById(),
    orgRemoveOne: OrgTC.mongooseResolvers.removeOne(),
}
