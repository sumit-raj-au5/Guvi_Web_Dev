const router = require('express').Router();
const {signin,signup, sendResetPasswordLink, resetPassword} = require('../services/userauth.services');

router.get('/', (req, res)=>{
    res.send('Make a post request on this endpoint with your mail and password to authenticate');
});
router.post('/', signin);


router.get('/signup', (req,res)=>{
    res.send("Make a POST request on this endpoint with your mail and password to create a user");
});
router.post('/signup', signup);


router.get('/password-reset', (req,res)=>{
    res.send('Make a post request on this endpoint with your email to receive password reset link')
});
router.post('/password-reset', sendResetPasswordLink);


router.get('/password-reset/:urlString', (req,res)=>{
    res.send('Make a post request on this endpoint with your email and new password to reset password');
});
router.post('/password-reset/:urlString', resetPassword);

module.exports = router;