import React from 'react';
import { useForm } from 'react-hook-form';
import Dropdown from '../components/DropDown';
import ImageBox from '../components/ImageContainer';


import {
  Content,
  Title,
  Wrapper,
  Text,
  InputWrapper,
  SubmitButton,
  FormWrapper,
  Footnote,
} from '../css/pageCss';
import Send from '../../static/img/SubmitArrow';
// import TextInput from 'components/FormElements/TextInput';
import Button from '@mui/material/Button';
import { ErrorMessage } from '../css/addAccountsModal';
const ContentSection = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
  });
  const onSubmit = (data) => {};
  return (
    <>
      <div className='content-container'>
        <div className='content-wrapper'>
          <div className='formWrapper-div'>
            <div className='content-title'>Guild Hub of the Metaverse</div>
            <div className='content-text'>
              The only advanced automation tool you need to run your Axie
              Infinity scholarship. Coming soon to a metaverse near you.
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='input-wrapper-div'>
                <input
                  name="email"
                  className="email_address"
                  control={control}
                  type="text"
                  placeholder="Your Email Address"
                  defaultValue=""
                />
                <Dropdown
                  name="user_type"
                  className="home_select"
                  data={[
                    { value: 'Scholarship Owner', label: 'Scholarship Owner' },
                    { value: 'Scholar', label: 'Scholar' },
                    { value: 'Investor', label: 'Investor' },
                    { value: 'Other', label: 'Other' },
                  ]}
                  control={control}
                  placeholder="Type"
                />
                <Button type="submit">
                  <div className='submit-button'>
                    <Send className="icon" />
                  </div>
                </Button>
              </div>
              <p className='error-message'>
                {errors.email && <p>This field is required</p>}
              </p>
            </form>
          </div>
        </div>
        <ImageBox />
       
      </div>
    </>
  );
};
export default ContentSection;