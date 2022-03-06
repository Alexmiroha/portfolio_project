import React from 'react';
import s from './Input.module.css'

const Input = ({input, meta, ...props}) => {
    // рест оператор, деструктуризація

    const checkInput = meta.touched && meta.error;
    const checkFocused = meta.active || input.value;
    const style = {
        padding: props.padding,
        fontWeight: "300",
    }

    return (
        <div className={s.input_wrapper} style={{height: props.inputMargin}}>
            <input className={checkInput ? `${s.errorInput} ${s.input}` : `${s.input}`}
                   type={props.type} {...meta} {...input}
                   style={style}
            />
            <div
                className={checkFocused ? `${s.name} ${s.focused}` : `${s.name}`}>{props.placeholder}</div>

            {checkInput &&
            <Error meta={meta} styleError={props.styleError}/>
            }

        </div>
    );
};

const Error = ({meta, styleError}) => {
    return (
        <div className={s.errorWrapper}>
            {styleError ?
                <div>
                    <div className={s.error}>
                        <div>{meta.error}</div>
                    </div>
                    <div className={s.icon}>
                        X
                    </div>
                </div>
                :
                <div className={s.errorMinimal}>{meta.error}</div>
            }
        </div>
    )
}

export default Input;
