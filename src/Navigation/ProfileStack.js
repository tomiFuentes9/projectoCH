import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "../Components/Header/Header";
import { Profile } from "../Screens/Profile/Profile";
import { ImageSelector } from "../Screens/Profile/ImageSelector";

const Stack = createNativeStackNavigator();

export const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Mi Perfil"
      screenOptions={({ route, navigation }) => ({
        header: () => {
          return <Header route={route} navigation={navigation} />;
        },
      })}
    >
      <Stack.Screen name="Mi Perfil" component={Profile} />
      <Stack.Screen name="Selector de imagen" component={ImageSelector} />
    </Stack.Navigator>
  );
};
