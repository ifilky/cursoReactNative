import { View,TextInput,Text,Button, Pressable} from 'react-native'
import styles from './style'

const Form = ()=>{
    return ( 
        <View style={styles.formContext} >
            <View style={styles.form}>
                <Text style={styles.formLabel} >Altura</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Ex: 1.70'
                    keyboardType='numeric'
                />
                <Text style={styles.formLabel} >Peso</Text>
                <TextInput
                style={styles.input}
                placeholder='Ex: 60.30'
                keyboardType='numeric'
                />
                <Button title='CALCULAR'/>
            </View>
        </View>
    )
}

export default Form