const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.post('/User', contactController.createUser);
router.get('/User', contactController.getAllUsers);
router.delete('/User/:id', contactController.deleteUser);

module.exports = router;