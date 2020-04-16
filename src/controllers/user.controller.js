const userCtrl = {}
const User = require('../models/User');
const passport = require('passport');

userCtrl.renderSignupForm = (req, res) => {
    res.render('users/signup');
}

userCtrl.signup = async (req, res) => {
    const errors = [];
    const { name, email, password, confirmPassword } = req.body;
    if (password != confirmPassword) {
        errors.push({text: 'Passwords do not match'})
    } 
    if (password.length < 4) {
        errors.push({text: "password must be at least 4 caracters"})
    }    
    if (errors.length > 0) {
        res.render('users/signup', {errors, name, email})    
    } else {
        const emailUser = await User.findOne({email: email});
        if (emailUser) {
            req.flash('error_msg', 'The email is already in use');
            res.redirect('/users/signup');
        } else {
            const newUser = new User({name, email, password});
            newUser.password = await newUser.encryptPassword(password);
            await newUser.save();
            res.redirect('/users/signin');
        }
    }
}
   
userCtrl.renderSigninForm = (req, res) => {
    res.render('users/signin');
}

userCtrl.signin = passport.authenticate('local', {
    failureRedirect: '/users/signin',
    successRedirect: '/notes',
    failureFlash: true
});

userCtrl.logout = (req, res) => {
    req.logout();
    res.redirect('/users/signin');
}


module.exports = userCtrl;