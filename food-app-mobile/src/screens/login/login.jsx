
import { Text, View } from 'react-native';
import { styles } from './loginStyles';
import Header from '../../components/header/header.jsx';

function Login() {
  return (
    <View style={styles.container}>
      <Header texto="Acesse sua conta"/>
    </View>
  )
}

export default Login;