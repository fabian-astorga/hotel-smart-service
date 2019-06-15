import {createStackNavigator} from 'react-navigation'

import HomeScreen from './screens/Home'
import LoginScreen from './screens/Login'
import RegisterScreen from './screens/Register'
import HotelScreen from './screens/Hotel'
import HotelsScreen from './screens/Hotels'
import ContactScreen from './screens/Contact'
import HotelLoginScreen from './screens/HotelLogin'
import HotelsLoginScreen from './screens/HotelsLogin'
import ProfileScreen from './screens/Profile'
import ReservationsScreen from './screens/Reservations'
import NewReservationScreen from './screens/NewReservation'

const App = createStackNavigator({
  Home: {screen: HomeScreen},
  Login: {screen: LoginScreen},
  Register: {screen: RegisterScreen},
  Hotel: {screen: HotelScreen},
  Hotels: {screen: HotelsScreen},
  Contact: {screen: ContactScreen},
  HotelLogin: {screen: HotelLoginScreen},
  HotelsLogin: {screen: HotelsLoginScreen},
  Profile: {screen: ProfileScreen},
  Reservations: {screen: ReservationsScreen},
  NewReservation: {screen: NewReservationScreen}
})

export default App