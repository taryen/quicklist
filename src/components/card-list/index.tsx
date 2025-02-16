import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Text, View, StyleSheet, Pressable } from "react-native";
import Checkbox from "expo-checkbox";

interface ItemProps {
  name: string;
  onRemove: () => void;
}

export default function Item({ name, onRemove }: ItemProps) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.gap}>
      <View style={styles.card}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
            gap: 12,
          }}
        >
          <Checkbox
            value={isChecked}
            onValueChange={setIsChecked}
            style={styles.checkbox}
          />
          <Text style={[styles.nameItem, isChecked && styles.checkedText]}>
            {name}
          </Text>
        </View>
        <Pressable onPress={onRemove} style={styles.deleteButton}>
          <Ionicons name="trash-outline" size={16} color="#6B6671" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gap: {
    marginBottom: 12,
  },
  card: {
    height: 57,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginLeft: 32,
    marginRight: 32,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nameItem: {
    fontSize: 16,
    fontWeight: "600",
    color: "#374151",
  },
  checkedText: {
    flex: 1,
    textDecorationLine: "line-through",
    color: "#9CA3AF",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 6,
  },
  deleteButton: {
    padding: 8,
    color: "#6B6671",
  },
});
