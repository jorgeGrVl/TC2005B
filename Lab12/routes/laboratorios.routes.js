const express = require('express');
const router = express.Router();
module.exports = router;
const path = require('path');

router.get('/lab5', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'lab5.html'));
});

router.get('/lab6', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'lab6.html'));
});