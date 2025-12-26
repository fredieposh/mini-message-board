const {Router} = require('express');
const path = require('path');
const renderNewPage = require('../controllers/newController');
const indexController = require('../controllers/indexController');

const newRouter = Router();


newRouter.get('/', renderNewPage);
newRouter.post('/', (req, res) => {
    console.log(req.body);
    indexController.addMessage(req.body);
    res.redirect('/');
})

module.exports = newRouter;