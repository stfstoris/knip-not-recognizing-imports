import { v,  } from 'package3'

const barParamsSchema = v.object({
    numberInput: v.number(),
    stringInput: v.isNumericString(),
    foo: v.object({
        bar: v.string(),
    })
})

type BarParams = v.infer<typeof barParamsSchema>;

const validateBarParams = (params: any): BarParams => {
    return barParamsSchema.parse(params)
}

export default validateBarParams;