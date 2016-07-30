"use strict";

const assert = require('chai').assert;
const expect = require('chai').expect;

const Option = require('../src/Option');

describe('Option', () => {
    describe('None cases', () => {
        function checkIsNone(option) {
            assert.equal(option.isNone(), true);
            assert.equal(option.isSome(), false);
        }
        it('should be None on Null input', () => {
            let nullOption = Option.of(null);
            checkIsNone(nullOption)
        });
        it('should be None on Undefined input', () => {
            let nullOption = Option.of(undefined);
            checkIsNone(nullOption)
        });
        it('should be None when Option.None() instance', () => {
            checkIsNone(Option.None());
        });
    });
    describe('#isSome', () => {
        it('should be true if not is None', () => {
            let someOption = Option.of(10);
            assert.equal(someOption.isSome(), true);
            assert.equal(someOption.isNone(), false);
        });
        it('should be false if is None', () => {
            let someOption = Option.None();
            assert.equal(someOption.isSome(), false);
            assert.equal(someOption.isNone(), true);
        });
    });
    describe('#getOrElse', () => {
        it('should return value if Some', () => {
            let option = Option.of("value");
            assert.equal(option.getOrElse("other value"), "value");
        });

        it('should return alternative value if None', () => {
            let option = Option.None();
            assert.equal(option.getOrElse("other value"), "other value");
        });
    });
    describe('#get', () => {
        it('should return value in case is Some', () => {
            let option = Option.of('value');
            assert.equal(option.get(), 'value');
        });
        it('should throw exception in case is None', () => {
            let option = Option.None();
            expect(() => option.get()).to.throw('Trying to get value of None Instance');
        });
    });
    describe('#map', () => {
        it('should return NoneOption in case is None', () => {
            let option = Option.None();
            let result = option.map(v => v * 2);
            expect(result).to.equal(Option.None());
        });

        it('should return Mapped Option in case is not None', () => {
            let option = Option.of(10);
            let result = option.map(v => v * 2);
            expect(result.get()).to.equal(20);
        });
    });
    describe('#flatMap', () => {
        it('should return NoneOption in case is None', () => {
            let option = Option.None();
            let result = option.flatMap(v => v * 2);
            expect(result).to.equal(Option.None());
        });

        it('should return Mapped value in case is not None', () => {
            let option = Option.of(10);
            let result = option.flatMap(v => v * 2);
            expect(result).to.equal(20);
        });
    });
    describe('#isOption', () => {
        it('should check if is instance of Option', () => {
            expect(Option.isOption(Option.None())).to.equal(true);
            expect(Option.isOption(10)).to.equal(false);
            expect(Option.isOption(Option.of(10))).to.equal(true);
        });
    });
});