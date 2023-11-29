import styled from "styled-components/native";
import colorPalette from "../constants/colorPalette";

export const InputText = styled.TextInput`
  height: 50px;
  width: 80%;
  border-radius: 6px;
  margin-bottom: 8px;
  padding-left: 12px;
  border-width: 1px;
  border-color: ${colorPalette.primaryColor};
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;

export const InputErrorMessage = styled.Text`
  font-size: 12px;
  color: red;
  margin-top: -8px;
  margin-bottom: 10px;
`;
