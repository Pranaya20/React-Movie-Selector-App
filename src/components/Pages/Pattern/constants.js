
export const ROLE_ID = 2;
export const ACCESS_TOKEN = localStorage.getItem('access_token');
export const LOADER_COLOR_CLASSNAME = {
  PRIMARY: 'm-loader--primary',
  SUCCESS: 'm-loader--success',
  INFO: 'm-loader--info',
  WARNING: 'm-loader--warning',
  DANGER: 'm-loader--danger',
};
export const DEFAULT_LOADER_CLASSNAME = 'm-loader';
export const FETCH_POLICY = {
  NETWORK_ONLY: 'network-only',
  NO_CACHE: 'no-cache',
  CACHE_FIRST: 'cache-first',
  CACHE_ONLY: 'cache-only',
  CACHE_AND_NETWORK: 'cache-and-network',
};

export const VERSION = '';
export const DATE_FORMAT = 'YYYY-MM-DD';
export const getFullYear = new Date().getFullYear();
export const emailPattern = new RegExp(/^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.?)+\.[a-zA-Z]{2,}$/);
export const passwordPattern = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/);
export const phonePattern = new RegExp(/^[0-9]{10}$/);
export const digitPattern = new RegExp(/^[0-9]{2,}$/);
export const ssnPattern = new RegExp(/^[0-9]{9}$/); // social security number

export const InvalidEmail = 'Please enter valid email address.';
export const InvalidPassword = 'Password should contains (UpperCase, LowerCase, Number, SpecialChar and min 8 Chars)';
export const InvalidConfPassword = 'Confirm password must match.';
export const InvalidPhone = 'Please enter valid phone number.';
export const InvalidOwner = 'Please write a number, for example: 55';
export const InvalidSSN = 'Please mention the correct 9-digit Social Security Number';

export const PasswordValidationList = {
  passLength: false,
  upper: false,
  lower: false,
  digit: false,
  specialChar: false,
};