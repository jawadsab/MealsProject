import { StyleSheet, FlatList } from 'react-native';
import CategoryGridTitle from '../components/CategoryGridTitle';
import { CATEGORIES } from '../data/dummy-data';

function CategoriesScreen({ navigation }) {
  function renderCategoryItems(itemData) {
    function pressHandler() {
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id,
      });
    }

    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onPressMealCategory={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItems}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  flatListContainer: {
    backgroundColor: '#D9E5D6',
  },
});

export default CategoriesScreen;
