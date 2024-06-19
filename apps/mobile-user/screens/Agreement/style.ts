import styled from 'styled-components/native';
import { TouchableOpacityProps, TextProps } from 'react-native';

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  background-color: white;
`;
export const TitleText = styled.Text`
    fontSize: 25px;
    fontWeight: 300;
    marginTop: 10px;
    marginLeft: 20px;
`

export const SubSectorBox = styled.View`
    flexDirection: row;
`
export const SubText = styled.Text`
    margin: 20px;
    color: #646464;
    font-size: 13px;
`
export const NoticeBox = styled.View`
    margin: 20px 0px 40px 20px;
`

export const NoticeText = styled.Text`
    color: #646464;
`
export const StyledImage = styled.Image`
    width: 22px;
    height: 15px;
    margin: 2px 20px;
`
export const DetailText = styled.Text`
    color: #1C72F3;
    textDecoration: underline;
    textDecorationColor: #1C72F3; 
`

export const DetailLinkButton = styled.View`
    width: 90%;
    marginLeft: 5%;
    padding: 13px 13px 10px 0;
    border-radius: 5px;
    border: 1px solid;
    border-color: #E5E5E5;
    marginTop: 10px;
    marginBottom: 20px;
    alignItems: center;
`