import { View, Text, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'

export default function LoginScreen() {
  return (
    <SafeAreaView className='flex-1 bg-white' >
        <KeyboardAvoidingView 
            behavior={Platform.OS ==="android" ? "padding":"height"}
        >
            <ScrollView 
                className="flex-1 px-6"
                showsVerticalScrollIndicator={false}
                > <View className="mt-16 mb-8" >
                    <Text className='text-3xl font-poppins-bols text-gray-900 mb-2'>Welcome Back</Text>
                </View>
            </ScrollView>        
        </KeyboardAvoidingView>
      
    </SafeAreaView>
  )
}