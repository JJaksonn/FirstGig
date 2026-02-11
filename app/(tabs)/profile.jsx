// will only have logout button until I integrate the Database
import { ScrollView, Text } from 'react-native';
import Logout from '../../components/logout';

export default function Profile()
{
  return (
    <ScrollView contentContainerStyle={styles.page}>
      <Text style={styles.title}>Profile Screen</Text>
        <Logout />
    </ScrollView>
  );
}

const styles = {
    page: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },  
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 40,
    },
};