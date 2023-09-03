import { useEffect } from "react";
import { useFonts } from "expo-font";
import { Navigator } from "./src/Navigation/Navigator";
import { init, dropTableSessions } from "./src/SQLite"; // dropTableSessions para droppear la table
import { Provider } from "react-redux";
import store from "./src/Store/store";

export default function App() {
  useEffect(() => {
    init()
      .then((result) => {
        console.log("Db initialized/dropped");
        console.log(result);
      })
      .catch((error) => {
        console.log("Initialization DB failed:");
        console.log(error.message);
      });
  }, []);

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
