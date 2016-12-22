/**
 * Created by RIKS on 12/20/16.
 */

var express = require('express');
var router = express.Router();
var prodController = require('../controller/productController')

router.get('/', function(req, res, next) {
    res.end('Authenticated the admin');
});

router.post('/', function(req,res,next){
    res.end('Posted to admin successfully')
})

router.post('/addproduct',prodController.addProduct);

router.get('/listall', prodController.getAllProducts);
router.get('/listall/:id', prodController.getProductById);
router.delete('/listall/:id',prodController.removeProduct);

module.exports = router;