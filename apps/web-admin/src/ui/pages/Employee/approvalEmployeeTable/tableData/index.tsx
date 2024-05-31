import React, {useState} from 'react';
import { employee } from "@web-admin/store/type/employee/type";
import styles from './styles.module.scss'
import DetailModal from '../../../../components/employee/modal/index';
import { approveEmployee } from '../../../../../apis/employee/employee';
import useRenderingStore from '../../../../../store/context/employeeRendering';
import useUserStore from '../../../../../store/context/useUserStore';
const TableData: React.FC<{ employeeData: employee }> = ({ employeeData })  =>{
    const [open, setOpen] = useState<boolean>(false);
    const { rendering, setRendering}  = useRenderingStore();
    const { userInfo } = useUserStore();
    const handleApproveEmployee = ()=>{
        setRendering(!rendering)
        approveEmployee(employeeData.id)
        
    }
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
                onClick={()=>setOpen(true)}
                className={styles.modifyButton}
            >
                더보기
            </button>
        </td>
        {userInfo.employee.role ==="관리자" && <td>
            <button
                onClick={()=>handleApproveEmployee()}
                className={styles.deleteButton}
            >
                승인하기
            </button>
        </td>}
    </tr>
    </>)
}

export default TableData;