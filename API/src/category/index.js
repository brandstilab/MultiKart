const { GraphQLInt, GraphQLObjectType, GraphQLString } = require('graphql');

const CategoryType = new GraphQLObjectType({
    name: 'Category',
    fields: () => ({
        category_id: {
            type:GraphQLInt
        },
        img: {
            type: GraphQLString
        },
        title: {
            type: GraphQLString
        }
    })
})

module.exports = CategoryType;