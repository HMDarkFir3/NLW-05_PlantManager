//React
import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";

//Async Storage
import AsyncStorage from "@react-native-async-storage/async-storage";

//Style
import { styles } from "./styles";

//Image
import UserImg from "../../assets/henrique.jpg";

export default function Header() {
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem("@plantmanager:user");

      setUserName(user || "");
    }

    loadStorageUserName();
  }, []);

  return (
    <View style={styles.containerHeader}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>

      <Image style={styles.image} source={UserImg} />
    </View>
  );
}
