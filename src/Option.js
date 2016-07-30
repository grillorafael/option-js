const None = require('./None');
const Validator = require('./Validator');

class Option {
    constructor(input) {
        this._value = Validator.validate(input);
    }
    isNone() {
        return this._value === None;
    }
    isSome() {
        return !this.isNone()
    }
    getOrElse(alternativeValue) {
        return this.isNone() ? alternativeValue : this._value;
    }
    get() {
        if(this.isNone()) {
            throw new Error('Trying to get value of None Instance');
        } else return this._value;
    }
    map(fn) {
        return this.isSome() ? Option.of(this.flatMap(fn)) : NoneOption;
    }
    flatMap(fn) {
        return this.isSome() ? fn(this.get()) : NoneOption;
    }
    static of(input) {
        return new Option(input);
    }
    static None() {
        return NoneOption;
    }
    static isOption(val) {
        return val instanceof Option;
    }
}

const NoneOption = Option.of(None);

module.exports = Option;