import { ScrollView, StyleSheet } from 'react-native';
import Register from '../../components/register';

export default function RegisterPage()
{
  return (
    <ScrollView contentContainerStyle={styles.page}>
      <Register />
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
