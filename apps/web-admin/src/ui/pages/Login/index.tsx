import React, {useState} from 'react';
import styles from './styles.module.scss'; 
// import { signIn } from '@web-admin/apis/user/login'; 
import { signIn } from '../../../apis/user/login'; 
import { useNavigate } from 'react-router-dom';
function Login() {
    const [id, setId] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();

    return (
        <div className={styles.container}> 
            <div className={styles.box}>
                <div>
                    <div>ID</div> 
                    <input 
                        type="text"
                        maxLength={200}
                        placeholder=""
                        value = {id}
                        onChange={(e)=>setId(e.target.value)}
                    />
                </div>
                <div>
                    <div>Password</div>
                    <input 
                        type="text"
                        maxLength={200}
                        placeholder=""
                        value = {password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <button 
                    type="button" 
                    className={styles.button}
                    onClick={()=>signIn(id,password)}
                >
                    로그인
                </button>
                <button 
                    type="button"
                    onClick={()=>navigate("/register")}
                >
                    회원가입
                </button>
            </div>
        </div>
    );
}

export default Login;
