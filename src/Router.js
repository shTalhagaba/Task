import React from "react";
import { Provider } from 'react-redux';
import store from './redux/store';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import DrawerContent from './Components/DrawerContent/DrawerContent';

import Splash from '../src/Screens/Splash/Splash';
import Home from '../src/Screens/Home/Home';
import AlbumView from '../src/Screens/AlbumView/AlbumView';


const Stack = createStackNavigator();


function MainRouter() {
	return (
		<NavigationContainer >
			<Stack.Navigator headerMode="none">

				<Stack.Screen name="Splash" component={Splash} />
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="AlbumView" component={AlbumView} />


			</Stack.Navigator>
		</NavigationContainer>
	);
}


function Router() {
	return (
		<Provider store={store}>
			<MainRouter />
		</Provider>
	);
}



export default Router;
