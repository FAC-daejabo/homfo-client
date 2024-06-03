import React from "react";
import styles from './styles.module.scss'
import { logo } from "../../../../assets/logo/icon"
import { useNavigate } from 'react-router-dom';
import { signOut, withdrawal } from "../../../../apis/user/login";
const SideBar  =()=>{
    const navigate = useNavigate();
    const handleSignout = async () => {
        if (await signOut()){
            navigate('/login');
        }
    }
    const handleWithdrawal = async () => {
        if (await withdrawal()){
            navigate('/login');
        }
    }
    return(
    <div className={styles.container}>
        <img 
            src={logo}
            style={{marginTop: 20}}
            onClick={()=>navigate("/")}
        />
        <div className={styles.tap}>
            <div style={{fontWeight: 700}}>회원 관리</div>
            {/* <li>사용자 정보 조회</li> */}
            <li
                onClick={()=>navigate("/usermanage/employee")}
            >
                관리자 정보 조회
            </li>
        </div>
        <div className={styles.tap}>
            <div style={{fontWeight: 700}}>협력 중개업소 관리</div>
            <li
                onClick={()=>navigate("/agencymanage/enroll")}
            >
                협력 중개업소 등록
            </li>
            <li
                onClick={()=>navigate("/")}
            >
                협력 중개업소 목록
            </li>
        </div>
        <div className={styles.tap}>
            <div style={{fontWeight: 700}}>협력 공인중개사 관리</div>
            <li
                onClick={()=>navigate("/realtormanage/enroll")}
            >
                협력 공인중개사 등록
            </li>
            <li
                onClick={()=>navigate("/realtormanage/list")}
            >
                협력 공인중개사 목록
            </li>
        </div>
        <div className={styles.tap}>
            <div style={{fontWeight: 700}}>요청하기 관리</div>
            <li
                onClick={()=>navigate("/")}
            >
                요청서 확인 / 제안서 작성
            </li>
        </div>
        {/* <div>
            <div>커뮤니티</div>
        </div>
        <div>
            <div>FAQ</div>
        </div> */}
        <div          
            style={{position:"absolute", bottom:30, display:'flex'}}
        >
            <div 
                style={{margin: 20, cursor:'pointer'}}
                onClick={()=>handleSignout()}
            >
                로그아웃
            </div>
            <div 
                style={{margin: 20, cursor:'pointer'}}
                onClick={()=>handleWithdrawal()}
            >
                회원탈퇴
            </div>
        </div>

    </div>)
}
export default SideBar;