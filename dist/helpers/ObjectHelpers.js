"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getObjectName(obj) {
    var funcNameRegex = /function (.{1,})\(/;
    var results = (funcNameRegex).exec((obj).constructor.toString());
    return (results && results.length > 1) ? results[1] : "";
}
exports.getObjectName = getObjectName;
;
var ObjectCompare = (function () {
    function ObjectCompare() {
    }
    /**
     * Returns the object's class, Array, Date, RegExp, Object are of interest to us
    */
    ObjectCompare.getClass = function (val) {
        return Object.prototype.toString.call(val).match(/^\[object\s(.*)\]$/)[1];
    };
    ;
    /**
     * Defines the type of the value, extended typeof
     *
     */
    ObjectCompare.whatis = function (val) {
        if (val === undefined)
            return 'undefined';
        if (val === null)
            return 'null';
        var type = typeof val;
        if (type === 'object')
            type = this.getClass(val).toLowerCase();
        if (type === 'number') {
            if (val.toString().indexOf('.') > 0)
                return 'float';
            else
                return 'integer';
        }
        return type;
    };
    ;
    ObjectCompare.compareObjects = function (a, b) {
        if (a === b)
            return true;
        if (getObjectName(a) != getObjectName(b))
            return false;
        if (a['equals'] && b['equals']) {
            return a.equals(b) && b.equals(a);
        }
        for (var i in a) {
            if (b.hasOwnProperty(i)) {
                if (!equal(a[i], b[i]))
                    return false;
            }
            else {
                return false;
            }
        }
        for (var i in b) {
            if (!a.hasOwnProperty(i)) {
                return false;
            }
        }
        return true;
    };
    ;
    ObjectCompare.compareArrays = function (a, b) {
        if (a === b)
            return true;
        if (a.length !== b.length)
            return false;
        for (var i = 0; i < a.length; i++) {
            if (!equal(a[i], b[i]))
                return false;
        }
        ;
        return true;
    };
    ;
    return ObjectCompare;
}());
var _equal = {};
_equal['array'] = ObjectCompare.compareArrays;
_equal['object'] = ObjectCompare.compareObjects;
_equal['date'] = function (a, b) {
    return a.getTime() === b.getTime();
};
_equal['regexp'] = function (a, b) {
    return a.toString() === b.toString();
};
//    uncoment to support function as string compare
//    _equal.fucntion =  _equal.regexp;
/*
 * Are two values equal, deep compare for objects and arrays.
 * @param a {any}
 * @param b {any}
 * @return {boolean} Are equal?
 */
function equal(a, b) {
    if (a !== b) {
        var atype = ObjectCompare.whatis(a), btype = ObjectCompare.whatis(b);
        if (atype === btype)
            return _equal.hasOwnProperty(atype) ? _equal[atype](a, b) : a == b;
        return false;
    }
    return true;
}
exports.equal = equal;
;

//# sourceMappingURL=ObjectHelpers.js.map
