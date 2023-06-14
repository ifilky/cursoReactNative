import { StatusBar, SafeAreaView, View } from 'react-native';
import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta';

import { 
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold
  } from '@expo-google-fonts/montserrat';

export default function App() {
  const [fontLoaded] = useFonts ({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if(!fontLoaded){
    return <View />
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Cesta {...mock} /* topo={mocks.topo} detalhes={mocks.detalhes}... */ />
    </SafeAreaView>
  );
}

