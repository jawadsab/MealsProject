import { StyleSheet, View, Pressable, Text } from 'react-native';

function CategoryGridTitle({ title, color }) {
  return (
    <View
      style={[styles.categoryGridTitleContainer, { backgroundColor: color }]}
    >
      <Pressable
        android_ripple={{ color: '#EDE7D9' }}
        style={styles.pressbleContainer}
      >
        <View style={styles.textWrapperContainer}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryGridTitleContainer: {
    flex: 1,
    height: 180,
    margin: 16,
    borderRadius: 8,
    elevation: 8,
    overflow: 'hidden',
  },
  pressbleContainer: {
    flex: 1,
  },
  textWrapperContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default CategoryGridTitle;
