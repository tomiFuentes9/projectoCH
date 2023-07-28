import { useFonts } from "expo-font";
import { Navigator } from "./src/Navigation/Navigator";
import { Provider } from "react-redux";
import store from "./src/Store/store";

export default function App() {
  const [fontsLoaded] = useFonts({
    inter: require("./src/Assets/Fonts/inter/Inter-Black.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
