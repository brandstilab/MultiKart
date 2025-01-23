const Product = require('../product/schema');
const Fuse =  require('fuse.js');

const getVisibleproducts = (
    data = [Product],
    type = string,
    text = string,
    brand = [string],
    color =string,
    sortBy = string,
    priceMin = number,
    priceMax = number,
  ) => {
    let Products = data;
    // Text filter
    const fuse = new Fuse(data, {
        threshold: 0.6,
        minMatchCharLength: 2,
        keys: ['title', 'brand', 'category'],
    });

    if (text && text !== '') {
        Products = fuse.search(text);
    }

    return Products.filter(product => {

        let typeMatch;
        if(type && product.type)
            typeMatch = product.type === type
        else
            typeMatch = true;
            
        let brandMatch;
        if(brand && product.brand)
            brandMatch = brand.includes(product.brand)
        else
            brandMatch = true;

        let colorMatch;
        if(color && product.variants) {
            colorMatch = product.variants.some(vari => vari.color === color)
        }else{
            colorMatch = true;
        }
        
        const startPriceMatch = typeof priceMin !== 'number' || priceMin <= product.price;
        const endPriceMatch = typeof priceMax !== 'number' || product.price <= priceMax;

        return typeMatch && brandMatch && colorMatch && startPriceMatch && endPriceMatch;
    }).sort((product1, product2) => {
        if (sortBy === 'HighToLow') {
            return product2.price < product1.price ? -1 : 1;
        } else if (sortBy === 'LowToHigh') {
            return product2.price > product1.price ? -1 : 1;
        } else if (sortBy === 'Newest') {
            return product2.id < product1.id ? -1 : 1;
        } else if (sortBy === 'AscOrder') {
            return product1.title.localeCompare(product2.title);
        } else if (sortBy === 'DescOrder') {
            return product2.title.localeCompare(product1.title);
        } else {
            return product2.id > product1.id ? -1 : 1;
        }
    });
}

module.exports = getVisibleproducts;