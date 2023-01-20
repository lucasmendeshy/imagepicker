import React, { useState, useEffect } from "react";
import { Image, View, SafeAreaView, Pressable, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={estilos.viewSafe}>
      <Pressable style={estilos.botao} onPress={pickImage}>
        <Text>Pick an image from camera roll</Text>
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
});
