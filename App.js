import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import Login from './Login';
import RegisterUser from './RegisterUser';
import ListContact from './ListContact';
import RegisterContact from './RegisterContact';
import UpdateContact from './UpdateContact';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">

        <Stack.Screen 
          name="Login" 
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen 
          name="RegisterUser" 
          component={RegisterUser}
          options={{ title: 'Cadastro' }}
        />

        <Stack.Screen 
          name="List" 
          component={ListContact}
          options={({ navigation }) => ({
            title: 'Lista de Contatos',
            headerStyle: { backgroundColor: '#f8c8dc' },
            headerRight: () => (
              <Ionicons
                name="add"
                size={26}
                color="black"
                style={{ marginRight: 15 }}
                onPress={() => navigation.navigate('RegisterContact')}
              />
            )
          })}
        />

        <Stack.Screen 
          name="RegisterContact" 
          component={RegisterContact}
          options={{ title: 'Cadastrar Contato' }}
        />

        <Stack.Screen 
          name="UpdateContact" 
          component={UpdateContact}
          options={{ title: 'Editar Contato' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}