import * as React from 'react';
import {
    View,
    Button,
    SafeAreaView
} from 'react-native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Prueba from './Prueba';
import Home from './Home/home';
import Splash from './Splash/splash';
import {config} from '../utils/db.json';
import RegistrerForm from './Form/form_registrer';

let colores = config.colores

function NotificationsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }


const Drawer = createDrawerNavigator();

export default function AppLayout() {
    return(
        <NavigationContainer>
            <Drawer.Navigator 
                initialRouteName="Inventario"
                drawerContentOptions={{
                    activeTintColor: colores.principal,
                }}
                drawerStyle={{
                    width: '70%',
                    borderRadius: 10,
                }}
            >
                {/* <Drawer.Screen name="Splash" component={Splash} /> */}
                <Drawer.Screen name="Inventario" component={Home}/>
                <Drawer.Screen name="Transacción" component={RegistrerForm}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

