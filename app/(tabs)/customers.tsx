import React from 'react'
import { View, Text, FlatList, ActivityIndicator, RefreshControl } from 'react-native'
import { useQuery } from '@tanstack/react-query'
import { http } from '@/services/http'

type Customer = {
  id: number
  name?: string
  full_name?: string
  email?: string
}

async function fetchCustomers(): Promise<Customer[]> {
  const { data } = await http.get('/customer/api/list/')
  // Ajusta si el backend devuelve otra estructura
  return Array.isArray(data) ? data : (data?.results ?? data ?? [])
}

export default function CustomersScreen() {
  const { data, isLoading, isError, refetch, isFetching } = useQuery({
    queryKey: ['customers'],
    queryFn: fetchCustomers,
  })

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 12 }}>Cargando clientes…</Text>
      </View>
    )
  }

  if (isError) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 }}>
        <Text style={{ color: 'red', textAlign: 'center' }}>
          Error al cargar clientes. Verifica tu conexión o sesión.
        </Text>
      </View>
    )
  }

  return (
    <FlatList
      data={data ?? []}
      keyExtractor={(item) => String(item.id)}
      refreshControl={<RefreshControl refreshing={isFetching} onRefresh={refetch} />}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => (
        <View style={{ paddingVertical: 12, borderBottomWidth: 1, borderColor: '#eee' }}>
          <Text style={{ fontSize: 16, fontWeight: '600' }}>{item.full_name ?? item.name ?? 'Sin nombre'}</Text>
          {item.email ? <Text style={{ color: '#666' }}>{item.email}</Text> : null}
        </View>
      )}
      ListEmptyComponent={() => (
        <View style={{ padding: 24, alignItems: 'center' }}>
          <Text>No hay clientes disponibles.</Text>
        </View>
      )}
    />
  )
}