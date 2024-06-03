import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss'
import './table.scss'
import { employee } from '@web-admin/store/type/employee/type';
import { Agency } from '@web-admin/store/type/agency/type';
interface TableProps<T> {
    headerArray: string[];
    data: T[] | undefined;
    Format: React.FC<{ data: T }>;
}

const Table = <T extends employee | Agency>({ headerArray, data, Format }: TableProps<T>) => {
    return(
    // <div className={styles.container}>
            <table className="user-table">
                <thead>
                    <tr>
                    {
                        headerArray.map((item)=><th key={item}>{item}</th>)
                    }
                    </tr>
                </thead>
                <tbody>
                    {data !== undefined && data.map((el) => <Format key={el.id} data={el} />)}
                </tbody>    
        </table>
    // </div>
    )
}
export default Table;