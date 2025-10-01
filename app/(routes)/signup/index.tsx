import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Dimensions,
  SafeAreaView,
  StatusBar,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// Importa Iconos de Feather para los inputs y botones
import Icon from "react-native-vector-icons/Feather";
// Importa SVG para la curva de onda
import Svg, { Path } from "react-native-svg";

const { width, height } = Dimensions.get("window");
const TOP_HEIGHT = height * 0.45; // Altura de la sección superior

const COLORS = {
  background: "white", // Fondo general gris claro/azul claro
  cardBackground: "white",
  textPrimary: "#000",
  textSecondary: "#6C757D",
  // Degradado para las formas abstractas y el botón (Morado a Azul/Verde)
  gradientStart: "#7C4DFF", // Morado
  gradientEnd: "#0DD169", // Azul claro/Cian
  inputBorder: "#E0E0E0",
  starColor: "#FFC107",
  iconColor: "#6C757D",
};

const LoginScreen = () => {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleLogin = () => {
    if (!fullName || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    Alert.alert("Success", `Welcome back, ${fullName}!`);
  };


  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#2e8b57" />

      {/* 1. Parte Superior con Fondo y Curva SVG */}
      <View style={styles.topContainer}>
        {/* Botón de retroceso */}
        <TouchableOpacity style={styles.backButton}>
          <Icon name="chevron-left" size={24} color="#fff" />
        </TouchableOpacity>

        {/* --- Degradado de Fondo Superior --- */}
        <LinearGradient
          colors={["white", COLORS.background]} // Degradado muy sutil
          style={styles.backgroundGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        />

        {/* --- Formas Abstractas (Círculos con Degradado) --- */}

        
        {/* Círculo central-superior */}
        <LinearGradient
          colors={[COLORS.gradientEnd, "#478F69"]} // Cian y Verde pálido
          style={[styles.abstractShape, styles.shape2]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        />

        
      </View>

      {/* 2. Contenido del Formulario */}
      <View style={styles.formContainer}>
        {/* Encabezado del Formulario */}
        <View style={styles.headerTitleContainer}>
          <Text style={styles.welcomeText}>Register account</Text>
          {/* Icono de hoja con emoji (puedes reemplazar por SVG) */}
          <Text style={styles.leafIcon}>🌿</Text>
        </View>
        <Text style={styles.subTitle}>Create your new account</Text>

        {/* Campo de Nombre Completo */}
        <View style={styles.inputView}>
          <Icon
            name="user"
            size={20}
            color="#005728"
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Full Name"
            placeholderTextColor="#888"
            value={fullName}
            onChangeText={setFullName}
            autoCapitalize="words"
          />
        </View>

        <View style={styles.inputView}>
          <Icon
            name="mail"
            size={20}
            color="#005728"
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.textInput}
            placeholder="user@gmail.com"
            placeholderTextColor="#888"
            value={fullName}
            onChangeText={setFullName}
            autoCapitalize="words"
          />
        </View>

        {/* Campo de Contraseña */}
        <View style={styles.inputView}>
          <Icon
            name="lock"
            size={20}
            color="#005728"
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.textInput}
            placeholder="........."
            placeholderTextColor="#888"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
         
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeIcon}
          >
            <Icon
              name={showPassword ? "eye" : "eye-off"}
              size={20}
              color="#888"
            />
          </TouchableOpacity>
        </View>
        
        {/* Botón de Login */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Registrar</Text>
        </TouchableOpacity>

        {/* Opciones de Recordar y Olvidé Contraseña */}
        <View style={styles.optionsContainer}>
          <TouchableOpacity
            onPress={() => setRememberMe(!rememberMe)}
            style={styles.rememberMe}
          >
            <Icon
              name={rememberMe ? "check-square" : "square"}
              size={18}
              color={rememberMe ? "#2e8b57" : "#aaa"}
              style={{ marginRight: 5 }}
            />
            <Text style={styles.rememberMeText}>Remember Me</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>


        {/* Enlace de Registro */}
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Don't have account? </Text>
          <TouchableOpacity>
            <Text style={styles.signUpLink}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

// ---
// Estilos
// ---

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor:"white"
  },

  // Placeholder para imagen de fondo
  placeholderBackground: {
    flex: 1,
    backgroundColor: "#2e8b57",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  placeholderText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  // --- Parte Superior ---
  topContainer: {
    height: TOP_HEIGHT,
    width: "100%",
    position: "relative",
    backgroundColor:"blue"
  },
  imageBackground: {
    width: "100%",
    height: "80%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  imageStyle: {
    opacity: 0.8,
    resizeMode: "cover",
  },
  backButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.2)",
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10,
  },

 

  // --- Formulario ---
  formContainer: {
    flex: 1,
    paddingHorizontal: 30,
    marginTop:-300
    
  },
  headerTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#005728",
    letterSpacing: 0.5,
    marginRight: 10,
  },
  leafIcon: {
    fontSize: 25,
    color: "#2e8b57",
  },
  subTitle: {
    fontSize: 14,
    color: "#888",
    marginBottom: 35,
    alignSelf: "center",
  },
  inputView: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e5ebe7ff",
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#eee",
  },
  inputIcon: {
    marginRight: 15,
  },
  textInput: {
    flex: 1,
    color: "#333",
    height: "100%",
  },
  eyeIcon: {
    padding: 5,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
    marginTop: 5,
  },
  rememberMe: {
    flexDirection: "row",
    alignItems: "center",
  },
  rememberMeText: {
    fontSize: 14,
    color: "#555",
  },
  forgotPassword: {
    fontSize: 14,
    color: "#2e8b57",
    fontWeight: "600",
  },
  loginButton: {
    backgroundColor: "#2e8b57",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#2e8b57",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  signUpText: {
    color: "#888",
  },
  signUpLink: {
    color: "#2e8b57",
    fontWeight: "bold",
  },
  //
  //
  backgroundGradient: {
    position: "absolute",
    width: "100%",
    height: height * 0.5, // Cubre la mitad superior de la pantalla
    top: 0,
  },

  // --- Estilos de las Formas Abstractas ---
  abstractShape: {
    position: "absolute",
    borderRadius: 999, // Para hacer círculos/óvalos
    opacity: 0.8,
  },
  shape1: {
    // Círculo superior izquierda (grande)
    width: 250,
    height: 250,
    top: -80,
    left: -50,
    transform: [{ scaleX: 1.2 }], // Para hacerlo un poco más ovalado
  },
  shape2: {
    // Círculo superior derecha (mediano)
    width: 180,
    height: 180,
    top: -50,
    right: -50,
  },
  shape3: {
    // Círculo central (pequeño)
    width: 120,
    height: 120,
    top: 100,
    left: width / 2 - 60, // Centrado
    opacity: 0.7,
  },
});

export default LoginScreen;
