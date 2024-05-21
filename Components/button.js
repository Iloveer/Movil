import { stylesComponents } from "./styles-components";
import { Text, View } from "react-native";

export function Button(props) {
    return(
    <View style={{...stylesComponents.button,backgroundColor:props.color}}>
         <Text>{props.texto}</Text>
    </View>
    );
}