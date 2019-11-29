const express = require('express');
const helper = require('./app/util/helper');
const fs = require('fs');

let app = express();

/*
    Note Don`t uncomment the function at the same time the function is not Async,
    so if you uncomment at the same time it will throw error, because the file you want to decrypt may not be generated yet.
    so run it one by one
* */


/*
*  @param {filename}  filename is th name of the file to encrypt in test package
* @return {null}
* */


// helper.encryptFile('test.txt');    /*  this is the function to encrypt the file to '-e.txt' file*/

/*
*  @param {filename}  filename is th name of the file to decrypt in test package
* @return {null}
* */


//helper.decryptFile('test-e.txt');   /*  this is the function to decrypt the file to '-ed.txt' file*/


app.listen(2323, () => {
    console.log("server is working")
});











