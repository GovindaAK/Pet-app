import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
} from "react-native";
import React from "react";

const HomePage = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 80,
            fontWeight: "bold",
            color: "#ff5f1f",
            marginBottom: 20,
          }}
        >
          WegWell
        </Text>
      </View>
      <View>
        <Image
          style={{ height: 300, width: 300 }}
          source={require("../../assets/hpdog.png")}
        />
      </View>
      <TouchableOpacity
      onPress={()=>{navigation.navigate('Clinic')}}
        style={{
          backgroundColor: "#ff5f1f",
          padding: 20,
          width: "90%",
          borderRadius: 10,
          marginBottom: 30,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#fff",
            textAlign: "center",
          }}
        >
          Find Veterinarian Clinic
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
            onPress={()=>{navigation.navigate('Food')}}
        style={{
          backgroundColor: "#ff5f1f",
          padding: 20,
          width: "90%",
          borderRadius: 10,
          marginBottom: 30,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#fff",
            textAlign: "center",
          }}
        >
          Feeding Schedule
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
            onPress={()=>{navigation.navigate('Medic')}}

        style={{
          backgroundColor: "#ff5f1f",
          padding: 20,
          width: "90%",
          borderRadius: 10,
          marginBottom: 30,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#fff",
            textAlign: "center",
          }}
        >
          Medication Reminders
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
