// ../components/styles2.js

import styled from 'styled-components/native';
import { TextInput, Text, View, Image, TouchableOpacity } from 'react-native';

// Example of styled components
export const Welcome2Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Welcome2Image = styled(Image)`
  width: 100%;
  height: 250px;
`;

export const PageTitle = styled(Text)`
  font-size: 35px;
  color: #6D28D9;
`;

export const SubTitle = styled(Text)`
  font-size: 18px;
  color: #1F2937;
`;

export const StyledFormArea = styled(View)`
  padding: 25px;
`;

export const StyledButton = styled(TouchableOpacity)`
  background-color: #6D28D9;
  padding: 15px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const ButtonText = styled(Text)`
  color: #ffffff;
  font-size: 16px;
`;

export const Line = styled(View)`
  height: 1px;
  width: 100%;
  background-color: #9CA3AF;
  margin-vertical: 10px;
`;

export const Avatar = styled(Image)`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 10px;
`;

export const AdviceInput = styled(TextInput)`
  background-color: #E5E7EB;
  padding: 15px;
  border-radius: 5px;
  font-size: 16px;
  height: 100px;
  margin-bottom: 10px;
`;



export const ProgramInput = styled.TextInput`
  height: 50px;
  border-color: #ccc;
  border-width: 1px;
  border-radius: 10px;
  padding-left: 10px;
  margin-bottom: 10px;
  font-size: 16px;
`;

