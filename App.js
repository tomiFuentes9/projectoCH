import { StatusBar } from "expo-status-bar";
import { Main } from './src/Main';

const MOCK_TASKS = [
  {
    id: 1,
    task: "Cortar el pasto",
    completed: false
  },
  {
    id: 2,
    task: "Barrer el patio",
    completed: false
  },{
    id: 3,
    task: "Lavar el auto",
    completed: false
  },{
    id: 4,
    task: "Acomodar la bici",
    completed: false
  },{
    id: 5,
    task: "Peinar a Pancho",
    completed: false
  },
]

export default function App() {
  return (
      <Main tasks={MOCK_TASKS}/>
  );
}


