import React, { useState,useEffect } from 'react';
import styles from './styles.module.scss';
import Table from '../../../components/table';
import { getEmployeesInfo } from '../../../..//apis/employee/employee';
import Pagination from '../../../..//ui/components/layout/pagination';
import { ITotalEmployee, employee } from '@web-admin/store/type/employee/type';
import TableData from './tableData';
import useRenderingStore from '../../../../store/context/employeeRendering';
import Filter from '../../../../ui/components/employee/filter';
import useUserStore from '../../../../store/context/useUserStore';
const TABLE_SIZE  = 4;

function InquiryEmployeeTable() {
    const { rendering } = useRenderingStore();
    const [page, setPage] = useState<number>(1);
    const [sortItem, setSortItem] = useState<string>("account");
    const [sortOption, setSortOption] = useState<string>("ASC"); 
    const [searchName , setSearchName] = useState<string>("");

    const [totalData, setTotalData] = useState<ITotalEmployee>();
    const [employeeData, setEmployeeData] = useState<employee[]>();      
   

    const inquiryEmployeeParams = {
        page: page - 1,
        size: TABLE_SIZE, 
        sort: [ sortItem, sortOption ],
        needCount: true,
        employeeStatusList: ["U", "S"]        
    }

    const { userInfo } = useUserStore();
    const headerArray = userInfo.employee.role === "관리자" ? ["이름", "ID", "소속팀", "전화번호", "더보기", "권한 상태"]:["이름", "ID", "소속팀", "전화번호", "더보기"]

    useEffect(()=>{
        let params;
        if (searchName.length > 0){
            params = {...inquiryEmployeeParams, searchName}
        } else {
            params = inquiryEmployeeParams
        }
        getEmployeesInfo(params, setEmployeeData, setTotalData);
    },[page, rendering, searchName, sortOption, sortItem])

    return (
        <div className={styles.box}>
            <div className={styles.header}>
                <div>
                관리자 정보 조회
                </div>
                <Filter setSearchName={setSearchName} setSortItem={setSortItem} setSortOption={setSortOption}/>
            </div>
            <div className={styles.tableContainer}>
                <Table headerArray = {headerArray} data={employeeData} Format={TableData}/>
            </div>
            <Pagination totalPages={totalData?.totalPages||0} page={page} setPage={setPage}/>
        </div>
    );
}

export default InquiryEmployeeTable;
