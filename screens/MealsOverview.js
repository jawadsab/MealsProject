import { View, Text, StyleSheet, FlatList } from 'react-native';
import MealItem from '../components/MealItem';

import { MEALS } from '../data/dummy-data';

function MealsOverview({ route }) {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  function renderMealItem(itemData) {
    return <MealItem title={itemData.item.title} />;
  }
  return (
    <View style={styles.mealsOverviewContainer}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mealsOverviewContainer: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverview;
