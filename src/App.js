import './App.css';
import Router from './Router';
import { DataContextProvider } from './Data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DataContextProvider>
          <Router />
        </DataContextProvider>        
      </header>
    </div>
  );
}

export default App;
