import * as tsUnit from '../../node_modules/ts-unit';
import { equal } from '../../helpers/ObjectHelpers';

/**
 * TestFoo
 */
class TestFoo {
    
    private val : number;
    
    constructor(val :number) {
        this.val = val;
    }
    
    equals( other : TestFoo )
    {
        return this.val === other.val;
    }
    
    set Value(value: number) {

        if (value === undefined) throw 'Please supply time interval';
        this.val = value;

    }
}


/**
* ObjectHelpersTests
*/
export class ObjectHelpersTests extends tsUnit.TestClass {

    testIsEqual()
    {
        this.isFalse(equal({}, null));
        this.isFalse(equal({}, undefined));

        this.isTrue(equal('hi','hi'));
        this.isTrue(equal(5,5));
        this.isFalse(equal(5,10));
        this.isFalse(equal(1,'1'));

        this.isTrue(equal([],[]));
        this.isTrue(equal([1,2],[1,2]));
        this.isFalse(equal([1,2],[2,1]));
        this.isFalse(equal([1,2],[1,2,3]));

        this.isTrue(equal(new Date("2011-03-31"), new Date("2011-03-31")));
        this.isFalse(equal(new Date("2011-03-31"), new Date("1970-01-01")));

        this.isTrue(equal({},{}));
        this.isTrue(equal({a:1,b:2},{a:1,b:2}));
        this.isTrue(equal({a:1,b:2},{b:2,a:1}));
        this.isFalse(equal({a:1,b:2},{a:1,b:3}));

        this.isTrue(equal({1:{name:"mhc",age:28}, 2:{name:"arb",age:26}},{1:{name:"mhc",age:28}, 2:{name:"arb",age:26}}));
        this.isFalse(equal({1:{name:"mhc",age:28}, 2:{name:"arb",age:26}},{1:{name:"mhc",age:28}, 2:{name:"arb",age:27}}));

        this.isFalse(equal(function(x){return x;},function(x){return x;}));
        this.isFalse(equal(function(x){return x;},function(y){return y+2;}));

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

        this.isTrue(equal(a,b));
        this.isFalse(equal(a,c));
        this.isFalse(equal(c,d));
        this.isFalse(equal(a,e));
        this.isFalse(equal(f,g));
        this.isFalse(equal(h,g));
        this.isFalse(equal(i,j));
        this.isFalse(equal(d,k));
        this.isFalse(equal(k,l));
    }
    
    testExtendedObjectsEquality()
    {
        var foo1 = new TestFoo(10);
        var foo2 = new TestFoo(10);
        
        this.isTrue( equal(foo1, foo2) );
        
        foo2.Value = 1234;
        this.isFalse( equal(foo1,foo2) );
    }
}