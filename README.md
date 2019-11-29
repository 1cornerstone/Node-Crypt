 test folder : contain file to test the program , also where the output of the file will be.

    Encryption format is '-e.text'
    Decryption format '-ed.txt'

    How to test

    To Encrypt:

    Uncomment the encrypt line at app.js first ,
    then the code will encrypt the file  to filename+'-e.txt', make Sure your encryption is done and comment it again

    To decrypt:
    Uncomment the 'decryptFile()' line at app.js
    then it will decrypt the file to file-name+'-ed.txt' ,make Sure your decryption is done and comment it again


    Testing
   i use test.txt which is 392KB.
   but you can try to use big file


    Note :

        ---> i was appending to file immediately i read from file because if i was storing the encrypted   and decrypt data into a variable
                there may error [heap memory error ] when handling big file







