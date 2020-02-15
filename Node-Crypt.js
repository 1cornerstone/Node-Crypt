const fs = require('fs');
const crypto = require('crypto');

let newPath = '';
if (!fs.existsSync('bin')) return fs.mkdirSync('bin');

/*
* Encrypt file using aes256
* @return done
* @param  filepath,fileName,password
*
*/

const encrypt = (filepath,fileName,password) => {

    fileName = fileName+'e.txt';
     newPath = 'bin/'+fileName;
      let  readStream = getReadStreamFile(filepath);

    getWriteStreamFile(newPath);

    readStream.on('data', (chunk) => {

        let cipher = crypto.createCipheriv('aes256', Buffer.from(generateCrypto(password,32)), generateCrypto(password,16));
        let encrypt = cipher.update(chunk);

        encrypt = Buffer.concat([encrypt, cipher.final()]);
       fs.appendFile(newPath  , encrypt,()=>{})});

        readStream.once('end', (chunk) => {
            return 'done'
        })

};


/*
* Decrypt file using aes256
* @return done
* @param  filepath,fileName,password
*
*/

const decrypt = (filepath,fileName,password) => {

    fileName = fileName+ "d.txt";
        newPath =  'bin/'+fileName;
    let readStream = getReadStreamFile(filepath);

    getWriteStreamFile(newPath);

    readStream.on('data', (chunk) => {
        let decipher = crypto.createDecipheriv('aes256', Buffer.from(generateCrypto(password,32)),generateCrypto(password,16));
        let decrypted = decipher.update(chunk);

        fs.appendFile(newPath, decrypted,()=>{});
    })
       .on('end', (chunk) => {
               return 'done'
    });
};


 // get File to read text from
function getReadStreamFile(path) {
    return fs.createReadStream(path);
}

// create file to write text into
function getWriteStreamFile(path) {
    return fs.createWriteStream(path);
}

// generate crypto hash
function generateCrypto(password,length) {
    return crypto.createHash('sha256').update(String(password)).digest('hex').substr(0, length);
}

module.exports = {encrypt,decrypt};



