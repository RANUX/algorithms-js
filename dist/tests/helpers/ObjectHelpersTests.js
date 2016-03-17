var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tsUnit = require('../../node_modules/tsunit.external/tsUnit');
var ObjectHelpers_1 = require('../../helpers/ObjectHelpers');
/**
* ObjectHelpersTests
*/
var ObjectHelpersTests = (function (_super) {
    __extends(ObjectHelpersTests, _super);
    function ObjectHelpersTests() {
        _super.apply(this, arguments);
    }
    ObjectHelpersTests.prototype.testIsEqual = function () {
        this.isFalse(ObjectHelpers_1.isEqual({}, null));
        this.isFalse(ObjectHelpers_1.isEqual({}, undefined));
        this.isTrue(ObjectHelpers_1.isEqual('hi', 'hi'));
        this.isTrue(ObjectHelpers_1.isEqual(5, 5));
        this.isFalse(ObjectHelpers_1.isEqual(5, 10));
        this.isFalse(ObjectHelpers_1.isEqual(1, '1'));
        this.isTrue(ObjectHelpers_1.isEqual([], []));
        this.isTrue(ObjectHelpers_1.isEqual([1, 2], [1, 2]));
        this.isFalse(ObjectHelpers_1.isEqual([1, 2], [2, 1]));
        this.isFalse(ObjectHelpers_1.isEqual([1, 2], [1, 2, 3]));
        this.isTrue(ObjectHelpers_1.isEqual(new Date("2011-03-31"), new Date("2011-03-31")));
        this.isFalse(ObjectHelpers_1.isEqual(new Date("2011-03-31"), new Date("1970-01-01")));
        this.isTrue(ObjectHelpers_1.isEqual({}, {}));
        this.isTrue(ObjectHelpers_1.isEqual({ a: 1, b: 2 }, { a: 1, b: 2 }));
        this.isTrue(ObjectHelpers_1.isEqual({ a: 1, b: 2 }, { b: 2, a: 1 }));
        this.isFalse(ObjectHelpers_1.isEqual({ a: 1, b: 2 }, { a: 1, b: 3 }));
        this.isTrue(ObjectHelpers_1.isEqual({ 1: { name: "mhc", age: 28 }, 2: { name: "arb", age: 26 } }, { 1: { name: "mhc", age: 28 }, 2: { name: "arb", age: 26 } }));
        this.isFalse(ObjectHelpers_1.isEqual({ 1: { name: "mhc", age: 28 }, 2: { name: "arb", age: 26 } }, { 1: { name: "mhc", age: 28 }, 2: { name: "arb", age: 27 } }));
        this.isFalse(ObjectHelpers_1.isEqual(function (x) { return x; }, function (x) { return x; }));
        this.isFalse(ObjectHelpers_1.isEqual(function (x) { return x; }, function (y) { return y + 2; }));
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
        this.isTrue(ObjectHelpers_1.isEqual(a, b));
        this.isFalse(ObjectHelpers_1.isEqual(a, c));
        this.isFalse(ObjectHelpers_1.isEqual(c, d));
        this.isFalse(ObjectHelpers_1.isEqual(a, e));
        this.isFalse(ObjectHelpers_1.isEqual(f, g));
        this.isFalse(ObjectHelpers_1.isEqual(h, g));
        this.isFalse(ObjectHelpers_1.isEqual(i, j));
        this.isFalse(ObjectHelpers_1.isEqual(d, k));
        this.isFalse(ObjectHelpers_1.isEqual(k, l));
    };
    return ObjectHelpersTests;
})(tsUnit.TestClass);
exports.ObjectHelpersTests = ObjectHelpersTests;

//# sourceMappingURL=ObjectHelpersTests.js.map
