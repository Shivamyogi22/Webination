// App.js
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountTimer from "./components/CountTimer";
import SearchUser from "./components/SearchUser";
import Navbar from "./components/Navbar"; // Import Navbar component

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/count-timer" element={<CountTimer />} />
                    <Route path="/search-user" element={<SearchUser />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
