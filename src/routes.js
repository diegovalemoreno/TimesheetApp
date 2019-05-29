import {
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import React, { Component } from 'react';
import Welcome from '~/pages/Welcome';
import Appointment from '~/pages/Appointment';
import HeaderRight from '~/components/HeaderRight';

import { colors, metrics } from './styles';

class SettingsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}
const Routes = (userLogged = false) => createAppContainer(
  createSwitchNavigator({
    Welcome,
    SettingsScreen,
  }),
);

export default Routes;
