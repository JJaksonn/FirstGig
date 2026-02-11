import { Image, StyleSheet, Text, View } from "react-native";
const Step = ({ image, title, description, accessibilityLabel }) => {
    return (
        <View style={styles.container}>
            <Image 
                source={image} 
                style={styles.image}
                accessible={true}
                accessibilityLabel={accessibilityLabel || title}
            />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#edf3ef',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    image: {
        width: 50,
        height: 50,
        marginBottom: 10,
    },
    title: {
        fontSize: 24, 
        marginBottom: 10,
        fontWeight: 'bold', 
        textAlign: 'center',
    },
    description: {
        textAlign: 'center',
        fontSize: 16,
    }
});

export default Step;
