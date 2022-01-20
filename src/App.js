import { Container } from "./components";
import { Provider, TimeProvider } from "./store";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Provider>
        <TimeProvider>
          <Container />
        </TimeProvider>
      </Provider>
    </div>
  );
}

export default App;
