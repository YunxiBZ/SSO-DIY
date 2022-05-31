export default {
    "admin@example.com":{
        "firstName": "John",
        "lastName": "Doe",
        "email": "john@example.com",
        "password": "testtest",
        "github": "superJohn"
    }
}

/**
 * mini service for find un item from un object
 * @param {object} db 
 * @param {string} key 
 * @returns Object or false
 */
export const find = (db, key) => {
    if (Object.keys(db).includes(key)){
        return db[key];
    }
    return false;
}