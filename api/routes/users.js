const express = require('express');
users = express.Router();
const cors = require('cors');
const jwt  = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../../models/User');
users.use(cors());

users.get('/', (req, res, next) => {
    res.status(200).json({
        mesage: 'got users'
    });
});

users.post('/', (req, res, next) => {
    res.status(200).json({
        messgae: 'user was created'
    });
});

users.patch('/:id', (req, res, next) => {
    res.status(200).json({
        messgae: 'user was updated'
    });
});

users.delete('/:id', (req, res, next) => {
    res.status(200).json({
        messgae: 'user was deleted',
        id: req.params.id
    });
});

module.exports = users;