const router = require('express').Router();

const { renderIndex, renderAbout} = require('../controllers/index.controller');


router.get('/', renderIndex)

router.get('/about', renderAbout)

module.exports = router;