import { NativeBaseProvider } from 'native-base';
import { StatusBar } from 'react-native'

import { THEME } from './src/theme/index';
import { Home } from './src/screens/Home';
import { Nunito_400Regular, Nunito_500Medium, Nunito_700Bold, useFonts } from '@expo-google-fonts/nunito';

export default function App() {
  const [fontsLoaded] = useFonts({Nunito_400Regular, Nunito_700Bold, Nunito_500Medium});

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="default"
        backgroundColor="transparent"
      />
      {fontsLoaded ? <Home/> : <Home/>}
    </NativeBaseProvider>
  );
}
