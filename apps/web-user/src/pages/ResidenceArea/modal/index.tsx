import React,{ useState, useEffect } from 'react';
import Modal from 'react-modal';
import styles from './styles.module.scss';
import noticeImage from '../../../assets/icons/areaNotice.png'
import useUserStore from '../../../store/context/useUserStore';
const customStyles = {
    content: {
      width:'100%',
      height:'100%',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex:100,
      padding:0,
      overflow:'hidden',
    },
    overlay: {
      width: '100vw',
      height: '100vh',
      zIndex:100,
      overflow:'hidden',
    },
  };
  Modal.setAppElement('#root');

  interface CustomModalProps {
    modalIsOpen: boolean;
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
  const MapModal: React.FC<CustomModalProps> = ({ modalIsOpen, setModalIsOpen }) => {
    const [shouldShowModal, setShouldShowModal] = useState(true);
    const {userInfo} = useUserStore();
    useEffect(() => {
      const closeModalFlag = localStorage.getItem(`closeModal`);
      if (closeModalFlag) {
        setShouldShowModal(false);
      }
    }, []);
    const closeModal = () => {
      setModalIsOpen(false);
    };
  
    const handleTodayCloseClick = () => {
      localStorage.setItem(`closeModal`, 'true');
  
      closeModal();
    };
  
    return shouldShowModal ? (
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="안내사항"
      >
        <img 
          alt="구역을 클릭해보세요"
          src={noticeImage}
          className={styles.noticeImage}
          />
        <button
          id="todayClose"
          className={`${styles.button} ${styles.todayClose}`}
          onClick={handleTodayCloseClick}
          style={{height: 50+(userInfo.bottom/2)}}
        >
          다시 보지 않기
        </button>
        <button 
          id="close" 
          className={`${styles.button} ${styles.close}`}
          style={{height: 50+(userInfo.bottom/2)}}
          onClick={closeModal}>
          닫기
        </button>
      </Modal>
    ) : null;
  };
  
  export default MapModal;