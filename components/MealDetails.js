import { View, Text, StyleSheet } from 'react-native';

function MealDetails({duration,complexity,affordability}) {
  return (
    <View style={styles.mealDesc}>
      <Text style={styles.mealDescItem}>{duration} m</Text>
      <Text style={styles.mealDescItem}>{complexity}</Text>
      <Text style={styles.mealDescItem}>{affordability}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mealDesc: {
    flexDirection: 'row',
    padding: 8,
  },
  mealDescItem: {
    marginHorizontal: 4,
  },
});

export default MealDetails;
