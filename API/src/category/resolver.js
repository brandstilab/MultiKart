

const products = require('./data');
const productType = require('./schema')
const categoryData = require('../category/data');
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt, GraphQLNonNull, GraphQLBoolean, GraphQLInterfaceType, GraphQLInputObjectType, GraphQLUnionType, GraphQLScalarType, GraphQLSkipDirective } = require('graphql');
const CategoryTypeEnumState = require('../category/enum.js');
const CategoryType = require('../category/index');
const CreateNewCategory = require('../category/input');
const productInput = require('./input');
const _ = require('lodash');
const InstaInput = require('../instagram/input');
const InstagramData = require('../instagram/data');

let addProducts = [];

var CategorySchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
       categories: {
        description: "get all categories Data",
        type: new GraphQLList(CategoryType),
        resolve: () => {
          return categoryData
        }
      },
      category: {
        description: "get all categories Data",
        type: CategoryType,
        args: {
          id: { type: GraphQLInt }
        },
        resolve: (source, { id }) => {
          return categoryData[id]
        }
      },
      getByCategoryProduct : {
        description:"get product find by category",
        type:new GraphQLList(productType),
        args:{
          type : {type : GraphQLString},
          limit:{type : GraphQLInt,defaultValue:8},
        },
        resolve:(parent,args) => {
          return _.filter(products, {category : args.type})
        }
      },
      getInstaImg:{
        description:"get instagram imges",
        type:new GraphQLList(InstaInput),
        args:{
          type:{type:GraphQLString}
        },
        resolve:(parent,args) => {
          return _.filter(InstagramData,{type:args.type})
        }
      }

    })
  }),

  // mutation
  
  mutation : new GraphQLObjectType({
    name:'Mutation',
    fields:{
      createProduct: {
        type: new GraphQLNonNull(productType),
        args: {
          product:{type :new GraphQLNonNull(productInput)}
        },  
        resolve: (_,args) =>{
          console.log("args product",args.product);
          
          addProducts.push(args.product)
          return args.product;
        }
      },
    }
  })
})



module.exports = CategorySchema