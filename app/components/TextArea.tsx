import React from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";

type TextAreaProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChangeText,
  placeholder,
}) => {
  return (
    <View>
      <TextInput
        style={styles.textArea}
        multiline
        numberOfLines={5}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textArea: {
    height: 100,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    backgroundColor: "#fff",
    textAlignVertical: "top",
  },
});

export default TextArea;
