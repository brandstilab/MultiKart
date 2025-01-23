const loadCurrency = require("./data");

const CurrencyResolver = {
    Query :{
        currency: (root, args, context, info) => loadCurrency,   
        }
    }


module.exports = CurrencyResolver