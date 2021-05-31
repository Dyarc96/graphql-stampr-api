import { Dog } from './models/dog';
import { User, UserTC } from './models/user';
import { schemaComposer } from 'graphql-compose';

// const AuthorTC = schemaComposer.createObjectTC({
//     name: 'Author',
//     fields: {
//       id: 'Int!',
//       firstName: 'String',
//       lastName: 'String',
//       posts: {
//         type: () => [PostTC], // arrow function for `type` helps to solve hoisting problems and keep ability to list all fields
//         args: {
//           limit: { type: 'Int', defaultValue: 20 },
//           skip: 'Int', // shortand to `{ type: 'Int' }`
//           sort: `enum AuthorPostsSortEnum { ASC DESC }`, // type creation via SDL
//         },
//         resolve: () => { ... },
//       }
//     },
//   });

// const User = schemaComposer.createObjectTC({})

UserTC.addRelation('userDetails', {
    resolver: () => UserTC.getResolver('findById'),
    prepareArgs: {
        _id: source => source.useRef,
        skip: null,
        sort: null
    },
    projection: { useRef: true }
});



// schemaComposer.Query.addFields({
//     userById: UserTC.mongooseResolvers.findById(),
//     userOne: UserTC.mongooseResolvers.findOne(),
//     userMany: UserTC.mongooseResolvers.findMany(),
//     all: UserTC.mongooseResolvers.findMany()
// });

// const graphqlSchema = schemaComposer.buildSchema();
// export default graphqlSchema;

// export const resolvers = {
//     Query: {
//         helloWorld: () => 'Hi!',
//         dogs: () => Dog.find(),
//         users: () => User.find()
//     },

//     Mutation: {
//         createDog: async(_, { name }) => {
//             const puppy = new Dog({ name });
//             await puppy.save();
//             return puppy; 
//         },
//         // app.delete('/api/organizations/reject-employee/:organizationId/:userId', async (req, res) => {
//         //     try {
//         //         const organization = await Organization.update(
//         //             {   _id: req.params.organizationId,
//         //             }, {
//         //                 $pull: {
//         //                     "candidateProviders": {
//         //                         _id: req.params.userId
//         //                     }
//         //                 }
//         //             })
//         //         res.send({organization});
    
//         //     } catch (err) {
//         //         res.status(500).send('There was an error while request employee invitation.')
//         //     }
//         // });
//         deleteUser: async(_, {
//             id
//         }) => {
//             firstName,
//             lastName,
//             id
//         },
//         createUser: async(_, { 
//             firstName,
//             lastName,
//             googleId,
//             facebookId,
//             isProvider,
//             age,
//             email,
//             linkedOrganizations,
//             linkedProviderOrganizations,
//          }) => {
//             const user = new User({
//                 firstName,
//                 lastName,
//                 googleId,
//                 facebookId,
//                 isProvider,
//                 age,
//                 email,
//                 linkedOrganizations,
//                 linkedProviderOrganizations
//             });
//             await user.save();
//             return user;
//         }
//     }
// }