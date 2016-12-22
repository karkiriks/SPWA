/**
 * Created by RIKS on 12/20/16.
 */


var mongoose = require('mongoose');
var Product = require('../model/products');

module.exports.getAllProducts = function (req, res) {
    Product.find({}, function (err, data) {
       if(err){
           console.error(err);
       } else {
           res.send(data);
       }
    });
};

module.exports.getProductById = function (req, res) {
    var id = req.params.id;
    Product.find({id: id}, function (err, data) {
        if(err){
            console.error(err);
        } else {
            res.send(data);
        }
    });
};

module.exports.getFeaturedProducts = function (req, res) {
    var prodStat = req.params.productStatus;
    Product.find({productStatus: prodStatus},function (err, data) {
        if(err){
            return console.error(err);
        } else {
            res.send(data);
        }
    });
};

module.exports.getNewestProducts = function (req, res) {
    var prodStatus = req.params.productStatus;
    Product.find({productStatus: prodStatus}, function (err,data) {
        if(err) {
            return console.error(err);
        } else {
            return data;
        }
    });

};

module.exports.addProduct = function (req, res) {
    var product = new Product(req.body);
    console.log(product);
    product.save(function (err, product) {
        if(err) {
            return console.error(err);
        } else {
            res.json(product);
        }
    });
};

module.exports.removeProduct = function (req, res) {

    var pId = req.params.id;
    console.log(pId);
    Product.remove({productId: pId}, function (req, res) {
        if (err){
            return console.error(err);
        } else {
            res.send('Product Removed');
        }
    });

};

module.exports.updateProduct = function (req, res) {

    var id = req.params.id;

    Product.findOneAndUpdate({productId: id}, function (req, res) {
        if (err) {
            console.error(err);
        } else {
            res.send('Product Updated');
        }
    });

};

module.exports.getProductByType = function (req, res) {

    var pType = req.params.prodType;

    Product.find({productType: pType}, function (err, data) {
       if(err){
           console.error(err);
       } else {
           res.send(data);
       }
    });

};