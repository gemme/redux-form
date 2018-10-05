import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { customInput, customSelect } from './fields';
import {
    required,
    minLength,
    maxLength,
    matchesPassword,
    asyncValidate
 } from '../validations';

class RegisterForm extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    name="firstname"
                    component={customInput}
                    type="text"
                    label="Name"
                    validate={required} />
            </div>
            <div>
                <Field
                    name="surname"
                    component={customInput}
                    type="text"
                    label="Surname"
                    validate={[required]}
                    />
            </div>
            <div>
                <Field
                    name="username"
                    component={customInput}
                    type="text"
                    label="Username"
                    validate={[required, minLength, maxLength]} />
            </div>
            <div>
                <Field
                    name="password"
                    component={customInput}
                    type="text"
                    label="Password"
                    validate={[required, minLength, maxLength]} />
            </div>
            <div>
                <Field
                    name="confirmPassword"
                    component={customInput}
                    type="text"
                    label="Confirm Password"
                    validate={[required, minLength, maxLength, matchesPassword]} />
            </div>
            <div>
                <Field
                    name="preference"
                    component={customSelect}
                    type="checkbox"
                    label="Preferred Formatting"
                     />
            </div>
            <div>
                <Field
                    name="newsletter"
                    component={customInput}
                    type="checkbox"
                    label="Sign up to newsletter?" />
            </div>
            <button type="submit">Submit</button>
        </form>
        );
    }
};

RegisterForm = reduxForm({
    form: 'register',
    asyncValidate,
    asyncBlurFields: ['username']
})(RegisterForm);

export default RegisterForm;