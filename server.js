const express = require('express');
const knex = require('./data/dbConfig.js');
const server = express();
server.use(express.json());

//GET
server.get('/', (req, res)=> {
    knex
    .select('*')
    .from('cars')
    .then(cars => {
        res.status(200).json({accounts});
    })
    .catch(error=> {
        res.status(500).json({error: 'Failed to get cars.', error})
    });
});

//POST
server.post('/', (req, res)=> {
    knex
    .insert(req.body, 'id')
    .into('cars')
    .then(ids => {
        res.status(200).json(ids)
    })
    .catch(error=> {
        res.status(500).json({error: 'Failed to add car.', error})
    });
});

//PUT 

//DELETE

module.exports = server;