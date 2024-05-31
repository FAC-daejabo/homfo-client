import { EmployeeStatus, employee } from "../../../../store/type/employee/type";
import styles from './styles.module.scss'
interface ModalProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    employee: employee;
}


const DetailModal: React.FC<ModalProps> = ({open, setOpen, employee})=>{
    return(
    open ? 
    <div 
        className={styles.container}
    >
        <div 
            className={styles.content} 
        >
            <div className={styles.header}>상세보기</div>
            <div className={styles.element}>
                <div>이름</div>
                <div>{employee.nickname}</div>                
            </div>
            <div className={styles.element}>
                <div>아이디</div>
                <div>{employee.account}</div>                
            </div>
            <div className={styles.element}>
                <div>소속팀</div>
                <div>{employee.job}</div>                
            </div>
            <div className={styles.element}>
                <div>전화번호</div>
                <div>{employee.phoneNumber}</div>                
            </div>
            <div className={styles.element}>
                <div>성별</div>
                <div>{employee.gender === "W" ? "여성" : "남성"}</div>                
            </div>
            <div className={styles.element}>
                <div>생년월일</div>
                <div>{employee.birthday}</div>  
            </div>
            <div className={styles.element}>
                <div>권한</div>              
                <div>{EmployeeStatus[employee.status]}</div>  
            </div>
            <div className={styles.element}>
                <div>권한 상태</div>
                <div>{employee.role}</div>  
            </div>
            <button
                className={styles.button}
                onClick={()=>setOpen(false)}
            >
                닫기
            </button>
        </div>
    </div>: null)
}

export default DetailModal;