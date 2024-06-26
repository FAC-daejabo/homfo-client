import React, {useState, CSSProperties, useEffect} from 'react';
import styles from './styles.module.scss';
import { QuestionForm, HomfoEditData } from '../../../store/type/homfoRecommend&request/interface';
import { RequestData } from '../../../store/type/homfoRecommend&request/interface';
import { Dispatch, SetStateAction } from 'react';
import { ExtendedRequestData } from '../../../store/type/requestBox/interface';
interface MultipleChoiceProps {
  currentQuestion: QuestionForm;
  data: HomfoEditData|RequestData|ExtendedRequestData;
  setData:Dispatch<SetStateAction<HomfoEditData>>|Dispatch<SetStateAction<RequestData>>|Dispatch<SetStateAction<ExtendedRequestData>>;
}

const MultipleChoice: React.FC<MultipleChoiceProps> = ({ currentQuestion,data, setData }) => {
  const isRowMode = currentQuestion.mode === 'row';
  const isColumnMode = currentQuestion.mode === 'column';
  const questionType = currentQuestion.question.type;
  const containerStyles: CSSProperties = {
    flexDirection: isRowMode ? 'row' : 'column',
    marginLeft: isColumnMode ? '20px' : '5.5%',
  };

  const answerStyles: CSSProperties = {
    width: isColumnMode ? '45%' : '42%',
  };
  const handleSelectAnswer = (answer: any)=>{
    if (currentQuestion.double){
      setData((prev:any) => ({...prev, [questionType]: [...prev[questionType], answer] }));
    } else {
      setData((prev:any) => ({...prev,[questionType] : [answer]}));
    }
  }
  const handleCancelAnswer = (answer: any) => {
      setData((prevData: any) => ({
        ...prevData,
        [questionType]: prevData[questionType].filter(
          (value: any) => value !== answer
        ),
      }));
  };
  return (
    <div className={styles.answerContainer} style={containerStyles}>
      {currentQuestion.answer!==null&&currentQuestion.answer.map((key) => (
        <div
          className={`${
            JSON.stringify(data[questionType]).includes(JSON.stringify(key.value)) ? styles.activeAnswerButton : styles.nonactiveAnswerButton
          }`}
          style={answerStyles}
          key={key.title}
          onClick={() => {
            if (JSON.stringify(data[questionType]).includes(JSON.stringify(key.value))){
              handleCancelAnswer(key.value);
            } else {
              handleSelectAnswer(key.value);
            }
          }}
        >
          {key.title}
        </div>
      ))}
    </div>
  );
};

export default MultipleChoice;
