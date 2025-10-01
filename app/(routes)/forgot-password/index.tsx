import React, { useState } from 'react';
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
  Alert
} from 'react-native';
// Importa Iconos de Feather para los inputs y botones
import Icon from 'react-native-vector-icons/Feather'; 
// Importa SVG para la curva de onda
import Svg, { Path } from 'react-native-svg'; 

const { width, height } = Dimensions.get('window');
const TOP_HEIGHT = height * 0.45; // Altura de la sección superior

const LoginScreen = () => {
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleLogin = () => {
    if (!fullName || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    Alert.alert('Success', `Welcome back, ${fullName}!`);
  };

  // --- IMAGEN LOCAL ---
  // Ajusta la ruta según la ubicación real de tu imagen
  const backgroundImage = require('@/assets/images/green.jpeg');
  
  // Debug en la consola
  console.log('=== DEBUG IMAGE ===');
  console.log('Image local path:', backgroundImage);
  console.log('Image loaded successfully:', !imageError);
  console.log('=== END DEBUG ===');

  const handleImageError = (error) => {
    console.log('Error loading background image:', error);
    setImageError(true);
  };

  const handleImageLoad = () => {
    console.log('Background image loaded successfully!');
    setImageError(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#2e8b57" />
      
      {/* 1. Parte Superior con Fondo y Curva SVG */}
      <View style={styles.topContainer}>
        <ImageBackground 
          source={backgroundImage} 
          style={styles.imageBackground}
          imageStyle={styles.imageStyle}
          onError={handleImageError}
          onLoad={handleImageLoad}
        >
          {/* Si hay error en la imagen, mostrar placeholder */}
          {imageError && (
            <View style={styles.placeholderBackground}>
              <Text style={styles.placeholderText}>🌿 Global POS</Text>
            </View>
          )}
          
          {/* Botón de retroceso */}
          <TouchableOpacity style={styles.backButton}>
            <Icon name="chevron-left" size={24} color="#fff" />
          </TouchableOpacity>
        </ImageBackground>
        
        {/* SVG para la Curva de Onda Blanca */}
        <View style={styles.svgContainer}>
  <Svg 
    height={TOP_HEIGHT * 0.35} 
    width={width}
    viewBox={`0 0 ${width} ${TOP_HEIGHT * 0.35}`}
    style={styles.svg}
  >
    <Path 
      d={`
        M0,${TOP_HEIGHT * 0.1} 
        Q${width * 0.25},${TOP_HEIGHT * 0.01} 
         ${width * 0.5},${TOP_HEIGHT * 0.2} 
        Q${width * 0.75},${TOP_HEIGHT * 0.35} 
         ${width},${TOP_HEIGHT * 0.2} 
        L${width},${TOP_HEIGHT * 0.35} 
        L0,${TOP_HEIGHT * 0.35} 
        Z
      `} 
      fill="#fff"
    />
  </Svg>
</View>
      </View>

      {/* 2. Contenido del Formulario */}
      <View style={styles.formContainer}>
        {/* Encabezado del Formulario */}
        <View style={styles.headerTitleContainer}>
          <Text style={styles.welcomeText} >Global POS</Text>
          {/* Icono de hoja con emoji (puedes reemplazar por SVG) */}
          <Text style={styles.leafIcon}>🌿</Text> 
        </View>
        <Text style={styles.subTitle}  >Login to your account</Text>
        
        {/* Campo de Nombre Completo */}
        <View style={styles.inputView}>
          <Icon name="user" size={20} color="#005728" style={styles.inputIcon} />
          <TextInput
            style={styles.textInput}
            placeholder="Full Name"
            placeholderTextColor="#888"
            value={fullName}
            onChangeText={setFullName}
            autoCapitalize="words"
          />
        </View>

        {/* Campo de Contraseña */}
        <View style={styles.inputView}>
          <Icon name="lock" size={20} color="#005728" style={styles.inputIcon} />
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
            <Icon name={showPassword ? "eye" : "eye-off"} size={20} color="#888" />
          </TouchableOpacity>
        </View>

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

        {/* Botón de Login */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

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
    backgroundColor: '#fff',
  },
  
  // Placeholder para imagen de fondo
  placeholderBackground: {
    flex: 1,
    backgroundColor: '#2e8b57',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  placeholderText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  
  // --- Parte Superior ---
  topContainer: {
    height: TOP_HEIGHT, 
    width: '100%',
    position: 'relative',
  },
  imageBackground: {
    width: '100%',
    height: '80%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  imageStyle: {
    opacity: 0.8, 
    resizeMode: 'cover',
  },
  backButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    position: 'absolute',
    top: 50, 
    left: 20,
    zIndex: 10,
  },
  
  // --- Curva SVG ---
  svgContainer: {
    position: 'absolute',
    bottom: -1,
    left: 0,
    right: 0,
    height: TOP_HEIGHT * 0.1, 
  },
  svg: {
    position: 'absolute',
    bottom: 0,
  },

  // --- Formulario ---
  formContainer: {
    flex: 1,
    paddingHorizontal: 30,
    marginTop: -TOP_HEIGHT * 0.25,
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#005728',
    letterSpacing: 0.5,
    marginRight: 10,
  },
  leafIcon: {
    fontSize: 25,
    color: '#2e8b57',
  },
  subTitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 35,
    alignSelf: 'center',
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e5ebe7ff',
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#eee',
  },
  inputIcon: {
    marginRight: 15,
  },
  textInput: {
    flex: 1,
    color: '#333',
    height: '100%',
  },
  eyeIcon: {
    padding: 5,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 5,
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMeText: {
    fontSize: 14,
    color: '#555',
  },
  forgotPassword: {
    fontSize: 14,
    color: '#2e8b57',
    fontWeight: '600',
  },
  loginButton: {
    backgroundColor: '#2e8b57',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#2e8b57',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  signUpText: {
    color: '#888',
  },
  signUpLink: {
    color: '#2e8b57',
    fontWeight: 'bold',
  },
});

export default LoginScreen;