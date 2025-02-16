import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

import Item from "./src/components/card-list/";
import Alert from "./src/components/alert/";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState(""); // Estado do input
  const [items, setItems] = useState<string[]>([]); // Estado da lista de itens
  const [showAlert, setShowAlert] = useState(false); // Alerta de item removido

  // Adiciona o item à lista
  const addItem = () => {
    if (text.trim().length > 0) {
      setItems([...items, text]); // Adiciona o novo item
      setText(""); // Limpa o input
    }
  };
  // Remove o item da lista
  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
    setShowAlert(true); // Exibe o alerta
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        style={styles.logo}
        source={require("./assets/logo.png")}
        contentFit="contain" // Equivalente ao resizeMode do React Native
      />

      <Text style={styles.title}>Compras da semana</Text>

      <TextInput
        style={styles.input}
        placeholder="Adicione um novo item"
        value={text}
        onChangeText={setText}
      />

      <TouchableOpacity style={styles.button} onPress={addItem}>
        <Text style={styles.buttonText}>Adicionar item</Text>
      </TouchableOpacity>

      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()} // Certifica que cada item tem uma chave única
        renderItem={({ item, index }) => (
          <Item name={item} onRemove={() => removeItem(index)} />
        )}
      />
      {/* ✅ Exibir o Alert quando necessário */}
      {showAlert && (
        <Alert
          message="Item removido com sucesso!"
          onClose={() => setShowAlert(false)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F5FB",
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginTop: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
    paddingTop: 24,
    paddingBottom: 32,
    paddingLeft: 32,
    lineHeight: 32,
  },
  input: {
    height: 44,
    fontSize: 16,
    borderWidth: 2,
    borderColor: "#D1D5DB",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 18,
    marginLeft: 32,
    marginRight: 32,
    marginBottom: 16,
  },
  button: {
    height: 44,
    backgroundColor: "#CA3884",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 32,
    marginRight: 32,
    marginBottom: 40,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 20,
    color: "#ffffff",
    fontWeight: "700",
    textAlign: "center",
  },
});
