import React, {useEffect, useRef, useState} from 'react';
import { Alert, SafeAreaView , View, Text, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as icon from '../../assets/agreement/icon'
import { Container, NoticeBox, NoticeText, StyledImage, TitleText, SubSectorBox, SubText, DetailLinkButton, DetailText } from './style';
import ConfirmButton from '../../components/button/confirmButton';

const Agreement = ({ navigation }: any) => {
  const [essentialAgree, setEssentialAgree] = useState<boolean>(false);
  const [optionalAgree, setOptionalAgree] = useState<boolean>(false);
  return(
    <Container>
      <TitleText>이용 약관 동의</TitleText>
      <NoticeBox>
        <NoticeText>서비스 이용에 꼭 필요한 사항입니다.</NoticeText>
        <NoticeText>정책 및 약관을 클릭해 모든 내용을 확인해주세요.</NoticeText>
        <NoticeText>개인정보는 서비스 이용에만 활용됩니다.</NoticeText>
      </NoticeBox>

      <SubSectorBox>
        <TouchableOpacity
          onPress={()=>setEssentialAgree(!essentialAgree)}
        >
          <StyledImage
                source={essentialAgree?icon.Checked:icon.NotChecked}
                alt="check"
            />
        </TouchableOpacity>
                <Text style={{color:"#646464"}}>
                    개인정보 수집 이용동의 &nbsp;&nbsp;<Text style={{color: "#842CFF"}}>(필수)</Text>
                </Text>
      </SubSectorBox>
      <SubText>성명, 주소, 전화번호, 이메일, 성별, 나이, 생년월일 및 직업</SubText>

      <DetailLinkButton>
        <TouchableOpacity
          onPress = {()=>navigation.navigate('이용약관동의문서', {element: "userInfoAgreement"})}
        >
          <DetailText>자세히 보기</DetailText>
        </TouchableOpacity>
      </DetailLinkButton>

      <SubSectorBox>
        <TouchableOpacity
          onPress={()=>setOptionalAgree(!optionalAgree)}
        >
          <StyledImage
                source={optionalAgree?icon.Checked:icon.NotChecked}
                alt="check"
            />
        </TouchableOpacity>
            <Text style={{color:"#646464"}}>
              마케팅 정보 수집 동의서 &nbsp;&nbsp;<Text style={{color: "#842CFF"}}>(선택)</Text>
            </Text>
      </SubSectorBox>
      <SubText>닉네임, 연락처(전화번호), 생년월일, 성별, 직업, 온라인 활동 정보(쿠키, 브라우저 정보 등)</SubText>

      <DetailLinkButton>
        <TouchableOpacity
          onPress = {()=>navigation.navigate('이용약관동의문서', {element: "marketingCollectAgreement"})}
        >
          <DetailText>자세히 보기</DetailText>
        </TouchableOpacity>
      </DetailLinkButton>


      <ConfirmButton
        title="다음"
        auth={essentialAgree}
        onPress = {()=>navigation.navigate("회원가입", {marketingAgreement: optionalAgree})}
      />
    </Container>
  );
};
export default Agreement;