import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import { Form } from "../Components/Form";
import { SubmitButton } from "../Components/SubmitButton";
import { useLoginMutation } from "../Services/authServices";
import { useDispatch } from "react-redux";
import { setUser } from "../Features/User/userSlice";
import { isValidEmail } from "../Validators/mail";
import { isAtLeastSixCharacters } from "../Validators/password";
import { insertSession } from "../SQLite";

export const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const dispatch = useDispatch();

  const [triggerLogin, result] = useLoginMutation();

  const onSubmit = () => {
    try {
      const isValidVariableEmail = isValidEmail(email);
      const isCorrectPassword = isAtLeastSixCharacters(password);

      if (isValidVariableEmail && isCorrectPassword) {
        triggerLogin({
          email,
          password,
          returnSecureToken: true,
        });
      }

      if (!isValidVariableEmail) setErrorEmail("Email is not correct");
      else setErrorEmail("");
      if (!isCorrectPassword)
        setErrorPassword("Password must be at least 6 characters");
      else setErrorPassword("");
    } catch (err) {
      console.log("Error:", err.message);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        if (result.isSuccess) {
          //Insert session in SQLite database
          const response = await insertSession({
            idToken: result.data.idToken,
            localId: result.data.localId,
            email: result.data.email,
          });
          console.log("Sesión insertada");

          dispatch(
            setUser({
              email: result.data.email,
              idToken: result.data.idToken,
              localId: result.data.localId,
              profileImage: "",
            })
          );
        }
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [result]);

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Ingresa para empezar!!</Text>
        </View>
        <Form label={"email"} onChange={setEmail} error={""} />
        <Form
          label={"password"}
          type="text"
          onChange={setPassword}
          error={""}
          isSecure={true}
        />
        <SubmitButton onPress={onSubmit} title="Enviar" />
        <Text style={styles.sub}>No tenes una cuenta?</Text>
        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text style={styles.subLink}>Registrate</Text>
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
    color: "black",
  },
  subLink: {
    fontSize: 14,
    color: "white",
  },
});
