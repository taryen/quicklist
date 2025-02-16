import { Text, View, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface AlertProps {
  message: string;
  onClose: () => void;
}

export default function Alert({ message, onClose }: AlertProps) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          flex: 1,
          gap: 8,
        }}
      >
        <Ionicons
          style={styles.alert}
          name="alert-circle"
          size={20}
          color="#FFFFFF"
        />
        <Text style={styles.menssage}>{message}</Text>
      </View>
      {/* Botão de fechar agora funciona */}
      <Pressable onPress={onClose} style={styles.exit}>
        <Ionicons name="close" size={20} color="#FFFFFF" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C93847",
    height: 44,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginTop: 32,
    marginBottom: 16,
    marginHorizontal: 32,
  },
  menssage: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 20,
  },
  exit: {
    position: "absolute",
    right: 15,
  },
  alert: {
    marginLeft: 12,
  },
});
