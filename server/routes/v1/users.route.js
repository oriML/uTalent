const express = require('express');
const usersController = require('../../controllers/users.controller');
const router = express.Router();

router.post('/get-user', usersController.getUser);//login

router.post('/add-user', usersController.addUser);// registration

router.put('/update-user', usersController.editUser);

router.delete('/delete-user', usersController.deleteUser);


module.exports = router;
