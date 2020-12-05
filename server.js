'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { getClients, getClientWithID, addNewClient, deleteClient } = require("./handlers/clientHandlers")
const { getWordWithID, getRandomWord, guessLetter } = require("./handlers/hangmanHandlers");


express()
  .use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('tiny'))
  .use(express.static('public'))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))

  // endpoints

  //endPoint to access a list of all client
  .get('/clients', getClients)

  //endPoint to access to client with specific ID
  .get('/clients/client/:id', getClientWithID)

  //endPoint to add a new client 
  .post('/clients/', addNewClient)

  //endPoint to delete client with specific ID
  .delete('/clients/client/:id', deleteClient)

  //endPoint to access to client with specific ID
  .get('/hangman/word/:id', getWordWithID)

   //endPoint to access to random word
  .get('/hangman/word', getRandomWord)

   //endPoint to access to random word
  .get('/hangman/guess/:id/:letter', guessLetter)

  .listen(8000, () => console.log(`Listening on port 8000`));
