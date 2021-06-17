import {createStackNavigator} from 'react-navigation';
import HomeS from '../screen/Home';
import DetailsS from '../screen/details';

const AppNavgiator = createStackNavigator(
  {
    Home: {
      screen: HomeS,
      navigationOptions: {title: 'Home'},
    },
    Details: {
      screen: DetailsS,
      navigationOptions: {title: 'Details'},
    },
  },
  {
    initialRouteName: 'Home',
  },
);
export default AppNavgiator;
