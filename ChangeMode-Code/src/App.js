import './App.css';
import ColorChange from './components/ColorChange';
import ModeChange from './components/ModeChange';

function App() {
  return (
    <div className="App">
      <header>
        <div className='App-header'>
          <ModeChange />  
        </div>
      </header>
      <body>
        <div className='App-body'>
          <ColorChange />
        </div>
      </body>
    </div>
  );
}

export default App;
