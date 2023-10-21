import crypto from 'crypto';

export const generateETag = (resource) => {
    return crypto.createHash('md5').update(JSON.stringify(resource)).digest('hex'); 
}