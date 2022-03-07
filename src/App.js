import './App.css';
import logo from './logo.svg';
// import Router from './Router';
// import { DataContextProvider } from './Data';
import { createContext, useState, useContext } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

const ApplicationStateContext = createContext({});

function App() {
  const [data, setData] = useState({
    text: "Hello",
    setGreeting: (value) => {
      setData({
          ...data,
          text: value
      });
  }
});


return (
    <div className="App">
      <header className="App-header">
        <ApplicationStateContext.Provider value={data}> 
          <BrowserRouter>
            <div className="App-menu">
                <Link to="/context-sharing/">Home</Link>
                <Link to="/context-sharing/Second">Second</Link>
            </div>

            <Routes>
                <Route path="/context-sharing/" element={<Home/>} />
                <Route path="/context-sharing/Second" element={<Second/>} />
            </Routes>
          </BrowserRouter>        
        </ApplicationStateContext.Provider>        
      </header>
    </div>
  );
}


function Home() {
  const context = useContext(ApplicationStateContext);
  const handleChange = (e) => {
      context.setGreeting(e.target.value);
  }

  return (
      <div>
          <input onChange={handleChange} value={context.text} type="text" /><br/>{context.text}<br/>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
          </a>
      </div>
  );
}


function Second() {
  const context = useContext(ApplicationStateContext);
  return <div>{context.text} --- {context.text} --- {context.text}</div>;
}

export default App;
