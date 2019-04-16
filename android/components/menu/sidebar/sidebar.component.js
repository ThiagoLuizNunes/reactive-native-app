import { DrawerNavigator, DrawerItems } from 'react-navigation';
import SidebarItem from './sidebar-item.component';

const App = DrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
});

DrawerNavigator(RouteConfigs, DrawerNavigatorConfig);
