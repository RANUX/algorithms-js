"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsUnit = require("../../node_modules/ts-unit");
const ObjectHelpers_1 = require("../../helpers/ObjectHelpers");
/**
 * TestFoo
 */
class TestFoo {
    constructor(val) {
        this.val = val;
    }
    equals(other) {
        return this.val === other.val;
    }
    set Value(value) {
        if (value === undefined)
            throw 'Please supply time interval';
        this.val = value;
    }
}
/**
* ObjectHelpersTests
*/
class ObjectHelpersTests extends tsUnit.TestClass {
    testIsEqual() {
        this.isFalse(ObjectHelpers_1.equal({}, null));
        this.isFalse(ObjectHelpers_1.equal({}, undefined));
        this.isTrue(ObjectHelpers_1.equal('hi', 'hi'));
        this.isTrue(ObjectHelpers_1.equal(5, 5));
        this.isFalse(ObjectHelpers_1.equal(5, 10));
        this.isFalse(ObjectHelpers_1.equal(1, '1'));
        this.isTrue(ObjectHelpers_1.equal([], []));
        this.isTrue(ObjectHelpers_1.equal([1, 2], [1, 2]));
        this.isFalse(ObjectHelpers_1.equal([1, 2], [2, 1]));
        this.isFalse(ObjectHelpers_1.equal([1, 2], [1, 2, 3]));
        this.isTrue(ObjectHelpers_1.equal(new Date("2011-03-31"), new Date("2011-03-31")));
        this.isFalse(ObjectHelpers_1.equal(new Date("2011-03-31"), new Date("1970-01-01")));
        this.isTrue(ObjectHelpers_1.equal({}, {}));
        this.isTrue(ObjectHelpers_1.equal({ a: 1, b: 2 }, { a: 1, b: 2 }));
        this.isTrue(ObjectHelpers_1.equal({ a: 1, b: 2 }, { b: 2, a: 1 }));
        this.isFalse(ObjectHelpers_1.equal({ a: 1, b: 2 }, { a: 1, b: 3 }));
        this.isTrue(ObjectHelpers_1.equal({ 1: { name: "mhc", age: 28 }, 2: { name: "arb", age: 26 } }, { 1: { name: "mhc", age: 28 }, 2: { name: "arb", age: 26 } }));
        this.isFalse(ObjectHelpers_1.equal({ 1: { name: "mhc", age: 28 }, 2: { name: "arb", age: 26 } }, { 1: { name: "mhc", age: 28 }, 2: { name: "arb", age: 27 } }));
        this.isFalse(ObjectHelpers_1.equal(function (x) { return x; }, function (x) { return x; }));
        this.isFalse(ObjectHelpers_1.equal(function (x) { return x; }, function (y) { return y + 2; }));
        var a = { a: 'text', b: [0, 1] };
        var b = { a: 'text', b: [0, 1] };
        var c = { a: 'text', b: 0 };
        var d = { a: 'text', b: false };
        var e = { a: 'text', b: [1, 0] };
        var f = { a: 'text', b: [1, 0], f: function () { this.f = this.b; } };
        var g = { a: 'text', b: [1, 0], f: function () { this.f = this.b; } };
        var h = { a: 'text', b: [1, 0], f: function () { this.a = this.b; } };
        var i = {
            a: 'text',
            c: {
                b: [1, 0],
                f: function () {
                    this.a = this.b;
                }
            }
        };
        var j = {
            a: 'text',
            c: {
                b: [1, 0],
                f: function () {
                    this.a = this.b;
                }
            }
        };
        var k = { a: 'text', b: null };
        var l = { a: 'text', b: undefined };
        this.isTrue(ObjectHelpers_1.equal(a, b));
        this.isFalse(ObjectHelpers_1.equal(a, c));
        this.isFalse(ObjectHelpers_1.equal(c, d));
        this.isFalse(ObjectHelpers_1.equal(a, e));
        this.isFalse(ObjectHelpers_1.equal(f, g));
        this.isFalse(ObjectHelpers_1.equal(h, g));
        this.isFalse(ObjectHelpers_1.equal(i, j));
        this.isFalse(ObjectHelpers_1.equal(d, k));
        this.isFalse(ObjectHelpers_1.equal(k, l));
    }
    testExtendedObjectsEquality() {
        var foo1 = new TestFoo(10);
        var foo2 = new TestFoo(10);
        this.isTrue(ObjectHelpers_1.equal(foo1, foo2));
        foo2.Value = 1234;
        this.isFalse(ObjectHelpers_1.equal(foo1, foo2));
    }
}
exports.ObjectHelpersTests = ObjectHelpersTests;

//# sourceMappingURL=ObjectHelpersTests.js.map
