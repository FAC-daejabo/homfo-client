import React, { useState } from 'react';
import { Container,  Block, NotifyText, } from './style';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Header from '../../components/layout/header';
import PhoneAuth from '../../components/phonenumberAuthentication';
import ConfirmButton from '../../components/button/confirmButton';
import usePhoneNumberStore from '../../store/context/useNumberStore';
import { SmsCodeType, UserFormData } from '../../store/interface/userForm';
import { FirstStep } from './step/FirstStep';
import { SecondStep } from './step/SecondStep';
import { registerUserInfo } from '../../store/api/register';
const Register = ({ navigation }: any) => {
  const [step, setStep] = useState<number>(0);
  const [verifyComplete, setVerifyComplete]=useState(false);
  const {phonenumber, setPhonenumber} = usePhoneNumberStore();
  const [possible, setPossible]= useState({"nickname":false,"account":false,"password":false,"checkPassword":false});
  const [formData, setFormData] = useState<UserFormData>({
    account: "",
    password: "",
    nickname: "",
    phoneNumber: "",
    gender: null,
    job: null,
    birthday: null,
  });
  const [detailJob, setDetailJob] = useState<string>("");
  const handleRegister = async ()=>{
    if (await registerUserInfo(formData, detailJob, phonenumber)){
      navigation.navigate("회원가입 완료")
    }
  }
  const onChangeText = (name: string, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
    const handleButtonAuth = () => {
      if (step === 0) {
        if (possible.account && possible.nickname && possible.password && possible.checkPassword) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    }
  const handleNext = ()=>{
    setStep((prev)=>prev+1);
  }
  return (
    <KeyboardAwareScrollView 
      contentContainerStyle={{ flex: 1}}
      style={{backgroundColor:'white'}}
      extraScrollHeight={40}
      resetScrollToCoords={{ x: 0, y: 0 }} 
      scrollEnabled={true}
    >
        <Header title={"회원가입"}/>
        {
            step===1&&<NotifyText>선택 항목을 입력하면{"\n"}더 취향에 맞는 방을 찾아드릴 수 있어요</NotifyText>
        }
        <Block>
        {step===0&&
        <>
          <FirstStep 
            formData={formData}
            possible={possible}
            onChangeText={onChangeText}
            setPossible={setPossible}
          />
        </>}

        {step===1&&
        <>
          <SecondStep 
            formData={formData} 
            setFormData={setFormData} 
            onChangeText={onChangeText}
            detailJob={detailJob}
            setDetailJob={setDetailJob}
          />
        </>}
        </Block>
          {
            step===2&&
          <PhoneAuth
            smsCodeType={SmsCodeType.VALIDATE}
            verifyComplete={verifyComplete}
            setVerifyComplete={setVerifyComplete}
          />
          }
          {
            step===2?
            <ConfirmButton
              title="회원가입 완료"
              auth={verifyComplete}
              onPress={()=>handleRegister()}
            />
            :<ConfirmButton 
              title="다음" 
              auth={handleButtonAuth()}
              onPress={()=>handleNext()}
             />
          }
    </KeyboardAwareScrollView>
  );
};


export default Register;