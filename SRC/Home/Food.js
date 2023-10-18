import { StyleSheet, Text, View,Image } from 'react-native';
import React from 'react';

const Food = () => {
  const foodSchedule = [
    {
      time: '8:00 AM',
      meal: 'Breakfast',
      nutrition: {
        calories: 300,
        protein: 20,
        carbohydrates: 40,
        fat: 10
      }
    },
    {
      time: '12:00 PM',
      meal: 'Lunch',
      nutrition: {
        calories: 400,
        protein: 25,
        carbohydrates: 50,
        fat: 15
      }
    },
    {
      time: '6:00 PM',
      meal: 'Dinner',
      nutrition: {
        calories: 350,
        protein: 15,
        carbohydrates: 45,
        fat: 12
      }
    }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Pet Food Schedule</Text>
      <View style={{alignItems:'center',marginBottom:20}}>
      <Image style={{height:200, width: 400}} source={require("../../assets/fdog.png")}/>
      </View>
      {foodSchedule.map((item, index) => (
        <View key={index} style={styles.scheduleItem}>
          <View style={styles.timeContainer}>
            <Text style={styles.time}>{item.time}</Text>
          </View>
          <View style={styles.mealContainer}>
            <Text style={styles.meal}>{item.meal}</Text>
            <View style={styles.nutritionContainer}>
              <Text>Calories: {item.nutrition.calories}</Text>
              <Text>Protein: {item.nutrition.protein}g</Text>
              <Text>Carbohydrates: {item.nutrition.carbohydrates}g</Text>
              <Text>Fat: {item.nutrition.fat}g</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Food;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 50,
    fontWeight: 'bold',
    color: "#ff5f1f",
    marginBottom: 30
  },
  scheduleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  timeContainer: {
    marginRight: 20,
    marginLeft: 10,
    width: 80,
    alignItems: 'flex-end'
  },
  time: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff5f1f',
  },
  mealContainer: {
    borderWidth: 1,
    borderRightWidth: 10,
    borderColor: '#ff5f1f',
    padding: 20,
    borderRadius: 10,
    flex: 1
  },
  meal: {
    fontWeight: 'bold',
    marginBottom: 5
  },
  nutritionContainer: {
    marginTop: 5
  }
});
