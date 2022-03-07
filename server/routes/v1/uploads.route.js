const express = require('express');
const uploadsController = require('../../controllers/uploads.controller');

const router = express.Router();

router.post('/profile', uploadsController.uploadProfileOfUser);

router.post('/images', uploadsController.uploadCardImages);

router.post('/video', uploadsController.uploadCardVideo);

router.delete('/profile', uploadsController.removeProfileOfUser);

router.delete('/images', uploadsController.removeCardImages);

router.delete('/video', uploadsController.removeCardVideo);

module.exports = router;
