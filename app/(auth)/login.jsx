import { ScrollView, StyleSheet } from 'react-native';
import Login from '../../components/login';

export default function LoginPage()
{
  return (
    <ScrollView contentContainerStyle={styles.page}>
      <Login />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page:
  {
    flexGrow: 1,
    justifyContent: 'center',
    width: '100%'
  }
});
