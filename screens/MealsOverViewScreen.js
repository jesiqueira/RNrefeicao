import { View, StyleSheet, FlatList } from 'react-native'

import { MEALS, CATEGORIES } from '../data/dummy-data'
import MealItem from '../components/MealItem'
import React from 'react'

const MealsOverViewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0
  })

  React.useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === catId)?.title

    navigation.setOptions({
      title: categoryTitle,
    })
  }, [catId, navigation])

  const renderMealItem = (itemData) => {
    const item = itemData.item

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    }
    return <MealItem {...mealItemProps} />
  }

  return (
    <View style={styles.container}>
      {/*Tela de visão geral das refeições */}
      <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
    </View>
  )
}

export default MealsOverViewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})
