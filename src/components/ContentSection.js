import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Dropdown from '../components/DropDown';
import ImageBox from '../components/ImageContainer';
import Send from '../../static/img/SubmitArrow';
import { useMutation } from 'react-query';
import Button from '@mui/material/Button';
import { submitSubscribeForm } from '../../queries/subscribe';
import { SubscribeFormSchema } from '../../validators';
import { yupResolver } from '@hookform/resolvers/yup';
import Loader from '../components/Loader';
import SuccessImage from '../../static/img/Success.png';
import CloseIcon from '../../static/img/CrossIcon';
import Modal from 'react-modal';
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

const ContentSection = () => {
  const { mutate, isLoading, isSuccess, isError, reset } =
    useMutation(submitSubscribeForm);

    const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(SubscribeFormSchema),
  });

  const [modalIsOpen, setIsOpen] = useState(false);
  const [ErrormodalIsOpen, setErrorModalOpen] = useState(false);
  
  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    window.location.reload();
  }

  const openErrorModal = () => {
    setErrorModalOpen(true);
  }

  const closeErrorModal = () => {
    window.location.reload();
  }

  useEffect(() => {
    if (isSuccess) {
      openModal();
    }
    if(isError){
      openErrorModal();
    }
  }, [isLoading, isSuccess, isError])

  const onSubmit = (data) => {
    const newKeys = { email: data.email }
    mutate(newKeys);
  };

  return (
    <>
      {isLoading && <Loader />}
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
                  {...register("email")}
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
              <p className='error-message-home'>
                {errors.email && <p>{errors.email.message}</p>}
              </p>
            </form>
          </div>
        </div>
        <ImageBox />
      </div>
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
export default ContentSection;