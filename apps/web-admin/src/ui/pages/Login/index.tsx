import React, {useState} from 'react';
import styles from './styles.module.scss'; 
// import { signIn } from '@web-admin/apis/user/login'; 
import { signIn } from '../../../apis/user/login'; 
import { useNavigate } from 'react-router-dom';
function Login() {
    const [id, setId] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();
    const handleLogin = async (id:string, password:string)=>{
        if (await signIn(id,password)){
            navigate('/');
        }
    }
    const activeEnter = (e: React.KeyboardEvent<HTMLInputElement>, id:string, password:string) => {
        if(e.key === "Enter") {
            handleLogin(id, password);
        }
    }
      
    return (
        <div className={styles.container}> 
            <div className={styles.box}>
                <div>
                    <div>ID</div> 
                    <input 
                        className ={styles.input}
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
                        className ={styles.input}
                        type="text"
                        maxLength={200}
                        placeholder=""
                        value = {password}
                        onKeyDown={(e) => activeEnter(e, id, password)}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <button 
                    type="button" 
                    className={styles.submitButton}
                    onClick={()=>handleLogin(id,password)}
                >
                    로그인
                </button>
                <button 
                    type="button"
                    className={styles.submitButton}
                    onClick={()=>navigate("/register")}
                >
                    회원가입
                </button>
            </div>
        </div>
    );
}

export default Login;
