import React, {useState} from 'react';
import { Container } from '../css/pageCss';
import { useForm } from 'react-hook-form';
import Header from '../components/Header';
import TextInput from '../components/TextInput';
import Button from '@mui/material/Button';
import axios from 'axios';
import { contactFormSchema } from '../../validators';
import { yupResolver } from '@hookform/resolvers/yup';
import { SUBSCRIBE_FORM, CONTACT_FORMID } from '../../api';
import Loader from '../components/Loader';
import Modal from 'react-modal';
import SuccessImage from '../../static/img/Success.png';
import CloseIcon from '../../static/img/CrossIcon';
import ErrorImage from '../../static/img/Error.png'

const customStyles = {
  overlay: {
    background: 'rgba(0,0,0,0.6)',
    zIndex: '100',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    minHeight:"400px",
    width:"350px",
    borderRadius:"12px",
  },
};

const Contact = () => {
  const [loader, setLoader] = React.useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [ErrormodalIsOpen, setErrorModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(contactFormSchema),
    defaultValues:{
      firstname: "",
      lastname: "",
      email: "",
      company: "",
      message: "",
    }
  });


 const submitContactForm = async (body) => {
  let fields = [];
  Object.keys(body).forEach((key) => {
    fields.push({ name: key, value: body[key] });
  });

  let { data } = await axios.post(`${SUBSCRIBE_FORM}/${CONTACT_FORMID}`, {
    fields: fields,
  }).then(function (response) {
    setLoader(false);
    setIsOpen(true)
  })
  .catch(function (error) {
    setLoader(false);
    setErrorModalOpen(true);
  })
  return data;
};

const closeModal = () => {
  window.location.reload();
}

const closeErrorModal = () => {
  window.location.reload();
}

  const onSubmit = async (data) => {
    setLoader(true);
    const newKeys = { 
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      company: data.company,
      message: data.message,
    }
    const response = await submitContactForm(newKeys);
  };

  return (
    <>
    {loader && <Loader />}
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
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={false}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className='success-main-div'>
         <CloseIcon className='close-svg' onClick={closeModal} />
         </div>
       <div className='success-content-div'>
         <img src={SuccessImage} width="80px" height="200px" alt="success_image"/>
         <span className='modal-message'>We will contact you shortly</span>
         <Button className='success-button' onClick={closeModal}>Ok</Button>
       </div>
      </Modal>
      <Modal
        isOpen={ErrormodalIsOpen}
        onRequestClose={closeErrorModal}
        shouldCloseOnOverlayClick={false}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className='success-main-div'>
         <CloseIcon className='close-svg' onClick={closeErrorModal} />
         </div>
       <div className='success-content-div'>
         <img src={ErrorImage} width="80px" height="200px" alt="success_image"/>
         <span className='modal-message'>Error!! <br /> Please try later</span>
         <Button className='success-button' onClick={closeErrorModal}>Ok</Button>
       </div>
      </Modal>

    </>
  );
};
export default Contact;