import { View, Text, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'


export default function LoginScreen() {
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
          >
            <View className="mt-16 mb-8">
              <Text className='text-3xl font-poppins-bold text-orange-600 mb-2'>
                Welcome Back
              </Text>
            </View>
            
            {/* Aquí puedes agregar más contenido */}
            <View className='bg-white p-6 rounded-lg'>
              <Text className='text-lg font-inter text-blue-500'>
                Contenido adicional aquí...
              </Text>
            </View>
          </ScrollView>        
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}