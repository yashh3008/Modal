import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.Capital}>Please Sign Up</Text>
            <Text style={styles.modalText}>
              Dear User Please Sign In
            </Text>
          
          <View style={styles.xyz}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
              // navigation.navigate("SignInScreen")
              //       setModalOpen(false)
            >
              <Text style={styles.textStyle}>LOGIN</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.buttonClose2]}
              onPress={() =>
                 setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>CANCEL</Text>
            </Pressable>

          </View>

          </View>
        </View>
      </Modal>


      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
 
  button: {
    borderRadius: 20,
    padding: 13,
    elevation: 2

  },
  buttonOpen: {
    backgroundColor: "gold",
  },
  buttonClose: {
    backgroundColor: "gold",
    margin:10,
    paddingright:5
  },
  buttonClose2:{
    backgroundColor:'red',
    margin:10,
    
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize:17,
    paddingRight:5,
    paddingLeft:5  
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color:'gold',
    fontWeight:'bold',
    fontSize:18,
    
  },
Capital:{
color:'gold',
textAlign:'center',
fontWeight:'bold',
fontSize:20,
paddingBottom: 15,

},
  xyz:{
    flexDirection:"row"
    },


    modalView: {
      margin: 20,
      backgroundColor: "black",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
});

export default App;