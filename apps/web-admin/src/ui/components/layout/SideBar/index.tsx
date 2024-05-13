import React from "react";
import styles from './styles.module.scss'
const SideBar  =()=>{
    return(
    <div className={styles.container}>
        <img/>
        <div>
            <div>회원 관리</div>
            <li>사용자 정보 조회</li>
            <li>관리자 정보 조회</li>
        </div>
        <div>
            <div>요청하기 관리</div>
            <li>협력 공인중개사 정보 등록</li>
            <li>요청서 확인 / 제안서 작성</li>
        </div>
        <div>
            <div>커뮤니티</div>
        </div>
        <div>
            <div>FAQ</div>
        </div>
        <div>로그아웃</div>
    </div>)
}
export default SideBar;