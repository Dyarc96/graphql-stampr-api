import mongoose from 'mongoose';
import { composeMongoose } from 'graphql-compose-mongoose';

const UserSchema = new mongoose.Schema({
        firstName: String,
        lastName: String,
        googleId: String,
        facebookId: String,
        linkedOrganizations: Array,
        isProvider: Boolean,
        linkedProviderOrganizations: Array,
        age: Number,
        email: String
});

const customizationOptions = {};

export const User = mongoose.model('User', UserSchema);

export const UserTC = composeMongoose(User, customizationOptions);

export const userQuery = {
        userById: UserTC.mongooseResolvers.findById(),
        userByIds: UserTC.mongooseResolvers.findByIds(),
        userOne: UserTC.mongooseResolvers.findOne(),
        userMany: UserTC.mongooseResolvers.findMany(),
        userCount: UserTC.mongooseResolvers.count(),
        userConnection: UserTC.mongooseResolvers.connection(),
        userPagination: UserTC.mongooseResolvers.pagination(),
};
    
export const userMutation = {
        userCreateOne: UserTC.mongooseResolvers.createOne(),
        userUpdateById: UserTC.mongooseResolvers.updateById(),
        userUpdateOne: UserTC.mongooseResolvers.updateOne(),
        userUpdateMany: UserTC.mongooseResolvers.updateMany(),
        userRemoveById: UserTC.mongooseResolvers.removeById(),
        userRemoveOne: UserTC.mongooseResolvers.removeOne(),
}