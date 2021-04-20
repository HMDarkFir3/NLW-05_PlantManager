//React
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Platform,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

//React Navigation
import { useNavigation } from "@react-navigation/native";

//Component
import Button from "../../components/Button";

//Style
import { styles } from "./styles";
import colors from "../../styles/colors";

export default function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  const navigation = useNavigation();

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  function handleSubmit() {
    navigation.navigate("Confirmation", { name: name });
  }

  function lowerKeyboard() {
    Keyboard.dismiss();
  }

  return (
    <SafeAreaView style={styles.containerUserIdentification}>
      <KeyboardAvoidingView
        style={styles.containerUserIdentification}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={lowerKeyboard}>
          <View style={styles.content}>
            <View style={styles.form}>
              <View style={styles.header}>
                <Text style={styles.emoticon}>{isFilled ? "😄" : "😀"}</Text>
                <Text style={styles.title}>
                  Como podemos{"\n"}
                  chamar você?
                </Text>
              </View>

              <TextInput
                style={[
                  styles.input,
                  (isFocused || isFilled) && {
                    borderBottomColor: colors.green,
                  },
                ]}
                placeholder="Digite um nome"
                onChangeText={handleInputChange}
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
              />

              <Button
                height={56}
                width={231}
                text="Confirmar"
                icon=""
                onPress={handleSubmit}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
