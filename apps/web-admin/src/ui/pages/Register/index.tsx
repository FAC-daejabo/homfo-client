import React, {useEffect, useState} from 'react';
import styles from './styles.module.scss'; 
function Register() {
  const [formData, setFormData] = useState({
    account: "",
    password: "",
    nickname: "",
    phoneNumber: "",
    gender: null,
    job: "서비스 사업팀",
    birthday: null,
  });
    useEffect(()=>{ 
      // 인터페이스 메소드 분리 
    },[])
    return (
      <div className={styles.container}>
          <form onSubmit={()=>console.log("")}>
            <div className={styles.box}>
              <div className={styles.title}>ID</div>
              <div>
                <input
                  className={styles.input}
                  style={{width: "calc(30vw - 110px)"}}                  
                  type="text"
                  placeholder="아이디를 입력해주세요."
                />
                <button className={styles.button}>중복 확인</button>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.title}>비밀번호</div>
              <input
                className={styles.input}
                type="password"
                placeholder="비밀번호를 입력해주세요."
              />
            </div>
            <div className={styles.box}>
              <div className={styles.title}>비밀번호 확인</div>
              <input
                className={styles.input}
                type="password check"
                placeholder="다시 한 번 입력해주세요"
              />
            </div>
            <div className={styles.box}>
              <div className={styles.title}>이름</div>
              <input
                className={styles.input}
                type="text"
                placeholder="이름을 입력해주세요."
              />
            </div>
            <div className={styles.box}>
              <div className={styles.title}>전화번호</div>
              <input
                className={styles.input}
                type="text"
                placeholder="ex) 010-1234-5678"
              />
            </div>
            <div className={styles.box}>
              <div className={styles.title}>소속팀</div>
              <select       
                className={styles.input}
              >
                <option value="서비스 사업팀">서비스 사업팀</option>
                <option value="서비스 기획팀">서비스 기획팀</option>
                <option value="서비스 개발팀">서비스 개발팀</option>
                <option value="서비스 디자인팀">서비스 디자인팀</option>                
                <option value="마케팅 팀">마케팅 팀</option>
                <option value="중개업소 영업팀">중개업소 영업팀</option>
                <option value="부동산 상식팀">부동산 상식팀</option>
                <option value="연구 개발팀">연구 개발팀</option>
              </select>
            </div>
            <div className={styles.box}>
              <div className={styles.title}>성별</div>
              <select         
                className={styles.input}
              >
                <option value="M">남</option>
                <option value="W">여</option>
              </select>
            </div>
            <div className={styles.box}>
              <div className={styles.title}>생년월일</div>
              <input 
                type="date"
                className={styles.input}
              />
            </div>
            <button className={styles.submitButton}>신청</button>
          </form>
      </div>
    );
}

export default Register;
