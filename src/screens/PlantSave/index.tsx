//React
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Platform,
  Alert,
  TouchableOpacity,
} from "react-native";
import { SvgFromUri } from "react-native-svg";
import DateTimePicker, { Event } from "@react-native-community/datetimepicker";

//React Navigation
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

//date-fns
import { isBefore, format } from "date-fns";

//Component
import Button from "../../components/Button";
import BackButton from "../../components/BackButton";
import TipPlant from "../../components/TipPlant";

//Style
import { styles } from "./styles";

//Image
import waterdropImg from "../../assets/waterdrop.png";

//Interface
import { PlantProps } from "../../libs/storage";
interface Params {
  plant: PlantProps;
}

//Lib
import { savePlant } from "../../libs/storage";

export default function PlantSave() {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === "ios");

  const navigation = useNavigation();
  const route = useRoute();

  const { plant } = route.params as Params;

  function handleBackButton() {
    navigation.goBack();
  }

  function handleChangeTime(event: Event, dateTime: Date | undefined) {
    if (Platform.OS === "android") {
      setShowDatePicker((oldState) => !oldState);
    }

    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date());

      Alert.alert("Escolha uma hora no futuro! ⏰");
      return;
    }

    if (dateTime) {
      setSelectedDateTime(dateTime);
    }
  }

  function handleOpenDateTimePickerForAndroid() {
    setShowDatePicker((oldState) => !oldState);
  }

  async function handleSave() {
    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime,
      });

      navigation.navigate("Confirmation", {
        title: "Tudo certo",
        subtitle:
          "Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com bastante amor.",
        buttonTitle: "Muito obrigado :D",
        icon: "hug",
        nextScreen: "MyPlant",
      });
    } catch {
      Alert.alert("Não foi possível salvar. 😢");
    }
  }

  return (
    <SafeAreaView style={styles.containerPlantSave}>
      <View style={styles.backButton}>
        <BackButton onPress={() => handleBackButton()} />
      </View>
      <View style={styles.plantInfo}>
        <SvgFromUri uri={plant.photo} width={150} height={150} />

        <Text style={styles.plantName}>{plant.name}</Text>
        <Text style={styles.plantAbout}>{plant.about}</Text>
      </View>

      <View style={styles.controller}>
        <TipPlant text={plant.water_tips} />
        <Text style={styles.alertLabel}>
          Escolha o melhor horário para ser lembrado:
        </Text>

        {showDatePicker && (
          <DateTimePicker
            value={selectedDateTime}
            mode="time"
            display="spinner"
            onChange={handleChangeTime}
          />
        )}

        {Platform.OS === "android" && (
          <TouchableOpacity onPress={handleOpenDateTimePickerForAndroid}>
            <Text style={styles.dataTimePickerText}>{`
              Mudar ${format(selectedDateTime, "HH:mm")}
            `}</Text>
          </TouchableOpacity>
        )}

        <View style={styles.button}>
          <Button
            width={311}
            height={56}
            text="Cadastrar planta"
            onPress={() => handleSave()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
