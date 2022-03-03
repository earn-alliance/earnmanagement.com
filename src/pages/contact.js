import React from 'react';
import { Container } from '../css/pageCss';
import { useForm } from 'react-hook-form';
import Header from '../components/Header';
import TextInput from '../components/TextInput';

const Home = () => {
  const { control } = useForm();
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
        <div className='input-section'>
          <TextInput
            name="firstName"
            className="info_input"
            control={control}
            type="text"
            placeholder="Firstname"
          />
          <TextInput
            name="lastName"
            className="info_input"
            control={control}
            type="text"
            placeholder="Lastname"
          />
          <TextInput
            name="emailId"
            className="info_input"
            control={control}
            type="text"
            placeholder="Email"
          />
          <TextInput
            name="company"
            className="info_input"
            control={control}
            type="text"
            placeholder="Company"
          />
          <TextInput
            name="message"
            className="info_input"
            control={control}
            type="text"
            placeholder="Message"
          />
        </div>
      </div>
      <div className='submit-request-div'>
      <div className='request-button'>Submit Request</div>
      </div>
        {/* CONTACT US PAGE
      <ContentSection /> */}
    </Container>
  </>
  );
};
export default Home;