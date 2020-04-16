const router = require('express').Router();
const {
    renderSignupForm, 
    renderSigninForm,
    signup,
    signin,
    logout
} = require('../controllers/user.controller');

router.get('/users/signup', renderSignupForm);
router.get('/users/signin', renderSigninForm);
router.post('/users/signup', signup);
router.post('/users/signin', signin);
router.get('/users/logout', logout);


module.exports = router;