import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../../components/layout/header';

import styles from './styles.module.scss';
import { fetchFromApi } from '../../../utils/axios';
import { formatDateWithComma } from '../../../utils/getDate';

interface INoticeDetail {
    id: number;
    title: string;
    content: string;
    writer: {
        userId: number;
        userAccount: string;
        userPhoneNum: string;
        nickName: string;
        gender: string;
        dateOfBirth: string;
        job: string;
        role: string;
        status: string;
    };
    isPublic: string;
    isFixed: string;
    createdAt: string;
    updatedAt: string;
}

export default function NoticeDetail() {
    const { id } = useParams();

    const [detailNotice, setDetailNotice] = useState<INoticeDetail>();

    useEffect(() => {
        const getNoticeDetailData = async () => {
            try {
                const res = await fetchFromApi('GET', `/notices/${id}`);

                setDetailNotice(res.data);
            } catch (e) {
                console.error(e);
            }
        };

        getNoticeDetailData();
    }, []);

    function createMarkup(content: string) {
        return { __html: content?.replace(/\n/g, '<br />') };
    }

    return (
       Number(id) !== 30 ?
       <div className={styles.container}>
            <Header title="공지사항" color="white" />
            <div className={styles.content}>
                <div className={styles.noticeHeader}>
                    <div className={styles.title}>
                        <strong>{detailNotice?.title}</strong>
                    </div>
                    <div className={styles.date}>
                        {detailNotice?.createdAt && formatDateWithComma(detailNotice?.createdAt)}
                    </div>
                </div>

                <div className={styles.noticeContent}>
                    {detailNotice?.content && (
                        <div dangerouslySetInnerHTML={createMarkup(detailNotice.content)} />
                    )}
                    {/* {detailNotice?.content} */}
                </div>
            </div>
        </div> : 
        <div className={styles.container}>
            <Header title="공지사항" color="white" />
               <div className={styles.content}>
                   <div className={styles.noticeHeader}>
                       <div className={styles.title}>
                           <strong>요청하기 서비스 임시 중단 안내</strong>
                       </div>
                       <div className={styles.date}>
                        2023. 03. 20
                       </div>
                   </div>
   
                   <div className={styles.noticeContent}>
                   HOMFO의 "요청하기"서비스가 일시중단 됩니다. 재정비 후 서비스는 6~7월에 다시 시작될 예정입니다. 3월 17일 이후로 들어온 요청서에 대해 이메일로 제안서 내용 안내를 드렸으니 확인해주시면 감사하겠습니다.
                   </div>
               </div>
           </div>
    );
}
