import { StyleSheet, SafeAreaView, View } from 'react-native';

import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';

export default function Cesta() {
    return <>
        <SafeAreaView>
            <Topo />
            
            <View style={estilos.cesta}>
                <Detalhes />
            </View>
        </SafeAreaView>    
    </>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
});