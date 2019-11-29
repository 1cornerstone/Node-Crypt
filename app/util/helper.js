const fs = require('fs');
const crypto = require('crypto');

let password = 'yourPassword'
let Key = generateCrypto(password,32); /* generate 32bit key */
let inv = generateCrypto(password,16);/* generate 16bit key */

let filepath = './test/'; /* path to the test package   */

module.exports.encryptFile = (filename) => {

    let newName = getFileName(filename)+ "-e.txt";
    let readStream = getReadStreamFile(filepath + filename);

    getWriteStreamFile(filepath+newName)

    readStream.on('data', (chunk) => {

        let cipher = crypto.createCipheriv('aes256', Buffer.from(Key), inv);
        let encrypt = cipher.update(chunk);
        encrypt = Buffer.concat([encrypt, cipher.final()]);
       fs.appendFile(filepath+newName,encrypt,()=>{
           console.count('enc appended -')
       })
    });

    readStream.once('end', (chunk) => {
           console.log('Done Encrypting');
    })

};

module.exports.decryptFile = (filename) => {

    let newFileName = getFileName(filename) + "d.txt";
    let readStream = getReadStreamFile(filepath+filename);

    getWriteStreamFile(filepath+newFileName);

    readStream.on('data', (chunk) => {
        let decipher = crypto.createDecipheriv('aes256', Buffer.from(Key), inv);
        let decrypted = decipher.update(chunk);
        fs.appendFile((filepath + newFileName), decrypted,()=>{
            console.count('Den appended -')
        });
    })
       .on('end', (chunk) => {
                console.log("Decryption Done");
    });
};

function getReadStreamFile(path) {
    return fs.createReadStream(path);
}

function getWriteStreamFile(path) {
    return fs.createWriteStream(path);
}

function getFileName(filename) {
    return filename.split('.')[0];
}

function generateCrypto(password,length) {
    return crypto.createHash('sha256').update(String(password)).digest('hex').substr(0, length);
}



