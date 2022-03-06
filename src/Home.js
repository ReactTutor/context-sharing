import logo from './logo.svg';
import { DataContext } from './Data';
import { useContext } from 'react';


function Home() {
    const context = useContext(DataContext);
    const setGreeting = (e) => {
        context.setGreeting(e.target.value);
    }

    return (
        <div>
            <input onChange={setGreeting} value={context.text} type="text" /><br/>{context.text}<br/>
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

export default Home;
