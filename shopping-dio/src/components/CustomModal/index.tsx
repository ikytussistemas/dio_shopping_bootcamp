import Modal from "react-modal";

const customStyles: Modal.Styles = {
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '500px',
    height: '500px',
    padding: '10px',
    borderRadius: '10px',
    overflow: 'hidden',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    margin: '0',
    transform: 'translate(-50%, -50%)',
  },
};

export const CustomModal = ({children, open=false, close:any }: any, ) => {
  Modal.setAppElement("#root");
  return (
    <Modal 
      isOpen={open}
      onRequestClose={close}
      style={customStyles}
    >
        {children }
    </Modal>
  );
};
