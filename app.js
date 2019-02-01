var bitcoinapi = require('bitcoin-node-api');
var express = require('express');
var app = express();
//Username and password relate to those set in the bitcoin.conf file
var blswallet = {
  host: 'localhost',
  port: 61613,
  user: 'mainwallet',
  pass: 'shanks'
};
bitcoinapi.setWalletDetails(blswallet);
bitcoinapi.setAccess('default-safe'); //Access control
app.use('/!Sajkhjlhkal/bls/api', bitcoinapi.app); //Bind the middleware to any chosen url
app.listen(3000);