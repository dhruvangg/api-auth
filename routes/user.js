const express = require('express'),
    router = express.Router(),
    User = require("../controllers/user"),
    Auth = require("../middleware/auth")

router.post('/signup', User.signUp);
router.post('/signin', User.signIn);
router.get('/users', Auth.validateToken, User.getUsers);

module.exports = router