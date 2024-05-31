import { employee } from "@web-admin/store/type/employee/type";
import styles from './styles.module.scss'
import { useState } from "react";
import DetailModal from "../../../../components/employee/modal";
import { stopEmployee, unstopEmployee } from "../../../../../apis/employee/employee";
import useRenderingStore from '../../../../../store/context/employeeRendering';
import useUserStore from "../../../../../store/context/useUserStore";
const TableData: React.FC<{ employeeData: employee }> = ({ employeeData }) =>{
    const [open, setOpen] = useState<boolean>(false);
    const { rendering, setRendering}  = useRenderingStore();
    const { userInfo } = useUserStore();
    const handleStopEvent = ()=>{
        setRendering(!rendering)
        employeeData.status === "S" ?
        unstopEmployee(employeeData.id):
        stopEmployee(employeeData.id)
    }
    // 절대관리자 정지 못하게 할 건지?? 
    return (
    <>
        <DetailModal open ={open} setOpen={setOpen} employee={employeeData}/>
        <tr>
            <td>{employeeData?.nickname}</td>
            <td>{employeeData?.account}</td>
            <td>{employeeData?.job}</td>
            <td>{employeeData?.phoneNumber}</td>
            <td>
                <button 
                    className={styles.modifyButton}
                    onClick={()=>setOpen(true)}
                >
                    더보기
                </button>
            </td>
            {userInfo.employee.role ==="관리자" && <td>
               {userInfo.employee.id !== employeeData.id && employeeData.role!=="관리자" ? <button
                    className={styles.deleteButton}
                    onClick={()=>handleStopEvent()}
                >
                {
                   employeeData.status === "S" ?
                   "정지 해제": "정지"
                }
                </button> : "정지 불가"}
            </td>}
        </tr>    
    
    </>)
}

export default TableData;