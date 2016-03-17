import * as tsUnit from '../../node_modules/tsunit.external/tsUnit';
import { isEqual } from '../../helpers/ObjectHelpers';
/**
* ObjectHelpersTests
*/
export class ObjectHelpersTests extends tsUnit.TestClass {

    testIsEqual()
    {
        this.isFalse(isEqual({}, null));
        this.isFalse(isEqual({}, undefined));

        this.isTrue(isEqual('hi','hi'));
        this.isTrue(isEqual(5,5));
        this.isFalse(isEqual(5,10));
        this.isFalse(isEqual(1,'1'));

        this.isTrue(isEqual([],[]));
        this.isTrue(isEqual([1,2],[1,2]));
        this.isFalse(isEqual([1,2],[2,1]));
        this.isFalse(isEqual([1,2],[1,2,3]));

        this.isTrue(isEqual(new Date("2011-03-31"), new Date("2011-03-31")));
        this.isFalse(isEqual(new Date("2011-03-31"), new Date("1970-01-01")));

        this.isTrue(isEqual({},{}));
        this.isTrue(isEqual({a:1,b:2},{a:1,b:2}));
        this.isTrue(isEqual({a:1,b:2},{b:2,a:1}));
        this.isFalse(isEqual({a:1,b:2},{a:1,b:3}));

        this.isTrue(isEqual({1:{name:"mhc",age:28}, 2:{name:"arb",age:26}},{1:{name:"mhc",age:28}, 2:{name:"arb",age:26}}));
        this.isFalse(isEqual({1:{name:"mhc",age:28}, 2:{name:"arb",age:26}},{1:{name:"mhc",age:28}, 2:{name:"arb",age:27}}));

        this.isFalse(isEqual(function(x){return x;},function(x){return x;}));
        this.isFalse(isEqual(function(x){return x;},function(y){return y+2;}));

        var a = {a: 'text', b:[0,1]};
        var b = {a: 'text', b:[0,1]};
        var c = {a: 'text', b: 0};
        var d = {a: 'text', b: false};
        var e = {a: 'text', b:[1,0]};
        var f = {a: 'text', b:[1,0], f: function(){ this.f = this.b; }};
        var g = {a: 'text', b:[1,0], f: function(){ this.f = this.b; }};
        var h = {a: 'text', b:[1,0], f: function(){ this.a = this.b; }};
       
        var i = {
            a: 'text',
            c: {
                b: [1, 0],
                f: function(){
                    this.a = this.b;
                }
            }
        };
        
        var j = {
            a: 'text',
            c: {
                b: [1, 0],
                f: function(){
                    this.a = this.b;
                }
            }
        };
        var k = {a: 'text', b: null};
        var l = {a: 'text', b: undefined};

        this.isTrue(isEqual(a,b));
        this.isFalse(isEqual(a,c));
        this.isFalse(isEqual(c,d));
        this.isFalse(isEqual(a,e));
        this.isFalse(isEqual(f,g));
        this.isFalse(isEqual(h,g));
        this.isFalse(isEqual(i,j));
        this.isFalse(isEqual(d,k));
        this.isFalse(isEqual(k,l));
    }
}