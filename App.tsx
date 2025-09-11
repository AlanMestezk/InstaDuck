import { View, StatusBar }      from 'react-native';
import { Style }     from './styles.module';
import { AppScreen } from './src/screens/AppScreen';


export default function App() {
  return (
    <View style={Style.body}>
       <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <AppScreen/>

    </View>
  );
}

