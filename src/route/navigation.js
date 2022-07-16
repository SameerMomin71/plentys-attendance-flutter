import LoginScreen from '../container/login/login';
import BottomTabScreen from '../component/BottomTabs/BottomTabScreen';
import Signup from '../container/signup/signup';
import ForgotPassword from '../container/signup/forgetPassword';
import EmailVerify from '../container/signup/emailVerify';
import EmailSuccess from '../container/signup/successEmail';
import DetailScreen from '../container/detail/detail';

const StackScreen = [
  {
    Screen: 'Login',
    Conponent: LoginScreen,
    Options: {
      headerShown: false,
    },
  },
  {
    Screen: 'BottomTabs',
    Conponent: BottomTabScreen,
    Options: {
      headerShown: false,
    },
  },
  {
    Screen: 'Signup',
    Conponent: Signup,
    Options: {
      headerShown: false,
    },
  },
  {
    Screen: 'ForgotPassword',
    Conponent: ForgotPassword,
    Options: {
      headerShown: false,
    },
  },
  {
    Screen: 'EmailVerify',
    Conponent: EmailVerify,
    Options: {
      headerShown: false,
    },
  },
  {
    Screen: 'EmailSuccess',
    Conponent: EmailSuccess,
    Options: {
      headerShown: false,
    },
  },
  {
    Screen: 'DetailScreen',
    Conponent: DetailScreen,
    Options: {
      headerShown: false,
    },
  },
];

export default StackScreen;
// EmailVerify
// DetailScreen
