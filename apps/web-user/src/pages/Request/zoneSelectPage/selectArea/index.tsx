import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { Area } from '../../../../store/type/homfoRecommend&request/interface';
import closeArrow from '../../../../assets/icons/request/closeArrow.png';

interface SelectedAreaProps {
  areaInfo: Area[];
  selectedArea: number[];
  setSelectedArea: React.Dispatch<React.SetStateAction<number[]>>;
  setSelfChoice:React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SelectArea({
  areaInfo,
  selectedArea,
  setSelectedArea,
  setSelfChoice,
}: SelectedAreaProps) {
  const toggleAreaSelection = (areaId: number) => {
    if (selectedArea.includes(areaId)) {
      setCount(count-1)
      setSelectedArea((prev: number[]) =>
        prev.filter((key) => areaId !== key)
      );
    } else {
      if (count >= 4){
        alert("구역은 4개까지만 선택 가능합니다.")
      } else {
        setCount(count+1)
        setSelectedArea((prev: number[]) => [...prev, areaId].sort((a, b) => a - b));
      }
    } 
  };
  const [count, setCount] = useState<number>(selectedArea.length);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.selectedArea}>
          <div style={{ margin: '15px 10px' }}>
            {selectedArea.map((item, index) => (
              <span key={item}>
                {item}번{index !== selectedArea.length - 1 ? ',' : ''}
              </span>
            ))}
          </div>
        </div>
        {areaInfo.map((item) => (
          <div
            key={item.areaId}
            onClick={() => toggleAreaSelection(item.areaId)}
            className={
              selectedArea.includes(item.areaId)
                ? styles.onAreaList
                : styles.offAreaList
            }
          >
            {item.areaId}번 {item.name}
          </div>
        ))}
      </div>
      <div className={styles.overlay} onClick={(e)=> {setSelfChoice(prev=>!prev)}}></div>
    </>
  );
}
