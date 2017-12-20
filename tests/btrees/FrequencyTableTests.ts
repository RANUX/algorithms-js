import * as tsUnit from '../../node_modules/ts-unit';
import { equal } from '../../helpers/ObjectHelpers';
import FrequencyTable from '../../btrees/FrequencyTable';
import PriorityQueue  from '../../queues/PriorityQueue';
/**
* FrequencyTableTests
*/
export class FrequencyTableTests extends tsUnit.TestClass {

    ftable : FrequencyTable;
    
    setUp()
    {
        var str = "beep boop beer!";
        this.ftable = new FrequencyTable(str);
        this.ftable.build();
    }
    
    testBuildTable()
    {
        
        var expTable = {
            'b' : 3,
            'e' : 4,
            'p' : 2,
            ' ' : 2,
            'o' : 2,
            'r' : 1,
            '!' : 1
        };
        
        this.isTrue( equal( expTable, this.ftable.frequencies ));
    }


}