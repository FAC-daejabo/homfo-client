import React,{useState, useEffect} from 'react';
import usePartnerAgencyStore from '../../../../store/context/usePartenerAgencyStore';
import styles from './styles.module.scss'
import { createRealtor } from '../../../../apis/realtor/realtor';

interface EnrollFormProps {}

const EnrollForm: React.FC<EnrollFormProps> = () => {
    const { agencyInfo } = usePartnerAgencyStore();
    // 각 필드에 대한 데이터가 없을 경우 빈 문자열을 표시
    const [realtorName, setRealtorName] = useState('');
    const [realtorPhoneNumber, setRealtorPhoneNumber] = useState('');
    const [certificateId, setCertificateId] = useState('');
    const [position, setPosition] = useState('');
    const [note, setNote] = useState('');
    
    const {
        name = '',
        openingRegistrationNumber = '',
        officeCallNumber = '',
        phoneNumber = '',
        agencyType = '',
        roadAddress = {address:""},
        lotAddress = {address:""},
        roadAddressDetail = "",
        lotAddressDetail = "",
        chairmanName = '',
        deduction = ""
    } = agencyInfo || {}; // agencyInfo가 null이면 빈 객체를 사용하여 기본값을 적용

    const handleEnrollEvent = ()=>{
        if (realtorName.length === 0){
            alert("이름은 필수 항목입니다.")
        } else {
            if (agencyInfo!==null){
                createRealtor(realtorName, realtorPhoneNumber, certificateId, position, note, agencyInfo?.id);
                setRealtorName("");
                setRealtorPhoneNumber("");
                setCertificateId("");
                setPosition("");
                setNote("");
            }
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.title}>공인중개사 정보 등록</div>
                <div className={styles.contents}>
                    <div className={styles.element}>1. 사무실 이름</div><div className={styles.value}>{name}</div>
                    <div className={styles.element}>2. 사무실 등록번호</div><div className={styles.value}>{openingRegistrationNumber}</div>
                    <div className={styles.element}>3. 사무실 연락처</div><div className={styles.value}>{officeCallNumber}</div><div>{phoneNumber}</div>
                    <div className={styles.element}>4. 해당 구역</div><div className={styles.value}>업데이트 예정</div>
                    <div className={styles.element}>7. 개업 / 소속 구분</div><div className={styles.value}>{agencyType}</div>
                    <div className={styles.element}>5. 도로명 주소</div><div className={styles.value}>{roadAddress.address} { roadAddressDetail!==undefined&&roadAddressDetail}</div>
                    <div className={styles.element}>6. 지번 주소</div><div className={styles.value}>{lotAddress.address} { lotAddressDetail!==undefined&&lotAddressDetail}</div>
                    <div className={styles.element}>7. 대표자명</div><div className={styles.value}>{chairmanName}</div>
                    <div className={styles.element}>8. 공제 가입 유무</div><div className={styles.value}>{typeof(deduction)==='boolean' ? deduction ? 'Y' : 'N':null}</div>
                </div>
            </div>
            <div className={styles.box}>
                <div className={styles.title}>공인중개사 추가 정보 기입</div>         
                <div className={styles.notice}>✅ 모든 항목은 필수 기입이 아니며 선택입니다. </div>
                <div className={styles.notice}>단, 이름은 필수 항목입니다. 전화 번호는 기입하면 사용자 제안서 전화걸기시 우선시 하여 사용됩니다. </div>
                <div className={styles.contents}>
                    <div className={styles.element}>1. 공인중개사 이름 <span>*</span></div>
                    <input 
                        className={styles.input} 
                        type="text"
                        value = {realtorName}
                        onChange={(e) => setRealtorName(e.target.value)}
                    />
                    <div className={styles.element}>2. 공인중개사 전화번호</div>
                    <input 
                        className={styles.input} 
                        type="text"
                        placeholder='ex) 010-0000-0000'
                        value = {realtorPhoneNumber}
                        onChange={(e) => setRealtorPhoneNumber(e.target.value)}
                    />
                    <div className={styles.element}>3. 공인중개사 자격증 번호</div>
                    <input 
                        className={styles.input} 
                        type="text"
                        placeholder='ex) 111-11-11111'
                        value = {certificateId}
                        onChange={(e) => setCertificateId(e.target.value)}
                    />
                    <div className={styles.element}>4. 직책</div>
                    <input 
                        className={styles.input}
                        type="text"
                        value = {position}
                        onChange={(e) => setPosition(e.target.value)}
                    />
                    <div className={styles.element}>5. 비고</div>
                    <input 
                        className={styles.bigInput}
                        type="text"
                        value = {note}
                        onChange={(e) => setNote(e.target.value)}
                    />
                </div>
                <button
                    className={styles.storeButton}
                    onClick={()=>handleEnrollEvent()}
                >
                    저장
                </button>
            </div>
        </div>
    );
}

export default EnrollForm;
