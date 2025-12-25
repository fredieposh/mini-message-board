const {Router} = require('express');
const path = require('path');
const renderNewPage = require('../controllers/newController');

const newRouter = Router();


newRouter.get('/', renderNewPage);

module.exports = newRouter;