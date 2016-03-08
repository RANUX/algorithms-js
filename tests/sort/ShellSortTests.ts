import { AbstractSortTests } from './AbstractSortTests';
import { ISort } from '../../sort/ISort';
import ShellSort from '../../sort/ShellSort';

export default class ShellSortTests extends AbstractSortTests {
    
    protected createSorting() : ISort {
        return new ShellSort();
    }
};
