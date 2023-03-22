import logo from './logo.svg';
import './App.css';
import { UploadInput } from './components'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UploadInput />

      </header>
    </div>
  );
}

export default App;
