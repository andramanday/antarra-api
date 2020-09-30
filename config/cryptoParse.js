const crypto = require('crypto');

const algorithm = 'aes-256-ctr';
const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';
const iv = crypto.randomBytes(16);

const encrypt = (text) => {

    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    return {
        iv: iv.toString('hex'),
        content: encrypted.toString('hex')
    };
};

const decrypt = (hash) => {

    const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, 'hex'));

    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);

    return decrpyted.toString();
};

const passEncryp = (password) => {
    
    // Use the async `crypto.scrypt()` instead.
    const key = crypto.scryptSync(password, 'salt', 24);
    // Use `crypto.randomBytes` to generate a random iv instead of the static iv
    // shown here.
    const iv = Buffer.alloc(16, 0); // Initialization vector.

    const cipher = crypto.createCipheriv(algorithm, key, iv);

    let encrypted = cipher.update('briapiforbri', 'utf8', 'hex');
    encrypted += cipher.final('hex');
    // console.log(encrypted);
    return encrypted.toString();
};

const setPassword = (password) => { 
     
    // Creating a unique salt for a particular user 
    const salt = 'terkhususuntukaplikasi1n1'; 
    
    // Hashing user's salt and password with 1000 iterations,  64 length and sha512 digest 
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`);
    return hash;
};

const validPassword = (Hash, password) => { 
    const salt = 'terkhususuntukaplikasi1n1'; 
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`); 
    return hash === Hash; 
}; 

module.exports = {
    encrypt,
    decrypt,
    passEncryp,
    setPassword,
    validPassword
};