import { View, Text, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'
import { Controller, useForm } from "react-hook-form";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { router } from 'expo-router';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignUpScreen() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const { control, formState, handleSubmit, watch } = useForm<SignUpFormData>({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
  })

  const onSubmit = (data: SignUpFormData) => {
    console.log('Datos del registro:', data);
    // Aquí va tu lógica de registro (API call, Firebase, etc.)
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
                Create Account
              </Text>
            </View>
            
            <View className='bg-white p-4 rounded-lg mb-6'>
              <Text className='text-sm font-inter text-gray-400'>
                Complete the form to register
              </Text>
            </View>

            {/* Nombre */}
            <View className='mt-4'>
              <Text className="text-gray-800 text-sm mb-2">Full Name</Text>
              <Controller
                control={control}
                name="name"
                rules={{ required: "Name is required" }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <View>
                    <View className={`flex-row items-center bg-gray-50 rounded-xl px-4 py-3 border ${formState.errors.name ? "border-red-500" : "border-gray-200"}`}>
                      <Ionicons name="person-outline" size={20} color="#9CA3AF" />
                      <TextInput 
                        className="flex-1 ml-3 text-gray-800 font-poppins"
                        placeholder="Enter your name"
                        placeholderTextColor="#9CA3AF"
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                      />
                    </View>
                    {formState.errors.name && (
                      <Text className="text-red-500 text-sm font-poppins mt-1">
                        {formState.errors.name.message}
                      </Text>
                    )}
                  </View>
                )}
              />

              {/* Email */}
              <View className="mt-6">
                <Text className="text-gray-800 text-sm mb-2">Email</Text>
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
                        <MaterialCommunityIcons name="email-outline" size={20} color="#9CA3AF" />
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
              </View>

              {/* Password */}
              <View className="mt-6">
                <Text className="text-gray-800 text-sm mb-2">Password</Text>
                <Controller
                  control={control}
                  name="password"
                  rules={{
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters"
                    }
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <View>
                      <View className={`flex-row items-center bg-gray-50 rounded-xl px-4 py-3 border ${formState.errors.password ? "border-red-500" : "border-gray-200"}`}>
                        <Ionicons name="lock-closed-outline" size={20} color="#9CA3AF" />
                        <TextInput 
                          className="flex-1 ml-3 text-gray-800 font-poppins"
                          placeholder="Enter your password"
                          placeholderTextColor="#9CA3AF"
                          value={value}
                          onChangeText={onChange}
                          onBlur={onBlur}
                          secureTextEntry={!showPassword}
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
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

              {/* Confirm Password */}
              <View className="mt-6">
                <Text className="text-gray-800 text-sm mb-2">Confirm Password</Text>
                <Controller
                  control={control}
                  name="confirmPassword"
                  rules={{
                    required: "Confirm your password",
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match"
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <View>
                      <View className={`flex-row items-center bg-gray-50 rounded-xl px-4 py-3 border ${formState.errors.confirmPassword ? "border-red-500" : "border-gray-200"}`}>
                        <Ionicons name="lock-closed-outline" size={20} color="#9CA3AF" />
                        <TextInput 
                          className="flex-1 ml-3 text-gray-800 font-poppins"
                          placeholder="Confirm your password"
                          placeholderTextColor="#9CA3AF"
                          value={value}
                          onChangeText={onChange}
                          onBlur={onBlur}
                          secureTextEntry={!showConfirmPassword}
                        />
                        <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                          <Ionicons
                            name={showConfirmPassword ? "eye-outline" : 'eye-off-outline'}
                            size={20}
                            color='#9CA3AF'
                          />
                        </TouchableOpacity>
                      </View>
                      {formState.errors.confirmPassword && (
                        <Text className="text-red-500 text-sm font-poppins mt-1">
                          {formState.errors.confirmPassword.message}
                        </Text>
                      )}
                    </View>
                  )}
                />
              </View>

              {/* Botón de registro */}
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
                  Sign Up
                </Text>
              </TouchableOpacity>

              {/* Ya tienes cuenta */}
              <View className="flex-row justify-center mt-8">
                <Text className="text-gray-600 font-poppins">
                  Already have an account?{' '}
                </Text>
                <TouchableOpacity onPress={() => router.push("/(routes)/login/")}>
                  <Text className="text-orange-600 font-poppins-bold">
                    Sign In
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
