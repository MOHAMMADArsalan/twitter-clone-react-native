/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { HomeScreen } from "../screens";
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, HomeNavigatorParamList, TabTwoParamList } from '../types';
import { ProfilePicture } from "../components";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        showLabel: false
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }: { color: string }) => <TabBarIcon name="md-home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }: { color: string }) => <TabBarIcon name="ios-search" color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Notifications"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }: { color: string }) => <TabBarIcon name="ios-notifications-outline" color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Messages"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }: { color: string }) => <TabBarIcon name="ios-mail" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeNavigatorParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerRightContainerStyle: {
            marginRight: 15,
          },
          headerLeftContainerStyle: {
            marginLeft: 15
          },
          headerTitleAlign: "center",
          headerTitle: () => {
            return <Ionicons name="logo-twitter" color={Colors.light.tint} size={30} />
          },
          headerRight: () => {
            return <MaterialCommunityIcons name="star-four-points-outline" color={Colors.light.tint} size={30} />
          },
          headerLeft: () => (
            <ProfilePicture size={40} image={'https://media-exp1.licdn.com/dms/image/C5103AQG9YEoyswOuGQ/profile-displayphoto-shrink_100_100/0/1517550363719?e=1634774400&v=beta&t=Y7cvQGb1bwqdhXK_H_ovmcV6-Wox5HN6D9buYSMbADk'} />
          )
        }}
      />
    </HomeStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}
