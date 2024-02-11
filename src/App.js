import "./App.css";
import Divein from "./components/Divein";
import Keyfeature from "./components/Keyfeature";
import ReadySet from "./components/ReadySet";
import SafetyMeasures from "./components/SafetyMeasures";

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Divein />
      <Keyfeature />
      <SafetyMeasures />
      <ReadySet />
    </div>
  );
}

export default App;
