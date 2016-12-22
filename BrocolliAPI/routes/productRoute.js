/**
 * Created by RIKS on 12/21/16.
 */


var express = require('express');
var router = express.Router();
var prodController = require('../controller/productController')


router.get('/dresses', prodController.getProductByType);
router.get('/top', prodController.getProductByType);
router.get('/bottom', prodController.getProductByType);
router.get('/shoes', prodController.getProductByType);
router.get('/bags', prodController.getProductByType);

router.get('/featured', prodController.getFeaturedProducts);
router.get('/newarrivals', prodController.getNewestProducts);

module.exports = router;