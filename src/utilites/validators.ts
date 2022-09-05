//@ts-ignore

export const requiredField = (value: string) => {
    if (value) return undefined;
    return 'Text is required!';

}
export const maxLengthCreator = (maxLength: number) => (value: string) => {
    if(value.length > maxLength) return `text should be no longer then ${maxLength} symbols`
    return undefined
}
export const minLengthCreator = (minLength: number) => (value: string) => {
    if(value.length < minLength) return `text should be at least ${minLength} symbols`
    return undefined
}
