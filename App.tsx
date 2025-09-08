import { View }      from 'react-native';
import { Style }     from './styles.module';
import { AppScreen } from './src/screens/AppScreen';


export default function App() {
  return (
    <View style={Style.body}>

      <AppScreen/>

    </View>
  );
}

