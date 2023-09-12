import { useEffect } from "react";
import { useFonts } from "expo-font";
import { Navigator } from "./src/Navigation/Navigator";
import { init, dropTableSessions } from "./src/SQLite"; // dropTableSessions para droppear la table
import { Provider } from "react-redux";
import store from "./src/Store/store";

export default function App() {
  useEffect(() => {
    init()
      .then(() => {
        console.log("Inicializada la BDD/Dropeada");
      })
      .catch((error) => {
        console.log("No se pudo inicializar la DB:", error.message);
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
