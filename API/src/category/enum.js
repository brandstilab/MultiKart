const { GraphQLEnumType } = require('graphql');

const CategoryEnumType = new GraphQLEnumType({
    name: 'title',
    description: "The basic product sorting types",
    values:{
        WOMEN :{
            value : 'women'
        },
        MEN :{
            value : "men"
        },
        VEGETABLE :{
            value : "vegetable"
        },
        WATCH :{
            value : "watch"
        },
        FURNITURE :{
            value : "furniture"
        },
        BEAUTY :{
            value : "beauty"
        },
        ELECTRONICS :{
            value : "electronics"
        },
        PETS :{
            value : "pets"
        },
        KIDS :{
            value : "kids"
        },
        ALL :{
            value : "all"
        }
    }
})

module.export = CategoryEnumType;