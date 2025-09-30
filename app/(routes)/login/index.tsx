import { View, Text, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'
import { Controller, useForm } from "react-hook-form";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { router } from 'expo-router';

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false)

  const { control, formState, handleSubmit } = useForm<LoginFormData>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // Función para manejar el login
  const onSubmit = (data: LoginFormData) => {
    console.log('Datos del formulario:', data);
    // Aquí iría tu lógica de login
  }

  // Función para login con Google
  const handleGoogleLogin = () => {
    console.log('Iniciar sesión con Google');
    // Aquí iría tu lógica de Google Sign-In
  }

  // Función para login con Facebook
  const handleFacebookLogin = () => {
    console.log('Iniciar sesión con Facebook');
    // Aquí iría tu lógica de Facebook Login
  }

  return (
    <SafeAreaProvider className='flex-1 bg-orange-300'>
      <SafeAreaView className='flex-1'>
        <KeyboardAvoidingView 
          behavior={Platform.OS === "android" ? "padding" : "height"}
          className='flex-1'
        >
          <ScrollView 
            className="flex-1 px-6"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          >
            <View className="mt-16 mb-2">
              <Text className='text-3xl font-poppins-bold text-orange-600 mb-2'>
                Welcome Back..
              </Text>
            </View>
            
            <View className='bg-white p-4 rounded-lg mb-6'>
              <Text className='text-sm font-inter text-gray-400'>
                Ingrese sus Credenciales
              </Text>
            </View>

            <View className='mt-4'>
              <Text className="text-gray-800 text-sm mb-2">Email:</Text>
              <Controller
                control={control}
                name="email"
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email"
                  }
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <View>
                    <View className={`flex-row items-center bg-gray-50 rounded-xl px-4 py-3 border ${formState.errors.email ? "border-red-500" : "border-gray-200"}`}>
                      <MaterialCommunityIcons
                        name="email-outline"
                        size={20}
                        color={"#9CA3AF"}
                      />
                      <TextInput 
                        className="flex-1 ml-3 text-gray-800 font-poppins"
                        placeholder="Enter your email"
                        placeholderTextColor="#9CA3AF"
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        keyboardType="email-address"
                        autoCapitalize="none"
                      />
                    </View>
                    {formState.errors.email && (
                      <Text className="text-red-500 text-sm font-poppins mt-1">
                        {formState.errors.email.message}
                      </Text>
                    )}
                  </View>
                )}
              />

              {/* Password field */}
              <View className="mt-6">
                <Text className="text-gray-800 text-sm mb-2">Password</Text>
                <Controller
                  control={control}
                  name='password'
                  rules={{
                    required: "Password is required"
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <View>
                      <View className={`flex-row items-center bg-gray-50 rounded-xl px-4 py-3 border ${formState.errors.password ? "border-red-500" : "border-gray-200"}`}>
                        <Ionicons
                          name="lock-closed-outline"
                          size={20}
                          color={"#9CA3AF"}
                        />
                        <TextInput 
                          className="flex-1 ml-3 text-gray-800 font-poppins"
                          placeholder="Enter your password"
                          placeholderTextColor="#9CA3AF"
                          value={value}
                          onChangeText={onChange}
                          onBlur={onBlur}
                          secureTextEntry={!showPassword}
                        />
                        <TouchableOpacity
                          onPress={() => setShowPassword(!showPassword)}
                        >
                          <Ionicons
                            name={showPassword ? "eye-outline" : 'eye-off-outline'}
                            size={20}
                            color='#9CA3AF'
                          />
                        </TouchableOpacity>
                      </View>
                      {formState.errors.password && (
                        <Text className="text-red-500 text-sm font-poppins mt-1">
                          {formState.errors.password.message}
                        </Text>
                      )}
                    </View>
                  )}
                />
              </View>

              <TouchableOpacity 
                className="self-end mt-2"
                onPress={() => router.push("/(routes)/forgot-password/")}
              >
                <Text className='text-blue-600 font-poppins-medium'>
                  Forgot Password
                </Text>
              </TouchableOpacity>

              {/* Botón de Login */}
              <TouchableOpacity 
                className={`rounded-xl py-4 mt-8 ${
                  formState.isValid ? "bg-orange-600" : "bg-orange-200"
                }`} 
                onPress={handleSubmit(onSubmit)}
                disabled={!formState.isValid}
              >
                <Text className={`text-center font-poppins-bold text-lg ${
                  formState.isValid ? "text-white" : "text-orange-400"
                }`}>
                  Sign In
                </Text>
              </TouchableOpacity>

              {/* Divider */}
              <View className="flex-row items-center my-8">
                <View className="flex-1 h-px bg-gray-300" />
                <Text className="mx-4 text-gray-500 font-poppins text-sm">
                  Or continue with
                </Text>
                <View className="flex-1 h-px bg-gray-300" />
              </View>

              {/* Botones de Login Social */}
              <View className="flex-row space-x-4">
                {/* Botón Google */}
                <TouchableOpacity 
                  className="flex-1 flex-row items-center justify-center bg-white border border-gray-300 rounded-xl py-4 px-4"
                  onPress={handleGoogleLogin}
                >
                  <Ionicons name="logo-google" size={20} color="#DB4437" />
                  <Text className="text-gray-700 font-poppins-medium ml-2">
                    Google
                  </Text>
                </TouchableOpacity>

                {/* Botón Facebook */}
                <TouchableOpacity 
                  className="flex-1 flex-row items-center justify-center bg-white border border-gray-300 rounded-xl py-4 px-4"
                  onPress={handleFacebookLogin}
                >
                  <Ionicons name="logo-facebook" size={20} color="#4267B2" />
                  <Text className="text-gray-700 font-poppins-medium ml-2">
                    Facebook
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Registro */}
              <View className="flex-row justify-center mt-8">
                <Text className="text-gray-600 font-poppins">
                  Don't have an account?{' '}
                </Text>
                <TouchableOpacity onPress={() => router.push("/(routes)/signup/")}>
                  <Text className="text-orange-600 font-poppins-bold">
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>        
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}