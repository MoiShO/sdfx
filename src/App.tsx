import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { store } from './store/store';
import { RootStack } from './router/RootNavigator';
import Home from './pages/Home';
import Details from './pages/Details';

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <RootStack.Navigator initialRouteName="Home">
                    <RootStack.Screen
                        name="Home"
                        component={Home}
                        options={{ title: 'The Rick and Morty API' }}
                    />
                    <RootStack.Screen
                        name="Details"
                        component={Details}
                        //@ts-ignore
                        options={({ route }) => ({ title: route.params.name })}
                    />
                </RootStack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
