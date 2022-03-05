import React from 'react';

export const requiredCreator = (name) => (value) => {
    if (value) return undefined
    else return `${name} is required`
}
// замикання (функція, яка вертає функцію)

export const maxLengthCreator = (maxLength) => (values) => {
    if (values && values.length > maxLength) return `Max length is ${maxLength} symbols`
}
// замикання (функція, яка вертає функцію)