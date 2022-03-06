import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import Home from './Home';
import Second from './Second';

function Router() {
    return (
        <BrowserRouter>
            <div className="App-menu">
                <Link to="/">Home</Link>
                <Link to="/Second">Second</Link>
            </div>

            <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Second' element={<Second/>} />
            </Routes>
        </BrowserRouter>
    );
}
export default Router;
export { Link };

