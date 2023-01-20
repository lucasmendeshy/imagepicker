import React, { useState, useEffect } from "react";
import { Image, Text, SafeAreaView, Pressable, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [9, 16],
      quality: 0.5,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={estilos.viewSafe}>
      <Pressable style={estilos.botao} onPress={pickImage}>
        <Text style={estilos.texto}>Escolha uma foto ou um vídeo</Text>
      </Pressable>
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  viewSafe: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  botao: {
    padding: 8,
    backgroundColor: "blue",
    borderRadius: 5,
  },
  texto: {
    fontSize: 16,
    color: "white",
  },
});
