import React from 'react';
import { Container } from '../css/pageCss';
import { useForm } from 'react-hook-form';
import Header from '../components/Header';
import TextInput from '../components/TextInput';
import Button from '@mui/material/Button';
import axios from 'axios';
import { contactFormSchema } from '../../validators';
import { yupResolver } from '@hookform/resolvers/yup';
import { SUBSCRIBE_FORM, CONTACT_FORMID } from '../../api';

const Contact = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(contactFormSchema),
  });


 const submitContactForm = async (body) => {
  console.log('body === ', body)
  let fields = [];
  Object.keys(body).forEach((key) => {
    fields.push({ name: key, value: body[key] });
  });

  let { data } = await axios.post(`${SUBSCRIBE_FORM}/${CONTACT_FORMID}`, {
    fields: fields,
  });
  return data;
};


  const onSubmit = async (data) => {
    const response = await submitContactForm(data);
  };
console.log(errors)
  return (
    <>
        <Container>
          <Header />
          <div className='contact-wrapper'>
            <div>
              <div className='contact-heading'>Contact Us</div>
              <div className='contact-text-wrapper'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
          <div className='information-div'>
            {/* <div className='info-section'>
          <div className='info-text'>Earnmanagement.com</div>
          <div className='info-number'>
            <div className='info-code'>US</div>
            +1(872)2889283
          </div>
          <div className='info-number'>
            <div className='info-code'>UA</div>
            +1(872)2889283
          </div>
        </div> */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='input-section'>
                <div className='text-input-container'>
                <TextInput
                  name="firstname"
                  className="info_input"
                  control={control}
                  type="text"
                  placeholder="Firstname"
                  {...register("firstname")}
                />
                <p className='error-message'>
                {errors.firstname && <p>{errors.firstname.message}</p>}
              </p>
              </div>
              <div className='text-input-container'>
                <TextInput
                  name="lastname"
                  className="info_input"
                  control={control}
                  type="text"
                  placeholder="Lastname"
                  {...register("lastname")}
                />
                <p className='error-message'>
                {errors.lastname && <p>{errors.lastname.message}</p>}
              </p>
                </div>
                <div className='text-input-container'>
                <TextInput
                  name="email"
                  className="info_input"
                  control={control}
                  type="text"
                  placeholder="Email"
                  {...register("email")}
                />
                <p className='error-message'>
                {errors.email && <p>{errors.email.message}</p>}
              </p>
                </div>
                <div className='text-input-container'>
                <TextInput
                  name="company"
                  className="info_input"
                  control={control}
                  type="text"
                  placeholder="Company"
                  {...register("company")}
                />
                <p className='error-message'>
                {errors.company && <p>{errors.company.message}</p>}
              </p>
                </div>
                <div className='text-input-container'>
                <TextInput
                  name="message"
                  className="info_input"
                  control={control}
                  type="text"
                  placeholder="Message"
                  {...register("message")}
                />
                <p className='error-message'>
                {errors.message && <p>{errors.message.message}</p>}
              </p>
                </div>
                <Button type="submit">
                  <div className='request-button'>Submit Request</div>
                </Button>
              </div>
            </form>
          </div>
          <div className='submit-request-div'>
          </div>
        </Container>
    </>
  );
};
export default Contact;