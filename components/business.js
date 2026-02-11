import { Image, StyleSheet, Text, View } from "react-native";
const Business = ({ image, name, city, accessibilityLabel }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.name}>{name}</Text>
            <Image 
                source ={{uri:image }}
                style={styles.image}
                accessible={true}
                accessibilityLabel={accessibilityLabel || name}
            />
            <Text style={styles.city}>{city}</Text>
        </View>
    );
}

export default Business;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#edf3ef',
    borderRadius: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    alignItems: 'center',
    maxWidth: '95%',
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    resizeMode: 'cover',
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    textAlign: 'center',
  },
  city: {
    textAlign: 'center',
    fontSize: 14,
    color: '#6b7280',
    marginTop: 2,
  },
});
