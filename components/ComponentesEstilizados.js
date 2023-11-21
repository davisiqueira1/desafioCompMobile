import styled from "styled-components/native";

export const InputText = styled.TextInput`
  height: 50px;
  width: 80%;
  border-radius: 6px;
  margin-bottom: 8px;
  padding-left: 12px;
  border-width: 1px;
  border-color: #dfdfdf;
`;

export const InputButton = styled.Pressable`
  width: 80%;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: #dfdfdf;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
`;

export const InputErrorMessage = styled.Text`
  font-size: 12px;
  color: red;
  margin-top: -8px;
  margin-bottom: 10px;
`;
