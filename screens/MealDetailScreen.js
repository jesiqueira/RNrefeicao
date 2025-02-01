import React from 'react'

import { Image, StyleSheet, Text, View, ScrollView, Button } from 'react-native'

import { MEALS } from '../data/dummy-data'
import MealDetails from '../components/MealDetails'
import Subtitle from '../components/MealDetail/Subtitle'
import List from '../components/MealDetail/List'

const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId

  const selectedMead = MEALS.find((meal) => meal.id === mealId)

  const headerButtonPressHandler = () => {
    console.log('Pressed!')
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button title="Tap me" onPress={headerButtonPressHandler} />
      },
    })
  }, [navigation, headerButtonPressHandler])

  return (
    <ScrollView style={styles.rootContainer}>
      <View>
        <Image source={{ uri: selectedMead.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{selectedMead.title}</Text>
        <MealDetails
          duration={selectedMead.duration}
          complexity={selectedMead.complexity}
          affordability={selectedMead.affordability}
          textStyle={styles.detailText}
        />
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>
            <List data={selectedMead.ingredients} />
            <Subtitle>Steps</Subtitle>
            <List data={selectedMead.steps} />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
})
