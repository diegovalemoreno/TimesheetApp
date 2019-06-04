import {
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import React, { Component } from 'react';
import Welcome from '~/pages/Welcome';
import Appointment from '~/pages/Appointment';
import AppointmentsModal from '~/modals/AppointmentsModal';
// import HeaderRight from '~/components/HeaderRight';

// import { colors, metrics } from './styles';

// const Routes = (userLogged = false) => createAppContainer(
//   createSwitchNavigator({
//     Welcome,
//     Appointment,
//   }),
// );

// export default Routes;

const Routes = (userLogged = false) => createAppContainer(
  createSwitchNavigator(
    {
      Welcome,
      Appointment,
      AppointmentsModal,
      // ResetPassword,
      // User: createBottomTabNavigator({
      //   Books,
      //   BooksCover,
      // },
      // {
      //   tabBarOptions: {
      //     showIcon: true,
      //     showLabel: false,
      //     activeTintColor: colors.white,
      //     inactiveTintColor: colors.whiteTransparent,
      //     style: {
      //       backgroundColor: colors.secundary,
      //     },
      //   }
      // }),
    },
    {
      initialRouteName: userLogged ? 'Appointment' : 'Welcome',
    },
  ),
);

export default Routes;
