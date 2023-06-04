const express = require('express');
const router = express.Router();
const subscriberController = require('../controllers/subscriberController');

router.post('/', subscriberController.create);
router.post('/upload-profile-image/:id', subscriberController.uploadProfileImage);
router.put('/:id', subscriberController.update);
router.get('/', subscriberController.getAll);
router.get('/search', subscriberController.search);
router.get('/:id', subscriberController.getByCode);
router.delete('/:id', subscriberController.delete);

module.exports = router;
