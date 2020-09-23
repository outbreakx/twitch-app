import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './pages/Main';

const Tab = createBottomTabNavigator();

const navContainer = () => {
	return <Tab.Navigator
		screenOptions={({ route }) => ({
			tabBarIcon: ({ focused, color, size }) => {
				let iconName;

				if (route.name === 'Home') {
					iconName = 'heart'
				} else if (route.name === 'Discover') {
					iconName = 'search'
				}
				else if (route.name === 'Browse') {
					iconName = 'window-restore'
				}
				else if (route.name === 'Esports') {
					iconName = 'trophy'
				}
				return <Icon name={iconName} size={size} color={color} />;
			},
		})}
		tabBarOptions={
			{
				style: {
					backgroundColor: 'black',
					borderTopWidth: 0
				}
			}}
	>
		<Tab.Screen name="Home" component={HomeScreen} />
		<Tab.Screen name="Discover" component={HomeScreen} />
		<Tab.Screen name="Browse" component={HomeScreen} />
		<Tab.Screen name="Esports" component={HomeScreen} />
	</Tab.Navigator>
}

export default navContainer;