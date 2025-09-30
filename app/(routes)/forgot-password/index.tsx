import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, StatusBar, SafeAreaView } from 'react-native';
// Importa LinearGradient según la librería que hayas instalado
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons'; 
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

// --- Colores y Estilos del Diseño ---
const COLORS = {
  background: '#EAEFF5', // Fondo general gris claro/azul claro
  cardBackground: 'white',
  textPrimary: '#000',
  textSecondary: '#6C757D',
  // Degradado para las formas abstractas y el botón (Morado a Azul/Verde)
  gradientStart: '#7C4DFF', // Morado
  gradientEnd: '#4DD0E1',   // Azul claro/Cian
  inputBorder: '#E0E0E0',
  starColor: '#FFC107',
  iconColor: '#6C757D',
};

const SanUiLoginScreen = () => {
    // Estado simple para simular la entrada de datos (no es funcional completo)
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        // Contenedor principal con el degradado de fondo (Azul suave)
        <View style={styles.fullScreen}>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.safeArea}>

                {/* --- Degradado de Fondo Superior --- */}
                <LinearGradient
                    colors={['#CBDDEB', COLORS.background]} // Degradado muy sutil
                    style={styles.backgroundGradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                />

                {/* --- Formas Abstractas (Círculos con Degradado) --- */}
                
                {/* Círculo superior izquierdo */}
                <LinearGradient
                    colors={['#A45CE0', '#8D99AE']} // Morado y Gris azulado
                    style={[styles.abstractShape, styles.shape1]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                />

                {/* Círculo central-superior */}
                <LinearGradient
                    colors={[COLORS.gradientEnd, '#C8F3D1']} // Cian y Verde pálido
                    style={[styles.abstractShape, styles.shape2]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                />

                {/* Círculo central pequeño */}
                <LinearGradient
                    colors={['#8D99AE', COLORS.gradientEnd]}
                    style={[styles.abstractShape, styles.shape3]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                />

                {/* --- Contenedor de la Tarjeta Blanca Curva --- */}
                <View style={styles.cardContainer}>
                    
                    {/* Contenido principal del formulario */}
                    <View style={styles.contentPadding}>
                        
                        {/* Título */}
                        <Text style={styles.mainTitle}>San ui Login</Text>

                        {/* --- Email Input Group --- */}
                        <Text style={styles.inputLabel}>Email</Text>
                        <View style={styles.inputRow}>
                            <TextInput
                                style={styles.input}
                                placeholder="●●●●●●" // Usamos puntos como en el diseño
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                            />
                            <FontAwesome name="envelope" size={20} color={COLORS.iconColor} style={styles.inputIcon} />
                        </View>
                        
                        {/* --- Password Input Group --- */}
                        <Text style={styles.inputLabel}>Password</Text>
                        <View style={styles.inputRow}>
                            <TextInput
                                style={styles.input}
                                placeholder="●●●●●●"
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry
                            />
                            <Icon name="eye-outline" size={20} color={COLORS.iconColor} style={styles.inputIconRight} />
                        </View>

                        {/* Estrellas de Calificación (como en el diseño) */}
                        <View style={styles.starContainer}>
                            {Array(5).fill(0).map((_, i) => (
                                <Icon key={i} name="star" size={18} color={COLORS.starColor} style={styles.star} />
                            ))}
                            {Array(5).fill(0).map((_, i) => (
                                <Icon key={i + 5} name="star-outline" size={18} color={COLORS.starColor} style={styles.star} />
                            ))}
                        </View>
                        
                        {/* --- Botón Sign-up con Degradado --- */}
                        <TouchableOpacity style={styles.buttonWrapper} onPress={() => console.log('Sign-up Presionado')}>
                            <LinearGradient
                                colors={[COLORS.gradientStart, COLORS.gradientEnd]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.gradientButton}
                            >
                                <Text style={styles.buttonText}>Sign-up</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        {/* --- Íconos de Autenticación Social (Inferior) --- */}
                        <View style={styles.socialAuthContainer}>
                            <View style={styles.authIconCircle}><Icon name="lock-closed-outline" size={20} color={COLORS.gradientStart} /></View>
                            <View style={styles.authIconCircle}><Icon name="logo-apple" size={20} color={COLORS.gradientStart} /></View>
                            <View style={styles.authIconCircle}><Icon name="logo-google" size={20} color={COLORS.gradientStart} /></View>
                        </View>

                        {/* --- Enlace Olvidé Contraseña --- */}
                        <TouchableOpacity style={styles.forgotPasswordContainer} onPress={() => console.log('Forgot Password Presionado')}>
                            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                        </TouchableOpacity>

                    </View>
                </View>

            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    fullScreen: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    safeArea: {
        flex: 1,
    },
    backgroundGradient: {
        position: 'absolute',
        width: '100%',
        height: height * 0.5, // Cubre la mitad superior de la pantalla
        top: 0,
    },

    // --- Estilos de las Formas Abstractas ---
    abstractShape: {
        position: 'absolute',
        borderRadius: 999, // Para hacer círculos/óvalos
        opacity: 0.8,
    },
    shape1: { // Círculo superior izquierda (grande)
        width: 250,
        height: 250,
        top: -80,
        left: -50,
        transform: [{ scaleX: 1.2 }], // Para hacerlo un poco más ovalado
    },
    shape2: { // Círculo superior derecha (mediano)
        width: 180,
        height: 180,
        top: -50,
        right: -50,
    },
    shape3: { // Círculo central (pequeño)
        width: 120,
        height: 120,
        top: 100,
        left: width / 2 - 60, // Centrado
        opacity: 0.7,
    },

    // --- Estilos del Contenedor de Tarjeta (el blanco) ---
    cardContainer: {
        flex: 1,
        marginTop: height * 0.25, // Empuja el contenido hacia abajo
        backgroundColor: COLORS.cardBackground,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 10,
    },
    contentPadding: {
        paddingHorizontal: 30,
        paddingTop: 50,
    },

    // --- Estilos del Formulario ---
    mainTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: COLORS.textPrimary,
        marginBottom: 40,
        textAlign: 'center',
    },
    inputLabel: {
        fontSize: 16,
        color: COLORS.textSecondary,
        marginBottom: 5,
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.inputBorder,
        marginBottom: 20,
    },
    input: {
        flex: 1,
        height: 50,
        fontSize: 24, // Letra más grande para los puntos de contraseña
        color: COLORS.textPrimary,
        paddingVertical: 10,
    },
    inputIcon: {
        marginLeft: 10,
    },
    inputIconRight: {
        marginLeft: 10,
    },

    // --- Estilos de Calificación (Estrellas) ---
    starContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30,
        paddingTop: 5,
    },
    star: {
        marginHorizontal: 2,
    },

    // --- Estilos del Botón Degradado ---
    buttonWrapper: {
        borderRadius: 25, // Borde redondeado del botón
        overflow: 'hidden',
        height: 50,
        marginTop: 10,
    },
    gradientButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },

    // --- Estilos de la parte inferior ---
    socialAuthContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 20,
    },
    authIconCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: COLORS.inputBorder,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    forgotPasswordContainer: {
        alignItems: 'center',
    },
    forgotPasswordText: {
        color: COLORS.textSecondary,
        fontSize: 14,
        fontWeight: '600',
    },
});

export default SanUiLoginScreen;