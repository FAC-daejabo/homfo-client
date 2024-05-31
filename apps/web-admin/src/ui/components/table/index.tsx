import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss'
import './table.scss'
import { ITotalEmployee, employee } from '@web-admin/store/type/employee/type';
interface TableProps {
    headerArray: string[];
    data: undefined|employee[];
    Format: React.FC<{
        employeeData: employee;
    }>;
  }
const Table: React.FC<TableProps> = ({ headerArray, data, Format }) => {
    return(
    <div className={styles.container}>
            <table className="user-table">
                <thead>
                    <tr>
                    {
                        headerArray.map((item)=><th key={item}>{item}</th>)
                    }
                    </tr>
                </thead>
                <tbody>
                {data !== undefined && data.map((el: employee)=><Format key={el.account} employeeData={el}/>)}
                </tbody>    
        </table>
    </div>)
}
export default Table;