import { useEffect, useState } from "react";
import styles from './styles.module.scss'
import { getPartnerAgencies } from "../../../../apis/agency/agency";
import Table from "../../table";
import { Agency, ITotalAgency } from "@web-admin/store/type/agency/type";
import PartnerAgenciesTableData from "./PartnerAgenciesTable";
import Pagination from "../../layout/pagination";
import Filter from "../filter";
interface ModalProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const TABLE_SIZE  = 5;
const LoadingModal: React.FC<ModalProps> = ({open, setOpen})=>{
    const [page, setPage] = useState<number>(1);
    const [sortItem, setSortItem] = useState<string>("name");
    const [sortOption, setSortOption] = useState<string>("ASC"); 
    const [searchName , setSearchName] = useState<string>("");
    const [partnerAgencies, setPartnerAgencies] = useState<Agency[]|undefined>();
    const [totalData, setTotalData] = useState<ITotalAgency|undefined>();
    const headerArray = ["사무실 이름","등록번호","연락처", "해당 구역", "개업/소속 구분", "도로명 주소", "대표자명", "공제 가능 유무","개업 날짜"];

    const getPartnerAgenciesParams = {
        page: page - 1,
        size: TABLE_SIZE, 
        sort: [ sortItem, sortOption ],
        needCount: true,     
    }

    useEffect(()=>{
        getPartnerAgencies(getPartnerAgenciesParams, setPartnerAgencies, setTotalData);
    },[page])

    return(
    open ? 
    <div 
        className={styles.container}
    >
        <div
            className = {styles.content}
        >
            <div className={styles.filterContainer}>
                <Filter setSearchName={setSearchName} setSortItem={setSortItem} setSortOption={setSortOption}/>
            </div>
            <div className={styles.tableContainer}>
                <Table headerArray = {headerArray} data={partnerAgencies} Format={PartnerAgenciesTableData}/>
            </div>
            <Pagination totalPages={totalData?.totalPages||0} page={page} setPage={setPage}/>
            <button
                className={styles.button}
                onClick={()=>setOpen(false)}
            >
                닫기
            </button>
        </div>
    </div>: null)
}

export default LoadingModal;