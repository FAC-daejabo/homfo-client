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
            <option value="account">아이디</option>
            <option value="phoneNumber">휴대폰 번호</option>
            <option value="name">이름</option>
            <option value="gender">성별</option>
            <option value="birthday">생년월일</option>
            <option value="job">소속팀</option>
            <option value="status">권한 상태</option>
            <option value="role">권한</option>
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