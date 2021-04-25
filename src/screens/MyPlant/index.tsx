//React
import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Alert, FlatList } from "react-native";

//date-fns
import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";

//Component
import Header from "../../components/Header";
import TipPlant from "../../components/TipPlant";
import PlantCardSecondary from "../../components/PlantCardSecondary";
import Loading from "../../components/Loading";

//Style
import { styles } from "./styles";

//Interface
import { PlantProps, loadPlant, removePlant } from "../../libs/storage";

export default function MyPlant() {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWatering, setNextWatering] = useState<string>();

  useEffect(() => {
    async function loadStorageData() {
      const plantsStoraged = await loadPlant();

      const nextTime = formatDistance(
        new Date(plantsStoraged[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: ptBR }
      );

      setNextWatering(
        `Não esqueça de regar a ${plantsStoraged[0].name} à ${nextTime}`
      );

      setMyPlants(plantsStoraged);
      setLoading(false);
    }

    loadStorageData();
  }, []);

  function handleRemove(plant: PlantProps) {
    Alert.alert("Remover", `Deseja remover a ${plant.name}?`, [
      {
        text: "Não 🙏",
        style: "cancel",
      },
      {
        text: "Sim 😢",
        onPress: async () => {
          try {
            await removePlant(plant.id);

            setMyPlants((oldData) =>
              oldData.filter((item) => item.id != plant.id)
            );
          } catch {
            Alert.alert("Não foi possível remover! 😢");
          }
        },
      },
    ]);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.containerMyPlant}>
      <Header />
      <View style={styles.content}>
        <TipPlant text={nextWatering} />
        <View style={styles.plants}>
          <Text style={styles.plantsTitle}>Próximas regadas</Text>

          <FlatList
            data={myPlants}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <PlantCardSecondary
                data={item}
                handleRemove={() => {
                  handleRemove(item);
                }}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
