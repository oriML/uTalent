const express = require('express');
const usersController = require('../../controllers/users.controller');
const router = express.Router();

router.get('/', usersController.getUser);//login

router.post('/', usersController.addUser);// registration

router.put('/', usersController.editUser);

router.delete('/', usersController.deleteUser);

router.post("/profile", usersController.uploadProfileOfUser);



module.exports = router;
