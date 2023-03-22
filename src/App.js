import logo from './logo.svg';
import './App.css';
import { UploadInput } from './components'
import { readFile } from './services/ReadFile'



const App =() => {

  const handleFileUpload = async (e) =>{
    const data = await readFile(e.target.files[0])
    console.log('out',data)
    e.target.value = null
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UploadInput  onChange={handleFileUpload} />

      </header>
    </div>
  );
}

export default App;
