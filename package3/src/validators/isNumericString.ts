import { z } from 'zod'

export type NumericString = `${number}.${number}.${number}`;

function isNumericString(): z.ZodType<NumericString> {
    return z.string().refine((stringCheck) => {
        const splitVals = stringCheck.split('.');
        return splitVals.every((val) => Number.isInteger(+val));
    }) as z.ZodType<NumericString>;
}

export default isNumericString;