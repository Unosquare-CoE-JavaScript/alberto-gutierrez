import logo from "./logo.svg";
import "./App.css";
import { Title } from "./components/titles";
import { ToDo, ToDOInput } from "./components/ToDO";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title>
          Edit <code>src/App.tsx</code> and save to reload.
        </Title>
        <ToDo
          items={[
            { id: "1", text: "2" },
            { id: "1", text: "3" },
            { id: "1", text: "4" },
          ]}
        />
        <ToDOInput />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
