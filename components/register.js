import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useAuth } from "../context/AuthContext";

const Register = () =>
{
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useAuth();
  const router = useRouter();

  const handleRegister = () =>
  {
    if (!email || !username || !password)
    {
      alert('Please fill all fields.');
      return;
    }

    if (!email.includes('@'))
    {
      alert('Please enter a valid email.');
      return;
    }

    if (password.length < 6)
    {
      alert('Password must be at least 6 characters.');
      return;
    }

    login();
    router.replace('/');
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Register</Text>

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Pressable style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </Pressable>

        <Text style={styles.signupText}>
          Already have an account?
        </Text>

        <Link href="/login" style={styles.signupLink}>
          Log In!
        </Link>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container:
  {
    paddingHorizontal: 20,
    width: '100%'
  },

  form:
  {
    width: '100%',
    backgroundColor: '#f9fafa',
    padding: 40,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 6,
    gap: 18
  },

  title:
  {
    fontSize: 32,
    color: '#2f8f83',
    textAlign: 'center',
    marginBottom: 10
  },

  label:
  {
    fontSize: 16,
    textAlign: 'left'
  },

  input:
  {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1.5,
    backgroundColor: '#e9efee'
  },

  button:
  {
    marginTop: 10,
    paddingVertical: 14,
    borderRadius: 10,
    backgroundColor: '#34c9a3',
    alignItems: 'center'
  },

  buttonText:
  {
    color: 'white',
    fontSize: 18
  },

  signupText:
  {
    marginTop: 16,
    textAlign: 'center'
  },

  signupLink:
  {
    alignSelf: 'center',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 6
  }
});
