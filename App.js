import React, { useState, useEffect } from "react";
import { Image, Text, SafeAreaView, Pressable, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ImagePickerExample() {
  const [status, requestPermission] = ImagePicker.useCameraPermissions();
  const [foto, setFoto] = useState();

  useEffect(() => {
    async function verificaPermissoes() {
      const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
      requestPermission(cameraStatus === "granted");
    }
    verificaPermissoes();
  }, []);

  const acessarCamera = async () => {
    const imagem = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    console.log(imagem);

    setFoto(imagem.assets[0].uri);
  };
  return (
    <SafeAreaView style={estilos.viewSafe}>
      <Pressable style={estilos.botao} onPress={acessarCamera}>
        <Text style={estilos.texto}>acessar câmera</Text>
      </Pressable>

      {foto && (
        <Image source={{ uri: foto }} style={{ width: 300, height: 200 }} />
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
    textTransform: "uppercase",
  },
});
