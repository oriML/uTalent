const express = require('express');
const authController = require('../../controllers/auth.controller');
const router = express.Router();

router.post('/', authController.verifyToken ,authController.authUser);

// router.post('/articles', (req, res) => {
//     res.status(200).json({
//         message: req.body
//     })
// })

module.exports = router;
