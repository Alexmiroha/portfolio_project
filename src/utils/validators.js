import React from 'react';

export const requiredCreator = (name) => (value) => {
    if (value) return undefined
    else return `${name} is required`
}
// замикання (функція, яка вертає функцію)

export const maxLenthCreator = (maxLenth) => (value) => {
    if (value.length > maxLenth) return `Max length is ${maxLenth} symbols`
}
// замикання (функція, яка вертає функцію)