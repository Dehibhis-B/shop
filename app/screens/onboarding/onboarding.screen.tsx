import {
  Image,
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

export default function OnboardingScreen() {
  const handleGetStarted = () => {
    router.replace("/login");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/onboarding.jpg")}
        style={styles.backgroundImage}
      />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.7)"]}
        style={styles.overlay}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Welcome to FShop</Text>
        <Text style={styles.subtitle}>
          {" "}
          All in the place one, shop for yuor family
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          <LinearGradient
            colors={["#FF6B6B", "#4A66F0"]} // ← Colores HEX válidos
            start={{ x: 0, y: 0 }} // ← Objeto con x, y
            end={{ x: 1, y: 0 }} // ← Objeto con x, y
            style={styles.buttonGradient}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  backgroundImage: {
    width,
    height,
    position: "absolute",
    top: 0,
    left: 0,
    resizeMode: "cover",
  },
  overlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: height * 0.6,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 50,
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    marginHorizontal: 30,
    textAlign: "center",
    opacity: 0.8,
  },
  button: {
    width: "100%",
    marginTop: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  buttonGradient: {
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
