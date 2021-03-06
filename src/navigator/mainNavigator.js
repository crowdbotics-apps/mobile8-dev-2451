import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import EmailAuth2110Navigator from '../features/EmailAuth2110/navigator';
import EmailAuth2109Navigator from '../features/EmailAuth2109/navigator';
import EmailAuth2108Navigator from '../features/EmailAuth2108/navigator';
import EmailAuth2107Navigator from '../features/EmailAuth2107/navigator';
import EmailAuth2106Navigator from '../features/EmailAuth2106/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
EmailAuth2110: { screen: EmailAuth2110Navigator },
EmailAuth2109: { screen: EmailAuth2109Navigator },
EmailAuth2108: { screen: EmailAuth2108Navigator },
EmailAuth2107: { screen: EmailAuth2107Navigator },
EmailAuth2106: { screen: EmailAuth2106Navigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
