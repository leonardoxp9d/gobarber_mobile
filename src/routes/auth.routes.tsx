import * as React from 'react' ;  
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../pages/SingIn';
import SignUp from '../pages/SingUp';

const Auth = createNativeStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      contentStyle: { backgroundColor: '#312e38' },
    }}
  >
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
  </Auth.Navigator>
);

export default AuthRoutes; 