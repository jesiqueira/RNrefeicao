import { Pressable, Text, View, StyleSheet } from 'react-native'

const CategoryGridTile = ({ title, color }) => {
  return (
    <View style={styles.gridItem}>
      <Pressable>
        <View style={styles.innerContainer}>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CategoryGridTile

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
  },
  innerContainer: {
    flex: 1,
  },
})
