import styled from 'styled-components/native';
import { TouchableOpacityProps, TextProps } from 'react-native';
interface StyledButtonProps extends TouchableOpacityProps {
  set: boolean;
}
interface StyledButtonTextProps extends TextProps {
  set?: boolean;
}
export const NotifyText = styled.Text`
    margin-top: 5%;
    margin-left: 6%;
    font-size: 16px;
    font-weight: 400;
`;
export const StyledText = styled.Text`
  margin-horizontal: 6.8%;
  margin-vertical: 5%;
  color: #0D1315;
  font-size: 18px;
`;
export const Block = styled.View`
  margin-vertical:5%;
`;
export const NumberTextInput = styled.TextInput`
  border: 1px solid;
  border-color: lightgrey;
  width: 54%;
  padding-left: 10px;
  height: 45px;
  margin-top: 8px;
  padding-vertical: 5px;
  margin-right: 3px;
`;
export const Buttontext = styled.Text<StyledButtonTextProps>`
  color: ${props => (props.set ? 'lightgrey' : 'white')};
`;
export const StyledVerifybutton = styled.TouchableOpacity<StyledButtonProps>`
  background-color: ${props => (props.set ? 'white' : '#8b00ff')};
  border: 1px solid;
  border-color: lightgrey;
  align-items: center;
  justify-content: center;
  width: 35%;
  height: 45px;
  margin-top: 8px;
  margin-left: 3px;
`;
export const StyledTextInput = styled.TextInput`
  padding: 0;
  height: 30px;
  width: 54%;
  color: #D1D1D1;
  padding-vertical: 5px;
`;

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color:white;
`;
export const StyledButton = styled.TouchableOpacity`
  background-color: #8b00ff;
  border: 1px solid;
  border-color: lightgrey;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 60px;
  margin-top: 30px;
  margin-left: 3px;
  margin-bottom: 15px;
`;
export const ButtonText = styled.Text`
  color: white;
`;
export const HorizontalLine = styled.View`
    width: 86.4%;
    margin-left:6.8%;
    height:1px;
    background-color: #D1D1D1;
    
`;
interface CommentTextProps {
  color: string; // Add a color prop
}
export const CommentText = styled.Text<CommentTextProps>`
  color: ${(props) => props.color};
  margin-left:6.8%;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 11px;
`
export const StyledImage = styled.Image`
  width: 12px;
  margin-top:10px;
  margin-right: 3px;
  height: 12px;
`
export const StyledView = styled.View`
  flex-direction: row;
  margin-horizontal: 6.8%;
  justify-content: space-between;
`

export const GenderView = styled.Pressable`
  width: 98%;
  height:42px;
  border-radius: 5px;
  background-color:white;
  justify-content: center;
  align-items: center;
`
export const GenderContainer = styled.View`
 flex-direction: row;
 justify-content: center;
 margin-vertical: 10px;
`

export const GenderText = styled.Text`
  font-size: 19px;
  color: #9D11FF;
`
export const NGenderView = styled.Pressable`
  width: 43.2%; 
  height:42px;
  border-radius: 5px;
  background-color:#F0F0F0;
  justify-content: center;
  align-items: center;
`
export const NGenderText = styled.Text`
  font-size: 19px;
  color: #D1D1D1;
` 
export const MiniText = styled.Text`
  font-size: 13px;
  color: #7E7E7E;
`