import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View } from "react-native";
import { NativeBaseProvider, Box, Center } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <MapView style={styles.map} />
      </Center>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
