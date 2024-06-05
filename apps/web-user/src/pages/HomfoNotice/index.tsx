import React, { useState, useEffect } from 'react';
import Header from '../../components/layout/header';
import notice_icon from '../../assets/icons/home/notice_icon.svg';
import styles from './styles.module.scss';
import NoticeBlock from '../../components/molecules/Notice/NoticeBlock';
import { INotice } from '../../@types/notice';
import useUserStore from '../../store/context/useUserStore';
import { fetchFromApi } from '@homfo-client/util';

function HomfoNotice() {

    const [noticeList, setNoticeList] = useState<INotice[]>([]);
    const {userInfo} = useUserStore()
    useEffect(() => {
        const getNoticeList = async () => {
            try {
                const noticeList = await fetchFromApi(
                    'GET',
                    '/notices?page=0&size=15&firstView=true'
                );

                setNoticeList(noticeList.data.data);
            } catch (e: any) {
                console.error(e);
            }
        };

        getNoticeList();
    }, []);
    const writer = {
        userId: 79,
        userAccount: "yunmi099",
        userPhoneNum: "010-5135-8136",
        nickName: "윰블리",
        gender: "W",
        dateOfBirth: "1999-02-11",
        job: "대학생",
        role: "개발자",
        status:".",
    }
    const newNotice = {
        id: 30,
        name: "요청하기 서비스 임시 중단",
        content: `HOMFO의 "요청하기"서비스가 일시중단 됩니다. 재정비 후 서비스는 6~7월에 다시 시작될 예정입니다. 3월 17일 이후로 들어온 요청서에 대해 이메일로 제안서 내용 안내를 드렸으니 확인해주시면 감사하겠습니다.`,
        writer: writer,
        createdAt: String(new Date(2024, 2, 20)),
        updatedAt: String(new Date(2024, 2, 20)),
        isFixed: "fixed",
        title: "요청하기 서비스 임시 중단",
    
    }
    return (
        <div className={styles.container}>
            <Header title="공지사항" color="white" />
            <div className={styles.content} style={{marginTop: userInfo.top/2}}>
                <div className={styles.banner}>
                    <div className={styles.left}>
                        <div>Homfo에서</div>
                        <div className={styles.strong}>
                            <strong>최신 공지사항 알려드립니다.</strong>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <img src={notice_icon} alt="공지사항" />
                    </div>
                </div>
                <div>
                <NoticeBlock key={30} notice={newNotice} />
                    {noticeList.map((notice) => (
                        <NoticeBlock key={notice.id} notice={notice} />
                    ))}

                </div>
            </div>
        </div>
    );
}
export default HomfoNotice;
