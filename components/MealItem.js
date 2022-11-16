import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

function MealItem({ title, imageUrl, duration, complexity, affordability }) {
  return (
    <View style={styles.mealItemContainer}>
      <Pressable android_ripple={{color:"#EDE7D9"}}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.titleText}>{title}</Text>
        <View style={styles.mealDesc}>
          <Text style={styles.mealDescItem}>{duration} m</Text>
          <Text style={styles.mealDescItem}>{complexity}</Text>
          <Text style={styles.mealDescItem}>{affordability}</Text>
        </View>
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
  mealDesc: {
    flexDirection: 'row',
    padding: 8,
  },
  mealDescItem: {
    marginHorizontal: 4,
  },
});

export default MealItem;
