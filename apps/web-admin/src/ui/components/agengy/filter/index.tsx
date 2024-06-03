import React, {useState} from 'react';
import styles from './styles.module.scss'
interface FilterProps {
    setSortItem: React.Dispatch<React.SetStateAction<string>>;
    setSortOption: React.Dispatch<React.SetStateAction<string>>;
    setSearchName: React.Dispatch<React.SetStateAction<string>>;
}


const Filter: React.FC<FilterProps> = ({setSortItem, setSortOption, setSearchName}) => {
    const [item, setItem] = useState<string>("account");
    const [option, setOption] = useState<string>("ASC"); 
    const [search, setSearch] = useState<string>("");
    const handleSearchEvent = (s: string)=>{
        setSearchName(s);
    }
    const handleSortEvent = (el: string, opt: string)=>{
        setSearch("");
        setSearchName("");
        setSortItem(el);
        setSortOption(opt);
    }
    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setOption(event.target.value);
    };
    const handleItemChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setItem(event.target.value);
    };
    const handleSearchValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };
    return(            
    <div className={styles.container}>
        <select 
            className={styles.input} 
        >
            <option value="searchName">사무실 이름</option>
            <option value="openingRegistrationNumber">등록 번호</option>
            <option value="roadAddress">지번 주소</option>
            <option value="lotAddress">도로명 주소</option>
        </select>
        <div>
            <input 
                value={search}
                type="text" 
                className={styles.input}
                onChange={(e)=>handleSearchValueChange(e)}
            />
            <button
                className={styles.button}
                onClick={()=> handleSearchEvent(search)}
            >
                검색
            </button>
        </div>
        <select 
            className={styles.input} 
            value={option} 
            onChange={(e)=>handleOptionChange(e)}
        >
            <option value="ASC">오름차순</option>
            <option value="DESC">내림차순</option>
        </select>
        <select 
            className={styles.input}
            value = {item}
            onChange={(e)=>handleItemChange(e)}
        >
            <option value="name">사무실 이름</option>
            <option value="chairmanName">대표자명</option>
            <option value="openingRegistrationNumber">등록 번호</option>
            <option value="agencyType">개업/소속 구분</option>
            <option value="phoneNumber">사무실 연락처</option>
            <option value="openedAt">개업날짜</option>
            <option value="deduction">공제가능유무</option>
        </select>
        <button
           className={styles.button}
           onClick={()=>handleSortEvent(item,option)}
        >
            정렬
        </button>
    </div>)
}
export default Filter;