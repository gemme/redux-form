import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { customInput, customSelect } from './fields';
import { validate } from '../validations';

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
                    label="Name" />
            </div>
            <div>
                <Field
                    name="surname"
                    component={customInput}
                    type="text"
                    label="Surname" />
            </div>
            <div>
                <Field
                    name="username"
                    component={customInput}
                    type="text"
                    label="Username" />
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
    validate
})(RegisterForm);

export default RegisterForm;