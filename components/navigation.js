import * as React from "react";
import { StyleSheet, Text, View, NativeModules, TouchableOpacity, Image } from "react-native";

export default function Navigation({ navigation }) {
  return (
    <View style={styles.Screen}>
      <Image
            style={{ width: 180, height: 180 }}
            source={require("../logo/logo_final.png")}
            alt="Logo"
          />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}> Login </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Register')}>
        <Text style={styles.buttonText}> Register </Text>
      </TouchableOpacity>
        
     <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('MovieSearchGuest')}>
        <Text style={styles.buttonText}> Browse As Guest </Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#262361",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  button:{
    backgroundColor: '#F748B7',
    display: 'flex',
    height: 60,
    borderRadius: 100,
    marginTop: 35,
    justifyContent: 'center',
    alignItems: 'center',
    width: '75%',
    shadowColor: 'hotpink',
    shadowOpacity: 0.9,
    shadowRadius: 10,
  },
  buttonText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  seperator: {
    margin: 6,
  },
});
