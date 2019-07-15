import React from "react";
import {createStackNavigator} from "react-navigation";
import {TouchableOpacity, View, Text} from "react-native";
import Dashboard from "../components/Dashboard";
import CategoryListing from "../components/CategoryListing";
import ProductListing from "../components/ProductListing";
import {NavigationStyles} from "../styles/NavigationStyles";
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {Colors} from "../internal/utils/Colors";


export default DashboardStack = createStackNavigator({
    Dashboard: {
        screen: Dashboard,
        navigationOptions: ({navigation}) => ({
            headerTitle: 'The Souled Store',
            headerTitleStyle: [NavigationStyles.headerTitleStyleCenter],
            headerLeftContainerStyle: NavigationStyles.headerLeftPadding,
            headerRightContainerStyle: NavigationStyles.headerRightPadding,
            headerStyle: NavigationStyles.headerStyle
        })
    },
    CategoryListing: {
        screen: CategoryListing,
        navigationOptions: ({navigation}) => ({
            headerTitle: 'Categories',
            headerTitleStyle: [NavigationStyles.headerTitleStyleCenter],
            headerLeft: (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons name={'ios-arrow-back'} size={20} color={Colors.black}/>
              </TouchableOpacity>
            ),
            headerRight: (
                <View/>
            ),
            headerLeftContainerStyle: NavigationStyles.headerLeftPadding,
            headerRightContainerStyle: NavigationStyles.headerRightPadding,
            headerStyle: NavigationStyles.headerStyle
        })
    },
    ProductListing: {
        screen: ProductListing,
        navigationOptions: ({navigation}) => ({
            headerTitle: 'Product',
            headerTitleStyle: [NavigationStyles.headerTitleStyleCenter],
            headerRight: (
              <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity onPress={() => navigation.state.params.onListClick()}>
                      <Entypo name={'list'} size={20} color={Colors.black}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginRight: 5}} onPress={() => navigation.state.params.onGridClick()}>
                      <Entypo name={'grid'} size={20}
                              color={Colors.black}/>
                  </TouchableOpacity>
              </View>
            ),
            headerLeft: (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons name={'ios-arrow-back'} size={20} color={Colors.black}/>
              </TouchableOpacity>
            ),
            headerLeftContainerStyle: NavigationStyles.headerLeftPadding,
            headerRightContainerStyle: NavigationStyles.headerRightPadding,
            headerStyle: NavigationStyles.headerStyle
        })
    },
}, {
    initialRouteName: 'Dashboard'
});
