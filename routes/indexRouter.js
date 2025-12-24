const renderIndexPage = require('../controllers/indexController.js')

const {Router} = require('express');
const indexRouter = Router();

indexRouter.get('/', renderIndexPage);

module.exports = indexRouter;

