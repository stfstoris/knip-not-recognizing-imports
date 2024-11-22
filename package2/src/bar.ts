import { type Foo } from 'package1'
import { type NumericString } from 'package3';
import validateBarParams from './validateBarParams';


class Bar {
    public test(params: any): string {
        const barParams = validateBarParams(params);
        const { foo, numberInput, stringInput } = barParams
        return this.formatString(numberInput, stringInput, foo);
    }

    private formatString(numberInput: number, stringInput: NumericString, { bar }: Foo): string {
        return `${numberInput.toString()}-${stringInput}-${bar}`;
    }
}

export default Bar;