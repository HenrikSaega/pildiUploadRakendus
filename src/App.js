import './App.css';
import UploadButton from './inputFile';
import Notification from './notification';
import Gallery from './gallery';


function App() {
  return (
    <div className="App">
      <h1>Pildiupload rakendus<span>DEMO</span></h1>
      <p>Siin saab kasutaja pilte üles laadida.</p>
      <UploadButton/>
      <Gallery/>
      <Notification/>
    </div>
  );
}

export default App;