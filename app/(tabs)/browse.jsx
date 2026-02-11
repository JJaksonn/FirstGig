import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import Business from '../../components/business';

export default function Browse() {
  const gigs = [
    { id: '1', image: "https://images.squarespace-cdn.com/content/v1/5930688715d5dbaa8b348ff3/10f3b951-80b3-4d53-a0b7-9e842b818f94/Devon+and+Exeter+Institution+image+for+ILA+website.jpg", name: 'Library of IASA', city: 'Jerusalem' },
    { id: '2', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBFTqyY1-XOXhIV2G5sW-F6DYJ49A9iv5fVg&s", name: 'Pizza Hut', city: 'Haifa' },
    { id: '3', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHUJ4XUKNflEZWydFLYyAOp9hxXvqSB3RbJw&s", name: 'Luna Park', city: 'Tel Aviv' },
    { id: '4', image: "https://www.petbusinessinsurance.co.uk/img/0-featured-male-dog-walker-taking-three-dogs-for-a-walk-in-the-park.jpg", name: 'Dog Walkers.org', city: "Be'er Sheva" },
    //space to add more gigs
  ];

  return (
    <View style={styles.container}>
      <FlatList
      //heard these were good when scrollable views can become long, so decideed to use it even before db integration
        data={gigs}
        style={styles.list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {}}
            style={({ pressed }) => [
              styles.cardWrapper,
              pressed && styles.pressed,
            ]}>
            <Business
              image={item.image}
              name={item.name}
              city={item.city}
              accessibilityLabel={`${item.name} located in ${item.city}`}
            />
          </Pressable>
        )}
        contentContainerStyle={{ paddingBottom: 100, paddingHorizontal: 16 }}
        ItemSeparatorComponent={() => <View style={{ height: 25 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    backgroundColor: '#efefef',
  },
  cardWrapper: {
    borderRadius: 12,
  },
  pressed: {
    opacity: 0.92, 
  },
});
