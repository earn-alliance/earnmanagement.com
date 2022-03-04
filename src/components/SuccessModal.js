import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const  SuccessModal = ({isOpen}) => {
    let subtitle;
    // const [modalIsOpen, setIsOpen] = React.useState(false);
  
    // function openModal() {
    //   setIsOpen(true);
    // }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    const closeModal = ()=> !isOpen;
    
return(
  <div className='success-modal-container'>
    <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={!isOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
  </div>
);
};

export default SuccessModal;