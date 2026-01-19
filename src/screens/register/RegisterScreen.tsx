import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useState } from "react";
import NetflixNLogo from "../../components/logo/NetflixNLogo";
import { RegistrationFormState } from "../register/useRegistration";
import {
  Container,
  LogoContainerView,
  AuthInputText,
  SignUpButton,
  ButtonText,
  AlreadyHaveAccountContainer,
} from "./Register.screen.style";

import { HeadingText, LargeText } from "../../components/Text/AppText";

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [registrationFormState, setRegistrationState] =
    useState<RegistrationFormState>({
      success: false,
      error: null,
      loading: false,
    });
  console.log("Registrations tate: ", registrationFormState);

  const onClickSignUp = () => {
    if (username.trim() == "") {
      setRegistrationState({
        ...registrationFormState,
        error: "Username is required",
      });
      return;
    }
    if (email.trim() == "") {
      setRegistrationState({
        ...registrationFormState,
        error: "Email is required",
      });
      return;
    }
    if (password.trim() == "") {
      setRegistrationState({
        ...registrationFormState,
        error: "Password is required",
      });
      return;
    }
    if (confirmPassword.trim() == "") {
      setRegistrationState({
        ...registrationFormState,
        error: "Confirm Password is required",
      });
      return;
    }
    if (password != confirmPassword) {
      setRegistrationState({
        ...registrationFormState,
        error: "Passwords do not match",
      });
      return;
    }
  };

  return (
    <Container>
      <LogoContainerView>
        <NetflixNLogo width={55} height={100} />
        <HeadingText marginTop={24}>Create your account</HeadingText>
      </LogoContainerView>
      <AuthInputText
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <AuthInputText
        placeholder="Email address"
        value={email}
        onChangeText={setEmail}
      />
      <AuthInputText
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <AuthInputText
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
        {registrationFormState.error != null ? (
          <LargeText color = "#dd2929" fontWeight = "italic">{registrationFormState.error}</LargeText>
        ) : null}
      <SignUpButton  onPress={onClickSignUp}>
        <ButtonText>Sign Up</ButtonText>
      </SignUpButton>
      <AlreadyHaveAccountContainer>
        <LargeText>Already have an account? </LargeText>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <LargeText style={{ color: "#ce2a01" }}> Sign In</LargeText>
        </TouchableOpacity>
      </AlreadyHaveAccountContainer>
    </Container>
  );
}
