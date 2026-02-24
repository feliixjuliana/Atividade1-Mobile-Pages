import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function UpdateContact({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Contato</Text>

      <TextInput placeholder="Nome" style={styles.input} />
      <TextInput placeholder="Telefone" style={styles.input} />

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text>Atualizar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe4ec',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 20
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15
  },
  button: {
    backgroundColor: '#f8c8dc',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  }
});