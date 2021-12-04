import { Nav, Navbar } from 'react-bootstrap';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import ControlPanel from './ControlPanel';
import MapWithLayers from './MapWithLayers';
import Legend from './Legend';


function App() {
  return (
    <div className="App">
      <Navbar>
        <h1>FloodPortal</h1>
        <h3>by EcoTech</h3>
      </Navbar>
      <main className="d-flex">
        <ControlPanel />
        <MapWithLayers />
      </main>
    </div>
  );
}

export default App;
