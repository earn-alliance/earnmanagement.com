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
      <Content>
        <Wrapper>
          <FormWrapper>
            <Title>Guild Hub of the Metaverse</Title>
            <Text>
              The only advanced automation tool you need to run your Axie
              Infinity scholarship. Coming soon to a metaverse near you.
            </Text>
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputWrapper>
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
                  <SubmitButton>
                    <Send className="icon" />
                  </SubmitButton>
                </Button>
              </InputWrapper>
              <ErrorMessage>
                {errors.email && <p>This field is required</p>}
              </ErrorMessage>
            </form>
          </FormWrapper>
          <Footnote>
            Note: Earn Alliance and its subsidiaries are not affiliated with
            Axie Infinity.
          </Footnote>
        </Wrapper>
        <ImageBox />
       
      </Content>
    </>
  );
};
export default ContentSection;