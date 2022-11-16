import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import MealDetails from './MealDetails';

function MealItem({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onPressMealItem,
}) {
  return (
    <View style={styles.mealItemContainer}>
      <Pressable
        onPress={onPressMealItem}
        android_ripple={{ color: '#EDE7D9' }}
      >
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.titleText}>{title}</Text>
        <MealDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItemContainer: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 200,
  },
  titleText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 8,
  },
});

export default MealItem;
