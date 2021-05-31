import mongoose, { Schema } from 'mongoose';
import { composeMongoose } from 'graphql-compose-mongoose';

const OrganizationSchema = new Schema({
    id: String,
    name: String,
    address: [
        {
            address1: String,
            address2: String,
            city: String,
            zip: String
        },
    ],
    type: String,
    numOfStamps: Number,
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
    linkedUsers: [
        {
            id: String,
            stamps: Number,
            firstName: String,
            lastName: String,
            visits: Number,
            lastVisit: Date
        }
    ]
});

const Organization = mongoose.model('Organization', OrganizationSchema);
export const OrganizationTC = composeMongoose(Organization);