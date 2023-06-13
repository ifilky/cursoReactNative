import { View, Image, StyleSheet } from 'react-native';

import Texto from '../../../componentes/Texto';

export default function Itens({ titulo, lista }) {
    return <>
        <Texto style={estilos.titulo}>{ titulo }</Texto>
        { lista.map(({ nome, imagem }) => {
            return <View style={estilos.item}>
                <Image source={ imagem } style={estilos.imagem}/>
                <Texto style={estilos.nome}>{ nome }</Texto>
            </View>
        }) }
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontSize: 20,
        fontWeight: "bold",
        lineHeight: 32,
        marginTop: 32,
        marginBottom: 8,
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
    },
    imagem : {
        width: 46,
        height: 46,
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    },
})