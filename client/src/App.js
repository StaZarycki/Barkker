import './App.css';
import SidePanel from './components/SidePanel.js';
import MainPanel from './components/MainPanel.js';

function App() {
  return (
    <div className="App flex bg-brown-dark h-screen">
      <SidePanel/>
      <MainPanel/>
    </div>
  );
}

export default App;
