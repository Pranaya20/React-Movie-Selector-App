import React,{useState} from 'react'
import {
    emailPattern,
    passwordPattern,
    phonePattern,
    InvalidEmail,
    InvalidPassword,
    InvalidPhone,
    InvalidConfPassword,
  } from '../Pattern/constants.js';
import { Container, Form, FormGroup } from 'reactstrap';
import LabelComponents from "../../components/LabelComponents/LabelComponents.js";
import InputComponent from '../../components/Inputcomponent/InputComponent.js';
import { Button } from '../../components/Button/Button.js';

import './style.scss';

const Sign_in = () => {
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

      const setLocalStorageToken = (data, isRemember) => {
        localStorage.setItem('user_id', get(data, 'id'));
        localStorage.setItem('access_token', get(data, 'access_token'));
        if (isRemember) {
          localStorage.setItem('rememberme', true);
        } else {
          Cookies.set('remember_me_token', get(data, 'access_token'));
        }
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

          try {
            console.log("Udaya");
            Toast({ message: 'Login Successfully', type: 'success' });
            localStorage.setItem('token','randomValue');
            window.location ='/dashboard';
          } catch (error) {
            localStorage.setItem('token','randomValue');
            setLocalStorageToken(randomValue, rememberChecked);
            console.log("Pranaya");
            window.location ='/dashboard';
            serverToast(error);
          }
        }
      };



    
  
  return (
    <div className='maincontainer'>
        <div className="split left">
        </div>
        <div className="split right">
            <div className="container_body">
              <h2>Create an account</h2>
              <form onSubmit={handleSubmitForm}>
                    <FormGroup>
                        <LabelComponents labelname='Your email adress' marginBottom="5px" fontSize="16px" color="grey"/>
                        <InputComponent  width='60%' marginBottom="10px"  onChange={onHandleChange} name='email'/>
                        <p className="errorContainer">{formError.errors.email}</p>
                    </FormGroup>
                    <FormGroup>
                        <LabelComponents labelname='Your Password' marginBottom="5px" fontSize="16px" color="grey"/>
                        <InputComponent  
                      onChange={onHandleChange} width='60%' marginBottom="10px" name="password"/>
                       <p className="errorContainer">{formError.errors.password}</p>
                    </FormGroup>
                    <FormGroup>
                        <LabelComponents labelname='confirm Your Password' marginBottom="5px" fontSize="16px" color="grey"/>
                        <InputComponent onChange={onHandleChange} width='60%' marginBottom="10px" name='confirmpassword'/>
                        <p className="errorContainer">{formError.errors.confirmpassword}</p>
                    </FormGroup>
                    <FormGroup>
                        <LabelComponents labelname='Your Full name' marginBottom="5px" fontSize="16px" color="grey"/>
                        <InputComponent onChange={onHandleChange} width='60%' marginBottom="10px" name='name'/>
                        <p className="errorContainer">{formError.errors.name}</p>
                    </FormGroup>
                    <FormGroup>
                        <LabelComponents labelname='Your phone nummber' marginBottom="5px" fontSize="16px" color="grey" />
                        <InputComponent onChange={onHandleChange} width='30%' marginBottom="20px" name='phoneNumber'/>
                        <p className="errorContainer">{formError.errors.phoneNumber}</p>
                    </FormGroup>
                    <Button width='30%' text='Create account' type="submit" />
              </form>
            </div>
        </div>
    </div>
  )
}

export default Sign_in