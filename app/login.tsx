import { View, Text, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'

export default function Login() {
  const router = useRouter()

  const safeGoBack = () => {
    try {
      if (router.canGoBack()) {
        router.back()
      } else {
        router.replace('/') // o la ruta de tu pantalla de inicio
      }
    } catch (error) {
      console.log('Error de navegación:', error)
      router.replace('/') // Fallback seguro
    }
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TouchableOpacity 
        onPress={safeGoBack}
        style={{
          padding: 15,
          backgroundColor: '#f0f0f0',
          borderRadius: 10,
          marginBottom: 20,
        }}
      >
        <Text style={{ textAlign: 'center' }}>
          ← {router.canGoBack() ? 'Volver' : 'Ir al Inicio'}
        </Text>
      </TouchableOpacity>
      
      <Text style={{ fontSize: 24, textAlign: 'center' }}>Login</Text>
    </View>
  )
}