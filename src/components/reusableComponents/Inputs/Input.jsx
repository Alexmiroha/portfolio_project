import React from 'react';
import s from './Input.module.css'

const Input = ( {input, meta, ...props} ) => {
    // рест оператор, деструктуризація

    console.log({input, meta})
    const checkInput = meta.touched && meta.error;

    return (
        <div className={s.input_wrapper}>
            <label className={s.name}>{props.placeholder}</label>
            <input className={checkInput ? `${s.errorInput} ${s.input}` : `${s.input}`} type="text" {...meta} {...input} />
            {checkInput && <span className={s.errorSpan}>{meta.error}</span>}
        </div>
    );
};

export default Input;
