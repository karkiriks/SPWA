/**
 * Created by RIKS on 12/20/16.
 */

var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    productId: String,
    productName: String,
    productPrice: String,
    productType: String,
    productStatus: String
});

module.exports = mongoose.model('Product', productSchema);