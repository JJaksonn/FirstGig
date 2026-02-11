import { useRouter } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import { useAuth } from "../context/AuthContext";

const Logout = () =>
{
  const { logout } = useAuth();
  const router = useRouter();
    const handleLogout = () =>
    {
      logout();
      router.replace('/(auth)/login');
    };
    return (
        <TouchableOpacity style={styles.logout} activeOpacity={0.85} onPress={handleLogout}>
            <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
    );
};

export default Logout;

const styles = {
    logout: {
        backgroundColor: '#e63946',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 6,
    },  
    logoutText: {   
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },  
};