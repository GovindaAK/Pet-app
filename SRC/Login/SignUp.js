import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView,Image,TextInput } from 'react-native'
import React from 'react'


const SignUp = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1,justifyContent:'center',backgroundColor: "#fff"}}>
      <View style={{paddingHorizontal:25}}>
      <View style={{alignItems:'center'}}>
      <Image style={{height:400, width: 500}} source={require("../../assets/gifdog.gif")}/>
      </View>
      <Text
      style={{
        fontSize:30,
        fontWeight:'800',
        color:'#ff5f1f',
        marginBottom:30,
      }}>Login</Text>

      <View style={{
        borderBottomColor:'#fa8128',
        borderBottomWidth:1,
        paddingBottom:5,
        marginBottom:25,
      }}>
      <TextInput placeholder='Email ID'
      keyboardType='email-address'
      />
      </View>
      <View style={{
        flexDirection:'row',
        paddingVertical:0,
        borderBottomColor:'#fa8128',
        borderBottomWidth:1,
        paddingBottom:5,
        marginBottom:25,
      }}>
      <TextInput placeholder='Password'
      secureTextEntry={true}
      />
      <TouchableOpacity onPress={() => {}}>
        <Text style={{
          color:'#fa8128',
          fontWeight:'500',
          paddingLeft:310,
          paddingTop:6,
          }}>
          Forgot ?
          </Text>
      </TouchableOpacity>
      </View>

      <TouchableOpacity 
      onPress={() => {navigation.navigate('HomePage')}}
      style={{
        backgroundColor:'#ff5f1f',
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
      }}>
        <Text style={{
          textAlign:'center',
          fontWeight:'500',
          fontSize: 20,
          color:'#fff'}}>
          Login
        </Text>

      </TouchableOpacity>

      <View style={{
        flexDirection:'row',
        paddingVertical:0,
        justifyContent:'center'}}>
      <Text>New to the app ?</Text>
      <TouchableOpacity>
      <Text style={{
          color:'#fa8128',
          fontWeight:'500',
          paddingLeft:10,
          paddingTop:1,
          }}>Register</Text>
      </TouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({})