import React from 'react';
import {Field} from 'redux-form';
import { required }  from '../../validations';

export const customInput = props => {

    const {label, input, type, meta } = props;
    return (
        <div>
            <label>{label}</label>
            <input {...input} type={type} autoFocus={props.autoFocus}/>
            {meta.error && meta.touched && (
                <div style={{color: 'red'}}>{meta.error}</div>
            )}
        </div>
    );

};

export const customSelect = props => {
    return (
        <div>
            <label>{props.label}</label>
            <select {...props.input}>
                <option value="tabs">Tabs</option>
                <option value="spaces">Spaces</option>
            </select>
        </div>
    );
};

export const discounts = ({fields}) => {

    return (
        <div>
        {fields.map((code, index) => (
            <div key={index}>
                <Field
                    name={code}
                    type='text'
                    component={customInput}
                    label={`Discount code #${index + 1}`}
                    autoFocus
                    validate={required}
                />
                <button type='button' onClick={ () => fields.remove(index)}>
                    {`&times ${index+1}`}
                </button>
            </div>
        ))}
        <button type='button' onClick={ () => fields.push()}>
            {`Add ${!fields.length ? 'Discount Code(s)' : 'Another' }`}
        </button>
        </div>
    )
};
