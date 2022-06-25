import {
    emailPattern,
    passwordPattern,
    phonePattern,
    InvalidEmail,
    InvalidPassword,
    InvalidPhone,
    InvalidConfPassword,
    digitPattern,
    ssnPattern,
    InvalidOwner,
    InvalidSSN,
  } from 'utils/constants';
  
  const renderEmailValidation = email => {
    let isValid = true;
    let error = '';
  
    if (!email) {
      isValid = false;
      error = 'Email Required';
    } else if (!emailPattern.test(email)) {
      isValid = false;
      error = InvalidEmail;
    }
    return { isValid, error };
  };
  
  export const handleValidationForEmail = state => {
    let errors = {};
    let formIsValid = true;
  
    const errData = renderEmailValidation(state.email);
    if (!errData.isValid) {
      formIsValid = false;
      errors.email = errData.error;
    }
    return { errors, formIsValid };
  };
  
  export const handleValidationForSignIn = state => {
    let errors = {};
    let formIsValid = true;
  
    const errData = renderEmailValidation(state.email);
    if (!errData.isValid) {
      formIsValid = false;
      errors.email = errData.error;
    }
    if (!state.password) {
      formIsValid = false;
      errors.password = 'Password Required';
    }
    return { errors, formIsValid };
  };
  
  export const handleValidationForSignUp = state => {
    let errors = {};
    let formIsValid = true;
  
    if (!state.full_name) {
      formIsValid = false;
      errors.full_name = 'Full Name Required';
    }
    const errData = renderEmailValidation(state.email);
    if (!errData.isValid) {
      formIsValid = false;
      errors.email = errData.error;
    }
    if (!state.phone) {
      formIsValid = false;
      errors.phone = 'Phone Required';
    } else if (!phonePattern.test(state.phone)) {
      formIsValid = false;
      errors.phone = InvalidPhone;
    }
    if (!state.password) {
      formIsValid = false;
      errors.password = 'Password Required';
    } else if (!passwordPattern.test(state.password)) {
      formIsValid = false;
      errors.password = InvalidPassword;
    }
    if (state.conf_password !== state.password) {
      formIsValid = false;
      errors.conf_password = InvalidConfPassword;
    }
    return { errors, formIsValid };
  };
  
  export const handleValidationForResetPassword = state => {
    let errors = {};
    let formIsValid = true;
  
    if (!state.password) {
      formIsValid = false;
      errors.password = 'Password Required';
    } else if (!passwordPattern.test(state.password)) {
      formIsValid = false;
      errors.password = InvalidPassword;
    }
    if (!state.conf_password) {
      formIsValid = false;
      errors.conf_password = 'Confirm Password Required';
    } else if (state.conf_password !== state.password) {
      formIsValid = false;
      errors.conf_password = 'Password and Confirm password not same!';
    }
    return { errors, formIsValid };
  };
  
  export const handleValidationForContactus = state => {
    let errors = {};
    let formIsValid = true;
  
    if (!state.full_name) {
      formIsValid = false;
      errors.full_name = 'Full Name Required';
    }
    const errData = renderEmailValidation(state.email);
    if (!errData.isValid) {
      formIsValid = false;
      errors.email = errData.error;
    }
    if (!state.contact_message) {
      formIsValid = false;
      errors.contact_message = 'Message Required';
    }
    return { errors, formIsValid };
  };
  
  export const handleValidationForLandingContactus = state => {
    let errors = {};
    let formIsValid = true;
  
    if (!state.first_name) {
      formIsValid = false;
      errors.first_name = 'Please enter your first name';
    }
    if (!state.last_name) {
      formIsValid = false;
      errors.last_name = 'Please enter your last name';
    }
    const errData = renderEmailValidation(state.email);
    if (!errData.isValid) {
      formIsValid = false;
      errors.email = errData.error;
    }
    if (!state.contact_no) {
      formIsValid = false;
      errors.contact_no = 'Please provide your phone number';
    }
    if (!state.company_name) {
      formIsValid = false;
      errors.company_name = 'Please provide your company name';
    }
    if (!state.message) {
      formIsValid = false;
      errors.message = 'Please enter your message';
    }
    return { errors, formIsValid };
  };
  
  export const handleValidationForOwnersList = state => {
    let errors = {};
    let formIsValid = true;
  
    if (!state.name) {
      formIsValid = false;
      errors.name = 'Owner Name Required';
    }
    if (!state.description) {
      formIsValid = false;
      errors.description = 'Owner Description Required';
    }
    return { errors, formIsValid };
  };
  
  export const handleValidationForOrganization = state => {
    let errors = {};
    let formIsValid = true;
  
    if (!state.reg_bussiness_name) {
      formIsValid = false;
      errors.reg_bussiness_name = 'Business Name Required';
    }
    if (!state.employer_id_no) {
      formIsValid = false;
      errors.employer_id_no = 'EIN Required';
    }
    if (!state.legal_business_structure) {
      formIsValid = false;
      errors.legal_business_structure = 'Please mention the legal category of the organization';
    }
    return { errors, formIsValid };
  };
  
  export const handleValidationForPaymentInfo = state => {
    let errors = {};
    let formIsValid = true;
  
    if (!state.amount) {
      formIsValid = false;
      errors.amount = 'Amount Required';
    }
    if (!state.due_date) {
      formIsValid = false;
      errors.due_date = 'Due Date Required';
    }
    if (!state.memo_to_vendor) {
      formIsValid = false;
      errors.memo_to_vendor = 'Memo Required';
    }
    return { errors, formIsValid };
  };
  
  export const handleCommonValidationOnBlurOnChange = (name, value, label, isNotCheckPasswordValid = false) => {
    let inputErrors = [];
    const PatternTest =
      name === 'email'
        ? emailPattern
        : name === 'password' && !isNotCheckPasswordValid
        ? passwordPattern
        : name === 'phone' || name === 'mobile_no' || name === 'contact_no'
        ? phonePattern
        : name === 'ownership_percentage'
        ? digitPattern
        : name === 'ssn'
        ? ssnPattern
        : null;
    const InvalidMsg =
      name === 'email'
        ? InvalidEmail
        : name === 'password' && !isNotCheckPasswordValid
        ? InvalidPassword
        : name === 'phone' || name === 'mobile_no' || name === 'contact_no'
        ? InvalidPhone
        : name === 'ownership_percentage'
        ? InvalidOwner
        : name === 'ssn'
        ? InvalidSSN
        : '';
    const RequiredMsg = `${label} Required`;
  
    if (!value) {
      inputErrors[name] = RequiredMsg;
    } else if (PatternTest && !PatternTest.test(value)) {
      inputErrors[name] = InvalidMsg;
    } else {
      inputErrors[name] = '';
    }
    return inputErrors;
  };
  
  /* START: Password validation checker */
  const validPassword = /^.{8,}$/; /* /^[a-zA-Z0-9!@#$%^&*-+,.]{8,}$/; */
  const hasUppercase = /[A-Z]+/g;
  const hasLowercase = /[a-z]+/g;
  const hasSpecialCharacter = /[~!@#$%^&*-+,.]+/g;
  const hasNumber = /[0-9]+/g;
  
  const message = {
    size: 'Minimum 8 characters',
    upper: 'At least one upper case letter',
    lower: 'At least one lower case letter',
    special: 'At least one symbol',
    number: 'At least one number',
  };
  
  export const getPasswordCheckerList = password => {
    const status = [
      { valid: true, message: message.size },
      { valid: true, message: message.upper },
      { valid: true, message: message.lower },
      { valid: true, message: message.special },
      { valid: true, message: message.number },
    ];
  
    if (!password.match(validPassword)) {
      status[0].valid = false;
    }
    if (!password.match(hasUppercase)) {
      status[1].valid = false;
    }
    if (!password.match(hasLowercase)) {
      status[2].valid = false;
    }
    if (!password.match(hasSpecialCharacter)) {
      status[3].valid = false;
    }
    if (!password.match(hasNumber)) {
      status[4].valid = false;
    }
    return { status };
  };
  /* END: Password validation checker */
  
  export const handleValidationForOwnerInfo = state => {
    let errors = {};
    let formIsValid = true;
  
    if (!state.first_name) {
      formIsValid = false;
      errors.first_name = 'First Name Required';
    }
    if (!state.last_name) {
      formIsValid = false;
      errors.last_name = 'Last Name Required';
    }
    const errData = renderEmailValidation(state.email);
    if (!errData.isValid) {
      formIsValid = false;
      errors.email = errData.error;
    }
    if (!state.mobile_no) {
      formIsValid = false;
      errors.mobile_no = 'Please enter your phone number without country code, hyphen or extra spaces.';
    } else if (!phonePattern.test(state.mobile_no)) {
      formIsValid = false;
      errors.mobile_no = 'Please enter your phone number without country code, hyphen or extra spaces.';
    }
    if (!state.dob) {
      formIsValid = false;
      errors.dob = 'DOB Required';
    }
    if (!state.ownership_percentage) {
      formIsValid = false;
      errors.ownership_percentage = 'Please write a number, for example: 55';
    } else if (!digitPattern.test(state.ownership_percentage)) {
      formIsValid = false;
      errors.ownership_percentage = 'Please write a number, for example: 55';
    }
    if (!state.ssn) {
      formIsValid = false;
      errors.ssn = 'Please mention the correct 9-digit Social Security Number';
    } else if (!ssnPattern.test(state.ssn)) {
      formIsValid = false;
      errors.ssn = 'Please mention the correct 9-digit Social Security Number';
    }
    return { errors, formIsValid };
  };
  
  export const handleValidationForVendor = state => {
    let errors = {};
    let formIsValid = true;
  
    if (!state.contact_name) {
      formIsValid = false;
      errors.contact_name = 'Contact Name Required';
    }
    const errData = renderEmailValidation(state.email);
    if (!errData.isValid) {
      formIsValid = false;
      errors.email = errData.error;
    }
    if (!state.phone) {
      formIsValid = false;
      errors.phone = 'Phone Required';
    } else if (!phonePattern.test(state.phone)) {
      formIsValid = false;
      errors.phone = InvalidPhone;
    }
    if (!state.address_one) {
      formIsValid = false;
      errors.address_one = 'Address Required';
    }
    if (!state.address_two) {
      formIsValid = false;
      errors.address_two = 'Address Required';
    }
    if (!state.city) {
      formIsValid = false;
      errors.city = 'City Required';
    }
    if (!state.bank_name) {
      formIsValid = false;
      errors.bank_name = 'Bank name Required';
    }
    if (!state.bank_ac_no) {
      formIsValid = false;
      errors.bank_ac_no = 'Account number Required';
    }
    if (!state.ac_holder_name) {
      formIsValid = false;
      errors.ac_holder_name = 'Holder name Required';
    }
    if (!state.bank_routing_no) {
      formIsValid = false;
      errors.bank_routing_no = 'Routing number Required';
    }
    if (!state.branch_code) {
      formIsValid = false;
      errors.branch_code = 'Branch code Required';
    }
  
    return { formIsValid, errors };
  };
  