import React, { Component } from 'react';
import RegisterForm from './components/RegisterForm';
import { SubmissionError } from 'redux-form';

class RegisterFormContainer extends Component{

  submit = values => {
    if(['gabriel', 'ernesto', 'manuel'].includes(values.username)){
      throw new SubmissionError({
        username: 'Username already taken'
      });
    } else {
      alert(JSON.stringify(values, null, 4));
    }
  }

  getInitialValues () {
    return {
      preference: 'spaces',
      newsletter: true
    }
  }


  render() {
    return <RegisterForm
      onSubmit={this.submit}
      initialValues={this.getInitialValues()}/>
  }
}

export default RegisterFormContainer;