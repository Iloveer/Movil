import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {  
  StyleSheet,
  Text, 
  View,
  KeyboardAvoidingView,
  TextInput,
  Modal,
  Pressable,
  Platform,
  TouchableWithoutFeedback,
  Keyboard, 
  SafeAreaView} from 'react-native';
import{Button} from './Components/button'

export default function App() {
   let [title,setTitle]=useState("HOLA")
   let [nombre,setnombre]=useState("")
   let [apellido, setApellido] = useState("")
   const [modalVisible, setModalVisible] = useState(false);


   function mostrarAlerta(){
    setTitle("HOLO")
    setnombre("Erlinda")
    setApellido("Quispe")
   }
  


 /* return (
    <View style={styles.container}>
      <Text>Hola mundo</Text>
      <StatusBar style="auto" />
      <Button texto="hola" color="yellow"></Button>
      <Button texto="hola1" color="orange"></Button>
      <Button texto="hola2" color="red"></Button>
      {/*<Button title='press me' onPress={mostrarAlerta} style={styles.Button} >
      </Button>*//*}
      /* <Text>{title}</Text>
       <Text>{nombre}</Text>
       <Text>{apellido}</Text>
      
    </View>
  );
}*/

/*return (
  <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.container}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.inner}>
        <Text style={styles.header}>Header</Text>
        <TextInput placeholder="Username" style={styles.textInput} />
        <View style={styles.btnContainer}>
          <Button title="Submit" onPress={() => null} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
);*/
function presionasteAqui(){
  console.log()
}

return (
  <View style={styles.container} >
    <SafeAreaView>
     <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
     {/* <Pressable
      color="red"
      onPress={()=> setModalVisible(true)}
    
      >
        <Text style={styles.textStyle}>hide Model</Text>
      </Pressable>*/}
      <Pressable 
      onPress={presionasteAqui}
      >

       <Text>presiona aqui</Text>
       </Pressable>

      </SafeAreaView>
  </View>
)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfc',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#aaa',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
  },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 10,
    textAlign: 'center',
  }
    
});
