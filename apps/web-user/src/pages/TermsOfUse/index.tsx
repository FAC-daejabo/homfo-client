import React,{useEffect, useState} from 'react'
import styles from './styles.module.scss'
import * as icon from '../../assets/icons/agreement/icon'
import ConfirmButton from '../../components/button/ConfirmButton';
import Contents from './Contents';
const TermsOfUse = () => {
    const [userAgree, setUserAgree] = useState<boolean>(false);
    const onClickAgreement = () => {
        window.ReactNativeWebView.postMessage('register');
    }
    return(
        <div className={styles.container}>
            <div className={styles.title}>
                이용 약관 동의<br/>
            </div>
            <div className={styles.subTitle}>
                서비스 이용에 꼭 필요한 사항입니다.<br/>
                정책 및 약관을 클릭해 모든 내용을 확인해주세요.<br/>
                개인정보는 서비스 이용에만 활용됩니다.<br/>
            </div>

            <div className={styles.agreement}>
                <img 
                    src={userAgree?icon.Checked:icon.NotChecked}
                    alt="check"
                    onClick={()=>setUserAgree(!userAgree)}
                    className= {styles.image}
                />
                <div>
                    개인정보 수집 이용동의<span>&nbsp;&nbsp;(필수)</span>
                </div>
            </div>
            <div className={styles.subSector}>성명, 주소, 전화번호, 이메일, 성별, 나이, 생년월일 및 직업</div>
            <Contents/>
            <ConfirmButton title="확인" auth={userAgree} onClick={onClickAgreement}/>
        </div>
);}
export default TermsOfUse

