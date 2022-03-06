import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import Home from './Home';
import Second from './Second';

function Router() {
    return (
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
    );
}
export default Router;
export { Link };

