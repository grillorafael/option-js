const None = require('./None');

class Validator {
    static validate(input) {
        if(input === null || input === undefined || input === None) return None;
        else return input;
    }
}

module.exports = Validator;