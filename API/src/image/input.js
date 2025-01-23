const { GraphQLString, GraphQLInputObjectType, GraphQLNonNull, GraphQLInt, GraphQLList, GraphQLBoolean, GraphQLObjectType } = require('graphql');

const ImageInput = new GraphQLInputObjectType({
  name: 'ImageInput',
  fields: {
    image_id: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    id: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    alt: {
      type: new GraphQLNonNull(GraphQLString)
    },
    src: {
      type: new GraphQLNonNull(GraphQLString)
    }
  }
})


module.exports = ImageInput;