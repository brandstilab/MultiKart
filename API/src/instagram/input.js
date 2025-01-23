const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLObjectType } = require("graphql");


const InstaInput = new GraphQLObjectType({
    name: "InstagramInput",
    fields: {
        type: {
            type: new GraphQLNonNull(GraphQLString)
        },
        img: {
            type: new GraphQLNonNull(GraphQLString)
        }
    }
})

module.exports = InstaInput;