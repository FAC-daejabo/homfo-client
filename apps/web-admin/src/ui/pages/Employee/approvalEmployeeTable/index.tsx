import React, { useState,useEffect } from 'react';
import styles from './styles.module.scss';
import Table from '../../../components/table';
import { getEmployeesInfo } from '../../../../apis/employee/employee';
import { ITotalEmployee, employee } from '@web-admin/store/type/employee/type';
import Pagination from '../../../..//ui/components/layout/pagination';
import TableData from './tableData';
import useRenderingStore from '../../../../store/context/employeeRendering';
import Filter from '../../../../ui/components/employee/filter';
import useUserStore from '../../../../store/context/useUserStore';

const TABLE_SIZE  = 4;
function ApprovalEmployeeTable() {
    const { rendering } = useRenderingStore();
    const [page, setPage] = useState<number>(1);
    const [sortItem, setSortItem] = useState<string>("account");
    const [sortOption, setSortOption] = useState<string>("ASC");
    const [searchName , setSearchName] = useState<string>("");
    
    const [totalData, setTotalData] = useState<ITotalEmployee>();
    const [employeeData, setEmployeeData] = useState<employee[]>();
    const approvalEmployeeParams = {
        page: page - 1,
        size: TABLE_SIZE,
        sort: [ sortItem, sortOption ],
        needCount: true,
        employeeStatusList: ["P"]        
    }

    const { userInfo } = useUserStore();
    const headerArray = userInfo.employee.role === "관리자" ? ["이름", "ID", "소속팀", "전화번호", "더보기", "승인 여부"] : ["이름", "ID", "소속팀", "전화번호", "더보기"]

    useEffect(()=>{ 
        let params;
        if (searchName.length > 0){
            params = {...approvalEmployeeParams, searchName}
        } else {
            params = approvalEmployeeParams
        }
        getEmployeesInfo(params, setEmployeeData, setTotalData);
        // setEmoloyeeData가 복잡한 객체여서 객체 참조가 같아 내부 employdata.data가 바껴도 리렌더링이 되지않음 
        // 따로 받아야함 
    },[page, rendering, searchName, sortOption, sortItem])

    return (
        <div className={styles.box}>
            <div className={styles.header}>
                관리자 회원가입 승인 요청
                <Filter setSearchName={setSearchName} setSortItem={setSortItem} setSortOption={setSortOption}/>
            </div>
            <div className={styles.tableContainer}>
                <Table headerArray = {headerArray} data={employeeData} Format={TableData}/>
            </div>
            <Pagination totalPages={totalData?.totalPages||0} page={page} setPage={setPage}/>
        </div>
    );
}

export default ApprovalEmployeeTable;
