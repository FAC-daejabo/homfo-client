import React from 'react';
import styles from './styles.module.scss';
interface PaginationProps {
    totalPages: number;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>
  }
  
const Pagination: React.FC<PaginationProps> = ({ totalPages, page, setPage }) => {
    const paginate = (page: number) => setPage(page);
    return(            
    <nav style={{color:'black'}}>
        <ul className={styles.pagination}>
            {Array.from({length: totalPages}, (_, i) => i + 1).map(number => (
                <li key={number}>
                    <a 
                        onClick={() => paginate(number)}
                        className={styles.pagelink}
                        style = {{ color: number  === page ? "#842CFF" : "black" }}
                    >
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    </nav>)
}
export default Pagination;