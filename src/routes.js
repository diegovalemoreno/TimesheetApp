import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Welcome from '~/pages/Welcome';
import Appointment from '~/pages/Appointment';
import colors from './Styles/colors';


const Routes = (userLogged = false) => createAppContainer(
  createSwitchNavigator(
    {
      Welcome,
      Appointment,
        // ForgotPassword,
        // ResetPassword,
        // // User: createBottomTabNavigator({
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
        //initialRouteName: userLogged ? 'User' : 'Welcome',
      initialRouteName: 'Welcome',
    },
  ),
);
export default Routes;
