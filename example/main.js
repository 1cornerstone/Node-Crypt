const  {encrypt,decrypt} = require('../Node-Crypt');




/*
    Note Don`t uncomment the function at the same time the function is not Async,
    so if you uncomment at the same time it will throw error, because the file you want to decrypt may not be generated yet.
    so run it one by one
* */


/*
*  @param {filename}  filename is th name of the file to encrypt in example package
* @return {null}
* */


// encrypt('example/test.txt','encrypt','segun');

/*
*  @param {filename}  filename is th name of the file to decrypt in example package
* @return {null}
* */


decrypt('bin/encrypte.txt','decrypt','segun');












