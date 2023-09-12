import { Pressable, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { Form } from "../Components/Form";
import { SubmitButton } from "../Components/SubmitButton";
import { useSignUpMutation } from "../Services/authServices";
import { useDispatch } from "react-redux";
import { setUser } from "../Features/User/userSlice";
import { isValidEmail } from "../Validators/mail";
import { isAtLeastSixCharacters } from "../Validators/password";

export const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [triggerSignUp, result] = useSignUpMutation();

  const dispatch = useDispatch();

  useEffect(() => {
    if (result.isSuccess) {
      dispatch(
        setUser({
          email: result.data.email,
          idToken: result.data.idToken,
        })
      );
    }
  }, [result]);

  const onSubmit = () => {
    try {
      //Submit logic with validations
      const isValidVariableEmail = isValidEmail(email);
      const isCorrectPassword = isAtLeastSixCharacters(password);
      const isRepeatedPasswordCorrect = password === confirmPassword;

      if (
        isValidVariableEmail &&
        isCorrectPassword &&
        isRepeatedPasswordCorrect
      ) {
        const request = {
          email,
          password,
          returnSecureToken: true,
        };
        triggerSignUp(request);
      }

      if (!isValidVariableEmail) setErrorMail("Email is not correct");
      else setErrorMail("");
      if (!isCorrectPassword)
        setErrorPassword("Password must be at least 6 characters");
      else setErrorPassword("");
      if (!isRepeatedPasswordCorrect)
        setErrorConfirmPassword("Passwords must match");
      else setErrorConfirmPassword("");
    } catch (err) {
      console.log("Error: ", err.message);
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>Registrate</Text>
        <Form label={"email"} onChange={setEmail} error={errorMail} />
        <Form
          label={"password"}
          onChange={setPassword}
          error={errorPassword}
          isSecure={true}
        />
        <Form
          label={"confirm password"}
          onChange={setconfirmPassword}
          error={errorConfirmPassword}
          isSecure={true}
        />
        <SubmitButton onPress={onSubmit} title="Enviar" />
        <Text style={styles.sub}>Ya tenes una cuenta?</Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={styles.subLink}>Ingresa</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "90%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "chocolate",
    gap: 15,
    paddingVertical: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontFamily: "inter",
  },
  sub: {
    fontSize: 14,
    fontFamily: "inter",
    color: "black",
  },
  subLink: {
    fontSize: 14,
    fontFamily: "inter",
    color: "white",
  },
});
