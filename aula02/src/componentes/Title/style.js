import { StyleSheet } from "react-native";
import { isEnabled } from "react-native/Libraries/Performance/Systrace";

const styles = StyleSheet.create({
    boxTitle: {
        alignItems:"center",
        justifyContent:"center",
        padding:10
    },
    textTitle:{
        padding: 10,
        color:"black",
        fontSize:32,
        fontWeight:"bold",
        borderWidth: 5,
        borderColor: "black",
        borderRadius: 24,
    }
  });

  export default styles