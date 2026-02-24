import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function ListContact({ navigation }) {

  const contatos = [
    { id: '1', nome: 'Maria', telefone: '99999-0001' },
    { id: '2', nome: 'João', telefone: '99999-0002' },
    { id: '3', nome: 'Ana', telefone: '99999-0003' }
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={contatos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('UpdateContact')}
          >
            <Text style={styles.nome}>{item.nome}</Text>
            <Text>{item.telefone}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe4ec',
    padding: 15
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  },
  nome: {
    fontWeight: 'bold'
  }
});