import { Text, View, StyleSheet } from 'react-native'

import { MEALS } from '../data/dummy-data'

const MealsOverViewScreen = ({ route }) => {
  const catId = route.params.categoryId

  const displayedMeals = MEALS.filter(()=>{})

  return (
    <View style={styles.container}>
      {/*Tela de visão geral das refeições */}
      <Text>Meals Overview Screen {catId}</Text>
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
