import React from 'react';
import s from './Input.module.css'

const Input = ({input, meta, ...props}) => {
    // рест оператор, деструктуризація

    const checkInput = meta.touched && meta.error;
    const checkFocused = meta.active || input.value;


    return (
        <div className={s.input_wrapper}>
            <input className={checkInput ? `${s.errorInput} ${s.input}` : `${s.input}`}
                   type="text" {...meta} {...input} />
            <div className={checkFocused ? `${s.name} ${s.focused}` : `${s.name}`}>{props.placeholder}</div>

            {checkInput &&
                <Error meta={meta}/>
            }

        </div>
    );
};

const Error = ({meta}) => {
    return (
        <div className={s.errorWrapper}>
            <div className={s.error}>
                <div>{meta.error}</div>
            </div>
            <div className={s.icon}>
                X
            </div>
        </div>
    )
}

export default Input;
