import {
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import React, { Component } from 'react';
import Welcome from '~/pages/Welcome';
import Appointment from '~/pages/Appointment';
// import HeaderRight from '~/components/HeaderRight';

// import { colors, metrics } from './styles';

const Routes = (userLogged = false) => createAppContainer(
  createSwitchNavigator({
    Welcome,
    Appointment,
  }),
);

export default Routes;
