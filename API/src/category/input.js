const { GraphQLInputObjectType, GraphQLInt, GraphQLString, GraphQLNonNull } = require('graphql');
// @InputType({ description: 'Create New Category' })
const CategoryInput = new GraphQLInputObjectType({
    name:'CategoryInput',
    fields:() => ({
        id: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        img: {
            type : new GraphQLNonNull(GraphQLString)
        },
        title :{
            type: new GraphQLNonNull(GraphQLString)
        }
    })
})

module.exports = CategoryInput;