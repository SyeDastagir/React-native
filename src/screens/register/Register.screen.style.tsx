import styled from "styled-components/native";

export const AuthInputText = styled.TextInput.attrs({
  placeholderTextColor: "#eeecec9f",
})`
  background-color: #333;
  color: #fff;
  padding: 14px;
  border-radius: 6px;
  margin-bottom: 14px;
  border-width: 1px;
  border-color: #555;
  font-size: 16px;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #000;
  padding: 24px;
  justify-content: center;
`;

export const LogoContainerView = styled.View`
  flex-direction: column;
  justify-content: start;
  margin-bottom: 32px;
`;

export const SignUpButton = styled.TouchableOpacity`
  background-color: red;
  padding: 16px;
  border-radius: 6px;
  align-items: center;
  margin-top: 10px;
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
`;
export const ButtonText = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
`;

export const AlreadyHaveAccountContainer = styled.View`
  flex-direction: row;
  margin-top: 20px;
  align-self: flex-end;
`;