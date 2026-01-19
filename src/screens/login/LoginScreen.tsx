import {
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { NetflixLogo } from "../../components/logo/NetflixLogo";
import styled from "styled-components/native";
import { LargeText } from "../../components/Text/AppText";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <LogoContainer>
        <NetflixLogo width={200} height={55} />
      </LogoContainer>

      <AuthInputText
        placeholder="Email or phone number"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#922020"
      />

      <AuthInputText
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <SignInButton>
        <ButtonText>Sign In</ButtonText>
      </SignInButton>

      <DontHaveAccountContainer>
        <LargeText>New to Netflix? </LargeText>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <LargeText color="#dd2929" fontWeight="bold">Sign up</LargeText>
        </TouchableOpacity>
      </DontHaveAccountContainer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #000;
  padding: 24px;
  justify-content: center;
`;

const LogoContainer = styled.View`
  margin-bottom: 12px;
  width: 200px;
  height: 100px;
  align-self: center;
`;

const SignInButton = styled.TouchableOpacity`
  background-color: red;
  padding: 16px;
  border-radius: 6px;
  align-items: center;
  margin-top: 10px;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
`;

const LinkText = styled.Text`
  color: #ffffff;
  font-weight: bold;
`;

const AuthInputText = styled.TextInput.attrs({
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

const DontHaveAccountContainer = styled.View`
  flex-direction: row;
  margin-top: 20px;
  justify-content: flex-end;
`;
