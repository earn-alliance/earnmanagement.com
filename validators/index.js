import * as yup from 'yup';

export const SubscribeFormSchema = yup.object().shape({
    email: yup
      .string()
      .email('A valid email address is required')
      .required('This field is required'),
  });

  export const contactFormSchema = yup.object().shape({
  firstname: yup
    .string()
    .required('First name is required'),
  lastname: yup
    .string()
    .required('Last name is required'),
  email: yup
    .string()
    .email('A valid email address is required')
    .required('Email is required'),
  company: yup
    .string()
    .required('Company is required'),
  message: yup
  .string()
  .required('Message is required'),
});