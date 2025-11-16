import './App.css';
import UploadButton from './inputFile';
import Gallery from './gallery';


function App() {
  return (
    <div className="App">
      <h1>Pildiupload rakendus<span>DEMO</span></h1>
      <p>Siin saab kasutaja pilte üles laadida.</p>
      <UploadButton/>
      <Gallery/>
    </div>
  );
}

export default App;