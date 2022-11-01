
export type FieldValidatorType = (value: string) => string | undefined

export const requiredField: FieldValidatorType = (value: string) => {
    if (value) return undefined;
    return 'Text is required!';

}
export const maxLengthCreator = (maxLength: number): FieldValidatorType => (value: string) => {
    if(value.length > maxLength) return `text should be no longer then ${maxLength} symbols`
    return undefined
}
export const minLengthCreator = (minLength: number): FieldValidatorType => (value: string) => {
    if(value.length < minLength) return `text should be at least ${minLength} symbols`
    return undefined
}
