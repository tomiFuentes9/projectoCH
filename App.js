import { useFonts } from "expo-font";
import { Navigator } from "./src/Navigation/Navigator";

export default function App() {
  const [fontsLoaded] = useFonts({
    inter: require("./src/Assets/Fonts/inter/Inter-Black.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Navigator />;
}
