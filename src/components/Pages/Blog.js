import Axios from 'axios'
import React,{useState} from 'react'
import {
    emailPattern,
    passwordPattern,
    phonePattern,
    InvalidEmail,
    InvalidPassword,
    InvalidPhone,
    InvalidConfPassword,
  } from './Pattern/constants.js';
  
import { Container, Form, FormGroup } from 'reactstrap';
import LabelComponents from "../LabelComponents/LabelComponents";
import InputComponent from '../Inputcomponent/InputComponent.js';
import { Button } from '../Button/Button';

import "./style.css";

export const Blog = () => {
    const url={};
    const [formValue, setFormValue] = useState({ email: '', password: '', confirmpassword:'', name:'', phoneNumber:'' });
    console.log("formValue=",formValue);
    const [formError, setFormError] = useState({ errors: '' });
    console.log("The errors are:",formError.errors.name);
    const handleValidationForSignUp = state => {
         let errors = {};
        let formIsValid = true;
        console.log("The datas are:",state);
      
        if (!state.name) {
          formIsValid = false;
          errors.name = 'Full Name Required';
        }
        const errData = renderEmailValidation(state.email);
        if (!errData.isValid) {
          formIsValid = false;
          errors.email = errData.error;
        }
        if (!state.phoneNumber) {
          formIsValid = false;
          errors.phoneNumber = 'Phone number Required';
        } else if (!state.phoneNumber.match(phonePattern)) {
          formIsValid = false;
          errors.phoneNumber = InvalidPhone;
        }
        if (!state.password) {
          formIsValid = false;
          errors.password = 'Password Required';
        } else if (!state.password.match(passwordPattern)) {
          formIsValid = false;
          errors.password = InvalidPassword;
        }
        console.log("password",state.password);
        console.log("confirmpassword",state.confirmpassword);
        if (state.confirmpassword !== state.password) {
            formIsValid = false;
            errors.confirmpassword = InvalidConfPassword;
          }
        return { errors, formIsValid };
      };
      
    const onHandleChange = (e, label) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
      };

      const renderEmailValidation = email => {
        let isValid = true;
        let error = '';
       
        if (!email) {
          isValid = false;
          error = 'Email Required';
        } else if (!email.match(emailPattern)) {
          isValid = false;
          error = ' Please enter a valid email';
        }
        return { isValid, error };
      };
    const handleSubmitForm = e => {
        e.preventDefault();
        const validationObj = handleValidationForSignUp(formValue);
        console.log("validationObj",validationObj);
        if(validationObj.formIsValid === false){
            console.log("False");
        }else{
            console.log("True");
    }
      
        if (!validationObj.formIsValid) {
            
          setFormError({errors:validationObj.errors });
        } else {

            Axios.post(url,{
                email:formValue.email,
                password:formValue.password,
                confirmpassword:formValue.confirmpassword,
                name:formValue.name,
                phoneNumber:formValue.phoneNumber
            })
            .then(res=>{
                console.log(res.data);
            })
        }
      };
  return (
    <div className='maincontainer'>
            <div className="container_body">
              <h5 className="title">Create an account</h5>
              <form onSubmit={handleSubmitForm}>
                    <FormGroup>
                        <LabelComponents labelname='Your email adress' marginBottom="5px" fontSize="16px" color="grey"/>
                        <InputComponent  width='40%' marginBottom="10px"  onChange={onHandleChange} name='email'/>
                        <p className="errorContainer">{formError.errors.email}</p>
                    </FormGroup>
                    <FormGroup>
                        <LabelComponents labelname='Your Password' marginBottom="5px" fontSize="16px" color="grey"/>
                        <InputComponent  
                      onChange={onHandleChange} width='40%' marginBottom="10px" name="password"/>
                       <p className="errorContainer">{formError.errors.password}</p>
                    </FormGroup>
                    <FormGroup>
                        <LabelComponents labelname='confirm Your Password' marginBottom="5px" fontSize="16px" color="grey"/>
                        <InputComponent onChange={onHandleChange} width='40%' marginBottom="10px" name='confirmpassword'/>
                        <p className="errorContainer">{formError.errors.confirmpassword}</p>
                    </FormGroup>
                    <FormGroup>
                        <LabelComponents labelname='Your Full name' marginBottom="5px" fontSize="16px" color="grey"/>
                        <InputComponent onChange={onHandleChange} width='40%' marginBottom="10px" name='name'/>
                        <p className="errorContainer">{formError.errors.name}</p>
                    </FormGroup>
                    <FormGroup>
                        <LabelComponents labelname='Your phone nummber' marginBottom="5px" fontSize="16px" color="grey" />
                        <InputComponent onChange={onHandleChange} width='40%' marginBottom="20px" name='phoneNumber'/>
                        <p className="errorContainer">{formError.errors.phoneNumber}</p>
                    </FormGroup>
                    <Button width='30%' text='Create account' type="submit" />
              </form>
            </div>
    </div>
  )
}

