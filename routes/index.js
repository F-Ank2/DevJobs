const express = require ('express');
const router = express.Router();
const homeController = require('../controller/homeController');

module.exports = () => {
    router.get('/', homeController.showProyects);   

    return router;
}
